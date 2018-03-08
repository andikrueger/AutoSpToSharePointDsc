import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPWorkflowService extends DscType {
    /**
     * The URL of the Workflow Service
     */
    public workflowHostUri: string;

    /**
     * The URL of the Site Collection to associate with the Workflow Service Proxy
     */
    public sPSiteUrl: string;

    /**
     * Specify whether or not to allow connection to the Workflow Service over Http
     */
    public allowOAuthHttp: boolean;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(workflowHostUri: string, sPSiteUrl: string) {
        super();
        this.workflowHostUri = workflowHostUri;
        this.sPSiteUrl = sPSiteUrl;
    }
}
