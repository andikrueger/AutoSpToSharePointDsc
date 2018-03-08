import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPSearchContentSource extends DscType {
    /**
     * The name of the content source
     */
    public name: string;

    /**
     * The name of the search service app that this content source exists within
     */
    public serviceAppName: string;

    /**
     * The type of content source - currently only SharePoint, Website and File Shares are supported"), ValueMap{"SharePoint","Website","
     * FileShare"}, Values{"SharePoint","Website","FileShare
     */
    public contentSourceType: {};

    /**
     * 
     */
    public addresses: string[][];

    /**
     * Should the crawler index everything, just the first site or page, or a custom depth (applies to websites only)"), ValueMap{"CrawlE
     * verything","CrawlFirstOnly","Custom"}, Values{"CrawlEverything","CrawlFirstOnly","Custom
     */
    public crawlSetting: {};

    /**
     * Should this content source use continuous crawl (SharePoint sites only)
     */
    public continuousCrawl: boolean;

    /**
     * What is the incremental schedule for this content source"), EmbeddedInstance("MSFT_SPSearchCrawlSchedule
     */
    public incrementalSchedule: {};

    /**
     * What is the full schedule for this content source"), EmbeddedInstance("MSFT_SPSearchCrawlSchedule
     */
    public fullSchedule: {};

    /**
     * What is the priority on this content source"), ValueMap{"Normal","High"}, Values{"Normal","High
     */
    public priority: {};

    /**
     * How many pages deep should the crawler go (-1 = unlimited, website sources only)
     */
    public limitPageDepth: number;

    /**
     * How many server hops should the crawler make (-1 = unlimtied, website sources only)
     */
    public limitServerHops: number;

    /**
     * Present if the source should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * Specify true if DSC is allowed to delete and recreate a content source to apply the correct settings, otherwise false will just re
     * port errors if a change can not be applied.
     */
    public force: boolean;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(name: string, serviceAppName: string, contentSourceType: {}, crawlSetting: {}) {
        super();
        this.name = name;
        this.serviceAppName = serviceAppName;
        this.contentSourceType = contentSourceType;
        this.crawlSetting = crawlSetting;
    }
}
