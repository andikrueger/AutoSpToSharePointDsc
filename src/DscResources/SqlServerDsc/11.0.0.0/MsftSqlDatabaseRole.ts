import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSqlDatabaseRole extends DscType {
    /**
     * If 'Present' (the default value) then the login (user) will be added to the role(s). If 'Absent' then the login (user) will be rem
     * oved from the role(s)."), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * The name of the login that will become a member, or removed as a member, of the role(s).
     */
    public name: string;

    /**
     * The host name of the SQL Server to be configured.
     */
    public serverName: string;

    /**
     * The name of the SQL instance to be configured.
     */
    public instanceName: string;

    /**
     * The database in which the login (user) and role(s) exist.
     */
    public database: string;

    /**
     * 
     */
    public role: string[][];


    constructor(name: string, serverName: string, instanceName: string, database: string) {
        super();
        this.name = name;
        this.serverName = serverName;
        this.instanceName = instanceName;
        this.database = database;
    }
}
