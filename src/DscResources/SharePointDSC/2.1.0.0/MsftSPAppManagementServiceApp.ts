import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPAppManagementServiceApp extends DscType {
    /**
     * The name of the app management service application
     */
    public name: string;

    /**
     * The proxy name, if not specified will be /Name of service app/ Proxy
     */
    public proxyName: string;

    /**
     * The app pool that should be used to run the service app
     */
    public applicationPool: string;

    /**
     * The name of the database for the service application
     */
    public databaseName: string;

    /**
     * The name of the server for the database
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
