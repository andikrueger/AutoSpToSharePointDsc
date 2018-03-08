import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPStateServiceApp extends DscType {
    /**
     * The name of the state service app
     */
    public name: string;

    /**
     * The proxy name, if not specified will be /Name of service app/ Proxy
     */
    public proxyName: string;

    /**
     * The name of the database for the service app
     */
    public databaseName: string;

    /**
     * The name of the database server
     */
    public databaseServer: string;

    /**
     * Present if the service app should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * The database credentials for accessing the database"), EmbeddedInstance("MSFT_Credential
     */
    public databaseCredentials: DscCredential;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(name: string, databaseName: string) {
        super();
        this.name = name;
        this.databaseName = databaseName;
    }
}
