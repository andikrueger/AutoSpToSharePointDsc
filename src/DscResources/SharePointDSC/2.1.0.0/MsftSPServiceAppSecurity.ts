import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPServiceAppSecurity extends DscType {
    /**
     * The name of the service application you wish to apply security settings to
     */
    public serviceAppName: string;

    /**
     * Administrators will set the administrators for the service app, SharingPermissions will set those granted access through the permi
     * ssions button seen in the Sharing section of the ribbon in central admin"), ValueMap{"Administrators","SharingPermissions"}, Value
     * s{"Administrators","SharingPermissions
     */
    public securityType: {};

    /**
     * 
     */
    public members: {}[];

    /**
     * 
     */
    public membersToInclude: {}[];

    /**
     * 
     */
    public membersToExclude: string[][];

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(serviceAppName: string, securityType: {}) {
        super();
        this.serviceAppName = serviceAppName;
        this.securityType = securityType;
    }
}
