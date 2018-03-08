import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPAccessServiceApp extends DscType {
    /**
     * The name of the service application
     */
    public name: string;

    /**
     * The name of the application pool to run the service app in
     */
    public applicationPool: string;

    /**
     * The name of the database server to host Access Services databases
     */
    public databaseServer: string;

    /**
     * Present ensures service app exists, absent ensures it is removed"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(name: string, applicationPool: string, databaseServer: string) {
        super();
        this.name = name;
        this.applicationPool = applicationPool;
        this.databaseServer = databaseServer;
    }
}
