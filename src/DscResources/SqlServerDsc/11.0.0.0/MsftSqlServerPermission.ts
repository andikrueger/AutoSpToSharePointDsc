import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSqlServerPermission extends DscType {
    /**
     * The name of the SQL instance to be configured.
     */
    public instanceName: string;

    /**
     * The host name of the SQL Server to be configured. Default value is $env:COMPUTERNAME.
     */
    public serverName: string;

    /**
     * If the permission should be present or absent. Default value is 'Present'."), ValueMap{"Present","Absent"}, Values{"Present","Abse
     * nt
     */
    public ensure: {};

    /**
     * The login to which permission will be set.
     */
    public principal: string;

    /**
     * 
     */
    public permission: {}[];


    constructor(instanceName: string, principal: string) {
        super();
        this.instanceName = instanceName;
        this.principal = principal;
    }
}
