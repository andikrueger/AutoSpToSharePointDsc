import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPSecureStoreServiceApp extends DscType {
    /**
     * The name of the secure store service app
     */
    public name: string;

    /**
     * The proxy name, if not specified will be /Name of service app/ Proxy
     */
    public proxyName: string;

    /**
     * The name of the application pool it will run in
     */
    public applicationPool: string;

    /**
     * Is auditing enabled for this service app
     */
    public auditingEnabled: boolean;

    /**
     * What is the maximum size of the audit log in MB
     */
    public auditlogMaxSize: number;

    /**
     * The name of the database for the service app
     */
    public databaseName: string;

    /**
     * The name of the database server to host the database
     */
    public databaseServer: string;

    /**
     * The name of the database server hosting a failover instance of the database
     */
    public failoverDatabaseServer: string;

    /**
     * Is partition mode enabled for this service app
     */
    public partitionMode: boolean;

    /**
     * Is sharing enabled for this service app
     */
    public sharing: boolean;

    /**
     * What type of authentication should be used to access the database"), ValueMap{"Windows","SQL"}, Values{"Windows","SQL
     */
    public databaseAuthenticationType: {};

    /**
     * Present if the service app should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * What SQL credentials should be used to access the database"), EmbeddedInstance("MSFT_Credential
     */
    public databaseCredentials: DscCredential;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(name: string, applicationPool: string, auditingEnabled: boolean) {
        super();
        this.name = name;
        this.applicationPool = applicationPool;
        this.auditingEnabled = auditingEnabled;
    }
}
