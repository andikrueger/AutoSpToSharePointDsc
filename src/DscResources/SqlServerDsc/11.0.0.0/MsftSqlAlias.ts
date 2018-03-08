import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSqlAlias extends DscType {
    /**
     * The name of Alias (e.g. svr01\\inst01).
     */
    public name: string;

    /**
     * Protocol to use when connecting. Valid values are 'TCP' or 'NP' (Named Pipes). Default value is 'TCP'."), ValueMap{"TCP","NP"}, Va
     * lues{"TCP","NP
     */
    public protocol: {};

    /**
     * The SQL Server you are aliasing (the NetBIOS name or FQDN).
     */
    public serverName: string;

    /**
     * The TCP port SQL is listening on. Only used when protocol is set to 'TCP'. Default value is port 1433.
     */
    public tcpPort: number;

    /**
     * The UseDynamicTcpPort specify that the Net-Library will determine the port dynamically. The port specified in Port number will not
     *  be used. Default value is '$false'.
     */
    public useDynamicTcpPort: boolean;

    /**
     * Determines whether the alias should be added or removed. Default value is 'Present'"), ValueMap{"Present","Absent"}, Values{"Prese
     * nt","Absent
     */
    public ensure: {};


    constructor(name: string, serverName: string) {
        super();
        this.name = name;
        this.serverName = serverName;
    }
}
