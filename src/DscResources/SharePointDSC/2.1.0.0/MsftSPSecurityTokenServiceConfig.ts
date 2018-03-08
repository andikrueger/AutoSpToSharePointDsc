import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPSecurityTokenServiceConfig extends DscType {
    /**
     * The name of the security token service
     */
    public name: string;

    /**
     * The identifier for the security token service
     */
    public nameIdentifier: string;

    /**
     * True set the security token service to use cookies
     */
    public useSessionCookies: boolean;

    /**
     * True set the security token service to allow OAuth over HTTP
     */
    public allowOAuthOverHttp: boolean;

    /**
     * True set the security token service to allow metadata exchange over HTTP
     */
    public allowMetadataOverHttp: boolean;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;

    /**
     * Present ensures the configurations are applied"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};


    constructor(name: string) {
        super();
        this.name = name;
    }
}
