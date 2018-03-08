import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPOfficeOnlineServerBinding extends DscType {
    /**
     * The zone for this binding"), ValueMap{"Internal-HTTP","Internal-HTTPS","External-HTTP","External-HTTPS"}, Values{"Internal-HTTP","
     * Internal-HTTPS","External-HTTP","External-HTTPS
     */
    public zone: {};

    /**
     * The DNS name of the server/s that are running Office Web Apps
     */
    public dnsName: string;

    /**
     * Present ensures the binding for this zone exists, absent ensures it doesn't"), ValueMap{"Present","Absent"}, Values{"Present","Abs
     * ent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(zone: {}, dnsName: string) {
        super();
        this.zone = zone;
        this.dnsName = dnsName;
    }
}
