import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPPasswordChangeSettings extends DscType {
    /**
     * The email address to send notifications of password changes to
     */
    public mailAddress: string;

    /**
     * The number of days before password expiry to send send emails
     */
    public daysBeforeExpiry: number;

    /**
     * The duration that a password reset will wait for before it times out
     */
    public passwordChangeWaitTimeSeconds: number;

    /**
     * How many retries if the password change fails
     */
    public numberOfRetries: number;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(mailAddress: string) {
        super();
        this.mailAddress = mailAddress;
    }
}
