import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSqlServiceAccount extends DscType {
    /**
     * Hostname of the SQL Server.
     */
    public serverName: string;

    /**
     * Name of the SQL instance.
     */
    public instanceName: string;

    /**
     * Type of service being managed."), ValueMap {"DatabaseEngine","SQLServerAgent","Search","IntegrationServices","AnalysisServices","R
     * eportingServices","SQLServerBrowser","NotificationServices"}, Values {"DatabaseEngine","SQLServerAgent","Search","IntegrationServi
     * ces","AnalysisServices","ReportingServices","SQLServerBrowser","NotificationServices
     */
    public serviceType: {};

    /**
     * The service account that should be used when running the service.
     */
    public serviceAccount: DscCredential;

    /**
     * Determines whether the service is automatically restarted when a change to the configuration was needed.
     */
    public restartService: boolean;

    /**
     * Forces the service account to be updated. Useful for password changes.
     */
    public force: boolean;


    constructor(serverName: string, instanceName: string, serviceType: {}, serviceAccount: DscCredential) {
        super();
        this.serverName = serverName;
        this.instanceName = instanceName;
        this.serviceType = serviceType;
        this.serviceAccount = serviceAccount;
    }
}
