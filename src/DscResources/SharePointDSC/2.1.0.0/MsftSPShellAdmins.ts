import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPShellAdmins extends DscType {
    /**
     * Name of the Database")] String Name;     [Key, Description("Name for the config, used for administration purposes
     */
    public name: string;

    /**
     * 
     */
    public members: string[][];

    /**
     * 
     */
    public membersToInclude: string[][];

    /**
     * 
     */
    public membersToExclude: string[][];

    /**
     * 
     */
    public databases: {}[];

    /**
     * Specify if all databases must get the same config as the general config
     */
    public allDatabases: boolean;

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
