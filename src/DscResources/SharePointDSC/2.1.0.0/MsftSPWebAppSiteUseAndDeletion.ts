import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPWebAppSiteUseAndDeletion extends DscType {
    /**
     * The URL of the web application
     */
    public url: string;

    /**
     * Should emails be sent to notify site owners of unused site collections
     */
    public sendUnusedSiteCollectionNotifications: boolean;

    /**
     * How many days should pass before a site is flagged as unused
     */
    public unusedSiteNotificationPeriod: number;

    /**
     * Should unused site collection be automatically deleted
     */
    public automaticallyDeleteUnusedSiteCollections: boolean;

    /**
     * How many days before an unused site is deleted should an email be sent to the owner
     */
    public unusedSiteNotificationsBeforeDeletion: number;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(url: string) {
        super();
        this.url = url;
    }
}
