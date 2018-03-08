import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSqlDatabasePermission extends DscType {
    /**
     * If the values should be present or absent. Valid values are 'Present' or 'Absent'."), ValueMap{"Present","Absent"}, Values{"Presen
     * t","Absent
     */
    public ensure: {};

    /**
     * The name of the database.
     */
    public database: string;

    /**
     * The name of the user that should be granted or denied the permission.
     */
    public name: string;

    /**
     * The state of the permission. Valid values are 'Grant' or 'Deny'."), ValueMap{"Grant","Deny","GrantWithGrant"}, Values{"Grant","Den
     * y","GrantWithGrant
     */
    public permissionState: {};

    /**
     * 
     */
    public permissions: string[][];

    /**
     * The host name of the SQL Server to be configured.
     */
    public serverName: string;

    /**
     * The name of the SQL instance to be configured.
     */
    public instanceName: string;


    constructor(database: string, name: string, permissionState: {}, serverName: string, instanceName: string) {
        super();
        this.database = database;
        this.name = name;
        this.permissionState = permissionState;
        this.serverName = serverName;
        this.instanceName = instanceName;
    }
}
