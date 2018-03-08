import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPInstallPrereqs extends DscType {
    /**
     * The full path to prerequisiteinstaller.exe
     */
    public installerPath: string;

    /**
     * Should the installer download prerequisites from the internet or not
     */
    public onlineMode: boolean;

    /**
     * The path to the Windows Server Operating System SXS source files, for use in closed environments without access to Windows Update
     */
    public sXSpath: string;

    /**
     * The path to the installer for this prerequisite (SP2013 and SP2016)
     */
    public sQLNCli: string;

    /**
     * The path to the installer for this prerequisite (SP2013 only)
     */
    public powerShell: string;

    /**
     * The path to the installer for this prerequisite (SP2013 only)
     */
    public nETFX: string;

    /**
     * The path to the installer for this prerequisite (SP2013 only)
     */
    public iDFX: string;

    /**
     * The path to the installer for this prerequisite (SP2013 and SP2016)
     */
    public sync: string;

    /**
     * The path to the installer for this prerequisite (SP2013 and SP2016)
     */
    public appFabric: string;

    /**
     * The path to the installer for this prerequisite (SP2013 and SP2016)
     */
    public iDFX11: string;

    /**
     * The path to the installer for this prerequisite (SP2013 and SP2016)
     */
    public mSIPCClient: string;

    /**
     * The path to the installer for this prerequisite (SP2013 only)
     */
    public wCFDataServices: string;

    /**
     * The path to the installer for this prerequisite (SP2013 only)
     */
    public kB2671763: string;

    /**
     * The path to the installer for this prerequisite (SP2013 and SP2016)
     */
    public wCFDataServices56: string;

    /**
     * The path to the installer for this prerequisite (SP2016 only)
     */
    public mSVCRT11: string;

    /**
     * The path to the installer for this prerequisite (SP2016 only)
     */
    public mSVCRT14: string;

    /**
     * The path to the installer for this prerequisite (SP2016 only)
     */
    public kB3092423: string;

    /**
     * The path to the installer for this prerequisite (SP2016 only)
     */
    public oDBC: string;

    /**
     * The path to the installer for this prerequisite (SP2016 only)
     */
    public dotNetFx: string;

    /**
     * Present to install the prerequisites. Absent is currently not supported"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};


    constructor(installerPath: string, onlineMode: boolean) {
        super();
        this.installerPath = installerPath;
        this.onlineMode = onlineMode;
    }
}
