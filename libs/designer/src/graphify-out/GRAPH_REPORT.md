# Graph Report - src  (2026-04-24)

## Corpus Check
- 702 files · ~391,596 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2420 nodes · 3389 edges · 44 communities detected
- Extraction: 73% EXTRACTED · 27% INFERRED · 0% AMBIGUOUS · INFERRED: 914 edges (avg confidence: 0.8)
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
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_Community 67|Community 67]]
- [[_COMMUNITY_Community 70|Community 70]]
- [[_COMMUNITY_Community 71|Community 71]]
- [[_COMMUNITY_Community 74|Community 74]]
- [[_COMMUNITY_Community 82|Community 82]]

## God Nodes (most connected - your core abstractions)
1. `getReactQueryClient()` - 56 edges
2. `getOperationSettings()` - 52 edges
3. `isNullOrUndefined()` - 32 edges
4. `render()` - 28 edges
5. `initializeOperationDetails()` - 26 edges
6. `getOperationManifest()` - 21 edges
7. `getOperationSettingFromManifest()` - 20 edges
8. `isSettingSupportedFromOperationManifest()` - 18 edges
9. `getConnectorWithSwagger()` - 18 edges
10. `updateParameterWithValues()` - 16 edges

## Surprising Connections (you probably didn't know these)
- `usePanelTabs()` --calls--> `useSettingValidationErrors()`  [INFERRED]
  src/lib/ui/panel/nodeDetailsPanel/usePanelTabs.tsx → src/lib/core/state/setting/settingSelector.ts
- `onComboboxMenuOpen()` --calls--> `loadDynamicValuesForParameter()`  [INFERRED]
  src/lib/ui/panel/nodeDetailsPanel/tabs/parametersTab/index.tsx → src/lib/core/utils/parameters/helper.ts
- `createOrUpdateAgentParameter()` --calls--> `createLiteralValueSegment()`  [INFERRED]
  src/lib/ui/panel/nodeDetailsPanel/tabs/parametersTab/index.tsx → src/lib/core/utils/parameters/segment.ts
- `isNullOrUndefined()` --calls--> `isValueSegment()`  [INFERRED]
  src/lib/ui/panel/nodeDetailsPanel/tabs/parametersTab/connectionInline.tsx → src/lib/core/utils/parameters/segment.ts
- `getRepetitionName()` --calls--> `getAllParentsForNode()`  [INFERRED]
  src/lib/ui/common/LoopsPager/helper.ts → src/lib/core/utils/graph.ts

## Communities

### Community 0 - "Community 0"
Cohesion: 0.01
Nodes (136): useOutputParameters(), useIsAgentSubGraph(), AzureResourceSelection(), BJSWorkflowProvider(), BrowseView(), CanvasFinder(), CodeViewTab(), CollapsedNode() (+128 more)

### Community 1 - "Community 1"
Cohesion: 0.03
Nodes (115): addCastToExpression(), addFoldingCastToExpression(), concatenateAndInterpolateExpressions(), foldWithConcat(), getCastingTemplate(), shouldCastTokenSegment(), updateAgentParametersForConnection(), addRecurrenceParametersInGroup() (+107 more)

### Community 2 - "Community 2"
Cohesion: 0.03
Nodes (77): tryGetMostRecentlyUsedConnectionId(), trySetDefaultConnectionForNode(), renderComponent(), clearConnectionCaches(), getConnection(), getConnectionFromResource(), getConnectionsForConnector(), getConnectionsQuery() (+69 more)

### Community 3 - "Community 3"
Cohesion: 0.04
Nodes (81): addDefaultSecureSettings(), addTokensAndVariables(), getNonDuplicateId(), getTriggerNodeManifest(), initializeOperationDetails(), initializeSubgraphFromManifest(), createNodeData(), getSupportedChannels() (+73 more)

### Community 4 - "Community 4"
Cohesion: 0.04
Nodes (87): getAllNodesInsideNode(), getAllParentsForNode(), getAllSourceNodeIds(), getFirstParentOfType(), getGraphNode(), getImmediateSourceNodeIds(), getNode(), getTriggerNode() (+79 more)

### Community 5 - "Community 5"
Cohesion: 0.03
Nodes (67): AddServerButtons(), AppInsightsSelector(), validateAvailability(), AppPlanSelector(), validateAvailability(), useAllActions(), useAllConnectors(), useAllOperations() (+59 more)

### Community 6 - "Community 6"
Cohesion: 0.03
Nodes (53): getWorkflowResourcesInTemplate(), useExistingWorkflowNamesOfResource(), CloneReviewList(), useCloneStrings(), CloneWizard(), ConfigureLogicApps(), useCloneWorkflowItem(), useSourceItems() (+45 more)

### Community 7 - "Community 7"
Cohesion: 0.04
Nodes (62): getAllParametersForWorkflows(), getConnectionsForConsumption(), getConnectionsForStandard(), getDefinitionAndUsedConnectionMappings(), getFeaturedConnectorsForWorkflows(), getTemplateConnections(), getTemplateParameters(), getUpdatedTemplateManifest() (+54 more)

### Community 8 - "Community 8"
Cohesion: 0.04
Nodes (55): AboutTab(), useAllowUserToChangeConnection(), useConnectorDescription(), useConnectorDocumentation(), useConnectorEnvironmentBadge(), useConnectorName(), useConnectorStatusBadge(), useIsConnectionRequired() (+47 more)

### Community 9 - "Community 9"
Cohesion: 0.03
Nodes (32): renderComponent(), renderComponent(), createMockStore(), renderComponent(), renderBasicsTab(), basicsTab(), renderComponent(), render() (+24 more)

### Community 10 - "Community 10"
Cohesion: 0.06
Nodes (52): addAgentToolToWorkflow(), addChildEdge(), addChildNode(), addMcpServerToWorkflow(), addNodeToWorkflow(), addSwitchCaseToWorkflow(), createSubgraphNode(), handleExtraScopeNodeSetup() (+44 more)

### Community 11 - "Community 11"
Cohesion: 0.05
Nodes (47): deleteCustomCodeInfo(), deleteOperationDetails(), removeAllTokensFromNode(), ensureExpressionValue(), findParameterExpressions(), getExpressionTokenTitle(), getNormalizedName(), getNormalizedTokenName() (+39 more)

### Community 12 - "Community 12"
Cohesion: 0.05
Nodes (44): autoCreateConnectionIfPossible(), connectorHasMultiAuth(), getApiHubAuthentication(), getApiHubAuthenticationIfRequired(), getConnectionId(), getConnectionMappingForNode(), getConnectionProperties(), getConnectionPropertiesIfRequired() (+36 more)

### Community 13 - "Community 13"
Cohesion: 0.11
Nodes (53): operationSupportsSplitOn(), areRequestOptionsSupported(), areTrackedPropertiesSupported(), getAsynchronous(), getConcurrency(), getConditionExpressions(), getCorrelationSettings(), getCount() (+45 more)

### Community 14 - "Community 14"
Cohesion: 0.07
Nodes (10): ApiConnectionInputsBinder, ApiConnectionOutputsBinder, buildBoundParameter(), getParameterDisplayName(), makeBoundParameter(), _makeBoundParameters(), _makeOptionalBoundParameter(), makeReducer() (+2 more)

### Community 15 - "Community 15"
Cohesion: 0.06
Nodes (5): onSecureInputsChange(), Security(), getSplitOnValue(), hasSecureOutputs(), isSecureOutputsLinkedToInputs()

### Community 16 - "Community 16"
Cohesion: 0.09
Nodes (22): useLegacyWorkflowParameters(), useAllInputErrors(), useAllSettingErrors(), useHostCheckerErrors(), useNumConnectionErrors(), useNumFlowErrors(), useNumHostCheckerErrors(), useNumInputErrors() (+14 more)

### Community 17 - "Community 17"
Cohesion: 0.09
Nodes (17): ConnectionsList(), CreateWorkflowPanel(), copyAndSort(), MultiWorkflowBasics(), useExistingWorkflowNames(), onSelectTemplate(), onSelect(), useCreateWorkflowPanelTabs() (+9 more)

### Community 18 - "Community 18"
Cohesion: 0.08
Nodes (14): checkWorkflowNameWithRegex(), async(), SummaryPanel(), getWorkflowAndManifest(), isMultiWorkflowTemplate(), loadTemplateFromResourcePath(), loadWorkflowsDataInTemplate(), loadWorkflowTemplate() (+6 more)

### Community 19 - "Community 19"
Cohesion: 0.09
Nodes (17): AssertionsPanel(), getConditionExpression(), getValueSegmentFromToken(), useTokens(), getFilteredOutputs(), callback(), createOrUpdateAgentParameter(), error() (+9 more)

### Community 20 - "Community 20"
Cohesion: 0.15
Nodes (20): isParameterRequired(), validateParameter(), getTitleOrSummary(), isOneOf(), isISO8601(), isValidArrayFormat(), isValidJSONObjectFormat(), parameterHasOnlyTokenBinding() (+12 more)

### Community 21 - "Community 21"
Cohesion: 0.12
Nodes (6): clearPendingFoundryUpdate(), consumeVersionRefresh(), getPendingFoundryUpdate(), canDropItem(), getDownstreamDependencies(), MockHttpClient

### Community 22 - "Community 22"
Cohesion: 0.12
Nodes (5): isOperationNameValid(), transformOperationTitle(), onTitleChange(), haveInputParametersChangedValue(), shouldSkipSavingStateToHistory()

### Community 23 - "Community 23"
Cohesion: 0.17
Nodes (10): createOrUpdateConnection(), getAllConnectionParameters(), getConnectionParametersForEdit(), getCosmosDbConnectionParameters(), getOpenAIConnectionParameters(), CreateConnectionPanel(), CreateConnection(), useShouldEnableAPIMGatewayConnection() (+2 more)

### Community 24 - "Community 24"
Cohesion: 0.16
Nodes (8): String(), buildPropertiesToUpdate(), extractErrorInfo(), getMonitoringError(), getMonitoringTabError(), getRepetitionName(), getScopeRepetitionName(), isFoundryAuthError()

### Community 25 - "Community 25"
Cohesion: 0.26
Nodes (7): findConnectionsParamContainer(), findInput(), findLegacyMultiAuth(), findMultiAuthInput(), findParameterComponents(), findParameterSetsDropdown(), findTenantPicker()

### Community 26 - "Community 26"
Cohesion: 0.17
Nodes (6): CanvasSizeMonitor(), CollapseExpandControl(), DragPanMonitor(), convertWorkflowGraphToElkGraph(), useLayout(), useIsEverythingExpanded()

### Community 27 - "Community 27"
Cohesion: 0.22
Nodes (3): useDefaultSettingsItems(), useLocation(), useSubscription()

### Community 28 - "Community 28"
Cohesion: 0.39
Nodes (1): UncastingUtility

### Community 30 - "Community 30"
Cohesion: 0.33
Nodes (3): CombineInitializeVariableDialog(), useIsCombineVariableModalOpen(), useResolveCombineVariable()

### Community 31 - "Community 31"
Cohesion: 0.4
Nodes (1): DefaultSearchOperationsService

### Community 33 - "Community 33"
Cohesion: 0.47
Nodes (3): getOperationsGroupedByReferences(), useConnectionReference(), useOperationNodeIds()

### Community 35 - "Community 35"
Cohesion: 0.4
Nodes (2): CreateAppPanel(), useCreateAppPanelTabs()

### Community 38 - "Community 38"
Cohesion: 0.6
Nodes (3): handleKeyDown(), handleUpdateManifest(), onOptionSelect()

### Community 41 - "Community 41"
Cohesion: 0.5
Nodes (2): downloadDocumentAsFile(), _formatResponseToMarkdown()

### Community 44 - "Community 44"
Cohesion: 0.5
Nodes (2): AddFilePanel(), useFileHooks()

### Community 50 - "Community 50"
Cohesion: 0.67
Nodes (2): checkAssertionsErrors(), validateAssertion()

### Community 52 - "Community 52"
Cohesion: 1.0
Nodes (2): renderNameCell(), renderTextCell()

### Community 55 - "Community 55"
Cohesion: 1.0
Nodes (2): useHostCheckerWarnings(), useTotalNumWarnings()

### Community 67 - "Community 67"
Cohesion: 0.67
Nodes (1): createWrapper()

### Community 70 - "Community 70"
Cohesion: 0.67
Nodes (1): InputsBinder

### Community 71 - "Community 71"
Cohesion: 0.67
Nodes (1): OutputsBinder

### Community 74 - "Community 74"
Cohesion: 0.67
Nodes (1): closePanelReducer()

### Community 82 - "Community 82"
Cohesion: 0.67
Nodes (1): UnsupportedException

## Knowledge Gaps
- **1 isolated node(s):** `AgentUtils`
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 28`** (8 nodes): `uncast.ts`, `UncastingUtility`, `.constructor()`, `.uncast()`, `._uncastBase64()`, `._uncastConcat()`, `._uncastOnce()`, `._uncastSingleFunction()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 31`** (6 nodes): `SearchOpeationsService.tsx`, `DefaultSearchOperationsService`, `.compareItems()`, `.constructor()`, `.searchOperations()`, `.searchOptions()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 35`** (5 nodes): `CreateAppPanel()`, `createpanel.tsx`, `usepaneltabs.tsx`, `getResourcesToBeCreated()`, `useCreateAppPanelTabs()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (5 nodes): `downloadDocumentAsFile()`, `_formatResponseToMarkdown()`, `_getCopilotRegisteredCategoryString()`, `getDocumentationMetadata()`, `documentation.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 44`** (4 nodes): `AddFilePanel()`, `addfile.tsx`, `useFileHooks.tsx`, `useFileHooks()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 50`** (4 nodes): `unitTestSlice.ts`, `checkAssertionsErrors()`, `parseAssertions()`, `validateAssertion()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 52`** (3 nodes): `renderNameCell()`, `renderTextCell()`, `knowledgelist.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 55`** (3 nodes): `warningsTab.hooks.ts`, `useHostCheckerWarnings()`, `useTotalNumWarnings()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 67`** (3 nodes): `queries.spec.ts`, `queries.spec.tsx`, `createWrapper()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 70`** (3 nodes): `InputsBinder`, `.bind()`, `inputs.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 71`** (3 nodes): `outputs.ts`, `OutputsBinder`, `.bind()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 74`** (3 nodes): `panelSlice.ts`, `panelSlice.ts`, `closePanelReducer()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 82`** (3 nodes): `unsupported.ts`, `UnsupportedException`, `.constructor()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `getReactQueryClient()` connect `Community 2` to `Community 1`, `Community 3`, `Community 5`, `Community 6`, `Community 7`, `Community 8`, `Community 12`, `Community 23`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **Why does `isNullOrUndefined()` connect `Community 10` to `Community 1`, `Community 2`, `Community 3`, `Community 4`, `Community 11`, `Community 14`, `Community 18`, `Community 20`, `Community 24`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **Why does `getOperationManifest()` connect `Community 3` to `Community 1`, `Community 2`, `Community 4`, `Community 11`, `Community 12`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **Are the 54 inferred relationships involving `getReactQueryClient()` (e.g. with `getCognitiveServiceAccountDeploymentsForConnection()` and `renderComponent()`) actually correct?**
  _`getReactQueryClient()` has 54 INFERRED edges - model-reasoned connections that need verification._
- **Are the 6 inferred relationships involving `getOperationSettings()` (e.g. with `initializeOperationDetails()` and `initializeOperationDetailsForSwagger()`) actually correct?**
  _`getOperationSettings()` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Are the 31 inferred relationships involving `isNullOrUndefined()` (e.g. with `onSeeRawOutputsClick()` and `onSeeRawInputsClick()`) actually correct?**
  _`isNullOrUndefined()` has 31 INFERRED edges - model-reasoned connections that need verification._
- **Are the 27 inferred relationships involving `render()` (e.g. with `renderComponent()` and `renderComponent()`) actually correct?**
  _`render()` has 27 INFERRED edges - model-reasoned connections that need verification._