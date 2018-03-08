import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPQuotaTemplate extends DscType {
    /**
     * The name of the quota template
     */
    public name: string;

    /**
     * The maximum storage for sites of this template in MB
     */
    public storageMaxInMB: number;

    /**
     * The amount of storage for sites of this template that triggers a warning
     */
    public storageWarningInMB: number;

    /**
     * The maximum number of performance points for sandbox solutions for this template
     */
    public maximumUsagePointsSolutions: number;

    /**
     * The warning number of performance points for sandbox solutions for this template
     */
    public warningUsagePointsSolutions: number;

    /**
     * Present to create this template, absent to ensure it does not exist"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(name: string) {
        super();
        this.name = name;
    }
}
