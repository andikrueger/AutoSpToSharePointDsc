import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPUserProfileServiceAppPermissions extends DscType {
    /**
     * The name of the proxy that is attached to the user profile service you wish to set permissions for
     */
    public proxyName: string;

    /**
     * 
     */
    public createPersonalSite: string[][];

    /**
     * 
     */
    public followAndEditProfile: string[][];

    /**
     * 
     */
    public useTagsAndNotes: string[][];

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(proxyName: string) {
        super();
        this.proxyName = proxyName;
    }
}
