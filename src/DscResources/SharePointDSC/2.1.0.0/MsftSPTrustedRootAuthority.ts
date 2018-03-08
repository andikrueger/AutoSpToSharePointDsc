import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPTrustedRootAuthority extends DscType {
    /**
     * Specifies the name of the trusted root authority to create.
     */
    public name: string;

    /**
     * Specifies the X.509 certificate of the trusted root authority, as a certificate thumbprint.
     */
    public certificateThumbprint: string;

    /**
     * Present ensures service app exists, absent ensures it is removed"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5
     */
    public installAccount: DscCredential;


    constructor(name: string, certificateThumbprint: string) {
        super();
        this.name = name;
        this.certificateThumbprint = certificateThumbprint;
    }
}
