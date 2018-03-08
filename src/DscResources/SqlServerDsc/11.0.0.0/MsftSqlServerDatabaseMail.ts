import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSqlServerDatabaseMail extends DscType {
    /**
     * Specifies the desired state of the Database Mail. When set to 'Present', the Database Mail will be created. When set to 'Absent', 
     * the Database Mail will be removed. Default value is 'Present'."), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * The hostname of the SQL Server to be configured. Defaults to $env:COMPUTERNAME.
     */
    public serverName: string;

    /**
     * The name of the SQL instance to be configured.
     */
    public instanceName: string;

    /**
     * The name of the Database Mail account.
     */
    public accountName: string;

    /**
     * The e-mail address from which mail will originate.
     */
    public emailAddress: string;

    /**
     * The fully qualified domain name of the mail server name to which e-mail are sent.
     */
    public mailServerName: string;

    /**
     * The profile name of the Database Mail.
     */
    public profileName: string;

    /**
     * The display name of the outgoing mail server. Default value is the same value assigned to parameter MailServerName.
     */
    public displayName: string;

    /**
     * The e-mail address to which the receiver of e-mails will reply to. Default value is the same e-mail address assigned to parameter 
     * EmailAddress.
     */
    public replyToAddress: string;

    /**
     * The description of the Database Mail.
     */
    public description: string;

    /**
     * The logging level that the Database Mail will use. If not specified the default logging level is 'Extended'."), ValueMap{"Normal",
     * "Extended","Verbose"}, Values{"Normal","Extended","Verbose
     */
    public loggingLevel: {};

    /**
     * The TCP port used for communication. Default value is port 25.
     */
    public tcpPort: number;


    constructor(instanceName: string, accountName: string, emailAddress: string, mailServerName: string, profileName: string) {
        super();
        this.instanceName = instanceName;
        this.accountName = accountName;
        this.emailAddress = emailAddress;
        this.mailServerName = mailServerName;
        this.profileName = profileName;
    }
}
