import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPHealthAnalyzerRuleState extends DscType {
    /**
     * The name of the rule exactly as it appears in central admin
     */
    public name: string;

    /**
     * Should the rule be enabled?
     */
    public enabled: boolean;

    /**
     * What is the scope of this rule"), ValueMap{"All Servers","Any Server"}, Values{"All Servers","Any Server
     */
    public ruleScope: {};

    /**
     * How often should the rule check"), ValueMap{"Hourly","Daily","Weekly","Monthly","OnDemandOnly"}, Values{"Hourly","Daily","Weekly",
     * "Monthly","OnDemandOnly
     */
    public schedule: {};

    /**
     * Should the rule fix itself automatically
     */
    public fixAutomatically: boolean;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(name: string, enabled: boolean) {
        super();
        this.name = name;
        this.enabled = enabled;
    }
}
