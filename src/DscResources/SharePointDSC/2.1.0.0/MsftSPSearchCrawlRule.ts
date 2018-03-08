import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPSearchCrawlRule extends DscType {
    /**
     * The name of the search service application
     */
    public path: string;

    /**
     * The name of the search service application
     */
    public serviceAppName: string;

    /**
     * Authentication type used by the crawl rule"), ValueMap{"DefaultRuleAccess","BasicAccountRuleAccess","CertificateRuleAccess","NTLMA
     * ccountRuleAccess","FormRuleAccess","CookieRuleAccess","AnonymousAccess"}, Values{"DefaultRuleAccess","BasicAccountRuleAccess","Cer
     * tificateRuleAccess","NTLMAccountRuleAccess","FormRuleAccess","CookieRuleAccess","AnonymousAccess
     */
    public authenticationType: {};

    /**
     * The type of the rule"), ValueMap{"InclusionRule","ExclusionRule"}, Values{"InclusionRule","ExclusionRule
     */
    public ruleType: {};

    /**
     * 
     */
    public crawlConfigurationRules: {}[];

    /**
     * The credentials used for this crawl rule (used for types BasicAccountRuleAccess and NTLMAccountRuleAccess)"), EmbeddedInstance("MS
     * FT_Credential
     */
    public authenticationCredentials: DscCredential;

    /**
     * The certificate used for this crawl rule (used for type CertificateRuleAccess)
     */
    public certificateName: string;

    /**
     * Present if the crawl rule should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(path: string, serviceAppName: string) {
        super();
        this.path = path;
        this.serviceAppName = serviceAppName;
    }
}
