import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSqlServerMaxDop extends DscType {
    /**
     * The name of the SQL instance to be configured.
     */
    public instanceName: string;

    /**
     * The host name of the SQL Server to be configured. Default value is $env:COMPUTERNAME.
     */
    public serverName: string;

    /**
     * When set to 'Present' then max degree of parallelism will be set to either the value in parameter MaxDop or dynamically configured
     *  when parameter DynamicAlloc is set to $true. When set to 'Absent' max degree of parallelism will be set to 0 which means no limit
     *  in number of processors used in parallel plan execution."), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * If set to $true then max degree of parallelism will be dynamically configured. When this is set parameter is set to $true, the par
     * ameter MaxDop must be set to $null or not be configured.
     */
    public dynamicAlloc: boolean;

    /**
     * A numeric value to limit the number of processors used in parallel plan execution.
     */
    public maxDop: number;

    /**
     * Specifies that the resource will only determine if a change is needed if the target node is the active host of the SQL Server inst
     * ance.
     */
    public processOnlyOnActiveNode: boolean;


    constructor(instanceName: string) {
        super();
        this.instanceName = instanceName;
    }
}
