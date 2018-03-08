import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPFarmAdministrators extends DscType {
    /**
     * A generic name for this resource, its value is not important
     */
    public name: string;

    /**
     * 
     */
    public members: string[][];

    /**
     * 
     */
    public membersToInclude: string[][];

    /**
     * 
     */
    public membersToExclude: string[][];

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(name: string) {
        super();
        this.name = name;
    }
}
