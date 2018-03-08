import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPAppDomain extends DscType {
    /**
     * The domain name for apps to use in this farm
     */
    public appDomain: string;

    /**
     * The prefix to go on to app URLs
     */
    public prefix: string;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(appDomain: string, prefix: string) {
        super();
        this.appDomain = appDomain;
        this.prefix = prefix;
    }
}
