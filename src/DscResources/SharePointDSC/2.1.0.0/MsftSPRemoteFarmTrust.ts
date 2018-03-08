import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPRemoteFarmTrust extends DscType {
    /**
     * A name of the remote farm, used to create token issuer and root authority
     */
    public name: string;

    /**
     * The URL of a web app in the remote farm, must use HTTPS
     */
    public remoteWebAppUrl: string;

    /**
     * The URL of a local web app to connect the remote farm to
     */
    public localWebAppUrl: string;

    /**
     * Set to present to ensure the trust exists, or absent to ensure it is removed"), ValueMap{"Present","Absent"}, Values{"Present","Ab
     * sent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(name: string, remoteWebAppUrl: string, localWebAppUrl: string) {
        super();
        this.name = name;
        this.remoteWebAppUrl = remoteWebAppUrl;
        this.localWebAppUrl = localWebAppUrl;
    }
}
