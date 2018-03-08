import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPProductUpdate extends DscType {
    /**
     * The name of the update setup file
     */
    public setupFile: string;

    /**
     * Shutdown SharePoint services to speed up installation
     */
    public shutdownServices: boolean;

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


    constructor(setupFile: string) {
        super();
        this.setupFile = setupFile;
    }
}
