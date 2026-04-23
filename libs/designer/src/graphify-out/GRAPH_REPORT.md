# Graph Report - src  (2026-04-23)

## Corpus Check
- 700 files · ~406,190 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2410 nodes · 3375 edges · 40 communities detected
- Extraction: 73% EXTRACTED · 27% INFERRED · 0% AMBIGUOUS · INFERRED: 910 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

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
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 60|Community 60]]
- [[_COMMUNITY_Community 63|Community 63]]
- [[_COMMUNITY_Community 67|Community 67]]
- [[_COMMUNITY_Community 70|Community 70]]
- [[_COMMUNITY_Community 77|Community 77]]
- [[_COMMUNITY_Community 78|Community 78]]

## God Nodes (most connected - your core abstractions)
1. `getReactQueryClient()` - 56 edges
2. `getOperationSettings()` - 52 edges
3. `isNullOrUndefined()` - 32 edges
4. `render()` - 28 edges
5. `initializeOperationDetails()` - 27 edges
6. `getOperationManifest()` - 21 edges
7. `getOperationSettingFromManifest()` - 20 edges
8. `getConnectorWithSwagger()` - 18 edges
9. `isSettingSupportedFromOperationManifest()` - 18 edges
10. `initializeOperationDetailsForManifest()` - 17 edges

## Surprising Connections (you probably didn't know these)
- `getRepetitionName()` --calls--> `getAllParentsForNode()`  [INFERRED]
  src/lib/ui/common/LoopsPager/helper.ts → src/lib/core/utils/graph.ts
- `usePanelTabs()` --calls--> `useSettingValidationErrors()`  [INFERRED]
  src/lib/ui/panel/nodeDetailsPanel/usePanelTabs.tsx → src/lib/core/state/setting/settingSelector.ts
- `createOrUpdateAgentParameter()` --calls--> `createLiteralValueSegment()`  [INFERRED]
  src/lib/ui/panel/nodeDetailsPanel/tabs/parametersTab/index.tsx → src/lib/core/utils/parameters/segment.ts
- `isNullOrUndefined()` --calls--> `isValueSegment()`  [INFERRED]
  src/lib/ui/panel/nodeDetailsPanel/tabs/parametersTab/connectionInline.tsx → src/lib/core/utils/parameters/segment.ts
- `getReactQueryClient()` --calls--> `resetQueriesOnUpdateServers()`  [INFERRED]
  src/lib/core/ReactQueryProvider.tsx → src/lib/core/mcp/utils/queries.ts

## Communities

### Community 0 - "Community 0"
Cohesion: 0.01
Nodes (126): useOutputParameters(), useIsAgentSubGraph(), AzureResourceSelection(), BJSWorkflowProvider(), BrowseView(), CanvasFinder(), CodeViewTab(), CollapsedNode() (+118 more)

### Community 1 - "Community 1"
Cohesion: 0.02
Nodes (152): addCastToExpression(), addFoldingCastToExpression(), concatenateAndInterpolateExpressions(), foldWithConcat(), getCastingTemplate(), shouldCastTokenSegment(), updateAgentParametersForConnection(), deleteCustomCodeInfo() (+144 more)

### Community 2 - "Community 2"
Cohesion: 0.02
Nodes (96): addDefaultSecureSettings(), addTokensAndVariables(), getNonDuplicateId(), initializeOperationDetails(), initializeSubgraphFromManifest(), tryGetMostRecentlyUsedConnectionId(), trySetDefaultConnectionForNode(), createNodeData() (+88 more)

### Community 3 - "Community 3"
Cohesion: 0.02
Nodes (69): getWorkflowResourcesInTemplate(), useExistingWorkflowNamesOfResource(), CloneReviewList(), useCloneStrings(), CloneWizard(), ConfigureLogicApps(), useCloneWorkflowItem(), useSourceItems() (+61 more)

### Community 4 - "Community 4"
Cohesion: 0.03
Nodes (71): renderComponent(), clearConnectionCaches(), getConnection(), getConnectionFromResource(), getConnectionsForConnector(), getConnectionsQuery(), getConnectorWithSwagger(), getSwaggerForConnector() (+63 more)

### Community 5 - "Community 5"
Cohesion: 0.03
Nodes (67): AddServerButtons(), AppInsightsSelector(), validateAvailability(), AppPlanSelector(), validateAvailability(), useAllActions(), useAllConnectors(), useAllOperations() (+59 more)

### Community 6 - "Community 6"
Cohesion: 0.05
Nodes (76): isRootNode(), deletePropertyValueWithSpecifiedPathSegment(), encodePathValue(), getAndEscapeSegment(), getExtraSegments(), getPropertyValueWithSpecifiedPathSegments(), reduceRedundantSegments(), transformInputParameter() (+68 more)

### Community 7 - "Community 7"
Cohesion: 0.03
Nodes (32): renderComponent(), renderComponent(), createMockStore(), renderComponent(), renderBasicsTab(), basicsTab(), renderComponent(), render() (+24 more)

### Community 8 - "Community 8"
Cohesion: 0.05
Nodes (51): getAllParametersForWorkflows(), getConnectionsForConsumption(), getConnectionsForStandard(), getDefinitionAndUsedConnectionMappings(), getFeaturedConnectorsForWorkflows(), getTemplateConnections(), getTemplateParameters(), getUpdatedTemplateManifest() (+43 more)

### Community 9 - "Community 9"
Cohesion: 0.07
Nodes (49): addAgentToolToWorkflow(), addChildEdge(), addChildNode(), addMcpServerToWorkflow(), addNodeToWorkflow(), addSwitchCaseToWorkflow(), createSubgraphNode(), handleExtraScopeNodeSetup() (+41 more)

### Community 10 - "Community 10"
Cohesion: 0.05
Nodes (44): autoCreateConnectionIfPossible(), connectorHasMultiAuth(), getApiHubAuthentication(), getApiHubAuthenticationIfRequired(), getConnectionId(), getConnectionMappingForNode(), getConnectionProperties(), getConnectionPropertiesIfRequired() (+36 more)

### Community 11 - "Community 11"
Cohesion: 0.04
Nodes (33): useLegacyWorkflowParameters(), EditOperationPanel(), useAllInputErrors(), useAllSettingErrors(), useHostCheckerErrors(), useNumConnectionErrors(), useNumFlowErrors(), useNumHostCheckerErrors() (+25 more)

### Community 12 - "Community 12"
Cohesion: 0.11
Nodes (53): operationSupportsSplitOn(), areRequestOptionsSupported(), areTrackedPropertiesSupported(), getAsynchronous(), getConcurrency(), getConditionExpressions(), getCorrelationSettings(), getCount() (+45 more)

### Community 13 - "Community 13"
Cohesion: 0.07
Nodes (36): AboutTab(), useAllowUserToChangeConnection(), useConnectorDescription(), useConnectorDocumentation(), useConnectorEnvironmentBadge(), useConnectorName(), useConnectorStatusBadge(), useIsConnectionRequired() (+28 more)

### Community 14 - "Community 14"
Cohesion: 0.05
Nodes (26): getTriggerNodeManifest(), CanvasSizeMonitor(), CollapseExpandControl(), DragPanMonitor(), convertWorkflowGraphToElkGraph(), createSharedEdge(), useLayout(), createElkEdge() (+18 more)

### Community 15 - "Community 15"
Cohesion: 0.06
Nodes (25): String(), useSelectedConnection(), buildPropertiesToUpdate(), extractErrorInfo(), getMonitoringError(), getMonitoringTabError(), getRepetitionName(), getScopeRepetitionName() (+17 more)

### Community 16 - "Community 16"
Cohesion: 0.05
Nodes (29): AssertionsPanel(), getConditionExpression(), getValueSegmentFromToken(), useTokens(), convertDesignerWorkflowToConsumptionWorkflow(), getConsumptionWorkflowPayloadForCreate(), replaceAllStringInWorkflowDefinition(), replaceWorkflowIdentifier() (+21 more)

### Community 17 - "Community 17"
Cohesion: 0.06
Nodes (13): ApiConnectionInputsBinder, ApiConnectionOutputsBinder, buildBoundParameter(), getParameterDisplayName(), makeBoundParameter(), _makeBoundParameters(), _makeOptionalBoundParameter(), makeReducer() (+5 more)

### Community 18 - "Community 18"
Cohesion: 0.09
Nodes (18): ConnectionsList(), CreateWorkflowPanel(), copyAndSort(), MultiWorkflowBasics(), getConnector(), useExistingWorkflowNames(), onSelectTemplate(), onSelect() (+10 more)

### Community 19 - "Community 19"
Cohesion: 0.08
Nodes (14): checkWorkflowNameWithRegex(), async(), SummaryPanel(), getWorkflowAndManifest(), isMultiWorkflowTemplate(), loadTemplateFromResourcePath(), loadWorkflowsDataInTemplate(), loadWorkflowTemplate() (+6 more)

### Community 20 - "Community 20"
Cohesion: 0.19
Nodes (2): ValueSegmentConvertor, UncastingUtility

### Community 21 - "Community 21"
Cohesion: 0.12
Nodes (6): clearPendingFoundryUpdate(), consumeVersionRefresh(), getPendingFoundryUpdate(), canDropItem(), getDownstreamDependencies(), MockHttpClient

### Community 22 - "Community 22"
Cohesion: 0.17
Nodes (10): createOrUpdateConnection(), getAllConnectionParameters(), getConnectionParametersForEdit(), getCosmosDbConnectionParameters(), getOpenAIConnectionParameters(), CreateConnectionPanel(), CreateConnection(), useShouldEnableAPIMGatewayConnection() (+2 more)

### Community 23 - "Community 23"
Cohesion: 0.26
Nodes (7): findConnectionsParamContainer(), findInput(), findLegacyMultiAuth(), findMultiAuthInput(), findParameterComponents(), findParameterSetsDropdown(), findTenantPicker()

### Community 24 - "Community 24"
Cohesion: 0.22
Nodes (3): useDefaultSettingsItems(), useLocation(), useSubscription()

### Community 25 - "Community 25"
Cohesion: 0.33
Nodes (3): CombineInitializeVariableDialog(), useIsCombineVariableModalOpen(), useResolveCombineVariable()

### Community 27 - "Community 27"
Cohesion: 0.4
Nodes (1): DefaultSearchOperationsService

### Community 28 - "Community 28"
Cohesion: 0.47
Nodes (3): getOperationsGroupedByReferences(), useConnectionReference(), useOperationNodeIds()

### Community 32 - "Community 32"
Cohesion: 0.4
Nodes (2): CreateAppPanel(), useCreateAppPanelTabs()

### Community 35 - "Community 35"
Cohesion: 0.6
Nodes (3): handleKeyDown(), handleUpdateManifest(), onOptionSelect()

### Community 37 - "Community 37"
Cohesion: 0.5
Nodes (2): downloadDocumentAsFile(), _formatResponseToMarkdown()

### Community 42 - "Community 42"
Cohesion: 0.5
Nodes (2): AddFilePanel(), useFileHooks()

### Community 43 - "Community 43"
Cohesion: 0.67
Nodes (2): checkAssertionsErrors(), validateAssertion()

### Community 46 - "Community 46"
Cohesion: 0.67
Nodes (1): UnsupportedException

### Community 60 - "Community 60"
Cohesion: 1.0
Nodes (2): useHostCheckerWarnings(), useTotalNumWarnings()

### Community 63 - "Community 63"
Cohesion: 1.0
Nodes (2): renderNameCell(), renderTextCell()

### Community 67 - "Community 67"
Cohesion: 0.67
Nodes (1): createWrapper()

### Community 70 - "Community 70"
Cohesion: 0.67
Nodes (1): closePanelReducer()

### Community 77 - "Community 77"
Cohesion: 0.67
Nodes (1): OutputsBinder

### Community 78 - "Community 78"
Cohesion: 0.67
Nodes (1): InputsBinder

## Knowledge Gaps
- **1 isolated node(s):** `AgentUtils`
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 20`** (21 nodes): `uncast.ts`, `ValueSegmentConvertor`, `.constructor()`, `._convertExpressionToValueSegment()`, `._convertFunctionExpressionToValueSegment()`, `._convertJsonSectionToSegments()`, `._convertJsonToValueSegments()`, `._convertStringToValueSegments()`, `._convertTemplateExpressionToValueSegments()`, `.convertToValueSegments()`, `._createExpressionTokenValueSegment()`, `._createLiteralValueSegment()`, `._uncastAndConvertExpressionToValueSegments()`, `._uncastAndConvertFunctionExpressionToValueSegments()`, `UncastingUtility`, `.constructor()`, `.uncast()`, `._uncastBase64()`, `._uncastConcat()`, `._uncastOnce()`, `._uncastSingleFunction()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 27`** (6 nodes): `SearchOpeationsService.tsx`, `DefaultSearchOperationsService`, `.compareItems()`, `.constructor()`, `.searchOperations()`, `.searchOptions()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 32`** (5 nodes): `CreateAppPanel()`, `createpanel.tsx`, `usepaneltabs.tsx`, `getResourcesToBeCreated()`, `useCreateAppPanelTabs()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 37`** (5 nodes): `downloadDocumentAsFile()`, `_formatResponseToMarkdown()`, `_getCopilotRegisteredCategoryString()`, `getDocumentationMetadata()`, `documentation.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 42`** (4 nodes): `AddFilePanel()`, `addfile.tsx`, `useFileHooks.tsx`, `useFileHooks()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 43`** (4 nodes): `unitTestSlice.ts`, `checkAssertionsErrors()`, `parseAssertions()`, `validateAssertion()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 46`** (3 nodes): `unsupported.ts`, `UnsupportedException`, `.constructor()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 60`** (3 nodes): `warningsTab.hooks.ts`, `useHostCheckerWarnings()`, `useTotalNumWarnings()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 63`** (3 nodes): `renderNameCell()`, `renderTextCell()`, `knowledgelist.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 67`** (3 nodes): `queries.spec.ts`, `queries.spec.tsx`, `createWrapper()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 70`** (3 nodes): `panelSlice.ts`, `panelSlice.ts`, `closePanelReducer()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 77`** (3 nodes): `outputs.ts`, `OutputsBinder`, `.bind()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 78`** (3 nodes): `InputsBinder`, `.bind()`, `inputs.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `getReactQueryClient()` connect `Community 4` to `Community 2`, `Community 3`, `Community 5`, `Community 6`, `Community 8`, `Community 10`, `Community 15`, `Community 18`, `Community 22`?**
  _High betweenness centrality (0.100) - this node is a cross-community bridge._
- **Why does `isNullOrUndefined()` connect `Community 9` to `Community 1`, `Community 2`, `Community 3`, `Community 4`, `Community 6`, `Community 15`, `Community 17`, `Community 19`, `Community 20`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **Why does `getOperationManifest()` connect `Community 6` to `Community 1`, `Community 2`, `Community 4`, `Community 10`, `Community 14`, `Community 17`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **Are the 54 inferred relationships involving `getReactQueryClient()` (e.g. with `renderComponent()` and `renderComponentWithProps()`) actually correct?**
  _`getReactQueryClient()` has 54 INFERRED edges - model-reasoned connections that need verification._
- **Are the 6 inferred relationships involving `getOperationSettings()` (e.g. with `initializeOperationDetails()` and `initializeOperationDetailsForManagedMcpServer()`) actually correct?**
  _`getOperationSettings()` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Are the 31 inferred relationships involving `isNullOrUndefined()` (e.g. with `getMonitoringTabError()` and `onSeeRawOutputsClick()`) actually correct?**
  _`isNullOrUndefined()` has 31 INFERRED edges - model-reasoned connections that need verification._
- **Are the 27 inferred relationships involving `render()` (e.g. with `renderComponent()` and `renderCustomMenu()`) actually correct?**
  _`render()` has 27 INFERRED edges - model-reasoned connections that need verification._