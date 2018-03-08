import { DscType, DscEnsure, DscCredential} from  '../../../Dsc';

export class MsftSPSearchResultSource extends DscType {
    /**
     * The name of the result source
     */
    public name: string;

    /**
     * The name of the search service application to associate this result source with
     */
    public searchServiceAppName: string;

    /**
     * The query to pass to the provider source
     */
    public query: string;

    /**
     * The provider type to use for the result source"), ValueMap{"Exchange Search Provider","Local People Provider","Local SharePoint Pr
     * ovider","OpenSearch Provider","Remote People Provider","Remote SharePoint Provider"}, Values{"Exchange Search Provider","Local Peo
     * ple Provider","Local SharePoint Provider","OpenSearch Provider","Remote People Provider","Remote SharePoint Provider
     */
    public providerType: {};

    /**
     * The URI to connect to the remote location
     */
    public connectionUrl: string;

    /**
     * Present if the result source should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    public ensure: {};

    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    public installAccount: DscCredential;


    constructor(name: string, searchServiceAppName: string, query: string, providerType: {}) {
        super();
        this.name = name;
        this.searchServiceAppName = searchServiceAppName;
        this.query = query;
        this.providerType = providerType;
    }
}
