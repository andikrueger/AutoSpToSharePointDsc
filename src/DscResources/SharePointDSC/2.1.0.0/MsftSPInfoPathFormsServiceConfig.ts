import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPInfoPathFormsServiceConfig extends DscType {
    /**
     * Present ensures the settings are applied"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * True sets the InfoPath Forms Service to allow users to browse forms
     */
    public allowUserFormBrowserEnabling: boolean;

    /**
     * True sets the InfoPath Forms Service to render forms in the browser
     */
    public allowUserFormBrowserRendering: boolean;

    /**
     * Sets the maximum connection timeout in milliseconds
     */
    public maxDataConnectionTimeout: number;

    /**
     * Sets the default connection timeout in milliseconds
     */
    public defaultDataConnectionTimeout: number;

    /**
     * Sets the maximum response size in kb for the user response
     */
    public maxDataConnectionResponseSize: number;

    /**
     * True sets the InfoPath Forms Service to require SSL for its connections
     */
    public requireSslForDataConnections: boolean;

    /**
     * True sets the InfoPath Forms Service to allow embedded SQL sonnections in Forms
     */
    public allowEmbeddedSqlForDataConnections: boolean;

    /**
     * True sets the InfoPath Forms Service to allow User Defined connections
     */
    public allowUdcAuthenticationForDataConnections: boolean;

    /**
     * True sets the InfoPath Forms Service to allow Cross-Domain connections
     */
    public allowUserFormCrossDomainDataConnections: boolean;

    /**
     * Maximum number of postback allowed per session
     */
    public maxPostbacksPerSession: number;

    /**
     * Maximum number of actions that can be triggered per postback
     */
    public maxUserActionsPerPostback: number;

    /**
     * Timeout in minutes for active sessions
     */
    public activeSessionsTimeout: number;

    /**
     * Maximum size of user session data
     */
    public maxSizeOfUserFormState: number;

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
