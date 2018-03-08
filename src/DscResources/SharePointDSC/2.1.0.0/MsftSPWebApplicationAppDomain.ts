import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPWebApplicationAppDomain extends DscType {
    /**
     * The domain for apps in this web app zone
     */
    public appDomain: string;

    /**
     * The URL of the web application to set the app domain for
     */
    public webApplication: string;

    /**
     * The zone that this app domain applies to"), ValueMap{"Default","Internet","Intranet","Extranet","Custom"}, Values{"Default","Inter
     * net","Intranet","Extranet","Custom
     */
    public zone: {};

    /**
     * The port to run apps on
     */
    public port: string;

    /**
     * Should apps run under SSL
     */
    public sSL: boolean;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(appDomain: string, webApplication: string, zone: {}) {
        super();
        this.appDomain = appDomain;
        this.webApplication = webApplication;
        this.zone = zone;
    }
}
