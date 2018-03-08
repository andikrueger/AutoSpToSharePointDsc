import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPWebAppAuthentication extends DscType {
    /**
     * The URL of the web application
     */
    public webAppUrl: string;

    /**
     * 
     */
    public default: {}[];

    /**
     * 
     */
    public intranet: {}[];

    /**
     * 
     */
    public internet: {}[];

    /**
     * 
     */
    public extranet: {}[];

    /**
     * 
     */
    public custom: {}[];

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
