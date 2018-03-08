import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPProjectServerWssSettings extends DscType {
    /**
     * The default zone URL of the Project site to set WSS settings for
     */
    public url: string;

    /**
     * How should new SharePoint sites be created?"), ValueMap{"AutoCreate","UserChoice","DontCreate"}, Values{"AutoCreate","UserChoice",
     * "DontCreate
     */
    public createProjectSiteMode: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(url: string, createProjectSiteMode: {}) {
        super();
        this.url = url;
        this.createProjectSiteMode = createProjectSiteMode;
    }
}
