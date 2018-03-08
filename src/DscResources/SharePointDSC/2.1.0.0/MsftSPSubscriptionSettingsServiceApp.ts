import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPSubscriptionSettingsServiceApp extends DscType {
    /**
     * The name of the subscription settings service app
     */
    public name: string;

    /**
     * The name of the application pool the service app runs in
     */
    public applicationPool: string;

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
