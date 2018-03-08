import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPCacheAccounts extends DscType {
    /**
     * The URL of the web application to set the accounts for
     */
    public webAppUrl: string;

    /**
     * The account name for the super user
     */
    public superUserAlias: string;

    /**
     * The account name for the super reader
     */
    public superReaderAlias: string;

    /**
     * Should the web app policy be set for these accounts?
     */
    public setWebAppPolicy: boolean;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(webAppUrl: string, superUserAlias: string, superReaderAlias: string) {
        super();
        this.webAppUrl = webAppUrl;
        this.superUserAlias = superUserAlias;
        this.superReaderAlias = superReaderAlias;
    }
}
