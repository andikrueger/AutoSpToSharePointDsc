import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPVisioServiceApp extends DscType {
    /**
     * The name of the service application
     */
    public name: string;

    /**
     * The name of the application pool to run the service app in
     */
    public applicationPool: string;

    /**
     * The name of the Visio Service Application Proxy
     */
    public proxyName: string;

    /**
     * Present if the service app should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(name: string, applicationPool: string) {
        super();
        this.name = name;
        this.applicationPool = applicationPool;
    }
}
