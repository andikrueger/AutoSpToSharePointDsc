import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSqlServerEndpointState extends DscType {
    /**
     * The name of the SQL instance to be configured.
     */
    public instanceName: string;

    /**
     * The host name of the SQL Server to be configured. Default value is $env:COMPUTERNAME.
     */
    public serverName: string;

    /**
     * The name of the endpoint.
     */
    public name: string;

    /**
     * The state of the endpoint. Valid states are Started, Stopped or Disabled. Default value is 'Started'."), ValueMap{"Started","Stopp
     * ed","Disabled"}, Values{"Started","Stopped","Disabled
     */
    public state: {};


    constructor(instanceName: string, name: string) {
        super();
        this.instanceName = instanceName;
        this.name = name;
    }
}
