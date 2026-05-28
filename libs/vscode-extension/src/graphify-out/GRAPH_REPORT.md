# Graph Report - src  (2026-05-28)

## Corpus Check
- 31 files · ~4,891 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 173 nodes · 247 edges · 9 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f332fad6`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]

## God Nodes (most connected - your core abstractions)
1. `HttpClient` - 10 edges
2. `IProjectWizardContext` - 7 edges
3. `IWorkflowTemplate` - 6 edges
4. `isArmResourceId()` - 5 edges
5. `JwtTokenHelper` - 5 edges
6. `FuncVersion` - 5 edges
7. `ProjectLanguage` - 5 edges
8. `isSuccessResponse()` - 4 edges
9. `parseResponse()` - 4 edges
10. `IDesignerPanelMetadata` - 4 edges

## Surprising Connections (you probably didn't know these)
- `IProjectWizardContext` --references--> `FuncVersion`  [EXTRACTED]
  lib/models/project.ts → lib/models/functions.ts
- `IProjectWizardContext` --references--> `ProjectLanguage`  [EXTRACTED]
  lib/models/project.ts → lib/models/language.ts
- `IFunctionWizardContext` --references--> `IWorkflowTemplate`  [EXTRACTED]
  lib/models/functions.ts → lib/models/templates/IWorkflowTemplate.ts
- `IProjectWizardContext` --references--> `IWorkerRuntime`  [EXTRACTED]
  lib/models/project.ts → lib/models/cliFeed.ts
- `IDesignerPanelMetadata` --references--> `Artifacts`  [EXTRACTED]
  lib/models/workflow.ts → lib/models/artifact.ts

## Communities (9 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.08
Nodes (27): ICliFeed, IRelease, ITag, IWorkerRuntime, IBundleMetadata, IHostJsonV1, IHostJsonV2, IParsedHostJson (+19 more)

### Community 1 - "Community 1"
Cohesion: 0.09
Nodes (22): AgentConnectionModel, AgentMcpConnectionModel, AllCustomCodeFiles, APIManagementConnectionModel, ConnectionAcl, ConnectionAndSettings, ConnectionReferenceModel, ConnectionsData (+14 more)

### Community 2 - "Community 2"
Cohesion: 0.12
Nodes (18): Artifacts, FileDetails, IArtifactFile, IGitHubReleaseInfo, IParametersFileContent, Parameter, ParametersData, AzureConnectorDetails (+10 more)

### Community 3 - "Community 3"
Cohesion: 0.14
Nodes (17): IBundleDependencyFeed, IBundleFeed, IFunctionWizardContext, BindingSettingValue, IBindingSetting, IBindingTemplate, IEnumValue, ResourceType (+9 more)

### Community 4 - "Community 4"
Cohesion: 0.18
Nodes (11): getExtraHeaders(), HttpClient, HttpOptions, isArmResourceId(), isSuccessResponse(), isUrl(), parseResponse(), errorMessage (+3 more)

### Community 5 - "Community 5"
Cohesion: 0.11
Nodes (12): FileShare, ILaunchJson, Platform, IProcessInfo, IProcessTreeNode, ITask, ITaskInputs, ITaskOptions (+4 more)

### Community 6 - "Community 6"
Cohesion: 0.18
Nodes (4): getBaseGraphApi(), IDecodedJwtToken, JwtTokenConstants, JwtTokenHelper

### Community 7 - "Community 7"
Cohesion: 0.21
Nodes (10): azureFunctionsVersion, ICommandResult, ICreateFunctionOptions, INpmDistTag, IPackageMetadata, pathRelativeFunc, LanguageScript, ProjectLanguage (+2 more)

### Community 8 - "Community 8"
Cohesion: 0.20
Nodes (9): FetchSchemaData, InitializeData, MapDefinitionData, MessageToVsix, MessageToWebview, SchemaPathData, XsltData, ExtensionCommand (+1 more)

## Knowledge Gaps
- **96 isolated node(s):** `JwtTokenConstants`, `IDecodedJwtToken`, `httpClientOptions`, `responseData`, `options` (+91 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `JwtTokenConstants`, `IDecodedJwtToken`, `httpClientOptions` to the rest of the system?**
  _96 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.08275862068965517 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.09420289855072464 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.12380952380952381 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.1380952380952381 - nodes in this community are weakly interconnected._
- **Should `Community 5` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._