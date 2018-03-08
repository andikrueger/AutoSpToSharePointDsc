import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPWebAppPermissions extends DscType {
    /**
     * The url of the web application
     */
    public webAppUrl: string;

    /**
     * 
     */
    public listPermissions: {}[];

    /**
     * 
     */
    public sitePermissions: {}[];

    /**
     * 
     */
    public personalPermissions: {}[];

    /**
     * Set all permissions
     */
    public allPermissions: boolean;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(webAppUrl: string) {
        super();
        this.webAppUrl = webAppUrl;
    }
}
