import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSqlServerNetwork extends DscType {
    /**
     * The host name of the SQL Server to be configured. Default value is $env:COMPUTERNAME.
     */
    public serverName: string;

    /**
     * The name of the SQL instance to be configured.
     */
    public instanceName: string;

    /**
     * The name of network protocol to be configured. Only tcp is currently supported."), ValueMap{"Tcp"}, Values{"Tcp
     */
    public protocolName: {};

    /**
     * Enables or disables the network protocol.
     */
    public isEnabled: boolean;

    /**
     * Specifies whether the SQL Server instance should use a dynamic port. Value cannot be set to 'True' if TcpPort is set to a non-empt
     * y string.
     */
    public tcpDynamicPort: boolean;

    /**
     * The TCP port(s) that SQL Server should be listening on. If the IP address should listen on more than one port, list all ports sepa
     * rated with a comma ('1433,1500,1501'). To use this parameter set TcpDynamicPorts to 'False'.
     */
    public tcpPort: string;

    /**
     * If set to $true then SQL Server and dependent services will be restarted if a change to the configuration is made. The default val
     * ue is $false.
     */
    public restartService: boolean;

    /**
     * Timeout value for restarting the SQL Server services. The default value is 120 seconds.
     */
    public restartTimeout: number;


    constructor(instanceName: string, protocolName: {}) {
        super();
        this.instanceName = instanceName;
        this.protocolName = protocolName;
    }
}
