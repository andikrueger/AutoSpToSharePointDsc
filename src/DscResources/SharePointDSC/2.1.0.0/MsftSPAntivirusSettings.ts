import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPAntivirusSettings extends DscType {
    /**
     * Should documents be scanned before being downloaded
     */
    public scanOnDownload: boolean;

    /**
     * Should documents be scanned on upload
     */
    public scanOnUpload: boolean;

    /**
     * Should documents that are infected be allowed to be downloaded
     */
    public allowDownloadInfected: boolean;

    /**
     * Should infected documents be handed to the AV engine to attempt cleaning
     */
    public attemptToClean: boolean;

    /**
     * What is the timeout for an AV scan in seconds
     */
    public timeoutDuration: number;

    /**
     * How many concurrent threads should the AV engine be able to run on a server
     */
    public numberOfThreads: number;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(scanOnDownload: boolean) {
        super();
        this.scanOnDownload = scanOnDownload;
    }
}
