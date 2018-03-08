import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPSearchCrawlerImpactRule extends DscType {
    /**
     * Search Service Application Name
     */
    public serviceAppName: string;

    /**
     * The Site for the crawl impact rule
     */
    public name: string;

    /**
     * The RequestLimit setting for the crawl impact rule
     */
    public requestLimit: number;

    /**
     * The WaitTime setting for the crawl impact rule
     */
    public waitTime: number;

    /**
     * Ensure the crawl rule is Present or Absent"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5
     */
    public installAccount: DscCredential;


    constructor(serviceAppName: string, name: string) {
        super();
        this.serviceAppName = serviceAppName;
        this.name = name;
    }
}
