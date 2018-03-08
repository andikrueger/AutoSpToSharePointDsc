function New-TsFile {
    <#
    .SYNOPSIS
        Function to generate TypeScript classes based on DSC Resources
    .DESCRIPTION
        This function generates TypeScript classes for further usage based on the DSC
        Resources found under the specidied path.
    .EXAMPLE
        PS C:\> New-TsFiles -Path DSCResourceFolderPath -OutPath TargetPath
        This will create a TypeScript file for the DSC Resource within the Path.
        The TypeScript file will be placed in the TargetPath.
    .NOTES
        The New-TsFile Function is based on:
        https://github.com/PowerShellOrg/DSC/blob/master/Tooling/DscDevelopment/New-MofFile.ps1
        
        The MIT License (MIT)

        Copyright (c) 2013 PowerShell.Org

        Permission is hereby granted, free of charge, to any person obtaining a copy of
        this software and associated documentation files (the "Software"), to deal in
        the Software without restriction, including without limitation the rights to
        use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
        the Software, and to permit persons to whom the Software is furnished to do so,
        subject to the following conditions:

        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.

        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
        FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
        COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
        IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
        CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    #>
    param (
        # Path to the Directory containing the psm1 and schema.mof file.
        [Parameter(Mandatory = $true)]
        [string]
        $Path,        
            
        [Parameter()]
        [ValidateNotNullOrEmpty()]
        [string]
        $FriendlyName,

        [Switch]
        $LoadTypes,

        # Output Path for the newly created typescript file
        [Parameter(Mandatory = $true)]
        [string]
        [ValidateNotNullOrEmpty()]
        $OutPath
    )
  
    $ResourceName = Split-Path $Path -Leaf
   
    if (!$FriendlyName) {
        $FriendlyName = $ResourceName
    }
    
    $ResourcePath = Join-Path $Path "$($ResourceName).psm1"
    $MofPath = Join-Path $Path "$($ResourceName).schema.mof"

    $ResourceName = $ResourceName.Replace("MSFT_", "Msft")

    Write-Verbose "Attempting to parse $ResourcePath."
    try {
        $CommandAst = [System.Management.Automation.Language.Parser]::ParseFile($ResourcePath, [ref]$null, [ref]$null)
        $SetTargetResourceAst = $CommandAst.FindAll(
            {$args[0] -is [System.Management.Automation.Language.FunctionDefinitionAst]},
            $false
        ) | 
            Where-Object {$_.name -like 'Set-TargetResource'}

        $ParametersAst = $SetTargetResourceAst.Body.ParamBlock.Parameters
           
        # Look for type definitions and execute them in this context
        # This could be very buggy.
        if ($LoadTypes) {
            Write-Warning "Types added to session with -LoadType will remain in the session until it ends."
            $CommandAst.FindAll(
                {$args[0] -is [System.Management.Automation.Language.CommandAst]},
                $false
            ) |
                Where-Object { $_.CommandElements[0].Value -ieq 'Add-Type' } |
                ForEach-Object {
                Write-Verbose "Adding type:`n`n$($_.ToString())"
                Invoke-Expression $_.ToString() -ErrorAction Continue
            }
        }

        $ConstructorParams = New-Object System.Collections.ArrayList
        $ConstructorMap = New-Object System.Collections.ArrayList

        $Template = @"
import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';`r`n
export class $ResourceName extends DscType {
"@
        foreach ($ParameterAst in $ParametersAst) {
            $TypeString = ''
            $PropertyString = '[write'
            $IsKey = $false
            $IsEnum = $false

            $ParameterName = $ParameterAst.Name -replace '\$'
            Write-Verbose "Processing $ParameterName."

            $ParameterAttributesAst = $ParameterAst.Attributes | 
                Where-Object {$_ -is [System.Management.Automation.Language.AttributeAst]}                           
            $ParameterTypeAttributeAst = $ParameterAst.Attributes | 
                Where-Object {$_ -is [System.Management.Automation.Language.TypeConstraintAst]}
                
            $description = [string]::Empty
            try {
                $MofValue = Select-String -Path $MofPath -Pattern " $($ParameterName);"
                $paramTypeMatch = [regex]::Match($($MofValue.Line), "(?<=\[)(\w*)")
                if ($paramTypeMatch.Success) {
                    switch ($paramTypeMatch.Value) {
                        { @("Key", "Required") -contains $_ } {
                            $IsKey = $true
                        }
                        Default {
                        }
                    }
                }
                
                $descriptionMatch = [regex]::Match($($MofValue.Line), '(?<=Description\(").+(?=\")')
                if ($descriptionMatch.Success) {
                    $description = $descriptionMatch.Value
                }

            }
            catch {
                Write-Verbose $_
            }

            switch ($ParameterAttributesAst) {
                {$_.typename -like 'ValidateSet'} {
                    Write-Verbose "Parameter - $ParameterName has a validate set."
                    $oldOFS = $OFS
                    $OFS = '", "'
                    $SingleQuote = "'"
                    $ValidValues = "$($_.PositionalArguments.Value -replace $SingleQuote)"
                    $PropertyString += @"
,ValueMap{"$ValidValues"},Values{"$ValidValues"}
"@
                    $OFS = $oldOFS
                    $IsEnum = $true
                }
            }
                       
            Write-Verbose "Parameter - $ParameterName is typed with $($ParameterTypeAttributeAst.TypeName)."

            $type = $ParameterTypeAttributeAst.TypeName.FullName -as [Type]

            $table = @{
                [string] = 'string'
                [string[]] = 'string[]'
                [switch] = 'boolean'
                [bool] = 'boolean'
                [boolean[]] = 'boolean'
                [long] = 'number'
                [long[]] = 'number[]'
                [int] = 'number'
                [int[]] = 'number[]'
                [byte] = 'byte'
                [byte[]] = 'byte[]'
                [UInt16] = 'number'
                [UInt32] = 'number'
                [UInt32[]] = 'number[]'
                [UInt64] = 'number'
                [UInt64[]] = 'number[]'
            }
            if ($IsEnum) {
                $TypeString = "{}"
            }
            elseif ($table.ContainsKey($type)) {
                $PropertyString += "] $($table[$type]) "
                $TypeString = "$($table[$type])"
            }
            elseif ($type -eq [pscredential]) {
                $PropertyString += ',EmbeddedInstance("MSFT_Credential")] string '
                $TypeString = "DscCredential"
            }
            else {
                $goodType = $false

                if ($null -ne $type -and $type.IsEnum) {
                    Write-Verbose "'$type' is an Enum type. Let's convert it into a ValueMap."

                    $eNames = ($type.GetEnumNames() | ForEach-Object { "`"$_`"" }) -join ','
                    $eValues = ($type.GetEnumValues().value__ | ForEach-Object { "`"$_`"" }) -join ','
                    $eType = $type.GetEnumUnderlyingType()

                    if ($table.ContainsKey($eType)) {
                        $goodType = $true
                        $PropertyString += ",ValueMap{$eValues},Values{$eNames}] $($table[$eType]) "
                    }
                    $TypeString = "{}"
                }
                
                if (-not $goodType) {
                    Write-Warning "Don't know what to do with $($ParameterTypeAttributeAst.TypeName.FullName)"
                    $TypeString = "{}"
                }
            }

            $arrayString = if ($type.IsArray) { '[]' } else { '' }

            $paramName = "$($ParameterName.substring(0, 1).tolower())$($ParameterName.substring(1))"
            if ($paramName -eq "ensure" -and $TypeString -eq "enum") {
                $TypeString = "DscEnsure" 
            }
            $accessibility = "public "
            if ($IsKey) {
                $ConstructorParams.Add("$($paramName): $TypeString$arrayString") | Out-Null
                $ConstructorMap.Add("        this.$($paramName) = $($paramName);") | Out-Null
            }

            $descriptionSplit = New-Object System.Collections.ArrayList
            for ($i = 0; $i -le $description.length ; $i += 130 ) {
                if (($i + 130) -ge ($description.length)) {
                    $descriptionSplit.Add($description.substring($i, ($description.length - $i))) | Out-Null
                }
                else {
                    $descriptionSplit.Add($description.substring($i, 130)) | Out-Null
                }
            }

            $Template += @"

    /**
     * $($descriptionSplit -join "`r`n     * ")
     */`r`n
"@
            $Template += "    $accessibility$($paramName): $TypeString$arrayString;`r`n"
        }

        #Creating the constructor
        $Template += @"
`r`n
    constructor(
"@
        $Template += $ConstructorParams -join ", "
        $Template += @"
) {
        super();`r`n
"@
        $Template += $ConstructorMap -join "`r`n"
        $Template += "`r`n    }"
        $Template += @'

}
'@

        $TargetPath = join-path $OutPath "$ResourceName.ts"
    
        if (Test-Path $TargetPath) {
            Write-Verbose "Removing previous file from $TargetPath."
            Remove-Item -Path $TargetPath -Force
        }

        Write-Verbose "Writing $ResourceName.ts to $Path"

        [System.IO.File]::WriteAllLines($TargetPath, $Template)
    }
    catch {
        Write-Verbose $_
        break;
    }
}
