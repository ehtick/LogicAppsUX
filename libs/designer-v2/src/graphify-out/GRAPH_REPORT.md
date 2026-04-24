# Graph Report - src  (2026-04-24)

## Corpus Check
- 679 files · ~366,278 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2321 nodes · 3221 edges · 37 communities detected
- Extraction: 73% EXTRACTED · 27% INFERRED · 0% AMBIGUOUS · INFERRED: 854 edges (avg confidence: 0.8)
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
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_Community 66|Community 66]]
- [[_COMMUNITY_Community 67|Community 67]]
- [[_COMMUNITY_Community 81|Community 81]]

## God Nodes (most connected - your core abstractions)
1. `getOperationSettings()` - 52 edges
2. `getReactQueryClient()` - 45 edges
3. `isNullOrUndefined()` - 32 edges
4. `initializeOperationDetails()` - 25 edges
5. `getOperationManifest()` - 21 edges
6. `getOperationSettingFromManifest()` - 20 edges
7. `isSettingSupportedFromOperationManifest()` - 18 edges
8. `getConnectorWithSwagger()` - 18 edges
9. `parameterValueToString()` - 17 edges
10. `updateParameterWithValues()` - 16 edges

## Surprising Connections (you probably didn't know these)
- `DesignerReactFlow()` --calls--> `useNotes()`  [INFERRED]
  src/lib/ui/DesignerReactFlow.tsx → src/lib/core/state/notes/notesSelectors.ts
- `usePanelTabs()` --calls--> `useIsAgenticWorkflowOnly()`  [INFERRED]
  src/lib/ui/panel/nodeDetailsPanel/usePanelTabs.tsx → src/lib/core/state/designerView/designerViewSelectors.ts
- `createOrUpdateAgentParameter()` --calls--> `createLiteralValueSegment()`  [INFERRED]
  src/lib/ui/panel/nodeDetailsPanel/tabs/parametersTab/index.tsx → src/lib/core/utils/parameters/segment.ts
- `isNullOrUndefined()` --calls--> `isValueSegment()`  [INFERRED]
  src/lib/ui/panel/nodeDetailsPanel/tabs/parametersTab/connectionInline.tsx → src/lib/core/utils/parameters/segment.ts
- `getAllVariables()` --calls--> `loadDynamicContentForInputsInNode()`  [INFERRED]
  src/lib/core/utils/variables.ts → src/lib/core/utils/parameters/helper.ts

## Communities

### Community 0 - "Community 0"
Cohesion: 0.01
Nodes (118): useIsAgentSubGraph(), AzureResourceSelection(), useMcpServersQuery(), CanvasFinder(), CodeViewTab(), CollapsedNode(), CollapseMenuItem(), ConnectionActionHeader() (+110 more)

### Community 1 - "Community 1"
Cohesion: 0.02
Nodes (154): addCastToExpression(), addFoldingCastToExpression(), concatenateAndInterpolateExpressions(), foldWithConcat(), getCastingTemplate(), shouldCastTokenSegment(), updateAgentParametersForConnection(), deleteCustomCodeInfo() (+146 more)

### Community 2 - "Community 2"
Cohesion: 0.02
Nodes (92): addDefaultSecureSettings(), addTokensAndVariables(), getNonDuplicateId(), getTriggerNodeManifest(), initializeOperationDetails(), initializeSubgraphFromManifest(), createNodeData(), getSupportedChannels() (+84 more)

### Community 3 - "Community 3"
Cohesion: 0.03
Nodes (89): tryGetMostRecentlyUsedConnectionId(), trySetDefaultConnectionForNode(), renderComponent(), getAllParametersForWorkflows(), getConnectionsForConsumption(), getConnectionsForStandard(), getDefinitionAndUsedConnectionMappings(), getFeaturedConnectorsForWorkflows() (+81 more)

### Community 4 - "Community 4"
Cohesion: 0.05
Nodes (76): isRootNode(), deletePropertyValueWithSpecifiedPathSegment(), encodePathValue(), getAndEscapeSegment(), getExtraSegments(), getPropertyValueWithSpecifiedPathSegments(), reduceRedundantSegments(), transformInputParameter() (+68 more)

### Community 5 - "Community 5"
Cohesion: 0.03
Nodes (54): checkWorkflowNameWithRegex(), getFilteredTemplates(), getQuickViewTabs(), getSaveMenuButtons(), getUniqueConnectors(), getUniqueConnectorsFromConnections(), _sortTemplateManifestEntriesByTitle(), validateParameterDetail() (+46 more)

### Community 6 - "Community 6"
Cohesion: 0.04
Nodes (56): getConnectionId(), getConnectionProperties(), getConnectionPropertiesIfRequired(), getConnectionReference(), getExistingReferenceKey(), isConnectionMultiAuthManagedIdentityType(), isConnectionReferenceValid(), isConnectionSingleAuthManagedIdentityType() (+48 more)

### Community 7 - "Community 7"
Cohesion: 0.03
Nodes (44): BJSWorkflowProvider(), DataProviderInner(), CommentMenuItem(), DeleteMenuItem(), useAreDesignerOptionsInitialized(), useAreServicesInitialized(), useLegacyWorkflowParameters(), useMonitoringView() (+36 more)

### Community 8 - "Community 8"
Cohesion: 0.03
Nodes (32): ConfigureTemplateWizard(), ConnectionsList(), TemplateConnectionsList(), connectionsTab(), CreateWorkflowPanel(), CustomizeParameter(), customizeWorkflowsTab(), copyAndSort() (+24 more)

### Community 9 - "Community 9"
Cohesion: 0.05
Nodes (44): AboutTab(), useAllowUserToChangeConnection(), useConnectorDescription(), useConnectorDocumentation(), useConnectorEnvironmentBadge(), useConnectorName(), useConnectorStatusBadge(), useIsConnectionRequired() (+36 more)

### Community 10 - "Community 10"
Cohesion: 0.07
Nodes (49): addAgentToolToWorkflow(), addChildEdge(), addChildNode(), addMcpServerToWorkflow(), addNodeToWorkflow(), addSwitchCaseToWorkflow(), createSubgraphNode(), handleExtraScopeNodeSetup() (+41 more)

### Community 11 - "Community 11"
Cohesion: 0.11
Nodes (53): operationSupportsSplitOn(), areRequestOptionsSupported(), areTrackedPropertiesSupported(), getAsynchronous(), getConcurrency(), getConditionExpressions(), getCorrelationSettings(), getCount() (+45 more)

### Community 12 - "Community 12"
Cohesion: 0.05
Nodes (16): ApiConnectionInputsBinder, ApiConnectionOutputsBinder, buildBoundParameter(), getParameterDisplayName(), makeBoundParameter(), _makeBoundParameters(), _makeOptionalBoundParameter(), makeReducer() (+8 more)

### Community 13 - "Community 13"
Cohesion: 0.05
Nodes (25): CanvasSizeMonitor(), CollapseExpandControl(), DragPanMonitor(), convertWorkflowGraphToElkGraph(), useLayout(), getAllNodesInsideNode(), getAllParentsForNode(), getAllSourceNodeIds() (+17 more)

### Community 14 - "Community 14"
Cohesion: 0.05
Nodes (29): AssertionsPanel(), getConditionExpression(), getValueSegmentFromToken(), useTokens(), convertDesignerWorkflowToConsumptionWorkflow(), getConsumptionWorkflowPayloadForCreate(), replaceAllStringInWorkflowDefinition(), replaceWorkflowIdentifier() (+21 more)

### Community 15 - "Community 15"
Cohesion: 0.07
Nodes (37): autoCreateConnectionIfPossible(), connectorHasMultiAuth(), getApiHubAuthentication(), getApiHubAuthenticationIfRequired(), getConnectionMappingForNode(), getConnectionMetadata(), getConnectionReferenceKeyForManifest(), getConnectionsApiAndMapping() (+29 more)

### Community 16 - "Community 16"
Cohesion: 0.05
Nodes (15): renderWithProviders(), render(), renderComponent(), renderCustomMenu(), renderComponent(), renderWithProviders(), renderGatewayPicker(), renderComponent() (+7 more)

### Community 17 - "Community 17"
Cohesion: 0.09
Nodes (17): useSelectedConnection(), getFirstDeploymentInfo(), getFirstDeploymentModelName(), buildProxyContext(), getCognitiveServiceAccountDeploymentsForConnection(), getFoundryProxyContext(), getServiceAccountId(), useCognitiveServiceAccountDeploymentsForNode() (+9 more)

### Community 18 - "Community 18"
Cohesion: 0.1
Nodes (23): useAllActions(), useAllConnectors(), useAllOperations(), useAllTriggers(), useAzureConnectorsLazyQuery(), useAzureOperationsLazyQuery(), useBuiltInConnectorsQuery(), useBuiltInOperationsQuery() (+15 more)

### Community 19 - "Community 19"
Cohesion: 0.19
Nodes (2): ValueSegmentConvertor, UncastingUtility

### Community 20 - "Community 20"
Cohesion: 0.12
Nodes (6): clearPendingFoundryUpdate(), consumeVersionRefresh(), getPendingFoundryUpdate(), canDropItem(), getDownstreamDependencies(), MockHttpClient

### Community 21 - "Community 21"
Cohesion: 0.26
Nodes (7): findConnectionsParamContainer(), findInput(), findLegacyMultiAuth(), findMultiAuthInput(), findParameterComponents(), findParameterSetsDropdown(), findTenantPicker()

### Community 22 - "Community 22"
Cohesion: 0.22
Nodes (5): CombineInitializeVariableDialog(), KindChangeDialog(), useIsCombineVariableModalOpen(), useKindChangeDialogType(), useResolveCombineVariable()

### Community 24 - "Community 24"
Cohesion: 0.47
Nodes (3): createStore(), renderTabs(), wrapper()

### Community 25 - "Community 25"
Cohesion: 0.4
Nodes (1): DefaultSearchOperationsService

### Community 28 - "Community 28"
Cohesion: 0.47
Nodes (3): getOperationsGroupedByReferences(), useConnectionReference(), useOperationNodeIds()

### Community 30 - "Community 30"
Cohesion: 0.33
Nodes (2): setupStore(), renderWithProviders()

### Community 34 - "Community 34"
Cohesion: 0.6
Nodes (3): handleKeyDown(), handleUpdateManifest(), onOptionSelect()

### Community 36 - "Community 36"
Cohesion: 0.5
Nodes (2): downloadDocumentAsFile(), _formatResponseToMarkdown()

### Community 46 - "Community 46"
Cohesion: 0.67
Nodes (2): checkAssertionsErrors(), validateAssertion()

### Community 48 - "Community 48"
Cohesion: 1.0
Nodes (2): useHostCheckerWarnings(), useTotalNumWarnings()

### Community 53 - "Community 53"
Cohesion: 1.0
Nodes (2): createTestStore(), createWrapper()

### Community 54 - "Community 54"
Cohesion: 1.0
Nodes (2): createTestStore(), createWrapper()

### Community 55 - "Community 55"
Cohesion: 1.0
Nodes (2): createTestStore(), createWrapper()

### Community 66 - "Community 66"
Cohesion: 0.67
Nodes (1): InputsBinder

### Community 67 - "Community 67"
Cohesion: 0.67
Nodes (1): OutputsBinder

### Community 81 - "Community 81"
Cohesion: 0.67
Nodes (1): UnsupportedException

## Knowledge Gaps
- **1 isolated node(s):** `AgentUtils`
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 19`** (21 nodes): `uncast.ts`, `ValueSegmentConvertor`, `.constructor()`, `._convertExpressionToValueSegment()`, `._convertFunctionExpressionToValueSegment()`, `._convertJsonSectionToSegments()`, `._convertJsonToValueSegments()`, `._convertStringToValueSegments()`, `._convertTemplateExpressionToValueSegments()`, `.convertToValueSegments()`, `._createExpressionTokenValueSegment()`, `._createLiteralValueSegment()`, `._uncastAndConvertExpressionToValueSegments()`, `._uncastAndConvertFunctionExpressionToValueSegments()`, `UncastingUtility`, `.constructor()`, `.uncast()`, `._uncastBase64()`, `._uncastConcat()`, `._uncastOnce()`, `._uncastSingleFunction()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 25`** (6 nodes): `SearchOpeationsService.tsx`, `DefaultSearchOperationsService`, `.compareItems()`, `.constructor()`, `.searchOperations()`, `.searchOptions()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 30`** (6 nodes): `store.ts`, `store.ts`, `store.ts`, `template-test-utils.tsx`, `setupStore()`, `renderWithProviders()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 36`** (5 nodes): `downloadDocumentAsFile()`, `_formatResponseToMarkdown()`, `_getCopilotRegisteredCategoryString()`, `getDocumentationMetadata()`, `documentation.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 46`** (4 nodes): `unitTestSlice.ts`, `checkAssertionsErrors()`, `parseAssertions()`, `validateAssertion()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 48`** (3 nodes): `warningsTab.hooks.ts`, `useHostCheckerWarnings()`, `useTotalNumWarnings()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 53`** (3 nodes): `mcpServersBrowse.spec.tsx`, `createTestStore()`, `createWrapper()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 54`** (3 nodes): `mcpToolWizard.spec.tsx`, `createTestStore()`, `createWrapper()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 55`** (3 nodes): `searchView.spec.tsx`, `createTestStore()`, `createWrapper()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 66`** (3 nodes): `InputsBinder`, `.bind()`, `inputs.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 67`** (3 nodes): `outputs.ts`, `OutputsBinder`, `.bind()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 81`** (3 nodes): `unsupported.ts`, `UnsupportedException`, `.constructor()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `getReactQueryClient()` connect `Community 3` to `Community 2`, `Community 4`, `Community 5`, `Community 6`, `Community 15`, `Community 17`, `Community 18`?**
  _High betweenness centrality (0.063) - this node is a cross-community bridge._
- **Why does `isNullOrUndefined()` connect `Community 10` to `Community 1`, `Community 4`, `Community 5`, `Community 6`, `Community 12`, `Community 15`, `Community 19`?**
  _High betweenness centrality (0.053) - this node is a cross-community bridge._
- **Why does `getOperationManifest()` connect `Community 4` to `Community 1`, `Community 2`, `Community 3`, `Community 6`, `Community 12`, `Community 15`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **Are the 6 inferred relationships involving `getOperationSettings()` (e.g. with `initializeOperationDetails()` and `initializeOperationDetailsForSwagger()`) actually correct?**
  _`getOperationSettings()` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Are the 43 inferred relationships involving `getReactQueryClient()` (e.g. with `getCognitiveServiceAccountDeploymentsForConnection()` and `renderComponent()`) actually correct?**
  _`getReactQueryClient()` has 43 INFERRED edges - model-reasoned connections that need verification._
- **Are the 31 inferred relationships involving `isNullOrUndefined()` (e.g. with `onSeeRawOutputsClick()` and `onSeeRawInputsClick()`) actually correct?**
  _`isNullOrUndefined()` has 31 INFERRED edges - model-reasoned connections that need verification._
- **Are the 20 inferred relationships involving `initializeOperationDetails()` (e.g. with `isTriggerNode()` and `isManagedMcpOperation()`) actually correct?**
  _`initializeOperationDetails()` has 20 INFERRED edges - model-reasoned connections that need verification._