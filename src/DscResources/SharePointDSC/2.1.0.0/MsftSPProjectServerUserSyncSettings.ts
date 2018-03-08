import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPProjectServerUserSyncSettings extends DscType {
    /**
     * The default zone URL of the Project site to set user sync settings for
     */
    public url: string;

    /**
     * Enable Project Web App Sync
     */
    public enableProjectWebAppSync: boolean;

    /**
     * Enable Project Site Sync
     */
    public enableProjectSiteSync: boolean;

    /**
     * Enable Project Site Sync for SharePoint Task List Projects
     */
    public enableProjectSiteSyncForSPTaskLists: boolean;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(url: string, enableProjectWebAppSync: boolean, enableProjectSiteSync: boolean, enableProjectSiteSyncForSPTaskLists: boolean) {
        super();
        this.url = url;
        this.enableProjectWebAppSync = enableProjectWebAppSync;
        this.enableProjectSiteSync = enableProjectSiteSync;
        this.enableProjectSiteSyncForSPTaskLists = enableProjectSiteSyncForSPTaskLists;
    }
}
