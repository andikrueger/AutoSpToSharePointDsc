import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSqlAlwaysOnService extends DscType {
    /**
     * An enumerated value that describes if the SQL Server should have Always On high availability and disaster recovery (HADR) property
     *  enabled ('Present') or disabled ('Absent')."), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * The hostname of the SQL Server to be configured.
     */
    public serverName: string;

    /**
     * The name of the SQL instance to be configured.
     */
    public instanceName: string;

    /**
     * The length of time, in seconds, to wait for the service to restart. Default is 120 seconds.
     */
    public restartTimeout: number;


    constructor(ensure: {}, serverName: string, instanceName: string) {
        super();
        this.ensure = ensure;
        this.serverName = serverName;
        this.instanceName = instanceName;
    }
}
