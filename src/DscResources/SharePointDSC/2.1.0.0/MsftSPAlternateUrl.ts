import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPAlternateUrl extends DscType {
    /**
     * The name of the web application to apply the alternate URL to
     */
    public webAppName: string;

    /**
     * The Zone to use for the alternate URL"), ValueMap{"Default","Intranet","Extranet","Custom","Internet"}, Values{"Default","Intranet
     * ","Extranet","Custom","Internet
     */
    public zone: {};

    /**
     * The new alternate URL
     */
    public url: string;

    /**
     * Specifies if the URL has to be configured as internal
     */
    public internal: boolean;

    /**
     * Present ensures the URL is set for this zone on this web app, Absent ensures it is removed"), ValueMap{"Present","Absent"}, Values
     * {"Present","Absent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(webAppName: string, zone: {}, url: string) {
        super();
        this.webAppName = webAppName;
        this.zone = zone;
        this.url = url;
    }
}
