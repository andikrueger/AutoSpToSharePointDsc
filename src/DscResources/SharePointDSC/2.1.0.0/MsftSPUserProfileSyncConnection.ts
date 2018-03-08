import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPUserProfileSyncConnection extends DscType {
    /**
     * The name of the connection
     */
    public name: string;

    /**
     * The name of the AD forest to read from
     */
    public forest: string;

    /**
     * The credentials to connect to Active Directory with"), EmbeddedInstance("MSFT_Credential
     */
    public connectionCredentials: DscCredential;

    /**
     * The name of the user profile service that this connection is attached to
     */
    public userProfileService: string;

    /**
     * 
     */
    public includedOUs: string[][];

    /**
     * 
     */
    public excludedOUs: string[][];

    /**
     * The specific AD server to connect to
     */
    public server: string;

    /**
     * Set to true to run the set method on every call to this resource
     */
    public force: boolean;

    /**
     * Should SSL be used for the connection
     */
    public useSSL: boolean;

    /**
     * The type of the connection - currently only Active Directory is supported"), ValueMap{"ActiveDirectory","BusinessDataCatalog"}, Va
     * lues{"ActiveDirectory","BusinessDataCatalog
     */
    public connectionType: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(name: string, forest: string, connectionCredentials: DscCredential, userProfileService: string) {
        super();
        this.name = name;
        this.forest = forest;
        this.connectionCredentials = connectionCredentials;
        this.userProfileService = userProfileService;
    }
}
