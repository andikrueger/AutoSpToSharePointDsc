import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPWebApplication extends DscType {
    /**
     * The name of the web application
     */
    public name: string;

    /**
     * The name of the application pool to run this site in
     */
    public applicationPool: string;

    /**
     * The name of the managed account to run the app pool with
     */
    public applicationPoolAccount: string;

    /**
     * The URL of the web application
     */
    public url: string;

    /**
     * Should anonymous access be enabled for this web app
     */
    public allowAnonymous: boolean;

    /**
     * The name of the first content database to be created with this web app
     */
    public databaseName: string;

    /**
     * The name of the database server to host the default content DB
     */
    public databaseServer: string;

    /**
     * The host header to use for the web app
     */
    public hostHeader: string;

    /**
     * The path on the local servers to host the IIS web site from
     */
    public path: string;

    /**
     * The port to run the site on
     */
    public port: string;

    /**
     * Create the web application with Classic authentication (only used during creation of a new web application)
     */
    public useClassic: boolean;

    /**
     * Present if the web app should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(name: string, applicationPool: string, applicationPoolAccount: string, url: string) {
        super();
        this.name = name;
        this.applicationPool = applicationPool;
        this.applicationPoolAccount = applicationPoolAccount;
        this.url = url;
    }
}
