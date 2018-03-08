import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPWorkManagementServiceApp extends DscType {
    /**
     * The name of the work management service application
     */
    public name: string;

    /**
     * The proxy name, if not specified will be /Name of service app/ Proxy
     */
    public proxyName: string;

    /**
     * The name of the application pool this will run in
     */
    public applicationPool: string;

    /**
     * The minimum amount of time bween EWS sync subscription searches
     */
    public minimumTimeBetweenEwsSyncSubscriptionSearches: number;

    /**
     * The minimum time between provider refreshes
     */
    public minimumTimeBetweenProviderRefreshes: number;

    /**
     * The minimum time between search queries
     */
    public minimumTimeBetweenSearchQueries: number;

    /**
     * The number of subscription syncronisations per EWS sync run
     */
    public numberOfSubscriptionSyncsPerEwsSyncRun: number;

    /**
     * How many users will EWS calls include at once
     */
    public numberOfUsersEwsSyncWillProcessAtOnce: number;

    /**
     * How many users are included in a batch for EWS
     */
    public numberOfUsersPerEwsSyncBatch: number;

    /**
     * Present to ensure the app exists, Absent to ensure it is removed"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

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
