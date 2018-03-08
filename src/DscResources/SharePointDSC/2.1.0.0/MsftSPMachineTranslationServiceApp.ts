import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPMachineTranslationServiceApp extends DscType {
    /**
     * Specifies the name of the service application.
     */
    public name: string;

    /**
     * The proxy name, if not specified will be /Name of service app/ Proxy
     */
    public proxyName: string;

    /**
     * Specifies the name of the database for the service application.
     */
    public databaseName: string;

    /**
     * Specifies the name of the database server for the service application.
     */
    public databaseServer: string;

    /**
     * Specifies the application pool to use with the service application.
     */
    public applicationPool: string;

    /**
     * Present ensures service app exists, absent ensures it is removed"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5
     */
    public installAccount: DscCredential;


    constructor(name: string, databaseName: string, databaseServer: string, applicationPool: string) {
        super();
        this.name = name;
        this.databaseName = databaseName;
        this.databaseServer = databaseServer;
        this.applicationPool = applicationPool;
    }
}
