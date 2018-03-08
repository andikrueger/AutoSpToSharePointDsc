import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPUserProfileServiceApp extends DscType {
    /**
     * The name of the user profile service
     */
    public name: string;

    /**
     * The proxy name, if not specified will be /Name of service app/ Proxy
     */
    public proxyName: string;

    /**
     * The name of the application pool to run the service app in
     */
    public applicationPool: string;

    /**
     * The URL of the my site host collection
     */
    public mySiteHostLocation: string;

    /**
     * The name of the profile database
     */
    public profileDBName: string;

    /**
     * The name of the server to host the profile database
     */
    public profileDBServer: string;

    /**
     * The name of the social database
     */
    public socialDBName: string;

    /**
     * The name of the database server to host the social database
     */
    public socialDBServer: string;

    /**
     * The name of the sync database
     */
    public syncDBName: string;

    /**
     * The name of the database server to host the sync database
     */
    public syncDBServer: string;

    /**
     * Whether Farm should resolve NetBIOS domain names
     */
    public enableNetBIOS: boolean;

    /**
     * Specifies if the service application should be configured to use AD Import
     */
    public noILMUsed: boolean;

    /**
     * Present if the service app should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

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
