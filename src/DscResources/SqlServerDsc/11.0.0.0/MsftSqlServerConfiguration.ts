import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSqlServerConfiguration extends DscType {
    /**
     * The hostname of the SQL Server to be configured.
     */
    public serverName: string;

    /**
     * Name of the SQL instance to be configured.
     */
    public instanceName: string;

    /**
     * The name of the SQL configuration option to be checked.
     */
    public optionName: string;

    /**
     * The desired value of the SQL configuration option.
     */
    public optionValue: number;

    /**
     * Determines whether the instance should be restarted after updating the configuration option.
     */
    public restartService: boolean;

    /**
     * The length of time, in seconds, to wait for the service to restart. Default is 120 seconds.
     */
    public restartTimeout: number;


    constructor(serverName: string, instanceName: string, optionName: string, optionValue: number) {
        super();
        this.serverName = serverName;
        this.instanceName = instanceName;
        this.optionName = optionName;
        this.optionValue = optionValue;
    }
}
