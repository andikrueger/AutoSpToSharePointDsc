import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPProjectServerTimeSheetSettings extends DscType {
    /**
     * The default zone URL of the Project site to set timesheet settings for
     */
    public url: string;

    /**
     * Should timesheets allow tracking of overtime and non-billable work types
     */
    public enableOvertimeAndNonBillableTracking: boolean;

    /**
     * What is the default mode for timesheets to be created in"), ValueMap{"CurrentTaskAssignments","CurrentProjects","NoPrepopulation"}
     * , Values{"CurrentTaskAssignments","CurrentProjects","NoPrepopulation
     */
    public defaultTimesheetCreationMode: {};

    /**
     * What is the default tracking unit for timesheets"), ValueMap{"Days","Weeks"}, Values{"Days","Weeks
     */
    public defaultTrackingUnit: {};

    /**
     * What is the default reporting unit for timesheets"), ValueMap{"Hours","Days"}, Values{"Hours","Days
     */
    public defaultReportingUnit: {};

    /**
     * How many hours are in a standard timesheeet day?
     */
    public hoursInStandardDay: {};

    /**
     * How many hours are in a standard timesheeet week?
     */
    public hoursInStandardWeek: {};

    /**
     * Maximum hours per timesheet
     */
    public maxHoursPerTimesheet: {};

    /**
     * Minimum hours per timesheet
     */
    public minHoursPerTimesheet: {};

    /**
     * Maximum hours per day
     */
    public maxHoursPerDay: {};

    /**
     * Allow future time reporting?
     */
    public allowFutureTimeReporting: boolean;

    /**
     * Allow new personal tasks?
     */
    public allowNewPersonalTasks: boolean;

    /**
     * Allow top-level time reporting?
     */
    public allowTopLevelTimeReporting: boolean;

    /**
     * Require task status manager approval?
     */
    public requireTaskStatusManagerApproval: boolean;

    /**
     * Require line approval before timesheet approval?
     */
    public requireLineApprovalBeforeTimesheetApproval: boolean;

    /**
     * Enable timesheet auditing?
     */
    public enableTimesheetAuditing: boolean;

    /**
     * Enable fixed approval routing?
     */
    public fixedApprovalRouting: boolean;

    /**
     * Enable single entry mode?
     */
    public singleEntryMode: boolean;

    /**
     * What is the default tracking mode for tasks?"), ValueMap{"PercentComplete","ActualDoneAndRemaining","HoursPerPeriod","FreeForm"}, 
     * Values{"PercentComplete","ActualDoneAndRemaining","HoursPerPeriod","FreeForm
     */
    public defaultTrackingMode: {};

    /**
     * Force project managers to use the specified tracking mode for each project?
     */
    public forceTrackingModeForAllProjects: boolean;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(url: string) {
        super();
        this.url = url;
    }
}
