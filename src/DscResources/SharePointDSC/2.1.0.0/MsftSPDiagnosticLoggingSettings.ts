import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPDiagnosticLoggingSettings extends DscType {
    /**
     * The physical path on each server to store ULS logs
     */
    public logPath: string;

    /**
     * The space in GB that should be used to store ULS logs
     */
    public logSpaceInGB: number;

    /**
     * Should app analytics automatically be uploaded
     */
    public appAnalyticsAutomaticUploadEnabled: boolean;

    /**
     * Should the customer experience program be enabled in this farm
     */
    public customerExperienceImprovementProgramEnabled: boolean;

    /**
     * How many days should ULS logs be kept for
     */
    public daysToKeepLogs: number;

    /**
     * Should updates to error reporting tools be automatically downloaded
     */
    public downloadErrorReportingUpdatesEnabled: boolean;

    /**
     * Should error reports be automatically uploaded
     */
    public errorReportingAutomaticUploadEnabled: boolean;

    /**
     * Should reporting of errors be enabled
     */
    public errorReportingEnabled: boolean;

    /**
     * Protect event logs with Event Log Flood Protection
     */
    public eventLogFloodProtectionEnabled: boolean;

    /**
     * What interval should the event logs report a flood event
     */
    public eventLogFloodProtectionNotifyInterval: number;

    /**
     * What quiet period should reset the event log flood protection thresholds
     */
    public eventLogFloodProtectionQuietPeriod: number;

    /**
     * What is the event log flood protection threshold
     */
    public eventLogFloodProtectionThreshold: number;

    /**
     * What is the time period that will trigger event log flood protection
     */
    public eventLogFloodProtectionTriggerPeriod: number;

    /**
     * How many minutes of activity will a ULS log file leep in an individual file
     */
    public logCutInterval: number;

    /**
     * Will the maximum disk space setting be enabled
     */
    public logMaxDiskSpaceUsageEnabled: boolean;

    /**
     * What delay will be set before script error reporting is triggered
     */
    public scriptErrorReportingDelay: number;

    /**
     * Is script error reporting enabled in this farm
     */
    public scriptErrorReportingEnabled: boolean;

    /**
     * Require users to be authenticated to allow script errors to be reported
     */
    public scriptErrorReportingRequireAuth: boolean;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(logPath: string, logSpaceInGB: number) {
        super();
        this.logPath = logPath;
        this.logSpaceInGB = logSpaceInGB;
    }
}
