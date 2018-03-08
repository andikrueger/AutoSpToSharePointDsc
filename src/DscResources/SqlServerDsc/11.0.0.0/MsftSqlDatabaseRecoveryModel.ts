import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSqlDatabaseRecoveryModel extends DscType {
    /**
     * The recovery model to use for the database."), ValueMap{"Full","Simple","BulkLogged"}, Values{"Full","Simple","BulkLogged
     */
    public recoveryModel: {};

    /**
     * The host name of the SQL Server to be configured.
     */
    public serverName: string;

    /**
     * The name of the SQL instance to be configured.
     */
    public instanceName: string;

    /**
     * The SQL database name
     */
    public name: string;


    constructor(recoveryModel: {}, serverName: string, instanceName: string, name: string) {
        super();
        this.recoveryModel = recoveryModel;
        this.serverName = serverName;
        this.instanceName = instanceName;
        this.name = name;
    }
}
