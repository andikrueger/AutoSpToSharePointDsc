export const demodata: string = `
<Configuration Environment="Environment Name" Version="3.99.60">
<Install SPVersion="2016">
    <ConfigFile>config-AutoSPInstaller.xml</ConfigFile>
    <InstallDir>InstallDir</InstallDir>
    <DataDir>DataDir</DataDir>
    <PIDKey></PIDKey>
    <SKU>Enterprise</SKU>
    <OfflineInstall>true</OfflineInstall>
    <PauseAfterInstall>false</PauseAfterInstall>
    <RemoteInstall Enable="true">
        <ParallelInstall>true</ParallelInstall>
    </RemoteInstall>
    <AutoAdminLogon Enable="true">
        <Password>Install Account Password:</Password>
    </AutoAdminLogon>
    <Disable>
        <LoopbackCheck>false</LoopbackCheck>
        <UnusedServices>false</UnusedServices>
        <IEEnhancedSecurity>true</IEEnhancedSecurity>
        <CertificateRevocationListCheck>false</CertificateRevocationListCheck>
    </Disable>
</Install>
<Farm>
    <Passphrase>FarmPassphraseFarmPassphraseFarmPassphraseFarmPassphrase123456789</Passphrase>
    <Account>
        <AddToLocalAdminsDuringSetup>true</AddToLocalAdminsDuringSetup>
        <LeaveInLocalAdmins>false</LeaveInLocalAdmins>
        <Username>CONTOSO\SP_Farm</Username>
        <Password>FarmAccountPassword</Password>
    </Account>
    <CentralAdmin Provision="SERVER1">
        <Database>Content_CentralAdmin</Database>
        <Port>2013</Port>
        <UseSSL>true</UseSSL>
    </CentralAdmin>
    <Database>
        <DBServer>DBAliasName</DBServer>
        <DBAlias Create="true">
            <DBInstance>DBServerInstace</DBInstance>
            <DBPort>1</DBPort>
        </DBAlias>
        <DBPrefix>AutoSPInstaller</DBPrefix>
        <ConfigDB>Config</ConfigDB>
    </Database>
    <Services>
        <SandboxedCodeService Start="SERVER1"/>
        <ClaimsToWindowsTokenService Start="localhost" UpdateAccount="true"/>
        <SMTP Install="localhost"/>
        <OutgoingEmail Configure="true">
            <SMTPServer>SMTPOutGoing</SMTPServer>
            <EmailAddress>sharepoint@from.com</EmailAddress>
            <ReplyToEmail>sharepoint@reply.com</ReplyToEmail>
        </OutgoingEmail>
        <IncomingEmail Start="localhost"/>
        <DistributedCache Start="SERVER1"/>
        <WorkflowTimer Start="SERVER1"/>
        <FoundationWebApplication Start="SERVER1"/>
    </Services>
    <ServerRoles>
        <Custom Provision="false"/>
        <WebFrontEnd Provision="false"/>
        <WebFrontEndWithDistributedCache Provision="SERVER1"/>
        <SingleServerFarm Provision="false"/>
        <Search Provision="false"/>
        <Application Provision="false"/>
        <ApplicationWithSearch Provision="SERVER2,SERVER3"/>
        <DistributedCache Provision="false"/>
    </ServerRoles>
    <ManagedAccounts>
        <ManagedAccount CommonName="spservice">
            <Username>CONTOSO\SP_Services</Username>
            <Password>SPServices</Password>
        </ManagedAccount>
        <ManagedAccount CommonName="Portal">
            <Username>CONTOSO\SP_PortalAppPool</Username>
            <Password>SPPortal</Password>
        </ManagedAccount>
        <ManagedAccount CommonName="MySiteHost">
            <Username>CONTOSO\SP_ProfilesAppPool</Username>
            <Password>spmysite</Password>
        </ManagedAccount>
        <ManagedAccount CommonName="SearchService">
            <Username>CONTOSO\SP_SearchService</Username>
            <Password>spsearch</Password>
        </ManagedAccount>
    </ManagedAccounts>
    <ObjectCacheAccounts>
        <SuperUser>CONTOSO\SP_CacheSuperUser</SuperUser>
        <SuperReader>CONTOSO\SP_CacheSuperReader</SuperReader>
    </ObjectCacheAccounts>
    <Logging>
        <IISLogs Compress="true">
            <Path>D:\CustomLogs\IIS</Path>
        </IISLogs>
        <ULSLogs Compress="true">
            <LogLocation>D:\CustomLogs\ULS</LogLocation>
            <LogDiskSpaceUsageGB></LogDiskSpaceUsageGB>
            <DaysToKeepLogs></DaysToKeepLogs>
            <LogCutInterval></LogCutInterval>
        </ULSLogs>
        <UsageLogs Compress="true">
            <UsageLogDir>D:\CustomLogs\Usage</UsageLogDir>
            <UsageLogMaxSpaceGB></UsageLogMaxSpaceGB>
            <UsageLogCutTime></UsageLogCutTime>
        </UsageLogs>
    </Logging>
</Farm>
<WebApplications AddURLsToHOSTS="true">
    <WebApplication Name="Portal Home">
        <Type>Portal</Type>
        <ApplicationPool>portal.contoso.com</ApplicationPool>
        <Url>http://portal.contoso.com</Url>
        <Port>80</Port>
        <UseHostHeader>false</UseHostHeader>
        <AddURLToLocalIntranetZone>true</AddURLToLocalIntranetZone>
        <GrantCurrentUserFullControl>true</GrantCurrentUserFullControl>
        <UseClaims>true</UseClaims>
        <UseBasicAuthentication>false</UseBasicAuthentication>
        <UseOnlineWebPartCatalog>false</UseOnlineWebPartCatalog>
        <Database>
            <Name>Content_Portal</Name>
            <DBServer></DBServer>
            <DBAlias Create="false">
                <DBInstance></DBInstance>
                <DBPort></DBPort>
            </DBAlias>
        </Database>
        <ManagedPaths>
            <ManagedPath relativeUrl="help" explicit="true"/>
        </ManagedPaths>
        <SiteCollections>
            <SiteCollection siteUrl="http://portal.contoso.com">
                <Name>Portal Home</Name>
                <Description>Portal Home Site</Description>
                <HostNamedSiteCollection>false</HostNamedSiteCollection>
                <Owner></Owner>
                <CustomDatabase></CustomDatabase>
                <SearchUrl>http://portal.contoso.com/search</SearchUrl>
                <Template>SPSPORTAL#0</Template>
                <LCID>1033</LCID>
                <Locale>en-us</Locale>
                <Time24>false</Time24>
            </SiteCollection>
        </SiteCollections>
    </WebApplication>
    <WebApplication Name="MySite Host">
        <Type>MySiteHost</Type>
        <ApplicationPool>mysites.contoso.com</ApplicationPool>
        <Url>http://mysites.contoso.com</Url>
        <Port>80</Port>
        <UseHostHeader>true</UseHostHeader>
        <AddURLToLocalIntranetZone>true</AddURLToLocalIntranetZone>
        <GrantCurrentUserFullControl>true</GrantCurrentUserFullControl>
        <UseClaims>true</UseClaims>
        <UseBasicAuthentication>false</UseBasicAuthentication>
        <UseOnlineWebPartCatalog>false</UseOnlineWebPartCatalog>
        <Database>
            <Name>Content_MySites</Name>
            <DBServer></DBServer>
            <DBAlias Create="false">
                <DBInstance></DBInstance>
                <DBPort></DBPort>
            </DBAlias>
        </Database>
        <ManagedPaths>
            <ManagedPath relativeUrl="personal" explicit="false"/>
        </ManagedPaths>
        <SiteCollections>
            <SiteCollection siteUrl="http://mysites.contoso.com">
                <Name>My Site Host</Name>
                <Description>My Site Host</Description>
                <HostNamedSiteCollection>false</HostNamedSiteCollection>
                <Owner></Owner>
                <CustomDatabase></CustomDatabase>
                <SearchUrl>http://portal.contoso.com/search</SearchUrl>
                <Template>SPSMSITEHOST#0</Template>
                <LCID>1033</LCID>
                <Locale>en-us</Locale>
                <Time24>false</Time24>
            </SiteCollection>
        </SiteCollections>
    </WebApplication>
</WebApplications>
<ServiceApps>
    <ManagedMetadataServiceApp Provision="localhost">
        <Name>Managed Metadata Service</Name>
        <ProxyName>Managed Metadata Service</ProxyName>
        <Database>
            <Name>MetaData</Name>
            <DBServer></DBServer>
            <DBAlias Create="false">
                <DBInstance></DBInstance>
                <DBPort></DBPort>
            </DBAlias>
        </Database>
    </ManagedMetadataServiceApp>
    <UserProfileServiceApp Provision="localhost">
        <Name>User Profile Service Application</Name>
        <ProxyName>User Profile Service Application</ProxyName>
        <MySiteHostLocation></MySiteHostLocation>
        <MySiteManagedPath>personal</MySiteManagedPath>
        <EnableNetBIOSDomainNames>false</EnableNetBIOSDomainNames>
        <StartProfileSync>true</StartProfileSync>
        <CreateDefaultSyncConnection>false</CreateDefaultSyncConnection>
        <SyncConnectionAccount>CONTOSO\SP_ProfileSync</SyncConnectionAccount>
        <SyncConnectionAccountPassword></SyncConnectionAccountPassword>
        <Database>
            <ProfileDB>Profile</ProfileDB>
            <SyncDB>Sync</SyncDB>
            <SocialDB>Social</SocialDB>
            <DBServer></DBServer>
            <DBAlias Create="false">
                <DBInstance></DBInstance>
                <DBPort></DBPort>
            </DBAlias>
        </Database>
    </UserProfileServiceApp>
    <EnterpriseSearchService Provision="localhost">
        <ContactEmail></ContactEmail>
        <ConnectionTimeout>60</ConnectionTimeout>
        <AcknowledgementTimeout>60</AcknowledgementTimeout>
        <ProxyType>Default</ProxyType>
        <IgnoreSSLWarnings>true</IgnoreSSLWarnings>
        <InternetIdentity>Mozilla/4.0 (compatible; MSIE 4.01; Windows NT; MS Search 6.0 Robot)</InternetIdentity>
        <CustomIndexLocation></CustomIndexLocation>
        <PerformanceLevel>PartlyReduced</PerformanceLevel>
        <ShareName>SearchIndex</ShareName>
        <EnterpriseSearchServiceApplications>
            <EnterpriseSearchServiceApplication Name="Search Service Application">
                <FailoverDatabaseServer></FailoverDatabaseServer>
                <Partitioned>false</Partitioned>
                <Partitions>1</Partitions>
                <SearchServiceApplicationType>Regular</SearchServiceApplicationType>
                <ContentAccessAccount>CONTOSO\SP_SearchContent</ContentAccessAccount>
                <ContentAccessAccountPassword></ContentAccessAccountPassword>
                <Database>
                    <Name>Search</Name>
                    <DBServer></DBServer>
                    <DBAlias Create="false">
                        <DBInstance></DBInstance>
                        <DBPort></DBPort>
                    </DBAlias>
                </Database>
                <ApplicationPool Name="SharePoint Search Application Pool"/>
                <CrawlComponent Provision="localhost"/>
                <QueryComponent Provision="localhost"/>
                <SearchQueryAndSiteSettingsComponent Provision="localhost"/>
                <AdminComponent Provision="localhost">
                    <ApplicationPool Name="SharePoint Search Application Pool"/>
                </AdminComponent>
                <IndexComponent Provision="localhost"/>
                <ContentProcessingComponent Provision="localhost"/>
                <AnalyticsProcessingComponent Provision="localhost"/>
                <Proxy Name="Search Service Application">
                    <Partitioned>false</Partitioned>
                    <ProxyGroup>Default</ProxyGroup>
                </Proxy>
                <SearchCenterUrl></SearchCenterUrl>
            </EnterpriseSearchServiceApplication>
        </EnterpriseSearchServiceApplications>
    </EnterpriseSearchService>
    <StateService Provision="localhost">
        <Name>State Service</Name>
        <ProxyName>State Service</ProxyName>
        <Database>
            <Name>StateService</Name>
            <DBServer></DBServer>
            <DBAlias Create="false">
                <DBInstance></DBInstance>
                <DBPort></DBPort>
            </DBAlias>
        </Database>
    </StateService>
    <WebAnalyticsService Provision="localhost">
        <Name>Web Analytics Service Application</Name>
        <Database>
            <ReportingDB>WebAnalyticsReporting</ReportingDB>
            <StagingDB>WebAnalyticsStaging</StagingDB>
            <DBServer></DBServer>
            <DBAlias Create="false">
                <DBInstance></DBInstance>
                <DBPort></DBPort>
            </DBAlias>
        </Database>
    </WebAnalyticsService>
    <SPUsageService Provision="localhost">
        <Name>Usage and Health Data Collection</Name>
        <Database>
            <Name>UsageAndHealth</Name>
            <DBServer></DBServer>
            <DBAlias Create="false">
                <DBInstance></DBInstance>
                <DBPort></DBPort>
            </DBAlias>
        </Database>
    </SPUsageService>
    <SecureStoreService Provision="localhost">
        <Name>Secure Store Service</Name>
        <ProxyName>Secure Store Service</ProxyName>
        <Database>
            <Name>SecureStore</Name>
            <DBServer></DBServer>
            <DBAlias Create="false">
                <DBInstance></DBInstance>
                <DBPort></DBPort>
            </DBAlias>
        </Database>
    </SecureStoreService>
    <BusinessDataConnectivity Provision="localhost">
        <Name>Business Data Connectivity Service</Name>
        <ProxyName>Business Data Connectivity Service</ProxyName>
        <Database>
            <Name>BusinessDataCatalog</Name>
            <DBServer></DBServer>
            <DBAlias Create="false">
                <DBInstance></DBInstance>
                <DBPort></DBPort>
            </DBAlias>
        </Database>
    </BusinessDataConnectivity>
    <WordAutomationService Provision="localhost">
        <Name>Word Automation Services</Name>
        <ProxyName>Word Automation Services</ProxyName>
        <Database>
            <Name>WordAutomation</Name>
            <DBServer></DBServer>
            <DBAlias Create="false">
                <DBInstance></DBInstance>
                <DBPort></DBPort>
            </DBAlias>
        </Database>
    </WordAutomationService>
    <AppManagementService Provision="localhost">
        <Name>App Management Service</Name>
        <ProxyName>App Management Service</ProxyName>
        <AppDomain>apps.contoso.com</AppDomain>
        <Database>
            <Name>AppManagement</Name>
            <DBServer></DBServer>
            <DBAlias Create="false">
                <DBInstance></DBInstance>
                <DBPort></DBPort>
            </DBAlias>
        </Database>
    </AppManagementService>
    <SubscriptionSettingsService Provision="localhost">
        <Name>Subscription Settings Service</Name>
        <AppSiteSubscriptionName>app</AppSiteSubscriptionName>
        <Database>
            <Name>SubscriptionSettings</Name>
            <DBServer></DBServer>
            <DBAlias Create="false">
                <DBInstance></DBInstance>
                <DBPort></DBPort>
            </DBAlias>
        </Database>
    </SubscriptionSettingsService>
    <WorkManagementService Provision="localhost">
        <Name>Work Management Service Application</Name>
        <ProxyName>Work Management Service Application</ProxyName>
    </WorkManagementService>
    <MachineTranslationService Provision="localhost">
        <Name>Machine Translation Service</Name>
        <ProxyName>Machine Translation Service</ProxyName>
        <Database>
            <Name>TranslationService</Name>
            <DBServer></DBServer>
            <DBAlias Create="false">
                <DBInstance></DBInstance>
                <DBPort></DBPort>
            </DBAlias>
        </Database>
    </MachineTranslationService>
    <PowerPointConversionService Provision="localhost">
        <Name>PowerPoint Conversion Service Application</Name>
        <ProxyName>PowerPoint Conversion Service Application</ProxyName>
    </PowerPointConversionService>
</ServiceApps>
<EnterpriseServiceApps>
    <ExcelServices Provision="false">
        <Name>Excel Services Application</Name>
        <UnattendedIDUser>CONTOSO\SP_ExcelUser</UnattendedIDUser>
        <UnattendedIDPassword></UnattendedIDPassword>
    </ExcelServices>
    <VisioService Provision="localhost">
        <Name>Visio Graphics Service</Name>
        <ProxyName>Visio Graphics Service</ProxyName>
        <UnattendedIDUser>CONTOSO\SP_VisioUser</UnattendedIDUser>
        <UnattendedIDPassword>VisioUnattended</UnattendedIDPassword>
    </VisioService>
    <AccessService Provision="localhost">
        <Name>Access 2010 Service</Name>
        <ProxyName>Access 2010 Service</ProxyName>
    </AccessService>
    <AccessServices Provision="localhost">
        <Name>Access Services</Name>
        <ProxyName>Access Services</ProxyName>
        <Database>
            <Name>AccessServices</Name>
            <DBServer></DBServer>
            <DBAlias Create="false">
                <DBInstance></DBInstance>
                <DBPort></DBPort>
            </DBAlias>
        </Database>
    </AccessServices>
    <PerformancePointService Provision="localhost">
        <Name>PerformancePoint Service</Name>
        <ProxyName>PerformancePoint Service</ProxyName>
        <UnattendedIDUser>CONTOSO\SP_PerfPointUser</UnattendedIDUser>
        <UnattendedIDPassword>PerfPointUnattended</UnattendedIDPassword>
        <Database>
            <Name>PerformancePoint</Name>
            <DBServer></DBServer>
            <DBAlias Create="false">
                <DBInstance></DBInstance>
                <DBPort></DBPort>
            </DBAlias>
        </Database>
    </PerformancePointService>
</EnterpriseServiceApps>
<OfficeWebApps Install="false">
    <ConfigFile>config-OWA-2010.xml</ConfigFile>
    <PIDKeyOWA></PIDKeyOWA>
    <ExcelService Provision="false">
        <Name>Excel Web App</Name>
        <ProxyName>Excel Web App</ProxyName>
        <UnattendedIDUser>CONTOSO\SP_ExcelUser</UnattendedIDUser>
        <UnattendedIDPassword></UnattendedIDPassword>
    </ExcelService>
    <WordViewingService Provision="false">
        <Name>Word Viewing Service</Name>
        <ProxyName>Word Viewing Service</ProxyName>
    </WordViewingService>
    <PowerPointService Provision="false">
        <Name>PowerPoint Service Application</Name>
        <ProxyName>PowerPoint Service Application</ProxyName>
    </PowerPointService>
</OfficeWebApps>
<ProjectServer Install="true">
    <ConfigFile>config-ProjectServer2013.xml</ConfigFile>
    <PIDKeyProjectServer>XXXXX-XXXXX-XXXXX-XXXXX-XXXXX</PIDKeyProjectServer>
    <ServiceApp Provision="localhost">
        <Name>Project Server Service Application</Name>
        <ProxyName>Project Server Service Application</ProxyName>
        <ManagedPath>PWA</ManagedPath>
        <ServiceAccount>CONTOSO\SP_ProjectServer</ServiceAccount>
        <ServiceAccountPassword>ProjectServerAppPool</ServiceAccountPassword>
        <Database>
            <Name>ProjectServer</Name>
            <DBServer></DBServer>
            <DBAlias Create="false">
                <DBInstance></DBInstance>
                <DBPort></DBPort>
            </DBAlias>
        </Database>
    </ServiceApp>
</ProjectServer>
<AdobePDF>
    <iFilter Install="false"/>
    <Icon Configure="true"/>
    <MIMEType Configure="true"/>
</AdobePDF>
<ForeFront Install="false">
    <ConfigFile>answerfile-ForeFront-2010.xml</ConfigFile>
</ForeFront>
</Configuration>
`;
