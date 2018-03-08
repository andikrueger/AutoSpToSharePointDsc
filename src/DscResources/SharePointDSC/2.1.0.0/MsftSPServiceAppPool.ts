import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPServiceAppPool extends DscType {
    /**
     * The name of application pool
     */
    public name: string;

    /**
     * The name of the managed account to run this service account as
     */
    public serviceAccount: string;

    /**
     * Present if the service app pool should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(name: string, serviceAccount: string) {
        super();
        this.name = name;
        this.serviceAccount = serviceAccount;
    }
}
