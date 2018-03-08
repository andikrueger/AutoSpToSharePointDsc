import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPProjectServerAdditionalSettings extends DscType {
    /**
     * The default zone URL of the Project site to manage settings at
     */
    public url: string;

    /**
     * What is the minimum build number for the Project Professional client that can connect?
     */
    public projectProfessionalMinBuildNumber: string;

    /**
     * What is the default server currency?
     */
    public serverCurrency: string;

    /**
     * Should all projects be forced to use the server currency?
     */
    public enforceServerCurrency: boolean;

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
