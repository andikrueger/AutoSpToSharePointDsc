import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSqlServerLogin extends DscType {
    /**
     * The specified login is Present or Absent. Default is Present."), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * The name of the login.
     */
    public name: string;

    /**
     * 
     */
    public loginType: {};

    /**
     * The hostname of the SQL Server to be configured.
     */
    public serverName: string;

    /**
     * Name of the SQL instance to be configured.
     */
    public instanceName: string;

    /**
     * If LoginType is 'SqlLogin' then a PSCredential is needed for the password to the login.
     */
    public loginCredential: DscCredential;

    /**
     * Specifies if the login is required to have its password change on the next login. Only applies to SQL Logins. Default is $true.
     */
    public loginMustChangePassword: boolean;

    /**
     * Specifies if the login password is required to expire in accordance to the operating system security policy. Only applies to SQL L
     * ogins. Default is $true.
     */
    public loginPasswordExpirationEnabled: boolean;

    /**
     * Specifies if the login password is required to conform to the password policy specified in the system security policy. Only applie
     * s to SQL Logins. Default is $true.
     */
    public loginPasswordPolicyEnforced: boolean;

    /**
     * Specifies if the login is disabled. Default is $false.
     */
    public disabled: boolean;


    constructor(name: string, serverName: string, instanceName: string) {
        super();
        this.name = name;
        this.serverName = serverName;
        this.instanceName = instanceName;
    }
}
