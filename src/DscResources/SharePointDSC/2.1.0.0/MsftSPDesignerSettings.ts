import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPDesignerSettings extends DscType {
    /**
     * The URL of the web application or site collection to configure
     */
    public url: string;

    /**
     * Define the scope of the configuration - either WebApplication or SiteCollection"), ValueMap{"WebApplication","SiteCollection"}, Va
     * lues{"WebApplication","SiteCollection
     */
    public settingsScope: {};

    /**
     * Allow the use of SharePoint Designer
     */
    public allowSharePointDesigner: boolean;

    /**
     * Allow pages to be un-ghosted by SharePoint Designer
     */
    public allowDetachPagesFromDefinition: boolean;

    /**
     * Allow masterpages to be changed by SharePoint Designer
     */
    public allowCustomiseMasterPage: boolean;

    /**
     * Allow site URL structure to be changed by SharePoint Designer
     */
    public allowManageSiteURLStructure: boolean;

    /**
     * Allow users to create declarative workflows with SharePoint Designer
     */
    public allowCreateDeclarativeWorkflow: boolean;

    /**
     * Allow users to save and re-publish declarative workflows with SharePoint Designer
     */
    public allowSavePublishDeclarativeWorkflow: boolean;

    /**
     * Allow users to save declarative workflows as a template from SharePoint Designer
     */
    public allowSaveDeclarativeWorkflowAsTemplate: boolean;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(url: string, settingsScope: {}) {
        super();
        this.url = url;
        this.settingsScope = settingsScope;
    }
}
