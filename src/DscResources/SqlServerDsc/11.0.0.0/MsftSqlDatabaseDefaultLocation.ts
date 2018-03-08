import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSqlDatabaseDefaultLocation extends DscType {
    /**
     * The host name of the SQL Server to be configured.
     */
    public serverName: string;

    /**
     * The name of the SQL instance to be configured.
     */
    public instanceName: string;

    /**
     * The type of database default location to be configured. { Data | Log | Backup }"), ValueMap{"Data","Log","Backup"}, Values{"Data",
     * "Log","Backup
     */
    public type: {};

    /**
     * The path to the default directory to be configured.
     */
    public path: string;

    /**
     * If set to $true then SQL Server and dependent services will be restarted if a change to the default location is made.  The defaul 
     * value is $false.
     */
    public restartService: boolean;

    /**
     * Specifies that the resource will only determine if a change is needed if the target node is the active host of the SQL Server Inst
     * ance.
     */
    public processOnlyOnActiveNode: boolean;


    constructor(serverName: string, instanceName: string, type: {}, path: string) {
        super();
        this.serverName = serverName;
        this.instanceName = instanceName;
        this.type = type;
        this.path = path;
    }
}
