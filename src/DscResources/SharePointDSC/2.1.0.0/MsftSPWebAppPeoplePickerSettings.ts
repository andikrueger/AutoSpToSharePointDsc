import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPWebAppPeoplePickerSettings extends DscType {
    /**
     * The URL of the web application
     */
    public webAppUrl: string;

    /**
     * Sets a customized query filter to send to Active Directory
     */
    public activeDirectoryCustomFilter: string;

    /**
     * Sets the custom query that is sent to Active Directory
     */
    public activeDirectoryCustomQuery: string;

    /**
     * Sets the time-out in seconds when a query is issued to Active Directory
     */
    public activeDirectorySearchTimeout: number;

    /**
     * Specifies whether to search only the current site collection
     */
    public onlySearchWithinSiteCollection: boolean;

    /**
     * 
     */
    public searchActiveDirectoryDomains: {}[];

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
