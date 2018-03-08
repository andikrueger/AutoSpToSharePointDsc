import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPAppCatalog extends DscType {
    /**
     * The URL of the site collection that will be the app catalog for the web app that it is in
     */
    public siteUrl: string;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(siteUrl: string) {
        super();
        this.siteUrl = siteUrl;
    }
}
