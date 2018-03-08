import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSqlDatabase extends DscType {
    /**
     * An enumerated value that describes if the database is added (Present) or dropped (Absent). Valid values are 'Present' or 'Absent'.
     *  Default Value is 'Present'."), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * The name of the SQL database.
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
     * The name of the SQL collation to use for the new database. Defaults to server collation.
     */
    public collation: string;


    constructor(name: string, serverName: string, instanceName: string) {
        super();
        this.name = name;
        this.serverName = serverName;
        this.instanceName = instanceName;
    }
}
