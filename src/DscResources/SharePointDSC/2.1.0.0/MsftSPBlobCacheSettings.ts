import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPBlobCacheSettings extends DscType {
    /**
     * The URL of the web application
     */
    public webAppUrl: string;

    /**
     * The zone of the web application for which blob cache has to be configured"), ValueMap{"Default","Intranet","Internet","Custom","Ex
     * tranet"}, Values{"Default","Intranet","Internet","Custom","Extranet
     */
    public zone: {};

    /**
     * Specify if the blob cache has to be enabled
     */
    public enableCache: boolean;

    /**
     * The location where the blob cache has to store its files
     */
    public location: string;

    /**
     * The maximum size (in GB) of disk space the blob cache is allowed to use
     */
    public maxSizeInGB: number;

    /**
     * The maximum age (in seconds) that a browser caches a blob
     */
    public maxAgeInSeconds: number;

    /**
     * Specify the file types that must be stored by the blob cache
     */
    public fileTypes: string;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(webAppUrl: string, zone: {}, enableCache: boolean) {
        super();
        this.webAppUrl = webAppUrl;
        this.zone = zone;
        this.enableCache = enableCache;
    }
}
