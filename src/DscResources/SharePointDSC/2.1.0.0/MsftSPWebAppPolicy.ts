import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPWebAppPolicy extends DscType {
    /**
     * The URL of the web application
     */
    public webAppUrl: string;

    /**
     * 
     */
    public members: {}[];

    /**
     * 
     */
    public membersToInclude: {}[];

    /**
     * 
     */
    public membersToExclude: {}[];

    /**
     * Include the Cache Accounts in the policy or not
     */
    public setCacheAccountsPolicy: boolean;

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
