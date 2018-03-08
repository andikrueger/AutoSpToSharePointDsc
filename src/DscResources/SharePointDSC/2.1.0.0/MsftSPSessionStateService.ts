import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPSessionStateService extends DscType {
    /**
     * The name of the database for the service
     */
    public databaseName: string;

    /**
     * The name of the database server for the database
     */
    public databaseServer: string;

    /**
     * Present is the state service should be enabled, absent if it should be disabled"), ValueMap{"Present","Absent"}, Values{"Present",
     * "Absent
     */
    public ensure: {};

    /**
     * What is the timeout on sessions
     */
    public sessionTimeout: number;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(databaseName: string, databaseServer: string) {
        super();
        this.databaseName = databaseName;
        this.databaseServer = databaseServer;
    }
}
