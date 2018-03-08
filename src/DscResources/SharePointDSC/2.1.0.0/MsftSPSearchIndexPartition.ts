import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPSearchIndexPartition extends DscType {
    /**
     * The number of the partition in this farm
     */
    public index: number;

    /**
     * 
     */
    public servers: string[][];

    /**
     * The directory that the index should use locally on each server to store data
     */
    public rootDirectory: string;

    /**
     * The name of the search service application
     */
    public serviceAppName: string;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(index: number, serviceAppName: string) {
        super();
        this.index = index;
        this.serviceAppName = serviceAppName;
    }
}
