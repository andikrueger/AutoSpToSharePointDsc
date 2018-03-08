import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSqlSetup extends DscType {
    /**
     * The action to be performed. Default value is 'Install'."), ValueMap{"Install","InstallFailoverCluster","AddNode","PrepareFailoverC
     * luster","CompleteFailoverCluster"}, Values{"Install","InstallFailoverCluster","AddNode","PrepareFailoverCluster","CompleteFailover
     * Cluster
     */
    public action: {};

    /**
     * The path to the root of the source files for installation. I.e and UNC path to a shared resource. Environment variables can be use
     * d in the path.
     */
    public sourcePath: string;

    /**
     * Credentials used to access the path set in the parameter 'SourcePath'.
     */
    public sourceCredential: DscCredential;

    /**
     * Suppresses reboot.
     */
    public suppressReboot: boolean;

    /**
     * Forces reboot.
     */
    public forceReboot: boolean;

    /**
     * SQL features to be installed.
     */
    public features: string;

    /**
     * Name of the SQL instance to be installed.
     */
    public instanceName: string;

    /**
     * SQL instance ID, if different from InstanceName.
     */
    public instanceID: string;

    /**
     * Product key for licensed installations.
     */
    public productKey: string;

    /**
     * Enabled updates during installation.
     */
    public updateEnabled: string;

    /**
     * Path to the source of updates to be applied during installation.
     */
    public updateSource: string;

    /**
     * Enable customer experience reporting.
     */
    public sQMReporting: string;

    /**
     * Enable error reporting.
     */
    public errorReporting: string;

    /**
     * Installation path for shared SQL files.
     */
    public installSharedDir: string;

    /**
     * Installation path for x86 shared SQL files.
     */
    public installSharedWOWDir: string;

    /**
     * Installation path for SQL instance files.
     */
    public instanceDir: string;

    /**
     * Service account for the SQL service.
     */
    public sQLSvcAccount: DscCredential;

    /**
     * Service account for the SQL Agent service.
     */
    public agtSvcAccount: DscCredential;

    /**
     * Collation for SQL.
     */
    public sQLCollation: string;

    /**
     * 
     */
    public sQLSysAdminAccounts: string[][];

    /**
     * Security mode to apply to the SQL Server instance.
     */
    public securityMode: string;

    /**
     * SA password, if SecurityMode is set to 'SQL'.
     */
    public sAPwd: DscCredential;

    /**
     * Root path for SQL database files.
     */
    public installSQLDataDir: string;

    /**
     * Path for SQL database files.
     */
    public sQLUserDBDir: string;

    /**
     * Path for SQL log files.
     */
    public sQLUserDBLogDir: string;

    /**
     * Path for SQL TempDB files.
     */
    public sQLTempDBDir: string;

    /**
     * Path for SQL TempDB log files.
     */
    public sQLTempDBLogDir: string;

    /**
     * Path for SQL backup files.
     */
    public sQLBackupDir: string;

    /**
     * Service account for the Full Text service.
     */
    public fTSvcAccount: DscCredential;

    /**
     * Service account for Reporting Services service.
     */
    public rSSvcAccount: DscCredential;

    /**
     * Service account for Analysis Services service.
     */
    public aSSvcAccount: DscCredential;

    /**
     * Collation for Analysis Services.
     */
    public aSCollation: string;

    /**
     * 
     */
    public aSSysAdminAccounts: string[][];

    /**
     * Path for Analysis Services data files.
     */
    public aSDataDir: string;

    /**
     * Path for Analysis Services log files.
     */
    public aSLogDir: string;

    /**
     * Path for Analysis Services backup files.
     */
    public aSBackupDir: string;

    /**
     * Path for Analysis Services temp files.
     */
    public aSTempDir: string;

    /**
     * Path for Analysis Services config.
     */
    public aSConfigDir: string;

    /**
     * The server mode for SQL Server Analysis Services instance. The default is to install in Multidimensional mode. Valid values in a c
     * luster scenario are MULTIDIMENSIONAL or TABULAR. Parameter ASServerMode is case-sensitive. All values must be expressed in upper c
     * ase."), ValueMap{"MULTIDIMENSIONAL", "TABULAR", "POWERPIVOT"}, Values{"MULTIDIMENSIONAL", "TABULAR", "POWERPIVOT
     */
    public aSServerMode: {};

    /**
     * Service account for Integration Services service.
     */
    public iSSvcAccount: DscCredential;

    /**
     * Specifies the startup mode for SQL Server Browser service."), ValueMap{"Automatic", "Disabled", "Manual"}, Values{"Automatic", "Di
     * sabled", "Manual
     */
    public browserSvcStartupType: {};

    /**
     * The name of the resource group to create for the clustered SQL Server instance. Default is 'SQL Server (InstanceName)'.
     */
    public failoverClusterGroupName: string;

    /**
     * 
     */
    public failoverClusterIPAddress: string[][];

    /**
     * Host name to be assigned to the clustered SQL Server instance.
     */
    public failoverClusterNetworkName: string;

    /**
     * The timeout, in seconds, to wait for the setup process to finish. Default value is 7200 seconds (2 hours). If the setup process do
     * es not finish before this time, and error will be thrown.
     */
    public setupProcessTimeout: number;


    constructor(instanceName: string) {
        super();
        this.instanceName = instanceName;
    }
}
