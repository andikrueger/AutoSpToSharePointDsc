import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPAppStoreSettings extends DscType {
    /**
     * The URL of the web application
     */
    public webAppUrl: string;

    /**
     * Specifies if App Purchases from the SharePoint Store are allowed
     */
    public allowAppPurchases: boolean;

    /**
     * Specifies if App Purchases for Office applications are allowed
     */
    public allowAppsForOffice: boolean;

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
