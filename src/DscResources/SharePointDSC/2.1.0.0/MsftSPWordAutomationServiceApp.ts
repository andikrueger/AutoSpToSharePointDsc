import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPWordAutomationServiceApp extends DscType {
    /**
     * THe name of the service application
     */
    public name: string;

    /**
     * Present to ensure the app exists, absent to ensure that it does not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * The name of the application pool to run the service app in
     */
    public applicationPool: string;

    /**
     * The name of the database for the service app
     */
    public databaseName: string;

    /**
     * The name of the server that will host the database
     */
    public databaseServer: string;

    /**
     * 
     */
    public supportedFileFormats: {}[];

    /**
     * Should embedded fonts be disabled
     */
    public disableEmbeddedFonts: boolean;

    /**
     * What is the maximum amount of memory the service app should use (in MB)
     */
    public maximumMemoryUsage: number;

    /**
     * What is the recycle threshold for this service app
     */
    public recycleThreshold: number;

    /**
     * Should binary file scans be disabled
     */
    public disableBinaryFileScan: boolean;

    /**
     * How many conversion processes can be run at once
     */
    public conversionProcesses: number;

    /**
     * How frequently should new jobs be started from the queue (in minutes)
     */
    public jobConversionFrequency: number;

    /**
     * How many document conversions should be included in a single process
     */
    public numberOfConversionsPerProcess: number;

    /**
     * How long can a conversion be run before it becomes monitored
     */
    public timeBeforeConversionIsMonitored: number;

    /**
     * What is the maximum number of attempts to convert a document
     */
    public maximumConversionAttempts: number;

    /**
     * What is the maximum number of sync conversion requests for the service app
     */
    public maximumSyncConversionRequests: number;

    /**
     * How long is the keep alive timeout set to for the service app
     */
    public keepAliveTimeout: number;

    /**
     * What is the maximum time in seconds for a document conversion to be allowed to run
     */
    public maximumConversionTime: number;

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
