import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPProjectServerGroup extends DscType {
    /**
     * The default zone URL of the Project site to manage the group at
     */
    public url: string;

    /**
     * The name of the group
     */
    public name: string;

    /**
     * The description of the group
     */
    public description: string;

    /**
     * What AD group should be used to synchronise membership to this Project Server group, cannot be used with Members, MembersToInclude
     *  or MembersToExclude
     */
    public aDGroup: string;

    /**
     * 
     */
    public members: string[][];

    /**
     * 
     */
    public membersToInclude: string[][];

    /**
     * 
     */
    public membersToExclude: string[][];

    /**
     * Present if the service app should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(url: string, name: string) {
        super();
        this.url = url;
        this.name = name;
    }
}
