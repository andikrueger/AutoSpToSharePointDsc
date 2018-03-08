import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPDatabaseAAG extends DscType {
    /**
     * The name of the database to put in the AlwaysOn group
     */
    public databaseName: string;

    /**
     * Name of the AlwaysOn group on the SQL server - this must already exist
     */
    public aGName: string;

    /**
     * The fileshare to use for the SQL backup when adding to the group
     */
    public fileShare: string;

    /**
     * Present if the database should be in this AlwaysOn group, or Absent if it should not be in the group"), ValueMap{"Present","Absent
     * "}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(databaseName: string, aGName: string) {
        super();
        this.databaseName = databaseName;
        this.aGName = aGName;
    }
}
