import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPWebAppProxyGroup extends DscType {
    /**
     * URL of the web application
     */
    public webAppUrl: string;

    /**
     * Name of the Service Application Proxy Group
     */
    public serviceAppProxyGroup: string;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(webAppUrl: string, serviceAppProxyGroup: string) {
        super();
        this.webAppUrl = webAppUrl;
        this.serviceAppProxyGroup = serviceAppProxyGroup;
    }
}
