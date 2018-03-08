$OutPath = "C:\Users\andreas.krueger\Documents\GitHub\DscResource2TypeScript\src\DscResources\sqlserverdsc\11.0.0.0"
$childs = Get-ChildItem "C:\program Files\windowspowerShell\modules\sqlserverdsc\11.0.0.0\DSCResources"

# $OutPath = "C:\Users\andreas.krueger\Documents\GitHub\DscResource2TypeScript\src\DscResources\sharepointdsc\2.1.0.0"
# $childs = Get-ChildItem "C:\program Files\windowspowerShell\modules\sharepointdsc\2.1.0.0\DSCResources"

$indexContent = [string]::Empty

if ($null -ne (Get-Command New-TsFile -ErrorAction SilentlyContinue))
{
    Remove-Item Function:\New-TsFile
}
. .\New-TsFile.ps1

foreach ($child in $childs)
{
    New-TsFile -Path $($child.FullName) -Verbose -OutPath $OutPath
    Write-Host $child.Name
    $indexContent += "export * from './$($child.Name.Replace("MSFT_", "Msft"))';`r`n"
}
[System.IO.File]::WriteAllLines("$($OutPath)\index.ts", $indexContent)