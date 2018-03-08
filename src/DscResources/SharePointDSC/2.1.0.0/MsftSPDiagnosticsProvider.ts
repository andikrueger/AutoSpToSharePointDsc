import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPDiagnosticsProvider extends DscType {
    /**
     * Name of the Diagnostics Provider to configure
     */
    public name: string;

    /**
     * Sets the retention period in days
     */
    public retention: number;

    /**
     * Sets the maximum retention size in bytes
     */
    public maxTotalSizeInBytes: number;

    /**
     * True enables the Diagnostics Provider
     */
    public enabled: boolean;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;

    /**
     * Present to configure the diagnostics provider"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};


    constructor(name: string) {
        super();
        this.name = name;
    }
}
