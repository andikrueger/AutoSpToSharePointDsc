import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPLogLevel extends DscType {
    /**
     * Log Item Name")] String Name;     [Key, Description("Friendly Name used to reference this collection of log level settings
     */
    public name: string;

    /**
     * 
     */
    public sPLogLevelSetting: {}[];

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(name: string) {
        super();
        this.name = name;
    }
}
