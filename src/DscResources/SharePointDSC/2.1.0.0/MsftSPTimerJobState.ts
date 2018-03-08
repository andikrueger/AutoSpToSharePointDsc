import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPTimerJobState extends DscType {
    /**
     * The type name of the timer job (not the display name)
     */
    public typeName: string;

    /**
     * The URL of the web application that the timer job belongs to, N/A if no web application is applicable
     */
    public webAppUrl: string;

    /**
     * Should the timer job be enabled or not
     */
    public enabled: boolean;

    /**
     * The schedule for the timer job to execute on
     */
    public schedule: string;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(typeName: string, webAppUrl: string) {
        super();
        this.typeName = typeName;
        this.webAppUrl = webAppUrl;
    }
}
