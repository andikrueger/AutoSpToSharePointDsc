import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPConfigWizard extends DscType {
    /**
     * Present to install SharePoint. Absent is currently not supported"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * 
     */
    public databaseUpgradeDays: {}[];

    /**
     * Specify in which time frame running the Configuration Wizard is allowed
     */
    public databaseUpgradeTime: string;

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
