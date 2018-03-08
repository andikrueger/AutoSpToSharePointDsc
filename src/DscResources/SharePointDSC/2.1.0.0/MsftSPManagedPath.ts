import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPManagedPath extends DscType {
    /**
     * The URL of the web application to apply the managed path to - this is ignored for host header web applications
     */
    public webAppUrl: string;

    /**
     * The relative URL of the managed path
     */
    public relativeUrl: string;

    /**
     * Should the host header be explicit? If false then it is a wildcard
     */
    public explicit: boolean;

    /**
     * Is this a host header web application?
     */
    public hostHeader: boolean;

    /**
     * Present ensures managed path exists, absent ensures it is removed"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(webAppUrl: string, relativeUrl: string, explicit: boolean, hostHeader: boolean) {
        super();
        this.webAppUrl = webAppUrl;
        this.relativeUrl = relativeUrl;
        this.explicit = explicit;
        this.hostHeader = hostHeader;
    }
}
