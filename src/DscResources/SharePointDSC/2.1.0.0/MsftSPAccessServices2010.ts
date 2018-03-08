import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPAccessServices2010 extends DscType {
    /**
     * The name of the service application
     */
    public name: string;

    /**
     * The name of the application pool to run the service app in
     */
    public applicationPool: string;

    /**
     * Present ensures service app exists, absent ensures it is removed"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run thsi resource as, use PsDscRunAsCredential if using PowerShell 5
     */
    public installAccount: DscCredential;


    constructor(name: string, applicationPool: string) {
        super();
        this.name = name;
        this.applicationPool = applicationPool;
    }
}
