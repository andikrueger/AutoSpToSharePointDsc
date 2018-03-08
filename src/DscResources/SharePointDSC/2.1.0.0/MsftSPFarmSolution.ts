import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPFarmSolution extends DscType {
    /**
     * The filename of the WSP package
     */
    public name: string;

    /**
     * The full path to the WSP file
     */
    public literalPath: string;

    /**
     * 
     */
    public webApplications: string[][];

    /**
     * Present if the WSP should be deployed, or Absent if it should be removed"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     * 
     */
    public ensure: {};

    /**
     * The version of the package that is being modified
     */
    public version: string;

    /**
     * Should the solution be deployed to the farm, or just installed to the farm
     */
    public deployed: boolean;

    /**
     * What compatability level should the WSP be deployed as?"), ValueMap{"14","15","All"}, Values{"14","15","All
     */
    public solutionLevel: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(name: string, literalPath: string) {
        super();
        this.name = name;
        this.literalPath = literalPath;
    }
}
