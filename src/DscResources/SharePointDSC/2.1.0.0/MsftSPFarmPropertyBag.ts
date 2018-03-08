import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPFarmPropertyBag extends DscType {
    /**
     * The key of the SPFarm property bag
     */
    public key: string;

    /**
     * Value of the SPfarm property bag
     */
    public value: string;

    /**
     * Set to present to ensure the SPfarm property exists, or absent to ensure it is removed"), ValueMap{"Present","Absent"}, Values{"Pr
     * esent","Absent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(key: string) {
        super();
        this.key = key;
    }
}
