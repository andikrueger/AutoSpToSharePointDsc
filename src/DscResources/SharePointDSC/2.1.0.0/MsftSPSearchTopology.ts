import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPSearchTopology extends DscType {
    /**
     * The name of the search service application for this topology
     */
    public serviceAppName: string;

    /**
     * 
     */
    public admin: string[][];

    /**
     * 
     */
    public crawler: string[][];

    /**
     * 
     */
    public contentProcessing: string[][];

    /**
     * 
     */
    public analyticsProcessing: string[][];

    /**
     * 
     */
    public queryProcessing: string[][];

    /**
     * 
     */
    public indexPartition: string[][];

    /**
     * The local directory servers will use to store the first index partition
     */
    public firstPartitionDirectory: string;

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(serviceAppName: string, firstPartitionDirectory: string) {
        super();
        this.serviceAppName = serviceAppName;
        this.firstPartitionDirectory = firstPartitionDirectory;
    }
}
