import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPServiceIdentity extends DscType {
    /**
     * The name of the service instance to manage
     */
    public name: string;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsAccount if using PowerShell 5"), EmbeddedInstance("MSFT_Cred
     * ential
     */
    public installAccount: DscCredential;

    /**
     * The user name of a managed account, LocalService, LocalSystem or NetworkService that will be used to run the service
     */
    public managedAccount: string;


    constructor(name: string, managedAccount: string) {
        super();
        this.name = name;
        this.managedAccount = managedAccount;
    }
}
