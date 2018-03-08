import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPWebAppBlockedFileTypes extends DscType {
    /**
     * The URL of the web application to set blocked file types for
     */
    public url: string;

    /**
     * 
     */
    public blocked: string[][];

    /**
     * 
     */
    public ensureBlocked: string[][];

    /**
     * 
     */
    public ensureAllowed: string[][];

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
