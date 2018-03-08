import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSqlAGDatabase extends DscType {
    /**
     * 
     */
    public databaseName: string[][];

    /**
     * Hostname of the SQL Server where the primary replica of the availability group lives. If the availability group is not currently o
     * n this server, the resource will attempt to connect to the server where the primary replica lives.
     */
    public serverName: string;

    /**
     * Name of the SQL instance to be configured.
     */
    public instanceName: string;

    /**
     * The name of the availability group in which to manage the database membership(s).
     */
    public availabilityGroupName: string;

    /**
     * The path used to seed the availability group replicas. This should be a path that is accessible by all of the replicas
     */
    public backupPath: string;

    /**
     * Specifies the membership of the database(s) in the availability group. The options are: Present: The defined database(s) are added
     *  to the availability group. All other databases that may be a member of the availability group are ignored. Absent: The defined da
     * tabase(s) are removed from the availability group. All other databases that may be a member of the availability group are ignored.
     *  The default is 'Present'."), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * When used with 'Ensure = 'Present'' it ensures the specified database(s) are the only databases that are a member of the specified
     *  Availability Group. This parameter is ignored when 'Ensure' is 'Absent'.
     */
    public force: boolean;

    /**
     * If set to $true, this ensures the database owner of the database on the primary replica is the owner of the database on all second
     * ary replicas. This requires the database owner is available as a login on all replicas and that the PSDscRunAsAccount has imperson
     * ate permissions. If set to $false, the owner of the database will be the PSDscRunAsAccount. The default is '$true'
     */
    public matchDatabaseOwner: boolean;

    /**
     * Specifies that the resource will only determine if a change is needed if the target node is the active host of the SQL Server Inst
     * ance.
     */
    public processOnlyOnActiveNode: boolean;


    constructor(serverName: string, instanceName: string, availabilityGroupName: string, backupPath: string) {
        super();
        this.serverName = serverName;
        this.instanceName = instanceName;
        this.availabilityGroupName = availabilityGroupName;
        this.backupPath = backupPath;
    }
}
