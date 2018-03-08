import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPTrustedIdentityTokenIssuer extends DscType {
    /**
     * Display name of the incoming claim type")] String Name;     [Key, Description("Name of the SPTrustedIdentityTokenIssuer
     */
    public name: string;

    /**
     * Description of the SPTrustedIdentityTokenIssuer
     */
    public description: string;

    /**
     * Default Realm that is passed to identity provider
     */
    public realm: string;

    /**
     * URL of the identity provider where user is redirected to for authentication
     */
    public signInUrl: string;

    /**
     * Identity claim type that uniquely identifies the user
     */
    public identifierClaim: string;

    /**
     * 
     */
    public claimsMappings: {}[];

    /**
     * Specify the thumbprint of the signing certificate, which must be located in certificate store LocalMachine\\My
     */
    public signingCertificateThumbprint: string;

    /**
     * Specify the file path to the signing certificate if it is not stored in the local certificate store already
     */
    public signingCertificateFilePath: string;

    /**
     * Present if the SPTrustedIdentityTokenIssuer should be created, or Absent if it should be removed"), ValueMap{"Present","Absent"}, 
     * Values{"Present","Absent
     */
    public ensure: {};

    /**
     * Name of a claims provider to set with this SPTrustedIdentityTokenIssuer
     */
    public claimProviderName: string;

    /**
     * Sign-out URL
     */
    public providerSignOutUri: string;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(name: string, description: string, realm: string, signInUrl: string, identifierClaim: string) {
        super();
        this.name = name;
        this.description = description;
        this.realm = realm;
        this.signInUrl = signInUrl;
        this.identifierClaim = identifierClaim;
    }
}
