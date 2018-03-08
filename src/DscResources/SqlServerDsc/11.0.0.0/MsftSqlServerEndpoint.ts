import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSqlServerEndpoint extends DscType {
    /**
     * The name of the endpoint.
     */
    public endpointName: string;

    /**
     * If the endpoint should be present or absent. Default values is 'Present'."), ValueMap{"Present","Absent"}, Values{"Present","Absen
     * t
     */
    public ensure: {};

    /**
     * The network port the endpoint is listening on. Default value is 5022.
     */
    public port: number;

    /**
     * The host name of the SQL Server to be configured. Default value is $env:COMPUTERNAME.
     */
    public serverName: string;

    /**
     * The name of the SQL instance to be configured.
     */
    public instanceName: string;

    /**
     * The network IP address the endpoint is listening on. Default the endpoint will listen on any valid IP address.
     */
    public ipAddress: string;


    constructor(endpointName: string, instanceName: string) {
        super();
        this.endpointName = endpointName;
        this.instanceName = instanceName;
    }
}
