import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPProjectServerPermissionMode extends DscType {
    /**
     * The default zone URL of the Project site to set permissions for
     */
    public url: string;

    /**
     * What permission mode should PWA use"), ValueMap{"SharePoint","ProjectServer"}, Values{"SharePoint","ProjectServer
     */
    public permissionMode: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(url: string, permissionMode: {}) {
        super();
        this.url = url;
        this.permissionMode = permissionMode;
    }
}
