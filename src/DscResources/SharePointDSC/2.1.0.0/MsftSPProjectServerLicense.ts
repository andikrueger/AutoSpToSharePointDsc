import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPProjectServerLicense extends DscType {
    /**
     * Should a Project Server license be enabled or disabled"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * What is the product key for Project Server
     */
    public productKey: string;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(ensure: {}) {
        super();
        this.ensure = ensure;
    }
}
