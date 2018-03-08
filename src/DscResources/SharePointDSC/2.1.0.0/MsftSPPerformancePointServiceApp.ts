import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPPerformancePointServiceApp extends DscType {
    /**
     * The name of the service application
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
     * The name of the database for the service app
     */
    public databaseName: string;

    /**
     * The name of the database server to host the database
     */
    public databaseServer: string;

    /**
     * Present ensures service app exists, absent ensures it is removed"), ValueMap{"Present","Absent"}, Values{"Present","Absent
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
