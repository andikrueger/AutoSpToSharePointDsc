import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPSite extends DscType {
    /**
     * The URL of the site collection
     */
    public url: string;

    /**
     * The username of the site collection administrator
     */
    public ownerAlias: string;

    /**
     * The compatibility level of the site
     */
    public compatibilityLevel: number;

    /**
     * The name of the content database to create the site in
     */
    public contentDatabase: string;

    /**
     * The description to apply to the site collection
     */
    public description: string;

    /**
     * The URL of the host header web application to create this site in
     */
    public hostHeaderWebApplication: string;

    /**
     * The language code of the site
     */
    public language: number;

    /**
     * The display name of the site collection
     */
    public name: string;

    /**
     * The email address of the site collection administrator
     */
    public ownerEmail: string;

    /**
     * The quota template to apply to the site collection
     */
    public quotaTemplate: string;

    /**
     * The secondary site collection admin email address
     */
    public secondaryEmail: string;

    /**
     * The secondary site collection admin username
     */
    public secondaryOwnerAlias: string;

    /**
     * The template to apply to the site collection
     */
    public template: string;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(url: string, ownerAlias: string) {
        super();
        this.url = url;
        this.ownerAlias = ownerAlias;
    }
}
