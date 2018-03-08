import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPManagedMetadataServiceApp extends DscType {
    /**
     * The name of the managed metadata service application
     */
    public name: string;

    /**
     * The proxy name, if not specified will be /Name of service app/ Proxy
     */
    public proxyName: string;

    /**
     * The application pool that the service app will use
     */
    public applicationPool: string;

    /**
     * The name of the database server which will host the application
     */
    public databaseServer: string;

    /**
     * The name of the database for the service application
     */
    public databaseName: string;

    /**
     * 
     */
    public termStoreAdministrators: string[][];

    /**
     * Present ensures service app exists, absent ensures it is removed"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * The URL of the content type hub for this app (only set when the app is provisioned)
     */
    public contentTypeHubUrl: string;

    /**
     * The LCID of the default language (only set when the app is provisioned)
     */
    public defaultLanguage: number;

    /**
     * 
     */
    public languages: number[][];

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
