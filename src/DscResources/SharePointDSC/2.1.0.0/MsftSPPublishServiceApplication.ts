import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPPublishServiceApplication extends DscType {
    /**
     * The name of the service application to publish
     */
    public name: string;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;

    /**
     * Present to ensure it runs on this server, or absent to ensure it is stopped"), ValueMap{"Present","Absent"}, Values{"Present","Abs
     * ent
     */
    public ensure: {};


    constructor(name: string) {
        super();
        this.name = name;
    }
}
