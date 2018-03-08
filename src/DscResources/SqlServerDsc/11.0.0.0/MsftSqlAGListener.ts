import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSqlAGListener extends DscType {
    /**
     * The SQL Server instance name of the primary replica.
     */
    public instanceName: string;

    /**
     * The host name or FQDN of the primary replica.
     */
    public serverName: string;

    /**
     * The name of the availability group listener, max 15 characters. This name will be used as the Virtual Computer Object (VCO).
     */
    public name: string;

    /**
     * If the availability group listener should be present or absent. Default value is 'Present'."), ValueMap{"Present","Absent"}, Value
     * s{"Present","Absent
     */
    public ensure: {};

    /**
     * The name of the availability group to which the availability group listener is or will be connected.
     */
    public availabilityGroup: string;

    /**
     * 
     */
    public ipAddress: string[][];

    /**
     * The port used for the availability group listener
     */
    public port: number;

    /**
     * If DHCP should be used for the availability group listener instead of static IP address.
     */
    public dHCP: boolean;


    constructor(instanceName: string, serverName: string, name: string, availabilityGroup: string) {
        super();
        this.instanceName = instanceName;
        this.serverName = serverName;
        this.name = name;
        this.availabilityGroup = availabilityGroup;
    }
}
