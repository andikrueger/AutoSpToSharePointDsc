import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPServiceAppProxyGroup extends DscType {
    /**
     * Name of the Proxy Group to create
     */
    public name: string;

    /**
     * Present creates the proxy group if it does not already exist, Absent will delete the proxy group if it exists"), ValueMap{"Present
     * ","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * 
     */
    public serviceAppProxies: string[][];

    /**
     * 
     */
    public serviceAppProxiesToInclude: string[][];

    /**
     * 
     */
    public serviceAppProxiesToExclude: string[][];

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(name: string) {
        super();
        this.name = name;
    }
}
