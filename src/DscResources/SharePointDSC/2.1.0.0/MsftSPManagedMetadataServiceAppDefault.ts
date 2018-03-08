import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPManagedMetadataServiceAppDefault extends DscType {
    /**
     * Specifies the resource is a single instance, the value must be 'Yes'"), ValueMap{"Yes"}, Values{"Yes
     */
    public isSingleInstance: {};

    /**
     * The name of the managed metadata service application proxy used as default column terms set
     */
    public defaultSiteCollectionProxyName: string;

    /**
     * The name of the managed metadata service application proxy used as default keyword terms set
     */
    public defaultKeywordProxyName: string;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(isSingleInstance: {}, defaultSiteCollectionProxyName: string, defaultKeywordProxyName: string) {
        super();
        this.isSingleInstance = isSingleInstance;
        this.defaultSiteCollectionProxyName = defaultSiteCollectionProxyName;
        this.defaultKeywordProxyName = defaultKeywordProxyName;
    }
}
