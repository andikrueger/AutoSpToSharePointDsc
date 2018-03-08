import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPWeb extends DscType {
    /**
     * The URL of the web
     */
    public url: string;

    /**
     * Present if the web should exist or Absent if it should be removed"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * The description to apply to the web
     */
    public description: string;

    /**
     * The Name of the web
     */
    public name: string;

    /**
     * The Lanhuage (LCID) of the web
     */
    public language: number;

    /**
     * The WebTemplate to use to create the web
     */
    public template: string;

    /**
     * True if the web should have unique permissions, otherwise false.
     */
    public uniquePermissions: boolean;

    /**
     * True if the web should use the parent nav bar, otherwise false.
     */
    public useParentTopNav: boolean;

    /**
     * True if the web should be in the quick launch of the parent web, otherwise false.
     */
    public addToQuickLaunch: boolean;

    /**
     * True if the web should be added to the top nav bar of the parent web, otherwise false.
     */
    public addToTopNav: boolean;

    /**
     * The e-mail address to which requests for access are sent. Set to emtpy string to disable access requests.
     */
    public requestAccessEmail: string;

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
