import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPIrmSettings extends DscType {
    /**
     * Enable or Disable IRM on this farm"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * Use the RMS server published in this farm's Active Directory
     */
    public useADRMS: boolean;

    /**
     * Use the specified RMS server, must provide in URL format
     */
    public rMSserver: string;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(ensure: {}) {
        super();
        this.ensure = ensure;
    }
}
