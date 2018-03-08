import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPSearchFileType extends DscType {
    /**
     * The name of the file type
     */
    public fileType: string;

    /**
     * The name of the search service application
     */
    public serviceAppName: string;

    /**
     * The description of the file type
     */
    public description: string;

    /**
     * The mime type of the file type
     */
    public mimeType: string;

    /**
     * The state of the file type
     */
    public enabled: boolean;

    /**
     * Present if the file type should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(fileType: string, serviceAppName: string) {
        super();
        this.fileType = fileType;
        this.serviceAppName = serviceAppName;
    }
}
