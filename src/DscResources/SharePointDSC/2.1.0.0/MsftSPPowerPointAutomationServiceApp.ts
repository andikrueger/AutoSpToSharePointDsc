import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPPowerPointAutomationServiceApp extends DscType {
    /**
     * The name of the service application
     */
    public name: string;

    /**
     * The name of the service application proxy
     */
    public proxyName: string;

    /**
     * The name of the application pool to run the service app in
     */
    public applicationPool: string;

    /**
     * Specifies the maximum time, in seconds, that items remain in the back-end server cache. The default value is 600 seconds (10 minut
     * es).
     */
    public cacheExpirationPeriodInSeconds: number;

    /**
     * Specifies the maximum number of presentations that a conversion worker process can convert before recycling. The default value is 
     * 5.
     */
    public maximumConversionsPerWorker: number;

    /**
     * Specifies the maximum time, in seconds, that a conversion worker process can be unresponsive before being terminated. The default 
     * value is 120 seconds.
     */
    public workerKeepAliveTimeoutInSeconds: number;

    /**
     * Specifies the number of active instances of the conversion worker process on each back-end. This value must be less than the Windo
     * ws Communication Foundation (WCF) connection limit for this computer. The default value is 3.
     */
    public workerProcessCount: number;

    /**
     * Specifies the maximum time, in seconds, that a conversion worker process is given for any single conversion. The default is 300 se
     * conds (5 minutes).
     */
    public workerTimeoutInSeconds: number;

    /**
     * Ensure the crawl rule is Present or Absent"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run thsi resource as, use PsDscRunAsCredential if using PowerShell 5
     */
    public installAccount: DscCredential;


    constructor(name: string) {
        super();
        this.name = name;
    }
}
