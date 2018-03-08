import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPOutgoingEmailSettings extends DscType {
    /**
     * The URL of the web application. If you want to set the global settings use the Central Admin URL
     */
    public webAppUrl: string;

    /**
     * The SMTP server for outgoing mail
     */
    public sMTPServer: string;

    /**
     * The from address to put on messages
     */
    public fromAddress: string;

    /**
     * The email address that replies should be directed to
     */
    public replyToAddress: string;

    /**
     * The character set to use on messages
     */
    public characterSet: string;

    /**
     * Use TLS when connecting to the SMTP server (SharePoint 2016 only)
     */
    public useTLS: boolean;

    /**
     * The port which is used to connect to the SMTP server (SharePoint 2016 only)
     */
    public sMTPPort: number;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(webAppUrl: string, sMTPServer: string, fromAddress: string, replyToAddress: string, characterSet: string) {
        super();
        this.webAppUrl = webAppUrl;
        this.sMTPServer = sMTPServer;
        this.fromAddress = fromAddress;
        this.replyToAddress = replyToAddress;
        this.characterSet = characterSet;
    }
}
