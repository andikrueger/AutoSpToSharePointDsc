import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPSearchServiceApp extends DscType {
    /**
     * The name of the search service application
     */
    public name: string;

    /**
     * The proxy name, if not specified will be /Name of service app/ Proxy
     */
    public proxyName: string;

    /**
     * The application pool that it should run in
     */
    public applicationPool: string;

    /**
     * The server that host the databases for this service application
     */
    public databaseServer: string;

    /**
     * The name of the database (noting that some search databases will use this as a prefix)
     */
    public databaseName: string;

    /**
     * Present if the service app should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * The URL of the enterprise search center site collection
     */
    public searchCenterUrl: string;

    /**
     * Should this search service application be a cloud based service app
     */
    public cloudIndex: boolean;

    /**
     * The default content access account for this search service app"), EmbeddedInstance("MSFT_Credential
     */
    public defaultContentAccessAccount: DscCredential;

    /**
     * Sets the windows services for search to run as this account"), EmbeddedInstance("MSFT_Credential
     */
    public windowsServiceAccount: DscCredential;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(name: string, applicationPool: string) {
        super();
        this.name = name;
        this.applicationPool = applicationPool;
    }
}
