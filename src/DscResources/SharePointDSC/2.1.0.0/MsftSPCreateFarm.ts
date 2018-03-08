import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPCreateFarm extends DscType {
    /**
     * Name of the configuration database
     */
    public farmConfigDatabaseName: string;

    /**
     * Server that will host the configuration and admin content databases
     */
    public databaseServer: string;

    /**
     * The account to use as the main farm account"), EmbeddedInstance("MSFT_Credential
     */
    public farmAccount: DscCredential;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;

    /**
     * The passphrase to use to allow servers to join this farm"), EmbeddedInstance("MSFT_Credential
     */
    public passphrase: DscCredential;

    /**
     * The name of the admin content database
     */
    public adminContentDatabaseName: string;

    /**
     * What port will Central Admin be provisioned to - default is 9999
     */
    public centralAdministrationPort: number;

    /**
     * The authentication provider of the CentralAdministration web application"), ValueMap{"NTLM","Kerberos"}, Values{"NTLM","Kerberos
     */
    public centralAdministrationAuth: {};

    /**
     * SharePoint 2016 only - the MinRole role to enroll this server as"), ValueMap{"Application","ApplicationWithSearch","Custom","Distr
     * ibutedCache","Search","SingleServer","SingleServerFarm","WebFrontEnd","WebFrontEndWithDistributedCache"}, Values{"Application","Ap
     * plicationWithSearch","Custom","DistributedCache","Search","SingleServer","SingleServerFarm","WebFrontEnd","WebFrontEndWithDistribu
     * tedCache
     */
    public serverRole: {};


    constructor(farmConfigDatabaseName: string, databaseServer: string, farmAccount: DscCredential, passphrase: DscCredential, adminContentDatabaseName: string) {
        super();
        this.farmConfigDatabaseName = farmConfigDatabaseName;
        this.databaseServer = databaseServer;
        this.farmAccount = farmAccount;
        this.passphrase = passphrase;
        this.adminContentDatabaseName = adminContentDatabaseName;
    }
}
