import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPInstallLanguagePack extends DscType {
    /**
     * The directory that contains all of the SharePoint binaries
     */
    public binaryDir: string;

    /**
     * 
     */
    public binaryInstallDays: {}[];

    /**
     * Specify in which time frame the installation is allowed
     */
    public binaryInstallTime: string;

    /**
     * Present to install SharePoint. Absent is currently not supported"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(binaryDir: string) {
        super();
        this.binaryDir = binaryDir;
    }
}
