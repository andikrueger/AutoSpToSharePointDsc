import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPBCSServiceApp extends DscType {
    /**
     * The name of the BCS service app
     */
    public name: string;

    /**
     * The name of the BCS service application proxy
     */
    public proxyName: string;

    /**
     * The application pool it should run in
     */
    public applicationPool: string;

    /**
     * Name of the database to create for the service app
     */
    public databaseName: string;

    /**
     * Name of the database server to host the database on
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


    constructor(name: string, applicationPool: string) {
        super();
        this.name = name;
        this.applicationPool = applicationPool;
    }
}
