import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPUsageApplication extends DscType {
    /**
     * The name of the service application
     */
    public name: string;

    /**
     * Present if the service app should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;

    /**
     * The name of the database for the service app
     */
    public databaseName: string;

    /**
     * The name of the database server
     */
    public databaseServer: string;

    /**
     * The credentials to use to access the database"), EmbeddedInstance("MSFT_Credential
     */
    public databaseCredentials: DscCredential;

    /**
     * The name of the failover database server
     */
    public failoverDatabaseServer: string;

    /**
     * The time in minutes to cut over to new log files
     */
    public usageLogCutTime: number;

    /**
     * The location on each server to store the log files
     */
    public usageLogLocation: string;

    /**
     * The maximum file size for log files in KB
     */
    public usageLogMaxFileSizeKB: number;

    /**
     * The total space of all log files on disk in GB
     */
    public usageLogMaxSpaceGB: number;


    constructor(name: string) {
        super();
        this.name = name;
    }
}
