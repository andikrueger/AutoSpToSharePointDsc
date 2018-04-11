/* tslint:disable:no-string-literal no-console*/
import * as AutoSpXml from './types/AutoSpInstaller/Schema/XMLSchema';
import * as SharePointDsc from '../DscResources/SharePointDSC/2.1.0.0';
import * as SqlServerDsc from '../DscResources/SqlServerDsc/11.0.0.0';
import { SharePointNode } from './types/SharePointNode';
import { DscType, DscCredential, DscEnsure } from '../Dsc';
import * as xml2js from 'xml2js';

export class AutoSpToDsc {
    private configXml: string;
    private config: AutoSpXml.ConfigurationType;
    private dscConfigNodes: SharePointNode[] = new Array<SharePointNode>();
    private configurationName: string;
    private sqlAliasNames: string[];

    constructor(configXml: string) {
        this.configXml = configXml;
        let xmlParser: any = new xml2js.Parser({
            explicitArray: false,
            mergeAttrs: true
        });
        xmlParser.parseString(this.configXml, (err: {}, result: {}) => {
            if (!err) {
                this.config = (result['Configuration']) as AutoSpXml.ConfigurationType;
                this._mapToDsc();
            }
        });
    }

    /**
     * Adds an install step to the servers mentioned in provision
     * @param installStep DscType - Step to add
     * @param provision string? - Servername
     */
    private addInstallStepByProvisionTo = (installStep: DscType, provision?: string, dependsOn?: string): void => {
        let serverNames: any = this.getServersToProvisionTo(provision);
        for (let i: number = 0; i < serverNames.length; i++) {
            this.addInstallStepToServer(installStep, serverNames[i], dependsOn);
        }
    }

    /**
     * Gets the serverNames where a function has to be provisioned
     */
    private getServersToProvisionTo = (provision?: string): string[] => {
        let serverNames: any = new Array<string>();
        // provision:  true (all servers) false (no servers)
        // lo (just this server)
        // server1 server 2 (provision on these 2 servers listed)
        if (provision !== undefined) {
            switch (provision.toLowerCase()) {
                case 'single': {
                    if (this.dscConfigNodes.length > 0) {
                        serverNames.push(this.dscConfigNodes[0].serverName);
                    }
                    break;
                }
                case 'true': {
                    for (let i: number = 0; i < this.dscConfigNodes.length; i++) {
                        serverNames.push(this.dscConfigNodes[i].serverName);
                    }
                    break;
                }
                case 'false': {
                    break;
                }
                default: {
                    for (let j: number = 0; j < this.dscConfigNodes.length; j++) {
                        let serverName: any = this.dscConfigNodes[j].serverName;
                        if (serverName === provision.toLowerCase()) {
                            serverNames.push(serverName);
                        }
                    }
                }
            }
        }
        return serverNames;
    }

    /**
     * Adds an install step to all or a specific server
     * @param installStep  Install step to be added
     * @param serverName (optional) Name of the target server
     */
    private addInstallStepToServer = (installStep: DscType, serverName?: string, dependsOn?: string): void => {
        for (let i: number = 0; i < this.dscConfigNodes.length; i++) {
            let dscConfigNode: any = this.dscConfigNodes[i];
            if (serverName === undefined) {
                dscConfigNode.addStep(installStep, dependsOn);
            } else if (dscConfigNode.serverName === serverName) {
                dscConfigNode.addStep(installStep, dependsOn);
            }
        }
    }

    /**
     * Adds an install step to the first server in the collection. This enables all central resources to be
     * provisioned from a single source.
     * @param installStep  Install step to be added
     */
    private addInstallStepToFirstServer = (installStep: DscType, dependsOn?: string): void => {
        if (this.dscConfigNodes.length > 0) {
            let dscConfigNode: any = this.dscConfigNodes[0];
            dscConfigNode.addStep(installStep, dependsOn);
        }
    }

    /**
     * Extract all Servers from the AutoSPInstaller XML and create new dscNodes
     */
    private getServers = (): void => {
        let serverNames: string = '';
        serverNames += this.config.Farm.ServerRoles.Application.Provision;
        serverNames += ',';
        serverNames += this.config.Farm.ServerRoles.ApplicationWithSearch.Provision;
        serverNames += ',';
        serverNames += this.config.Farm.ServerRoles.Custom.Provision;
        serverNames += ',';
        serverNames += this.config.Farm.ServerRoles.DistributedCache.Provision;
        serverNames += ',';
        serverNames += this.config.Farm.ServerRoles.Search.Provision;
        serverNames += ',';
        serverNames += this.config.Farm.ServerRoles.SingleServerFarm.Provision;
        serverNames += ',';
        serverNames += this.config.Farm.ServerRoles.WebFrontEnd.Provision;
        serverNames += ',';
        serverNames += this.config.Farm.ServerRoles.WebFrontEndWithDistributedCache.Provision;
        serverNames += ',';
        serverNames += this.config.ServiceApps.AppManagementService.Provision;
        serverNames += ',';
        serverNames += this.config.ServiceApps.BusinessDataConnectivity.Provision;
        serverNames += ',';
        serverNames += this.config.ServiceApps.EnterpriseSearchService.Provision;
        serverNames += ',';
        serverNames += this.config.ServiceApps.MachineTranslationService.Provision;
        serverNames += ',';
        serverNames += this.config.ServiceApps.ManagedMetadataServiceApp.Provision;
        serverNames += ',';
        serverNames += this.config.ServiceApps.PowerPointConversionService.Provision;
        serverNames += ',';
        serverNames += this.config.ServiceApps.SecureStoreService.Provision;
        serverNames += ',';
        serverNames += this.config.ServiceApps.SPUsageService.Provision;
        serverNames += ',';
        serverNames += this.config.ServiceApps.StateService.Provision;
        serverNames += ',';
        serverNames += this.config.ServiceApps.SubscriptionSettingsService.Provision;
        serverNames += ',';
        serverNames += this.config.ServiceApps.UserProfileServiceApp.Provision;
        serverNames += ',';
        serverNames += this.config.ServiceApps.WebAnalyticsService.Provision;
        serverNames += ',';
        serverNames += this.config.ServiceApps.WordAutomationService.Provision;
        serverNames += ',';
        serverNames += this.config.ServiceApps.WorkManagementService.Provision;

        let servers: string[] = serverNames.split(',').filter((v, k, n) => {
            return v !== 'false' && n.indexOf(v) === k;
        });

        for (let i: number = 0; i < servers.length; i++) {
            this.dscConfigNodes.push(new SharePointNode(servers[i]));
        }
    }

    private _mapToDsc = (): void => {
        let dependsOnstring: string = '';

        this.configurationName = `${this.config.Environment}`.replace(/ /g, '');
        this.getServers();

        console.log(this.config);

        /**
         * Prerequisites
         * SPInstallRereqs
         */
        let spInstallPrereqs: SharePointDsc.MsftSPInstallPrereqs = new SharePointDsc.MsftSPInstallPrereqs(
            this.config.Install.DataDir, this.config.Install.OfflineInstall.valueOf());
        spInstallPrereqs.ensure = DscEnsure.Present;
        if (!this.config.Install.OfflineInstall.valueOf()) {
            spInstallPrereqs.appFabric = '';
            spInstallPrereqs.dotNetFx = '';
            spInstallPrereqs.iDFX = '';
            spInstallPrereqs.iDFX11 = '';
            spInstallPrereqs.installerPath = '';
            spInstallPrereqs.kB2671763 = '';
            spInstallPrereqs.kB3092423 = '';
            spInstallPrereqs.mSIPCClient = '';
            spInstallPrereqs.mSVCRT11 = '';
            spInstallPrereqs.mSVCRT14 = '';
            spInstallPrereqs.nETFX = '';
            spInstallPrereqs.oDBC = '';
            spInstallPrereqs.powerShell = '';
            spInstallPrereqs.sQLNCli = '';
            spInstallPrereqs.sync = '';
            spInstallPrereqs.sXSpath = '';
            spInstallPrereqs.wCFDataServices = '';
            spInstallPrereqs.wCFDataServices56 = '';
        }
        this.addInstallStepToServer(spInstallPrereqs);

        /**
         * SharePoint Binaries
         * SPInstall
         */
        let spInstall: SharePointDsc.MsftSPInstall = new SharePointDsc.MsftSPInstall('', this.config.Install.PIDKey);
        spInstall.ensure = DscEnsure.Present;
        if (this.config.Install.DataDir !== null && this.config.Install.DataDir !== undefined) {
            spInstall.dataPath = this.config.Install.DataDir;
        }
        this.addInstallStepToServer(spInstall);

        /**
         * SharePoint Farm and Farm Join
         * SPFarm
         */
        for (let i: number = 0; i < this.dscConfigNodes.length; i++) {
            let currentNode: SharePointNode = this.dscConfigNodes[i];

            if (this.config.Farm.Database.DBAlias.Create === true
                && this.sqlAliasNames.indexOf(this.config.Farm.Database.DBServer) !== 0) {
                let sqlFarmAlias: SqlServerDsc.MsftSqlAlias = new SqlServerDsc.MsftSqlAlias(
                    this.config.Farm.Database.DBServer,
                    this.config.Farm.Database.DBAlias.DBInstance
                );
                this.addInstallStepToServer(sqlFarmAlias, currentNode.serverName);
            }

            let spFarmJoin: SharePointDsc.MsftSPFarm = new SharePointDsc.MsftSPFarm(
                '',
                this.config.Farm.Database.ConfigDB,
                this.config.Farm.Database.DBServer,
                new DscCredential(this.config.Farm.Account.Username, this.config.Farm.Account.Password),
                new DscCredential('Passphrase', this.config.Farm.Passphrase),
                this.config.Farm.CentralAdmin.Database,
                this.config.Farm.CentralAdmin.Provision.indexOf(currentNode.serverName) > -1);
            this.addInstallStepToServer(spFarmJoin, currentNode.serverName);
        }

        /**
         * Managed Accounts
         * SPManagedAccounts
         */
        for (let j: number = 0; j < this.config.Farm.ManagedAccounts.ManagedAccount.length; j++) {
            let account: any = this.config.Farm.ManagedAccounts.ManagedAccount[j];

            let spManagedAccount: SharePointDsc.MsftSPManagedAccount = new SharePointDsc.MsftSPManagedAccount(account.CommonName as string);
            spManagedAccount.account = new DscCredential(account.Username as string, account.Password as string);
            spManagedAccount.ensure = DscEnsure.Present;
            this.addInstallStepToFirstServer(spManagedAccount);
        }

        /**
         * Web Applications
         * SPwebApplications
         */
        let webApps: AutoSpXml.ConfigurationTypeWebApplicationsTypeWebApplicationType[] = this.config.WebApplications.WebApplication;
        if (webApps !== undefined) {
            for (let k: any = 0; k < webApps.length; k++) {


                let webApp: AutoSpXml.ConfigurationTypeWebApplicationsTypeWebApplicationType = webApps[k];
                if (webApp.Database.DBAlias.Create === true &&
                    this.sqlAliasNames.indexOf(webApp.Database.Name) !== 0) {
                    let sqlFarmAlias: SqlServerDsc.MsftSqlAlias = new SqlServerDsc.MsftSqlAlias(
                        this.config.Farm.Database.DBServer,
                        this.config.Farm.Database.DBAlias.DBInstance
                    );
                    this.addInstallStepByProvisionTo(sqlFarmAlias, 'true');
                }


                let dscWebApp: SharePointDsc.MsftSPWebApplication = new SharePointDsc.MsftSPWebApplication(
                    webApp.Name,
                    webApp.ApplicationPool,
                    '',
                    webApp.Url);
                dscWebApp.databaseName = webApp.Database.Name;
                dscWebApp.databaseServer = webApp.Database.DBServer;
                this.addInstallStepToFirstServer(dscWebApp);

                if (webApp.ManagedPaths.ManagedPath !== undefined) {
                    for (let o: any = 0; o < webApp.ManagedPaths.ManagedPath.length; o++) {
                        let managedP: any = webApp.ManagedPaths.ManagedPath[o];
                        let dscManagedPath: any = new SharePointDsc.MsftSPManagedPath(
                            dscWebApp.url,
                            managedP.relativeUrl,
                            managedP.explicit,
                            false
                        );
                        this.addInstallStepToFirstServer(dscManagedPath, dscWebApp.DependanceName);
                    }
                }
                if (webApp.SiteCollections.SiteCollection !== undefined) {
                    for (let l: number = 0; l < webApp.SiteCollections.SiteCollection.length; l++) {
                        let siteColletion: any = webApp.SiteCollections.SiteCollection[l];
                        let dscSite: any = new SharePointDsc.MsftSPSite(siteColletion.siteUrl, siteColletion.Owner);
                        dscSite.language = parseInt(siteColletion.LCID, undefined);
                        dscSite.template = siteColletion.Template;
                        dscSite.description = siteColletion.Description;
                        dscSite.contentDatabase = siteColletion.CustomDatabase;
                        this.addInstallStepToFirstServer(dscSite, dscWebApp.DependanceName);
                    }
                }
            }
        }
        /**
         * Diagnostic Logging Service
         * SPDiagnosticLoggingSettings
         */
        let spDiagLog: SharePointDsc.MsftSPDiagnosticLoggingSettings = new SharePointDsc.MsftSPDiagnosticLoggingSettings('C:\ULS', 10);
        this.addInstallStepToFirstServer(spDiagLog);

        // usage Application
        let usageApp: any = this.config.ServiceApps.SPUsageService;
        if (usageApp.Provision.toLowerCase() !== 'false') {
            let spUsageService: SharePointDsc.MsftSPUsageApplication = new SharePointDsc.MsftSPUsageApplication(usageApp.Name);
            spUsageService.databaseName = usageApp.Database.Name;
            spUsageService.databaseServer = usageApp.Database.DBServer;
            spUsageService.ensure = DscEnsure.Present;
            this.addInstallStepToFirstServer(spUsageService, usageApp.Provision);

            let spUsageServiceProxy: SharePointDsc.MsftSPServiceInstance = new SharePointDsc.MsftSPServiceInstance(usageApp.Name);
            spUsageServiceProxy.ensure = DscEnsure.Present;
            this.addInstallStepByProvisionTo(spUsageServiceProxy, usageApp.Provision, spUsageService.DependanceName);
        }

        // state Service Application
        let stateApp: any = this.config.ServiceApps.StateService;
        if (stateApp.Provision.toLowerCase() !== 'false') {
            let spStateService: SharePointDsc.MsftSPStateServiceApp = new SharePointDsc.MsftSPStateServiceApp(
                stateApp.Name,
                stateApp.Database.Name);
            spStateService.databaseServer = stateApp.Database.DBServer;
            spStateService.ensure = DscEnsure.Present;
            this.addInstallStepByProvisionTo(spStateService, usageApp.Provision);
        }

        // sandboxed Code Service
        let sandboxedCodeInstance: any = this.config.Farm.Services.SandboxedCodeService;
        if (sandboxedCodeInstance.Start !== '') {
            let sandboxed: any = new SharePointDsc.MsftSPServiceInstance('Microsoft SharePoint Foundation Sandboxed Code Service');
            sandboxed.ensure = DscEnsure.Present;
            this.addInstallStepByProvisionTo(sandboxed, sandboxedCodeInstance.Start);
        }

        // claims to Windows Token
        let claimsInstance: any = this.config.Farm.Services.ClaimsToWindowsTokenService;
        if (claimsInstance.Start !== '') {
            let c2wts: any = new SharePointDsc.MsftSPServiceInstance('Claims to Windows Token Service');
            c2wts.ensure = DscEnsure.Present;
            this.addInstallStepByProvisionTo(c2wts, claimsInstance.Start);
            // todo via SPSeriveIdentity
            // if (claimsInstance.UpdateAccount) {
            //     let c2wtsAccount = new Dsc.SPSerivceIdentity
            // }
        }

        // outgoing Mail
        let outgoingMail: any = this.config.Farm.Services.OutgoingEmail;
        if (outgoingMail.Configure === true) {
            let outMail: any = new SharePointDsc.MsftSPOutgoingEmailSettings(
                '', outgoingMail.SMTPServer, outgoingMail.EmailAddress,
                outgoingMail.ReplyToEmail, '');
            this.addInstallStepToFirstServer(outMail);
        }

        // distributed Cache
        let distCache: any = this.config.Farm.Services.DistributedCache;
        if (distCache.Start !== '') {
            let distCacheService: any = new SharePointDsc.MsftSPDistributedCacheService('Distributed Cache', 1024, '', true);
            this.addInstallStepToFirstServer(distCacheService);
            let distCacheServiceInstance: any = new SharePointDsc.MsftSPServiceInstance('Distributed Cache');
            this.addInstallStepToServer(distCacheServiceInstance, distCache.Start);
        }

        let wfTimer: any = this.config.Farm.Services.WorkflowTimer;
        if (wfTimer.Start !== '') {
            let wfTimerService: any = new SharePointDsc.MsftSPServiceInstance(
                'Microsoft SharePoint Foundation Workflow Timer Service');
            wfTimerService.ensure = DscEnsure.Present;
            this.addInstallStepToServer(wfTimerService, wfTimer.Start);
        }
    }

    public toString = (): string => {
        let val: string = `
        Configuration ${this.configurationName}
        {
            Import-DscResource -ModuleName PSDesiredStateConfiguration
            Import-DscResource -ModuleName SharePointDSC
            Import-DscResource -ModuleName xWebAdministration
            Import-DscResource -ModuleName SqlServerDsc
        `;
        for (let i: number = 0; i < this.dscConfigNodes.length; i++) {
            let currentConfig: SharePointNode = this.dscConfigNodes[i];
            val += currentConfig.toString();
        }
        val += `
        }`;
        return val;
    }
}
