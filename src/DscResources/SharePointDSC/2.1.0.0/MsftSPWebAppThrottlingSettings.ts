import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPWebAppThrottlingSettings extends DscType {
    /**
     * The URL of the web application
     */
    public url: string;

    /**
     * What should the list view threshold for this site be set to
     */
    public listViewThreshold: number;

    /**
     * Should object model code be able to be override the list view threshold
     */
    public allowObjectModelOverride: boolean;

    /**
     * What is the list view threshold for site administrators
     */
    public adminThreshold: number;

    /**
     * What is the maximum number of lookup fields in a single list view
     */
    public listViewLookupThreshold: number;

    /**
     * Should the happy hour window be enabled for this web app
     */
    public happyHourEnabled: boolean;

    /**
     * The time window for happy hour"), EmbeddedInstance("MSFT_SPWebApplicationHappyHour
     */
    public happyHour: {};

    /**
     * What is the limit for unique permissions on a single object in this web app
     */
    public uniquePermissionThreshold: number;

    /**
     * Is request throttling enabled on this web app
     */
    public requestThrottling: boolean;

    /**
     * Is the change log enabled for this web app
     */
    public changeLogEnabled: boolean;

    /**
     * How many days does the change log store data for
     */
    public changeLogExpiryDays: number;

    /**
     * Are event handlers enabled in the web application
     */
    public eventHandlersEnabled: boolean;

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
