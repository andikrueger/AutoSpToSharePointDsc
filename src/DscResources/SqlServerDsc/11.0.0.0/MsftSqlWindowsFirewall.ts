import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSqlWindowsFirewall extends DscType {
    /**
     * An enumerated value that describes if the SQL firewall rules are is expected to be enabled on the machine.\nPresent {default}  \nA
     * bsent   \n"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * UNC path to the root of the source files for installation.
     */
    public sourcePath: string;

    /**
     * SQL features to enable firewall rules for.
     */
    public features: string;

    /**
     * SQL instance to enable firewall rules for.
     */
    public instanceName: string;

    /**
     * Credentials used to access the path set in the parameter 'SourcePath'.
     */
    public sourceCredential: DscCredential;


    constructor(features: string, instanceName: string) {
        super();
        this.features = features;
        this.instanceName = instanceName;
    }
}
