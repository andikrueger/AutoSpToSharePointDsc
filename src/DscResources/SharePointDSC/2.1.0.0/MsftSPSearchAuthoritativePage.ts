import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPSearchAuthoritativePage extends DscType {
    /**
     * Search Service Application Name
     */
    public serviceAppName: string;

    /**
     * Source URI for the authoritative page
     */
    public path: string;

    /**
     * Level of Authoratitive Page, values between 0.0 and 2.0
     */
    public level: {};

    /**
     * The resource will either make the page authoritative or demoted based on this value"), ValueMap{"Authoratative","Demoted"}, Values
     * {"Authoratative","Demoted
     */
    public action: {};

    /**
     * Ensure the Authoritative is Present or Absent"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5
     */
    public installAccount: DscCredential;


    constructor(serviceAppName: string, path: string) {
        super();
        this.serviceAppName = serviceAppName;
        this.path = path;
    }
}
