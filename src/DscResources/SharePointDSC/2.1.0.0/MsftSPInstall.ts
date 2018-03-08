import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPInstall extends DscType {
    /**
     * The directory that contains all of the SharePoint binaries
     */
    public binaryDir: string;

    /**
     * The product key to use during the installation
     */
    public productKey: string;

    /**
     * The install directory to use in the installation, leave blank to use the setup defaults
     */
    public installPath: string;

    /**
     * The data directory to use in the installation, leave blank to use the setup defaults
     */
    public dataPath: string;

    /**
     * Present to install SharePoint. Absent is currently not supported"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};


    constructor(binaryDir: string, productKey: string) {
        super();
        this.binaryDir = binaryDir;
        this.productKey = productKey;
    }
}
