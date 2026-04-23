# Graph Report - src  (2026-04-23)

## Corpus Check
- 678 files · ~381,813 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2314 nodes · 3215 edges · 39 communities detected
- Extraction: 73% EXTRACTED · 27% INFERRED · 0% AMBIGUOUS · INFERRED: 856 edges (avg confidence: 0.8)
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
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 64|Community 64]]
- [[_COMMUNITY_Community 65|Community 65]]
- [[_COMMUNITY_Community 66|Community 66]]
- [[_COMMUNITY_Community 67|Community 67]]
- [[_COMMUNITY_Community 81|Community 81]]
- [[_COMMUNITY_Community 82|Community 82]]

## God Nodes (most connected - your core abstractions)
1. `getOperationSettings()` - 52 edges
2. `getReactQueryClient()` - 45 edges
3. `isNullOrUndefined()` - 32 edges
4. `initializeOperationDetails()` - 26 edges
5. `getOperationManifest()` - 21 edges
6. `getOperationSettingFromManifest()` - 20 edges
7. `getConnectorWithSwagger()` - 18 edges
8. `isSettingSupportedFromOperationManifest()` - 18 edges
9. `initializeOperationDetailsForManifest()` - 17 edges
10. `parameterValueToString()` - 17 edges

## Surprising Connections (you probably didn't know these)
- `DesignerReactFlow()` --calls--> `useNotes()`  [INFERRED]
  src/lib/ui/DesignerReactFlow.tsx → src/lib/core/state/notes/notesSelectors.ts
- `usePanelTabs()` --calls--> `useIsAgenticWorkflowOnly()`  [INFERRED]
  src/lib/ui/panel/nodeDetailsPanel/usePanelTabs.tsx → src/lib/core/state/designerView/designerViewSelectors.ts
- `AboutTab()` --calls--> `useHostOptions()`  [INFERRED]
  src/lib/ui/panel/nodeDetailsPanel/tabs/aboutTab.tsx → src/lib/core/state/designerOptions/designerOptionsSelectors.ts
- `onComboboxMenuOpen()` --calls--> `loadDynamicValuesForParameter()`  [INFERRED]
  src/lib/ui/panel/nodeDetailsPanel/tabs/parametersTab/index.tsx → src/lib/core/utils/parameters/helper.ts
- `createOrUpdateAgentParameter()` --calls--> `createLiteralValueSegment()`  [INFERRED]
  src/lib/ui/panel/nodeDetailsPanel/tabs/parametersTab/index.tsx → src/lib/core/utils/parameters/segment.ts

## Communities

### Community 0 - "Community 0"
Cohesion: 0.01
Nodes (108): useIsAgentSubGraph(), AzureResourceSelection(), useMcpServersQuery(), CanvasFinder(), CodeViewTab(), CollapsedNode(), CollapseMenuItem(), ConnectionActionHeader() (+100 more)

### Community 1 - "Community 1"
Cohesion: 0.02
Nodes (150): addCastToExpression(), addFoldingCastToExpression(), concatenateAndInterpolateExpressions(), foldWithConcat(), getCastingTemplate(), shouldCastTokenSegment(), updateAgentParametersForConnection(), deleteCustomCodeInfo() (+142 more)

### Community 2 - "Community 2"
Cohesion: 0.02
Nodes (102): addDefaultSecureSettings(), addTokensAndVariables(), getNonDuplicateId(), initializeOperationDetails(), initializeSubgraphFromManifest(), tryGetMostRecentlyUsedConnectionId(), trySetDefaultConnectionForNode(), createNodeData() (+94 more)

### Community 3 - "Community 3"
Cohesion: 0.03
Nodes (64): AboutTab(), useAllowUserToChangeConnection(), useConnectorDescription(), useConnectorDocumentation(), useConnectorEnvironmentBadge(), useConnectorName(), useConnectorStatusBadge(), useIsConnectionRequired() (+56 more)

### Community 4 - "Community 4"
Cohesion: 0.03
Nodes (72): renderComponent(), clearConnectionCaches(), getConnection(), getConnectionFromResource(), getConnectionsForConnector(), getConnectionsQuery(), getConnectorWithSwagger(), getUniqueConnectionName() (+64 more)

### Community 5 - "Community 5"
Cohesion: 0.04
Nodes (58): getAllParametersForWorkflows(), getConnectionsForConsumption(), getConnectionsForStandard(), getDefinitionAndUsedConnectionMappings(), getFeaturedConnectorsForWorkflows(), getTemplateConnections(), getTemplateParameters(), getUpdatedTemplateManifest() (+50 more)

### Community 6 - "Community 6"
Cohesion: 0.03
Nodes (45): BJSWorkflowProvider(), DataProviderInner(), CommentMenuItem(), DeleteMenuItem(), useAreDesignerOptionsInitialized(), useAreServicesInitialized(), useHostOptions(), useLegacyWorkflowParameters() (+37 more)

### Community 7 - "Community 7"
Cohesion: 0.03
Nodes (32): ConfigureTemplateWizard(), ConnectionsList(), TemplateConnectionsList(), connectionsTab(), CreateWorkflowPanel(), CustomizeParameter(), customizeWorkflowsTab(), copyAndSort() (+24 more)

### Community 8 - "Community 8"
Cohesion: 0.05
Nodes (46): autoCreateConnectionIfPossible(), connectorHasMultiAuth(), getApiHubAuthentication(), getApiHubAuthenticationIfRequired(), getConnectionId(), getConnectionMappingForNode(), getConnectionMetadata(), getConnectionProperties() (+38 more)

### Community 9 - "Community 9"
Cohesion: 0.11
Nodes (53): operationSupportsSplitOn(), areRequestOptionsSupported(), areTrackedPropertiesSupported(), getAsynchronous(), getConcurrency(), getConditionExpressions(), getCorrelationSettings(), getCount() (+45 more)

### Community 10 - "Community 10"
Cohesion: 0.06
Nodes (38): getFilteredTemplates(), getUniqueConnectors(), getUniqueConnectorsFromConnections(), isParameterRequired(), _sortTemplateManifestEntriesByTitle(), validateParameterDetail(), validateParameterValue(), validateTemplateManifestValue() (+30 more)

### Community 11 - "Community 11"
Cohesion: 0.05
Nodes (25): CanvasSizeMonitor(), CollapseExpandControl(), DragPanMonitor(), convertWorkflowGraphToElkGraph(), useLayout(), getAllNodesInsideNode(), getAllParentsForNode(), getAllSourceNodeIds() (+17 more)

### Community 12 - "Community 12"
Cohesion: 0.09
Nodes (38): addAgentToolToWorkflow(), addChildEdge(), addChildNode(), addMcpServerToWorkflow(), addSwitchCaseToWorkflow(), createSubgraphNode(), handleExtraScopeNodeSetup(), addActionsInstanceMetaData() (+30 more)

### Community 13 - "Community 13"
Cohesion: 0.1
Nodes (44): getTriggerNodeManifest(), getTriggerNode(), getTriggerNodeId(), isRootNode(), updateTokenMetadataInForeachInputs(), getOperationManifest(), getOperationInputParameters(), constructInputValues() (+36 more)

### Community 14 - "Community 14"
Cohesion: 0.07
Nodes (30): addNodeToWorkflow(), AssertionsPanel(), getConditionExpression(), getValueSegmentFromToken(), useTokens(), deleteMcpServerNodeFromWorkflow(), deleteNodeFromWorkflow(), deleteWorkflowNode() (+22 more)

### Community 15 - "Community 15"
Cohesion: 0.06
Nodes (13): ApiConnectionInputsBinder, ApiConnectionOutputsBinder, buildBoundParameter(), getParameterDisplayName(), makeBoundParameter(), _makeBoundParameters(), _makeOptionalBoundParameter(), makeReducer() (+5 more)

### Community 16 - "Community 16"
Cohesion: 0.05
Nodes (15): renderWithProviders(), render(), renderComponent(), renderCustomMenu(), renderComponent(), renderWithProviders(), renderGatewayPicker(), renderComponent() (+7 more)

### Community 17 - "Community 17"
Cohesion: 0.1
Nodes (35): deletePropertyValueWithSpecifiedPathSegment(), getAndEscapeSegment(), getExtraSegments(), getPropertyValueWithSpecifiedPathSegments(), reduceRedundantSegments(), transformInputParameter(), updateParameterWithValues(), buildOperationDetailsFromControls() (+27 more)

### Community 18 - "Community 18"
Cohesion: 0.07
Nodes (18): checkWorkflowNameWithRegex(), getQuickViewTabs(), getSaveMenuButtons(), async(), SummaryPanel(), summaryTab(), getWorkflowAndManifest(), isMultiWorkflowTemplate() (+10 more)

### Community 19 - "Community 19"
Cohesion: 0.1
Nodes (23): useAllActions(), useAllConnectors(), useAllOperations(), useAllTriggers(), useAzureConnectorsLazyQuery(), useAzureOperationsLazyQuery(), useBuiltInConnectorsQuery(), useBuiltInOperationsQuery() (+15 more)

### Community 20 - "Community 20"
Cohesion: 0.08
Nodes (11): EditOperationPanel(), useEditSnapshot(), useAllConnectionErrors(), useNodeConnectorId(), useNodesTokenDependencies(), useOperationDynamicInputsError(), useOperationInputParameters(), useOperationsInputParameters() (+3 more)

### Community 21 - "Community 21"
Cohesion: 0.18
Nodes (2): ValueSegmentConvertor, UncastingUtility

### Community 22 - "Community 22"
Cohesion: 0.12
Nodes (6): clearPendingFoundryUpdate(), consumeVersionRefresh(), getPendingFoundryUpdate(), canDropItem(), getDownstreamDependencies(), MockHttpClient

### Community 23 - "Community 23"
Cohesion: 0.26
Nodes (7): findConnectionsParamContainer(), findInput(), findLegacyMultiAuth(), findMultiAuthInput(), findParameterComponents(), findParameterSetsDropdown(), findTenantPicker()

### Community 24 - "Community 24"
Cohesion: 0.22
Nodes (5): CombineInitializeVariableDialog(), KindChangeDialog(), useIsCombineVariableModalOpen(), useKindChangeDialogType(), useResolveCombineVariable()

### Community 26 - "Community 26"
Cohesion: 0.47
Nodes (3): createStore(), renderTabs(), wrapper()

### Community 27 - "Community 27"
Cohesion: 0.4
Nodes (1): DefaultSearchOperationsService

### Community 29 - "Community 29"
Cohesion: 0.33
Nodes (2): setupStore(), renderWithProviders()

### Community 30 - "Community 30"
Cohesion: 0.47
Nodes (3): getOperationsGroupedByReferences(), useConnectionReference(), useOperationNodeIds()

### Community 36 - "Community 36"
Cohesion: 0.6
Nodes (3): handleKeyDown(), handleUpdateManifest(), onOptionSelect()

### Community 39 - "Community 39"
Cohesion: 0.5
Nodes (2): downloadDocumentAsFile(), _formatResponseToMarkdown()

### Community 44 - "Community 44"
Cohesion: 0.67
Nodes (2): checkAssertionsErrors(), validateAssertion()

### Community 49 - "Community 49"
Cohesion: 0.67
Nodes (1): UnsupportedException

### Community 64 - "Community 64"
Cohesion: 1.0
Nodes (2): useHostCheckerWarnings(), useTotalNumWarnings()

### Community 65 - "Community 65"
Cohesion: 1.0
Nodes (2): createTestStore(), createWrapper()

### Community 66 - "Community 66"
Cohesion: 1.0
Nodes (2): createTestStore(), createWrapper()

### Community 67 - "Community 67"
Cohesion: 1.0
Nodes (2): createTestStore(), createWrapper()

### Community 81 - "Community 81"
Cohesion: 0.67
Nodes (1): OutputsBinder

### Community 82 - "Community 82"
Cohesion: 0.67
Nodes (1): InputsBinder

## Knowledge Gaps
- **1 isolated node(s):** `AgentUtils`
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 21`** (22 nodes): `uncast.ts`, `ValueSegmentConvertor`, `.constructor()`, `._convertExpressionToValueSegment()`, `._convertFunctionExpressionToValueSegment()`, `._convertJsonSectionToSegments()`, `._convertJsonToValueSegments()`, `._convertStringToValueSegments()`, `._convertTemplateExpressionToValueSegments()`, `.convertToValueSegments()`, `._createExpressionTokenValueSegment()`, `._createLiteralValueSegment()`, `._uncastAndConvertExpressionToValueSegments()`, `._uncastAndConvertFunctionExpressionToValueSegments()`, `UncastingUtility`, `.constructor()`, `.isCastableFormat()`, `.uncast()`, `._uncastBase64()`, `._uncastConcat()`, `._uncastOnce()`, `._uncastSingleFunction()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 27`** (6 nodes): `SearchOpeationsService.tsx`, `DefaultSearchOperationsService`, `.compareItems()`, `.constructor()`, `.searchOperations()`, `.searchOptions()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 29`** (6 nodes): `store.ts`, `store.ts`, `store.ts`, `template-test-utils.tsx`, `setupStore()`, `renderWithProviders()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 39`** (5 nodes): `downloadDocumentAsFile()`, `_formatResponseToMarkdown()`, `_getCopilotRegisteredCategoryString()`, `getDocumentationMetadata()`, `documentation.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 44`** (4 nodes): `unitTestSlice.ts`, `checkAssertionsErrors()`, `parseAssertions()`, `validateAssertion()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 49`** (3 nodes): `unsupported.ts`, `UnsupportedException`, `.constructor()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 64`** (3 nodes): `warningsTab.hooks.ts`, `useHostCheckerWarnings()`, `useTotalNumWarnings()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 65`** (3 nodes): `mcpToolWizard.spec.tsx`, `createTestStore()`, `createWrapper()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 66`** (3 nodes): `mcpServersBrowse.spec.tsx`, `createTestStore()`, `createWrapper()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 67`** (3 nodes): `searchView.spec.tsx`, `createTestStore()`, `createWrapper()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 81`** (3 nodes): `outputs.ts`, `OutputsBinder`, `.bind()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 82`** (3 nodes): `InputsBinder`, `.bind()`, `inputs.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `getReactQueryClient()` connect `Community 4` to `Community 2`, `Community 3`, `Community 5`, `Community 10`, `Community 13`, `Community 19`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **Why does `isNullOrUndefined()` connect `Community 12` to `Community 1`, `Community 2`, `Community 4`, `Community 10`, `Community 13`, `Community 15`, `Community 17`, `Community 18`, `Community 21`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._
- **Why does `getOperationInputParameters()` connect `Community 13` to `Community 20`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **Are the 6 inferred relationships involving `getOperationSettings()` (e.g. with `initializeOperationDetails()` and `initializeOperationDetailsForManagedMcpServer()`) actually correct?**
  _`getOperationSettings()` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Are the 43 inferred relationships involving `getReactQueryClient()` (e.g. with `renderComponent()` and `getCognitiveServiceAccountDeploymentsForConnection()`) actually correct?**
  _`getReactQueryClient()` has 43 INFERRED edges - model-reasoned connections that need verification._
- **Are the 31 inferred relationships involving `isNullOrUndefined()` (e.g. with `getMonitoringTabError()` and `onSeeRawOutputsClick()`) actually correct?**
  _`isNullOrUndefined()` has 31 INFERRED edges - model-reasoned connections that need verification._
- **Are the 21 inferred relationships involving `initializeOperationDetails()` (e.g. with `getOperationDataInDefinitions()` and `isTriggerNode()`) actually correct?**
  _`initializeOperationDetails()` has 21 INFERRED edges - model-reasoned connections that need verification._