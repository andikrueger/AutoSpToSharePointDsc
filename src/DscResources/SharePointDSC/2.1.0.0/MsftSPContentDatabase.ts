import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPContentDatabase extends DscType {
    /**
     * Specifies the name of the content database
     */
    public name: string;

    /**
     * The name of the database server to host the content DB
     */
    public databaseServer: string;

    /**
     * The URL of the web application
     */
    public webAppUrl: string;

    /**
     * Should the database be enabled
     */
    public enabled: boolean;

    /**
     * Specify the site collection warning limit for the content database
     */
    public warningSiteCount: number;

    /**
     * Specify the site collection maximum limit for the content database
     */
    public maximumSiteCount: number;

    /**
     * Present to create this database, absent to ensure it does not exist"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(name: string, webAppUrl: string) {
        super();
        this.name = name;
        this.webAppUrl = webAppUrl;
    }
}
