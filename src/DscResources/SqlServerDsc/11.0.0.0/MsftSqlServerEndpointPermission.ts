import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSqlServerEndpointPermission extends DscType {
    /**
     * The name of the SQL instance to be configured.
     */
    public instanceName: string;

    /**
     * The host name of the SQL Server to be configured.
     */
    public serverName: string;

    /**
     * If the permission should be present or absent. Default value is 'Present'."), ValueMap{"Present","Absent"}, Values{"Present","Abse
     * nt
     */
    public ensure: {};

    /**
     * The name of the endpoint.
     */
    public name: string;

    /**
     * The login to which permission will be set.
     */
    public principal: string;

    /**
     * The permission to set for the login. Valid value for permission are only CONNECT."), ValueMap{"CONNECT"}, Values{"CONNECT
     */
    public permission: {};


    constructor(instanceName: string, serverName: string, name: string, principal: string) {
        super();
        this.instanceName = instanceName;
        this.serverName = serverName;
        this.name = name;
        this.principal = principal;
    }
}
