import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPMinRoleCompliance extends DscType {
    /**
     * Should the state be set to compliant"), ValueMap{"Compliant", "NonCompliant"}, Values{"Compliant", "NonCompliant
     */
    public state: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(state: {}) {
        super();
        this.state = state;
    }
}
