import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSqlServerReplication extends DscType {
    /**
     * SQL Server instance name where replication distribution will be configured
     */
    public instanceName: string;

    /**
     * 
     */
    public ensure: {};

    /**
     * 
     */
    public distributorMode: {};

    /**
     * Distributor administration link password
     */
    public adminLinkCredentials: DscCredential;

    /**
     * Distribution database name
     */
    public distributionDBName: string;

    /**
     * Distributor server name if configuring publisher with remote distributor
     */
    public remoteDistributor: string;

    /**
     * Publisher working directory
     */
    public workingDirectory: string;

    /**
     * Publisher security mode
     */
    public useTrustedConnection: boolean;

    /**
     * Force flag for uninstall procedure
     */
    public uninstallWithForce: boolean;


    constructor(instanceName: string, distributorMode: {}, adminLinkCredentials: DscCredential, workingDirectory: string) {
        super();
        this.instanceName = instanceName;
        this.distributorMode = distributorMode;
        this.adminLinkCredentials = adminLinkCredentials;
        this.workingDirectory = workingDirectory;
    }
}
