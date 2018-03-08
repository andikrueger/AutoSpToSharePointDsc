import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPFeature extends DscType {
    /**
     * The name of the feature
     */
    public name: string;

    /**
     * The URL to change the feature at
     */
    public url: string;

    /**
     * The scope to change the feature at - Farm, WebApplication, SiteCollection or Site"), ValueMap{"Farm","WebApplication","Site","Web"
     * }, Values{"Farm","WebApplication","Site","Web
     */
    public featureScope: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;

    /**
     * Present if the feature is to be enabled, Absent if it is to be disabled"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * The version of the feature to check against
     */
    public version: string;


    constructor(name: string, url: string, featureScope: {}) {
        super();
        this.name = name;
        this.url = url;
        this.featureScope = featureScope;
    }
}
