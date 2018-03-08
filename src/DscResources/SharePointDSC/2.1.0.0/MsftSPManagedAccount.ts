import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPManagedAccount extends DscType {
    /**
     * The credential with password of the account"), EmbeddedInstance("MSFT_Credential
     */
    public account: DscCredential;

    /**
     * Present ensures managed account exists, absent ensures it is removed"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;

    /**
     * How many days before a password change should an email be sent
     */
    public emailNotification: number;

    /**
     * How many days before a password expires should it be changed
     */
    public preExpireDays: number;

    /**
     * What is the schedule for the password reset
     */
    public schedule: string;

    /**
     * The username of the account
     */
    public accountName: string;


    constructor(accountName: string) {
        super();
        this.accountName = accountName;
    }
}
