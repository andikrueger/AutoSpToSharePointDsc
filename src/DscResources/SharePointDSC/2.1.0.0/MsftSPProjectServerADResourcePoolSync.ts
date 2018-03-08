import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPProjectServerADResourcePoolSync extends DscType {
    /**
     * The default zone URL of the Project site to set permissions for
     */
    public url: string;

    /**
     * 
     */
    public groupNames: string[][];

    /**
     * Should the resource sync process be present or absent for this site?"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * Should inactive users found in sync be automatically reactiviated?
     */
    public autoReactivateUsers: boolean;

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
