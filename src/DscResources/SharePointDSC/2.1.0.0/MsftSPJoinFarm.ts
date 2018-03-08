import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPJoinFarm extends DscType {
    /**
     * The name of the config database to connect to
     */
    public farmConfigDatabaseName: string;

    /**
     * The server that hosts the config database
     */
    public databaseServer: string;

    /**
     * The passphrase that should be used to join the farm") , EmbeddedInstance("MSFT_Credential
     */
    public passphrase: DscCredential;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;

    /**
     * SharePoint 2016 only - the MinRole role to enroll this server as"), ValueMap{"Application","ApplicationWithSearch","Custom","Distr
     * ibutedCache","Search","SingleServer","SingleServerFarm","WebFrontEnd","WebFrontEndWithDistributedCache"}, Values{"Application","Ap
     * plicationWithSearch","Custom","DistributedCache","Search","SingleServer","SingleServerFarm","WebFrontEnd","WebFrontEndWithDistribu
     * tedCache
     */
    public serverRole: {};


    constructor(farmConfigDatabaseName: string, databaseServer: string, passphrase: DscCredential) {
        super();
        this.farmConfigDatabaseName = farmConfigDatabaseName;
        this.databaseServer = databaseServer;
        this.passphrase = passphrase;
    }
}
