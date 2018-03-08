import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSqlServerRole extends DscType {
    /**
     * An enumerated value that describes if the server role is added (Present) or dropped (Absent). Default value is 'Present'."), Value
     * Map{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * 
     */
    public members: string[][];

    /**
     * 
     */
    public membersToInclude: string[][];

    /**
     * 
     */
    public membersToExclude: string[][];

    /**
     * The name of of SQL role to add or remove.
     */
    public serverRoleName: string;

    /**
     * The host name of the SQL Server to be configured.
     */
    public serverName: string;

    /**
     * The name of the SQL instance to be configured.
     */
    public instanceName: string;


    constructor(serverRoleName: string, serverName: string, instanceName: string) {
        super();
        this.serverRoleName = serverRoleName;
        this.serverName = serverName;
        this.instanceName = instanceName;
    }
}
