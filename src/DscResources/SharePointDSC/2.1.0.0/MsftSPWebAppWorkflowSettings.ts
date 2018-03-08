import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPWebAppWorkflowSettings extends DscType {
    /**
     * The URL of the web application
     */
    public url: string;

    /**
     * Are external workflow participants enabled in the web app
     */
    public externalWorkflowParticipantsEnabled: boolean;

    /**
     * Are user defined workflows enabled in this web app
     */
    public userDefinedWorkflowsEnabled: boolean;

    /**
     * Are documents sent via email to external participants of workflow
     */
    public emailToNoPermissionWorkflowParticipantsEnable: boolean;

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
