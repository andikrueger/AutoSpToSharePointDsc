import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSqlRS extends DscType {
    /**
     * Name of the SQL Server Reporting Services instance to be configured.
     */
    public instanceName: string;

    /**
     * Name of the SQL Server to host the Reporting Service database.
     */
    public databaseServerName: string;

    /**
     * Name of the SQL Server instance to host the Reporting Service database.
     */
    public databaseInstanceName: string;

    /**
     * Report Server Web Service virtual directory. Optional.
     */
    public reportServerVirtualDirectory: string;

    /**
     * Report Manager/Report Web App virtual directory name. Optional.
     */
    public reportsVirtualDirectory: string;

    /**
     * 
     */
    public reportServerReservedUrl: string[][];

    /**
     * 
     */
    public reportsReservedUrl: string[][];

    /**
     * If connections to the Reporting Services must use SSL. If this parameter is not assigned a value, the default is that Reporting Se
     * rvices does not use SSL.
     */
    public useSsl: boolean;


    constructor(instanceName: string, databaseServerName: string, databaseInstanceName: string) {
        super();
        this.instanceName = instanceName;
        this.databaseServerName = databaseServerName;
        this.databaseInstanceName = databaseInstanceName;
    }
}
