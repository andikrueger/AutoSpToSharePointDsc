import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPUserProfileSection extends DscType {
    /**
     * The internal name of the user profile section
     */
    public name: string;

    /**
     * Present if the section should exist, absent if it should be removed"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * The name of the user profile service application this section exists in
     */
    public userProfileService: string;

    /**
     * The display name of the section
     */
    public displayName: string;

    /**
     * A number used to sort sections by
     */
    public displayOrder: number;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(name: string, userProfileService: string) {
        super();
        this.name = name;
        this.userProfileService = userProfileService;
    }
}
