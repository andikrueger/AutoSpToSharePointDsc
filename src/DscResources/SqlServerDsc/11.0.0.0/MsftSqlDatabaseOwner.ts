import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSqlDatabaseOwner extends DscType {
    /**
     * The name of database to be configured.
     */
    public database: string;

    /**
     * The name of the login that will become a owner of the desired sql database.
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


    constructor(database: string, name: string) {
        super();
        this.database = database;
        this.name = name;
    }
}
