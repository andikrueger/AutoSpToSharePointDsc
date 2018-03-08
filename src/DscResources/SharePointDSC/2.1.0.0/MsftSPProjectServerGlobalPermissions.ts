import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPProjectServerGlobalPermissions extends DscType {
    /**
     * The default zone URL of the Project site to manage the group at
     */
    public url: string;

    /**
     * The name of the user or group
     */
    public entityName: string;

    /**
     * What type of entity are you setting permissions for?"), ValueMap{"User","Group"}, Values{"User","Group
     */
    public entityType: {};

    /**
     * 
     */
    public allowPermissions: string[][];

    /**
     * 
     */
    public denyPermissions: string[][];

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(url: string, entityName: string, entityType: {}) {
        super();
        this.url = url;
        this.entityName = entityName;
        this.entityType = entityType;
    }
}
