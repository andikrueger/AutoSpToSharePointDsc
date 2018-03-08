import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPSearchCrawlMapping extends DscType {
    /**
     * Search Service Application Name
     */
    public serviceAppName: string;

    /**
     * Source URI for the crawl mapping
     */
    public url: string;

    /**
     * Target URI for the crawl mapping
     */
    public target: string;

    /**
     * Ensure the crawl mapping is Present or Absent"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5
     */
    public installAccount: DscCredential;


    constructor(serviceAppName: string, url: string, target: string) {
        super();
        this.serviceAppName = serviceAppName;
        this.url = url;
        this.target = target;
    }
}
