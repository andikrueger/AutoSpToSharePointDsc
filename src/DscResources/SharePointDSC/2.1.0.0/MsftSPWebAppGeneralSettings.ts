import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPWebAppGeneralSettings extends DscType {
    /**
     * The URL of the web app to set the general settings for
     */
    public url: string;

    /**
     * The timezone code to use for this web app. A full list is at https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.
     * spregionalsettings.timezones.aspx
     */
    public timeZone: number;

    /**
     * Should alerts be enabled for this web app
     */
    public alerts: boolean;

    /**
     * What is the maximum number of alerts that a user can create in this web app
     */
    public alertsLimit: number;

    /**
     * Should RSS feeds be enabled in this web app
     */
    public rSS: boolean;

    /**
     * Should the Blog API be enabled in this web app
     */
    public blogAPI: boolean;

    /**
     * Is authentication required for the blog API
     */
    public blogAPIAuthenticated: boolean;

    /**
     * What file handling mode should be used in this web app - strict or permissive"), ValueMap{"Strict","Permissive"}, Values{"Strict",
     * "Permissive
     */
    public browserFileHandling: {};

    /**
     * Is security validation enforced in this web app
     */
    public securityValidation: boolean;

    /**
     * Does security validation expire after a set time
     */
    public securityValidationExpires: boolean;

    /**
     * Number of minutes security validation will expire if securityvalidationexpires is set
     */
    public securityValidationTimeoutMinutes: number;

    /**
     * Is the recycle bin enabled in this web application
     */
    public recycleBinEnabled: boolean;

    /**
     * Is automatic cleanup of the recycle bin enabled in this web app
     */
    public recycleBinCleanupEnabled: boolean;

    /**
     * How many days does the recycle bin keep content for
     */
    public recycleBinRetentionPeriod: number;

    /**
     * How much content does the second stage recycle bin keep content for
     */
    public secondStageRecycleBinQuota: number;

    /**
     * What is the maximum file upload size for this web app (in MB)
     */
    public maximumUploadSize: number;

    /**
     * Should the customer experience program be enabled in this web app
     */
    public customerExperienceProgram: boolean;

    /**
     * Is Skype for Business presence enabled for this web app
     */
    public presenceEnabled: boolean;

    /**
     * Should the Online WebPart Gallery be enabled for this web app
     */
    public allowOnlineWebPartCatalog: boolean;

    /**
     * Should Self Service Site Creation be enabled
     */
    public selfServiceSiteCreationEnabled: boolean;

    /**
     * What is the default quota template for this web app
     */
    public defaultQuotaTemplate: string;

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
