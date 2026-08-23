# Graph Report - src  (2026-08-23)

## Corpus Check
- 725 files · ~414,144 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 7551 nodes · 24282 edges · 229 communities (201 shown, 28 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 232 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5c7453c9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- lib/core/utils/parameters/helper.ts
- lib/core/state/workflow/workflowSelectors.ts
- lib/core/utils/parameters/dynamicdata.ts
- lib/ui/common/DesignerContextualMenu/DesignerContextualMenu.tsx
- lib/core/actions/bjsworkflow/initialize.ts
- lib/ui/panel/connectionsPanel/allConnections/connectionEntry.tsx
- lib/ui/panel/connectionsPanel/createConnection/createConnection.tsx
- lib/core/actions/bjsworkflow/serializer.ts
- lib/ui/panel/connectionsPanel/createConnection/custom/useCognitiveService.ts
- lib/ui/panel/nodeDetailsPanel/tabs/parametersTab/index.tsx
- lib/core/actions/bjsworkflow/settings.ts
- lib/ui/templates/templateoverview.tsx
- assertionsPanel.tsx
- src/lib/core/state/panel/panelSelectors.ts
- lib/core/queries/runs.ts
- lib/core/state/templates/store.ts
- lib/ui/panel/runHistoryPanel/__test__/runHistoryEntry.spec.tsx
- lib/ui/panel/errorsPanel/tabs/errorsTab.hooks.ts
- useTemplatesStrings
- lib/common/constants.ts
- src/lib/core/queries/runs.ts
- RootState
- lib/ui/settings/sections/runafterconfiguration/runafteractiondetails.tsx
- lib/core/actions/bjsworkflow/templates.ts
- lib/ui/MonitoringTimeline/index.tsx
- lib/ui/panel/nodeDetailsPanel/__tests__/usePanelTabs.spec.tsx
- lib/ui/dialog/triggerDescriptionDialog.tsx
- lib/index.tsx
- lib/core/state/mcp/store.ts
- src/lib/core/actions/bjsworkflow/copypaste.ts
- lib/ui/CustomNodes/__test__/OperationCardNode.spec.tsx
- lib/ui/templates/cards/templateCard.tsx
- lib/core/parsers/models/workflowNode.ts
- lib/core/utils/loops.ts
- lib/ui/DesignerReactFlow.tsx
- lib/ui/connections/helpers.ts
- lib/ui/panel/recommendation/recommendationPanelContext.tsx
- lib/core/graphlayout/elklayout.tsx
- src/lib/core/utils/parameters/helper.ts
- lib/ui/panel/connectionsPanel/createConnection/custom/openAIConnector.tsx
- lib/core/state/panel/panelSlice.ts
- lib/ui/panel/recommendation/browse/browseView.tsx
- AppDispatch
- lib/core/state/workflow/workflowSlice.ts
- lib/core/state/templates/templateSlice.ts
- lib/core/state/operation/operationSelector.ts
- lib/ui/CustomNodes/__test__/ScopeCardNode.spec.tsx
- DefaultSearchOperationsService
- lib/core/state/designerOptions/designerOptionsSelectors.ts
- lib/core/utils/validation.ts
- Binder
- lib/core/utils/parameters/segment.ts
- src/lib/core/actions/bjsworkflow/initialize.ts
- lib/core/parsers/BJSWorkflow/BJSDeserializer.ts
- src/lib/core/state/operation/operationSelector.ts
- unitTestSlice.ts
- lib/ui/panel/nodeDetailsPanel/tabs/agentHarnessTab/agentHarnessTab.tsx
- lib/core/state/selectors/actionMetadataSelector.ts
- NodesMetadata
- lib/core/queries/browse.ts
- src/lib/ui/common/DesignerContextualMenu/DesignerContextualMenu.tsx
- lib/core/index.ts
- lib/core/state/exportconsumption/store.ts
- src/lib/ui/panel/nodeDetailsPanel/tabs/parametersTab/index.tsx
- lib/ui/mcp/parameters/EditOperation.tsx
- lib/core/actions/bjsworkflow/configuretemplate.ts
- lib/core/actions/bjsworkflow/wrapInScope.ts
- lib/ui/panel/recommendation/browse/connectorBrowse.tsx
- lib/ui/panel/recommendation/browse/mcpServersBrowse.tsx
- lib/core/queries/role.ts
- lib/ui/CustomNodes/__test__/SubgraphCardNode.spec.tsx
- src/lib/core/actions/bjsworkflow/templates.ts
- lib/core/utils/graph.ts
- lib/core/state/mcp/mcpselectionslice.ts
- lib/ui/FloatingRunButton/chat.tsx
- lib/ui/settings/index.tsx
- src/lib/core/state/workflow/workflowSelectors.ts
- lib/ui/FloatingRunButton/index.tsx
- lib/ui/panel/connectionsPanel/createConnection/__test__/createConnection.spec.tsx
- lib/ui/panel/connectionsPanel/createConnection/custom/__test__/openAIConnector.spec.tsx
- src/lib/core/utils/loops.ts
- src/lib/core/utils/swagger/operation.ts
- WorkflowTemplateData
- src/lib/core/actions/bjsworkflow/connections.ts
- lib/core/mcp/McpDataProvider.tsx
- src/lib/core/state/designerOptions/designerOptionsSelectors.ts
- Test Coverage
- lib/ui/mcp/wizard/McpWizard.tsx
- src/lib/core/actions/bjsworkflow/settings.ts
- src/lib/core/actions/bjsworkflow/configuretemplate.ts
- lib/ui/panel/connectionsPanel/selectConnection/connectionTable.tsx
- src/lib/ui/panel/connectionsPanel/createConnection/createConnection.tsx
- lib/ui/mcp/connectors/ConnectorBrowseView.tsx
- src/lib/core/utils/parameters/segment.ts
- lib/ui/panel/recommendation/details/connectorDetailsView.tsx
- src/lib/ui/settings/index.tsx
- RootState
- useNodeDisplayName
- lib/ui/panel/agentChat/__test__/agentChat.spec.tsx
- src/lib/core/state/global.ts
- src/lib/core/utils/parameters/dynamicdata.ts
- lib/core/actions/bjsworkflow/delete.ts
- useTemplatesStrings
- src/lib/core/state/templates/store.ts
- RootState
- src/lib/core/state/connection/connectionSelector.ts
- src/lib/core/index.ts
- src/lib/core/queries/browse.ts
- src/lib/core/actions/bjsworkflow/serializer.ts
- src/lib/core/state/templates/templateSlice.ts
- UncastingUtility
- lib/common/utilities/__test__/error.test.ts
- src/lib/core/state/operation/operationMetadataSlice.ts
- src/lib/ui/MonitoringTimeline/index.tsx
- lib/core/parsers/addNodeToWorkflow.ts
- lib/ui/__test__/DesignerReactFlow.spec.tsx
- lib/core/state/mcp/panel/mcpPanelSlice.ts
- lib/ui/panel/nodeDetailsPanel/tabs/parametersTab/custom/deploymentModelResource.tsx
- src/lib/core/state/workflow/workflowSlice.ts
- lib/ui/settings/validation/__tests__/errorbar.spec.tsx
- fetchBuiltInToolRunData
- lib/ui/connections/__tests__/edge.spec.tsx
- src/lib/ui/panel/errorsPanel/tabs/errorsTab.hooks.ts
- lib/ui/panel/connectionsPanel/createConnection/formInputs/gatewayPicker.tsx
- src/lib/core/utils/swagger/inputsbuilder.ts
- lib/core/mcp/utils/serializer.ts
- src/lib/ui/CustomNodes/__test__/OperationCardNode.spec.tsx
- JsonSplitter
- lib/ui/panel/connectionsPanel/actionList/actionList.tsx
- src/lib/core/state/undoRedo/undoRedoTypes.ts
- src/lib/ui/CustomNodes/components/card/actionCard.tsx
- src/lib/ui/templates/templateoverview.tsx
- src/lib/ui/connections/dropTarget.tsx
- lib/ui/connections/dynamicsvgs/trafficlightsvgs.tsx
- lib/ui/connections/onlyEdge.tsx
- lib/ui/panel/connectionsPanel/createConnection/iFrameTOS.tsx
- lib/ui/connections/dynamicsvgs/gripper.tsx
- lib/core/state/mcp/mcpOptions/mcpOptionsInterface.ts
- typings.d.ts
- Svg.d.ts
- src/lib/core/state/panel/panelSlice.ts
- src/lib/core/state/workflow/workflowInterfaces.ts
- src/lib/core/state/designerView/designerViewSlice.ts
- src/lib/core/utils/validation.ts
- src/lib/ui/panel/connectionsPanel/createConnection/createConnectionInternal.tsx
- src/lib/core/state/mcp/store.ts
- src/lib/ui/panel/recommendation/browse/mcpToolWizard.tsx
- src/lib/ui/CustomNodes/__test__/ScopeCardNode.spec.tsx
- src/lib/core/BJSWorkflowProvider.tsx
- src/lib/ui/panel/templatePanel/createWorkflowPanel/createWorkflowPanel.tsx
- WorkflowNode
- src/lib/ui/panel/nodeDetailsPanel/tabs/agentHarnessTab/agentHarnessTab.tsx
- src/lib/common/models/workflow.ts
- lib/ui/templates/connections/workflowconnections.tsx
- src/lib/ui/mcp/wizard/McpWizard.tsx
- src/lib/core/state/mcp/panel/mcpPanelSlice.ts
- src/lib/core/mcp/utils/serializer.ts
- src/lib/core/state/workflow/helper.ts
- src/lib/core/actions/bjsworkflow/mcp.ts
- src/lib/core/state/exportconsumption/store.ts
- src/lib/core/parsers/BJSWorkflow/BJSDeserializer.ts
- src/lib/core/actions/bjsworkflow/wrapInScope.ts
- AppDispatch
- src/lib/common/constants.ts
- src/lib/core/queries/connections.ts
- src/lib/core/queries/role.ts
- src/lib/ui/CustomNodes/__test__/SubgraphCardNode.spec.tsx
- src/lib/core/utils/graph.ts
- src/lib/ui/templates/connections/workflowconnections.tsx
- src/lib/ui/FloatingRunButton/index.tsx
- src/lib/ui/panel/connectionsPanel/createConnection/__test__/createConnection.spec.tsx
- src/lib/core/graphlayout/elklayout.tsx
- src/lib/core/mcp/utils/queries.ts
- src/lib/ui/templates/filters/templatesearchfilters.tsx
- src/lib/ui/FloatingRunButton/chat.tsx
- lib/ui/panel/nodeDetailsPanel/tabs/parametersTab/helpers.ts
- src/lib/core/parsers/ParseReduxAction.ts
- src/lib/core/utils/monitoring/binders/__test__/outputs.test.ts
- src/lib/ui/panel/connectionsPanel/createConnection/custom/__test__/openAIConnector.spec.tsx
- src/lib/core/actions/bjsworkflow/monitoring.ts
- Binder
- Test Coverage
- src/lib/ui/panel/connectionsPanel/selectConnection/connectionTable.tsx
- src/lib/core/state/notes/notesSlice.ts
- src/lib/core/utils/monitoring/binders/__test__/inputs.test.ts
- src/lib/ui/panel/agentChat/__test__/agentChat.spec.tsx
- lib/core/actions/bjsworkflow/__test__/connections.spec.ts
- src/lib/core/state/workflowparameters/workflowparametersselector.ts
- lib/ui/panel/recommendation/__test__/recommendationPanelContext.spec.tsx
- constructInputValues
- updateNodeFromCodeView.spec.ts
- src/lib/ui/mcp/operations/OperationSelectionGrid.tsx
- src/lib/core/actions/bjsworkflow/delete.ts
- src/lib/ui/CustomNodes/NoteNode/index.tsx
- src/lib/ui/panel/nodeDetailsPanel/tabs/parametersTab/custom/deploymentModelResource.tsx
- lib/core/configuretemplate/utils/errors.ts
- src/lib/core/configuretemplate/utils/errors.ts
- src/lib/ui/__test__/DesignerReactFlow.spec.tsx
- src/lib/ui/settings/validation/__tests__/errorbar.spec.tsx
- lib/core/state/workflow/helper.ts
- src/lib/core/actions/bjsworkflow/__test__/serializerAgentParams.spec.ts
- src/lib/core/mcp/McpWizardProvider.tsx
- src/lib/__test__/redux-test-helper.tsx
- src/lib/core/utils/monitoring/index.ts
- JsonSplitter
- src/lib/ui/panel/connectionsPanel/createConnection/formInputs/gatewayPicker.tsx
- getAndEscapeSegment
- ApiConnectionInputsBinder
- ApiConnectionOutputsBinder
- src/lib/ui/panel/connectionsPanel/actionList/actionList.tsx
- src/lib/ui/panel/connectionsPanel/selectConnection/__test__/selectConnection.spec.tsx
- DefaultSearchOperationsService
- lib/ui/panel/recommendation/browse/__test__/mcpServersBrowse.spec.tsx
- src/lib/core/parsers/__test__/updateAgenticGraph.spec.ts
- src/lib/core/actions/bjsworkflow/__test__/serializeOperationDynamicMerge.spec.ts
- src/lib/ui/connections/dynamicsvgs/trafficlightsvgs.tsx
- src/lib/ui/settings/advancedSettingsMessage.tsx
- lib/ui/panel/nodeDetailsPanel/tabs/monitoringTab/inputsPanel.tsx
- lib/ui/panel/nodeDetailsPanel/tabs/monitoringTab/outputsPanel.tsx
- src/lib/ui/connections/dynamicsvgs/gripper.tsx
- src/lib/ui/connections/onlyEdge.tsx
- src/lib/ui/panel/connectionsPanel/createConnection/iFrameTOS.tsx
- src/lib/core/state/mcp/mcpOptions/mcpOptionsInterface.ts

## God Nodes (most connected - your core abstractions)
1. `getReactQueryClient()` - 77 edges
2. `RootState` - 76 edges
3. `RootState` - 75 edges
4. `getReactQueryClient()` - 70 edges
5. `AppDispatch` - 63 edges
6. `AppDispatch` - 63 edges
7. `RootState` - 59 edges
8. `RootState` - 59 edges
9. `getOperationSettings()` - 57 edges
10. `getOperationSettings()` - 57 edges

## Surprising Connections (you probably didn't know these)
- `InitialWorkflowState` --references--> `ConnectionReferences`  [EXTRACTED]
  src/lib/core/state/templates/workflowSlice.ts → src/lib/common/models/workflow.ts
- `ReduxReset()` --calls--> `resetWorkflowState`  [EXTRACTED]
  src/lib/core/DesignerProvider.tsx → src/lib/core/state/global.ts
- `getRunRepetition()` --calls--> `getReactQueryClient()`  [EXTRACTED]
  src/lib/core/queries/runs.ts → src/lib/core/ReactQueryProvider.tsx
- `DataProviderInner()` --calls--> `loadCustomTemplate`  [EXTRACTED]
  src/lib/core/configuretemplate/ConfigureTemplateDataProvider.tsx → src/lib/core/actions/bjsworkflow/configuretemplate.ts
- `initializeConnectionMappings` --indirect_call--> `isConnectionValid()`  [INFERRED]
  src/lib/core/actions/bjsworkflow/mcp.ts → src/lib/core/utils/connectors/connections.ts

## Import Cycles
- 3-file cycle: `lib/core/actions/bjsworkflow/copypaste.ts -> lib/core/actions/bjsworkflow/operationdeserializer.ts -> lib/core/parsers/BJSWorkflow/BJSDeserializer.ts -> lib/core/actions/bjsworkflow/copypaste.ts`
- 3-file cycle: `lib/core/actions/bjsworkflow/add.ts -> lib/core/actions/bjsworkflow/operationdeserializer.ts -> lib/core/utils/loops.ts -> lib/core/actions/bjsworkflow/add.ts`
- 3-file cycle: `lib/core/actions/bjsworkflow/initialize.ts -> lib/core/actions/bjsworkflow/operationdeserializer.ts -> lib/core/utils/loops.ts -> lib/core/actions/bjsworkflow/initialize.ts`
- 3-file cycle: `lib/common/utilities/Utils.ts -> lib/core/index.ts -> lib/core/templates/utils/createhelper.ts -> lib/common/utilities/Utils.ts`
- 3-file cycle: `lib/core/state/global.ts -> lib/core/state/notes/notesSelectors.ts -> lib/core/state/notes/notesSlice.ts -> lib/core/state/global.ts`
- 3-file cycle: `lib/core/state/global.ts -> lib/core/state/workflow/workflowSelectors.ts -> lib/core/state/operation/operationMetadataSlice.ts -> lib/core/state/global.ts`
- 4-file cycle: `lib/core/utils/parameters/helper.ts -> lib/core/utils/validation.ts -> lib/core/utils/parameters/segment.ts -> lib/core/utils/parameters/tokensegment.ts -> lib/core/utils/parameters/helper.ts`
- 4-file cycle: `lib/core/actions/bjsworkflow/add.ts -> lib/core/actions/bjsworkflow/operationdeserializer.ts -> lib/core/parsers/BJSWorkflow/BJSDeserializer.ts -> lib/core/actions/bjsworkflow/copypaste.ts -> lib/core/actions/bjsworkflow/add.ts`
- 4-file cycle: `lib/core/actions/bjsworkflow/copypaste.ts -> lib/core/actions/bjsworkflow/initialize.ts -> lib/core/actions/bjsworkflow/operationdeserializer.ts -> lib/core/parsers/BJSWorkflow/BJSDeserializer.ts -> lib/core/actions/bjsworkflow/copypaste.ts`
- 4-file cycle: `lib/core/actions/bjsworkflow/add.ts -> lib/core/actions/bjsworkflow/operationdeserializer.ts -> lib/core/utils/parameters/helper.ts -> lib/core/utils/loops.ts -> lib/core/actions/bjsworkflow/add.ts`
- 4-file cycle: `lib/core/actions/bjsworkflow/initialize.ts -> lib/core/actions/bjsworkflow/operationdeserializer.ts -> lib/core/utils/parameters/helper.ts -> lib/core/utils/loops.ts -> lib/core/actions/bjsworkflow/initialize.ts`
- 4-file cycle: `lib/core/actions/bjsworkflow/add.ts -> lib/core/actions/bjsworkflow/initialize.ts -> lib/core/actions/bjsworkflow/operationdeserializer.ts -> lib/core/utils/loops.ts -> lib/core/actions/bjsworkflow/add.ts`
- 4-file cycle: `lib/core/actions/bjsworkflow/add.ts -> lib/core/actions/bjsworkflow/operationdeserializer.ts -> lib/core/utils/outputs.ts -> lib/core/utils/loops.ts -> lib/core/actions/bjsworkflow/add.ts`
- 4-file cycle: `lib/core/actions/bjsworkflow/initialize.ts -> lib/core/actions/bjsworkflow/operationdeserializer.ts -> lib/core/utils/outputs.ts -> lib/core/utils/loops.ts -> lib/core/actions/bjsworkflow/initialize.ts`
- 4-file cycle: `lib/core/actions/bjsworkflow/initialize.ts -> lib/core/actions/bjsworkflow/operationdeserializer.ts -> lib/core/utils/outputs.ts -> lib/core/utils/parameters/dynamicdata.ts -> lib/core/actions/bjsworkflow/initialize.ts`
- 4-file cycle: `lib/common/hooks/agent.ts -> lib/core/index.ts -> lib/core/templates/utils/createhelper.ts -> lib/common/utilities/Utils.ts -> lib/common/hooks/agent.ts`
- 4-file cycle: `lib/core/state/connection/connectionSlice.ts -> lib/core/state/global.ts -> lib/core/state/notes/notesSelectors.ts -> lib/core/store.ts -> lib/core/state/connection/connectionSlice.ts`
- 4-file cycle: `lib/core/state/customcode/customcodeSlice.ts -> lib/core/state/global.ts -> lib/core/state/notes/notesSelectors.ts -> lib/core/store.ts -> lib/core/state/customcode/customcodeSlice.ts`
- 4-file cycle: `lib/core/state/designerView/designerViewSlice.ts -> lib/core/state/global.ts -> lib/core/state/notes/notesSelectors.ts -> lib/core/store.ts -> lib/core/state/designerView/designerViewSlice.ts`
- 4-file cycle: `lib/core/state/dev/devSlice.ts -> lib/core/state/global.ts -> lib/core/state/notes/notesSelectors.ts -> lib/core/store.ts -> lib/core/state/dev/devSlice.ts`

## Communities (229 total, 28 thin omitted)

### Community 0 - "lib/core/utils/parameters/helper.ts"
Cohesion: 0.03
Nodes (111): getSplitOnValue(), UpdateParametersPayload, addCastToExpression(), addFoldingCastToExpression(), concatenateAndInterpolateExpressions(), foldWithConcat(), getCastingTemplate(), shouldCastTokenSegment() (+103 more)

### Community 1 - "lib/core/state/workflow/workflowSelectors.ts"
Cohesion: 0.04
Nodes (119): moveOperation, DraftEdge(), DropZone, DropZoneProps, ButtonEdge(), EdgeContentProps, EdgeContentProps, HandoffEdge() (+111 more)

### Community 2 - "lib/core/utils/parameters/dynamicdata.ts"
Cohesion: 0.05
Nodes (77): tryGetMostRecentlyUsedConnectionId(), trySetDefaultConnectionForNode(), updateNodeConnectionAndProperties(), updateDynamicDataForValidConnection(), getConnectionId(), getConnectionParametersForAzureConnection(), getConnectionReference(), isConnectionMultiAuthManagedIdentityType() (+69 more)

### Community 3 - "lib/ui/common/DesignerContextualMenu/DesignerContextualMenu.tsx"
Cohesion: 0.04
Nodes (51): shouldDisplayRunAfter(), BulkCopyIcon, BulkCutIcon, BulkDeleteIcon, DesignerContextualMenu(), NodeMenuPriorities, useNodeSelectAdditionalCallback(), useSuppressDefaultNodeSelectFunctionality() (+43 more)

### Community 4 - "lib/core/actions/bjsworkflow/initialize.ts"
Cohesion: 0.04
Nodes (124): addDefaultSecureSettings(), AddOperationPayload, addTokensAndVariables(), getNonDuplicateNodeId(), initializeOperationDetails(), initializeSubgraphFromManifest(), addConnectorAsOperation, AddConnectorAsOpreationPayload (+116 more)

### Community 5 - "lib/ui/panel/connectionsPanel/allConnections/connectionEntry.tsx"
Cohesion: 0.21
Nodes (9): ConnectionEntry(), ConnectionEntryProps, ConnectorConnectionsCard(), ConnectorConnectionsCardProps, NodeLinkButton(), ConnectionDisplayName(), useConnectionById(), mockDispatch (+1 more)

### Community 6 - "lib/ui/panel/connectionsPanel/createConnection/createConnection.tsx"
Cohesion: 0.08
Nodes (17): useTenants(), CreateConnection(), CreateConnectionProps, ParamType, parseParameterValues(), useStyles, ClientSecretInputProps, IClientCertificateMetadata (+9 more)

### Community 7 - "lib/core/actions/bjsworkflow/serializer.ts"
Cohesion: 0.04
Nodes (93): AgentConnectionInfo, ApiManagementConnectionInfo, constructInputValues(), FunctionConnectionInfo, getActions(), getAssertions(), getNodeOutputOperations(), getOperationInputsToSerialize() (+85 more)

### Community 8 - "lib/ui/panel/connectionsPanel/createConnection/custom/useCognitiveService.ts"
Cohesion: 0.20
Nodes (19): useSelectedConnection(), buildProxyContext(), foundryQueryOpts, getFoundryProxyContext(), getServiceAccountId(), queryKeys, queryOpts, useCognitiveServiceAccountDeploymentsForNode() (+11 more)

### Community 9 - "lib/ui/panel/nodeDetailsPanel/tabs/parametersTab/index.tsx"
Cohesion: 0.03
Nodes (132): AllConnections(), ConnectorCardWrapper(), ConnectorCardWrapperProps, AllConnectionsEmptyState(), autoCreateConnectionIfPossible(), closeConnectionsFlow, ConnectionPayload, connectorHasMultiAuth() (+124 more)

### Community 10 - "lib/core/actions/bjsworkflow/settings.ts"
Cohesion: 0.09
Nodes (62): areRequestOptionsSupported(), areTrackedPropertiesSupported(), ConcurrencySettings, CorrelationSettings, getAsynchronous(), getConcurrency(), getConditionExpressions(), getCorrelationSettings() (+54 more)

### Community 11 - "lib/ui/templates/templateoverview.tsx"
Cohesion: 0.13
Nodes (19): isMultiWorkflowTemplate(), ConnectionsList(), CreateWorkflowPanelProps, TemplateDetailFilterType, TemplatesFullGalleryView(), QuickViewPanel(), QuickViewPanelHeader(), QuickViewPanelProps (+11 more)

### Community 12 - "assertionsPanel.tsx"
Cohesion: 0.19
Nodes (12): AssertionsPanel(), getVariableTokens(), getFilteredOutputs(), MockResultsTab(), getOperationsState(), useAssertions(), useAssertionsValidationErrors(), useIsMockSupported() (+4 more)

### Community 13 - "src/lib/core/state/panel/panelSelectors.ts"
Cohesion: 0.03
Nodes (130): addOperation, useFavoriteOperations(), useMcpServersQuery(), useDisableMcpClientTools(), useDisableNativeMcpClientTools(), useSupportedChannels(), useIsAgenticWorkflow(), getPanelState() (+122 more)

### Community 14 - "lib/core/queries/runs.ts"
Cohesion: 0.04
Nodes (75): AgentChat(), AgentChatProps, parseChatHistory(), useRefreshChatMutation(), useIsFirstDesignerV2Load(), useWorkflowHasAgentLoop(), useAllIcons(), useIsRunHistoryCollapsed() (+67 more)

### Community 15 - "lib/core/state/templates/store.ts"
Cohesion: 0.15
Nodes (16): updateWorkflowParameter, ReactQueryProvider(), ConfigPanelView, initialState, panelSlice, PanelState, TemplatePanelView, AppStore (+8 more)

### Community 16 - "lib/ui/panel/runHistoryPanel/__test__/runHistoryEntry.spec.tsx"
Cohesion: 0.25
Nodes (5): mockCancelRun, mockInvalidateQueries, mockRefetchRun, mockResubmitRun, queryClient

### Community 17 - "lib/ui/panel/errorsPanel/tabs/errorsTab.hooks.ts"
Cohesion: 0.13
Nodes (31): CollapseIcon, ErrorCategory(), ErrorCategoryProps, ExpandIcon, CloseIcon, ErrorsPanel(), WorkflowParameterErrors(), WorkflowParameterErrorsProps (+23 more)

### Community 18 - "useTemplatesStrings"
Cohesion: 0.07
Nodes (42): ResourceSection(), ResourceSectionProps, useStyles, WorkflowName(), WorkflowTriggerDescription(), TemplateResourcePicker(), validateTriggerDescription(), ParameterEditor() (+34 more)

### Community 19 - "lib/common/constants.ts"
Cohesion: 0.03
Nodes (116): updateIdentityChangeInConnection, deleteWorkflowParameter, NodeStaticResults, StaticResultOption, onRedoClick, onUndoClick, ChannelsTab(), SCHEMA (+108 more)

### Community 20 - "src/lib/core/queries/runs.ts"
Cohesion: 0.04
Nodes (90): fetchBuiltInToolRunData, fetchAgentActionsRepetition(), getAgentActionsRepetition(), getAgentRepetition(), getAgentRepetitions(), getNodeRepetitions(), getRun(), getRunRepetition() (+82 more)

### Community 21 - "RootState"
Cohesion: 0.08
Nodes (38): DescriptionWithLink(), ErrorBar(), tableHeaderStyle, useParameterDefinition(), getLogicAppsCategories(), useResourceStrings(), InfoToastContent(), TemplateInfoToast() (+30 more)

### Community 22 - "lib/ui/settings/sections/runafterconfiguration/runafteractiondetails.tsx"
Cohesion: 0.19
Nodes (10): ChevronDownIcon, ChevronRightIcon, DeleteButtonProps, DeleteIcon, LabelProps, onChangeHandler, RunAfterActionStatuses(), RunAfterActionStatusesProps (+2 more)

### Community 23 - "lib/core/actions/bjsworkflow/templates.ts"
Cohesion: 0.06
Nodes (48): ConfigureTemplateServiceOptions, initializeConfigureTemplateServices, loadCustomTemplate, getWorkflowAndManifest(), GetWorkflowAndManifestHandler, initializeTemplateServices, initializeWorkflowMetadata, loadCustomTemplates (+40 more)

### Community 24 - "lib/ui/MonitoringTimeline/index.tsx"
Cohesion: 0.10
Nodes (28): ConnectorIcon(), ConnectorIconProps, parseRepetitions(), TimelineRepetitionWithActions, TimelineRepetition, useTimelineRepetitionCount(), useTimelineRepetitions(), MonitoringTimeline() (+20 more)

### Community 25 - "lib/ui/panel/nodeDetailsPanel/__tests__/usePanelTabs.spec.tsx"
Cohesion: 0.47
Nodes (4): createStore(), mocks, renderTabs(), wrapper()

### Community 26 - "lib/ui/dialog/triggerDescriptionDialog.tsx"
Cohesion: 0.23
Nodes (10): CombineInitializeVariableDialog(), TriggerDescriptionDialog(), TriggerDescriptionDialogProps, useIsCombineVariableModalOpen(), useIsTriggerDescriptionModalOpen(), useResolveCombineVariable(), useShouldPromptForTriggerDescription(), initialState (+2 more)

### Community 27 - "lib/index.tsx"
Cohesion: 0.11
Nodes (21): parseWorkflowParameterValue(), ConnectionsStoreState, AllCustomCodeFiles, CustomCode, CustomCodeFileNameMapping, CustomCodeWithData, ConnectionMapping, ConnectionReferences (+13 more)

### Community 28 - "lib/core/state/mcp/store.ts"
Cohesion: 0.18
Nodes (7): McpWizardContext, McpWrappedContext, McpWizardProvider(), McpWizardProviderProps, AppStore, mcpStore, rootReducer

### Community 29 - "src/lib/core/actions/bjsworkflow/copypaste.ts"
Cohesion: 0.04
Nodes (95): getNonDuplicateId(), getNonDuplicateNodeId(), buildActionClipboardEntry(), buildScopeClipboardEntry(), buildScopeParams(), copyOperation, CopyOperationPayload, copyOperations (+87 more)

### Community 30 - "lib/ui/CustomNodes/__test__/OperationCardNode.spec.tsx"
Cohesion: 0.05
Nodes (36): mockDispatch, mockUseActionMetadata, mockUseAllOperations, mockUseConnectorName, mockUseFlowErrorsForNode, mockUseIsA2AWorkflow, mockUseIsCopilotModifiedNode, mockUseIsLeafNode (+28 more)

### Community 31 - "lib/ui/templates/cards/templateCard.tsx"
Cohesion: 0.08
Nodes (29): loadCustomTemplateArtifacts, loadTemplate, BlankWorkflowTemplateCard(), LoadingTemplateCard(), iconStyle, TemplateCard(), templateCardBodyStyles, TemplateCardProps (+21 more)

### Community 32 - "lib/core/parsers/models/workflowNode.ts"
Cohesion: 0.13
Nodes (15): initialState, mockGraph, WorkflowNode, flattenWorkflowNodes(), updateChildrenDimensions(), UpdateAgenticGraphPayload, updateAgenticSubgraph(), mockReassignEdgeSources (+7 more)

### Community 33 - "lib/core/utils/loops.ts"
Cohesion: 0.08
Nodes (43): useTokens(), getTriggerNodeManifest(), Settings, generateExpressionFromKey(), getExpressionTokenTitle(), getParameterFromId(), getTokenExpressionMethodFromKey(), getTokenValueFromToken() (+35 more)

### Community 34 - "lib/ui/DesignerReactFlow.tsx"
Cohesion: 0.04
Nodes (79): pasteOperation, pasteScopeOperation, deleteGraphNode, deleteOperation, addAgentHandoff, AddAgentHandoffPayload, removeAgentHandoff, RemoveAgentHandoffPayload (+71 more)

### Community 35 - "lib/ui/connections/helpers.ts"
Cohesion: 0.70
Nodes (3): canDropItem(), DropItem, getDownstreamDependencies()

### Community 36 - "lib/ui/panel/recommendation/recommendationPanelContext.tsx"
Cohesion: 0.15
Nodes (24): addOperation, useDiscoveryPanelFavoriteOperations(), useDiscoveryPanelIsAddingTrigger(), useDiscoveryPanelIsOperationFavorited(), useDiscoveryPanelIsParallelBranch(), useDiscoveryPanelRelationshipIds(), useDiscoveryPanelSearchTerm(), useDiscoveryPanelSelectedOperationGroupId() (+16 more)

### Community 37 - "lib/core/graphlayout/elklayout.tsx"
Cohesion: 0.15
Nodes (12): convertWorkflowGraphToElkGraph(), defaultLayoutOptions, elk, exportForTesting, LayoutContext, LayoutContextType, readOnlyOptions, spacing (+4 more)

### Community 38 - "src/lib/core/utils/parameters/helper.ts"
Cohesion: 0.04
Nodes (113): getFirstParentOfType(), getRepetitionReference(), addCastToExpression(), addFoldingCastToExpression(), concatenateAndInterpolateExpressions(), foldWithConcat(), getCastingTemplate(), shouldCastTokenSegment() (+105 more)

### Community 39 - "lib/ui/panel/connectionsPanel/createConnection/custom/openAIConnector.tsx"
Cohesion: 0.14
Nodes (23): SubscriptionDropdown(), SubscriptionDropdownProps, useSubscriptions(), ConnectionParameterRow(), ConnectionParameterRowParameterRowSelfProps, ConnectionParameterRowProps, ACASessionConnector(), RefreshIcon (+15 more)

### Community 40 - "lib/core/state/panel/panelSlice.ts"
Cohesion: 0.04
Nodes (61): getNonDuplicateId(), buildActionClipboardEntry(), buildScopeClipboardEntry(), buildScopeParams(), copyOperation, CopyOperationPayload, copyOperations, CopyOperationsPayload (+53 more)

### Community 41 - "lib/ui/panel/recommendation/browse/browseView.tsx"
Cohesion: 0.12
Nodes (21): BrowseView(), BrowseViewProps, CategoryCard(), CategoryCardProps, BrowseCategoryConfig, BrowseCategoryType, getActionCategories(), getTriggerCategories() (+13 more)

### Community 42 - "AppDispatch"
Cohesion: 0.16
Nodes (12): saveTemplateData, ConfigureTemplateWizard(), summaryTab(), TemplateWizardTabProps, profileTab(), useConfigureTemplateWizardTabs(), workflowsTab(), AppDispatch (+4 more)

### Community 43 - "lib/core/state/workflow/workflowSlice.ts"
Cohesion: 0.17
Nodes (26): PasteScopeOperationPayload, isWorkflowOperationNode(), AddSettingsPayload, RelationshipIds, AddNodePayload, addNodeToWorkflow(), deleteMcpServerNodeFromWorkflow(), deleteNodeFromWorkflow() (+18 more)

### Community 44 - "lib/core/state/templates/templateSlice.ts"
Cohesion: 0.08
Nodes (31): MultiWorkflowBasics(), WorkflowItem, SingleWorkflowBasics(), deleteWorkflowData, validateWorkflowName(), validateWorkflowsBasicInfo, CreateWorkflowPanel(), CreateWorkflowPanelHeader() (+23 more)

### Community 45 - "lib/core/state/operation/operationSelector.ts"
Cohesion: 0.05
Nodes (47): DropTarget(), DropTargetProps, CollapsedNode(), AllowDropTarget(), AllowDropTargetProps, BlockDropTarget(), BlockDropTargetProps, NodeErrors() (+39 more)

### Community 46 - "lib/ui/CustomNodes/__test__/ScopeCardNode.spec.tsx"
Cohesion: 0.07
Nodes (29): mockDispatch, mockUseActionMetadata, mockUseAllOperations, mockUseBrandColor, mockUseConnectorName, mockUseFlowErrorsForNode, mockUseHandoffActionsForAgent, mockUseIconUri (+21 more)

### Community 48 - "lib/core/state/designerOptions/designerOptionsSelectors.ts"
Cohesion: 0.06
Nodes (34): useAddButtonStyles, AddButton(), AddButtonProps, Plus(), AgentChatHeader(), AgentChatHeaderProps, CollapseIcon, RefreshIcon (+26 more)

### Community 49 - "lib/core/utils/validation.ts"
Cohesion: 0.16
Nodes (20): getTitleOrSummary(), isOneOf(), isParameterRequired(), isValidArrayFormat(), isValidJSONObjectFormat(), parameterHasOnlyTokenBinding(), regex, shouldValidateJSON() (+12 more)

### Community 50 - "Binder"
Cohesion: 0.05
Nodes (21): Binder, getDynamicListLookupValue(), getDynamicTreeLookupValue(), InputsBinder, OutputsBinder, ApiConnectionInputsBinder, DefaultInputsBinder, ManifestInputsBinder (+13 more)

### Community 51 - "lib/core/utils/parameters/segment.ts"
Cohesion: 0.08
Nodes (17): initializeCustomCodeDataInInputs(), updateTokenTitlesInViewModel(), createAgentParameterToken(), createExpressionToken(), createLiteralValueSegment(), createOutputToken(), createParameterToken(), createTokenValueSegment() (+9 more)

### Community 52 - "src/lib/core/actions/bjsworkflow/initialize.ts"
Cohesion: 0.05
Nodes (93): ImpersonationSource, ReferenceKey, AddOperationPayload, addTokensAndVariables(), getOperationType(), getTriggerNodeManifest(), initializeOperationDetails(), TODO: This seems redundant now since in line: 143 outputs are already updated… (+85 more)

### Community 53 - "lib/core/parsers/BJSWorkflow/BJSDeserializer.ts"
Cohesion: 0.15
Nodes (23): addActionsInstanceMetaData(), addTriggerInstanceMetaData(), buildGraphFromActions(), Deserialize(), deserializeUnitTestDefinition(), flattenObject(), getAllActionNames(), hasMultipleTriggers() (+15 more)

### Community 54 - "src/lib/core/state/operation/operationSelector.ts"
Cohesion: 0.08
Nodes (82): initializeSubgraphFromManifest(), moveOperation, useNodeRepetition(), useMonitoringView(), useNodeSelectAdditionalCallback(), useReadOnly(), useSuppressDefaultNodeSelectFunctionality(), ErrorLevel (+74 more)

### Community 55 - "unitTestSlice.ts"
Cohesion: 0.10
Nodes (29): ActionCard(), ActionCardProps, colors, useCardStyles, CardErrorBadge(), CardRunStatusBadge(), ChevronDown, ChevronUp (+21 more)

### Community 56 - "lib/ui/panel/nodeDetailsPanel/tabs/agentHarnessTab/agentHarnessTab.tsx"
Cohesion: 0.12
Nodes (19): AgentHarnessData, AgentHarnessInputFile, AgentHarnessSkill, AgentHarnessTab(), ExpressionTokenPill(), extractErrorDetail(), getExpressionTitle(), inputFileColumns (+11 more)

### Community 57 - "lib/core/state/selectors/actionMetadataSelector.ts"
Cohesion: 0.11
Nodes (26): useSwagger(), useHostOptions(), isAgentSubgraphFromMetadata(), QueryResult, useConnectorDescription(), useConnectorDocumentation(), useConnectorEnvironmentBadge(), useConnectorName() (+18 more)

### Community 58 - "NodesMetadata"
Cohesion: 0.18
Nodes (14): DeserializedWorkflow, InitWorkflowPayload, PasteScopeNodePayload, agentMcpWorkflowDefinitionInput, expectedAgentMcpWorkflowDefinitionOutput, expectedScopedWorkflowDefinitionOutput, scopedWorkflowDefinitionInput, expectedSimpleWorkflowDefinitionOutput (+6 more)

### Community 59 - "lib/core/queries/browse.ts"
Cohesion: 0.15
Nodes (20): ActionPanelFavoriteItem, pagedOpts, queryOpts, useAllActions(), useAllConnectors(), useAllOperations(), useAllTriggers(), useAzureConnectorsLazyQuery() (+12 more)

### Community 60 - "src/lib/ui/common/DesignerContextualMenu/DesignerContextualMenu.tsx"
Cohesion: 0.03
Nodes (63): useUndoRedoClickToggle(), CopyTooltip(), CopyTooltipProps, BulkCopyIcon, BulkCutIcon, BulkDeleteIcon, NodeMenuPriorities, hideTooltipMock (+55 more)

### Community 61 - "lib/core/index.ts"
Cohesion: 0.04
Nodes (58): clearPendingFoundryUpdate(), consumeVersionRefresh(), flushPendingFoundryUpdates(), getPendingFoundryUpdate(), hasPendingFoundryUpdates(), needsVersionRefresh(), PendingFoundryUpdate, pendingUpdates (+50 more)

### Community 62 - "lib/core/state/exportconsumption/store.ts"
Cohesion: 0.11
Nodes (14): ExportDataProvider(), ExportDataProviderProps, ExportWizardContext, ExportWizardContextContext, ExportWizardProvider(), ExportWizardProviderProps, initialState, resourceSlice (+6 more)

### Community 63 - "src/lib/ui/panel/nodeDetailsPanel/tabs/parametersTab/index.tsx"
Cohesion: 0.05
Nodes (80): clearPendingFoundryUpdate(), consumeVersionRefresh(), flushPendingFoundryUpdates(), getPendingFoundryUpdate(), hasPendingFoundryUpdates(), needsVersionRefresh(), PendingFoundryUpdate, pendingUpdates (+72 more)

### Community 64 - "lib/ui/mcp/parameters/EditOperation.tsx"
Cohesion: 0.21
Nodes (12): ParameterEditor(), useOperationDynamicInputsError(), EditOperation(), EditOperationProps, getGroupIdFromParameterId(), McpParameterInputType, ParameterField(), ParameterFieldProps (+4 more)

### Community 65 - "lib/core/actions/bjsworkflow/configuretemplate.ts"
Cohesion: 0.07
Nodes (49): getAllParametersForWorkflows(), getConnectionsForConsumption(), getConnectionsForStandard(), getDefinitionAndUsedConnectionMappings(), getFeaturedConnectorsForWorkflows(), getTemplateConnections(), getTemplateValidationError, getUpdatedTemplateManifest() (+41 more)

### Community 66 - "lib/core/actions/bjsworkflow/wrapInScope.ts"
Cohesion: 0.17
Nodes (16): ScopeDefinition, scopeDefinitions, WrapScopeType, wrapSelectedNodesInScope, WrapSelectedNodesPayload, buildLinearState(), buildParallelState(), makeEdge() (+8 more)

### Community 67 - "lib/ui/panel/recommendation/browse/connectorBrowse.tsx"
Cohesion: 0.12
Nodes (11): ConnectorBrowse(), ConnectorBrowseProps, priorityConnectors, ConnectorCard(), ConnectorCardProps, ConnectorFilterTypes, ALLOWED_A2A_CONNECTOR_NAMES, useConnectorBrowseStyles (+3 more)

### Community 68 - "lib/ui/panel/recommendation/browse/mcpServersBrowse.tsx"
Cohesion: 0.18
Nodes (14): McpServersBrowse(), McpServersBrowseProps, McpServerTab, Favorites(), FavoritesProps, useDisableNativeMcpClientTools(), useFavoriteOperations(), builtinMcpServerOperation (+6 more)

### Community 69 - "lib/core/queries/role.ts"
Cohesion: 0.15
Nodes (16): appIdentityRoleAssignmentsQueryOpts(), getMissingRoleDefinitions(), queryOpts, resourceRoleDefinitionQueryOpts(), roleDefinitionByNameQueryOpts(), roleQueryKeys, useAppIdentityRoleAssignmentsForResourceQuery(), useResourceRoleDefinitionsQuery() (+8 more)

### Community 70 - "lib/ui/CustomNodes/__test__/SubgraphCardNode.spec.tsx"
Cohesion: 0.10
Nodes (20): mockDispatch, mockUseActionMetadata, mockUseFlowErrorsForNode, mockUseIconUri, mockUseIsGraphCollapsed, mockUseIsLeafNode, mockUseMonitoringView, mockUseNewAdditiveSubgraphId (+12 more)

### Community 71 - "src/lib/core/actions/bjsworkflow/templates.ts"
Cohesion: 0.05
Nodes (67): ConfigureTemplateServiceOptions, initializeConfigureTemplateServices, getWorkflowAndManifest(), GetWorkflowAndManifestHandler, initializeServices(), initializeTemplateServices, initializeWorkflowMetadata, loadCustomTemplateArtifacts (+59 more)

### Community 72 - "lib/core/utils/graph.ts"
Cohesion: 0.21
Nodes (10): isWorkflowGraph(), mockGetMyOffice365ProfileOpenApiManifest, mockPostTeamsAdaptiveCardOpenApiManifest, mockSendAnOfficeOutlookEmailOpenApiManifest, getAllNodesInsideNode(), getAllSourceNodeIds(), getGraphNode(), getNode() (+2 more)

### Community 73 - "lib/core/state/mcp/mcpselectionslice.ts"
Cohesion: 0.16
Nodes (15): initializeConnectionMappings, initializeOperationsMetadata, SelectConnectors(), useConnectorSelectionStyles, initialSelectionState, mcpSelectionSlice, McpSelectionState, AppDispatch (+7 more)

### Community 74 - "lib/ui/FloatingRunButton/chat.tsx"
Cohesion: 0.12
Nodes (13): ChatAvailabilitySectionProps, ChatButton(), ChatButtonProps, ChatIcon, CloseIcon, ConnectToAgentSectionProps, CopyIcon, CredentialFieldProps (+5 more)

### Community 75 - "lib/ui/settings/index.tsx"
Cohesion: 0.08
Nodes (44): useRawInputParameters(), DataHandling(), DataHandlingSectionProps, General(), GeneralSectionProps, Networking(), NetworkingSectionProps, Security() (+36 more)

### Community 76 - "src/lib/core/state/workflow/workflowSelectors.ts"
Cohesion: 0.04
Nodes (68): deleteGraphNode, deleteOperation, deleteOperations, AddAgentHandoffPayload, generateHandoffToolName(), removeAgentHandoff, RemoveAgentHandoffPayload, useShowDeleteModalNodeId() (+60 more)

### Community 77 - "lib/ui/FloatingRunButton/index.tsx"
Cohesion: 0.16
Nodes (14): AllowedTriggerTypes, FloatingRunButton(), FloatingRunButtonProps, getPublishedRunUrl(), PayloadData, RunIcon, RunWithPayloadIcon, PayloadPopover() (+6 more)

### Community 78 - "lib/ui/panel/connectionsPanel/createConnection/__test__/createConnection.spec.tsx"
Cohesion: 0.20
Nodes (14): mockConnectionParameters, mockConnectionParameterSets, mockOauthWithTenantParameters, mockParameterSetsWithCredentialMapping, mockParameterSetWithClientCertAuth, mockParameterSetWithOAuth, mockParameterSetWithSPAuth, findConnectionsParamContainer() (+6 more)

### Community 79 - "lib/ui/panel/connectionsPanel/createConnection/custom/__test__/openAIConnector.spec.tsx"
Cohesion: 0.11
Nodes (15): capturedOnOptionSelect, defaultProps, mockFetchAccountById, mockFetchAccountKeysById, mockRefetchAPIMAccountApis, mockRefetchAPIMAccounts, mockRefetchServiceAccounts, mockRefetchServiceProjects (+7 more)

### Community 80 - "src/lib/core/utils/loops.ts"
Cohesion: 0.06
Nodes (69): getTriggerNode(), getTriggerNodeId(), addForeachToNode, buildSegmentPath(), checkArrayInRepetition(), Foreach, getArrayDetailsForNestedForeach(), getExtraSegments() (+61 more)

### Community 81 - "src/lib/core/utils/swagger/operation.ts"
Cohesion: 0.06
Nodes (65): addDefaultSecureSettings(), getLegacyConnectionReferenceKey(), getInputDependencies(), getSwaggerOutputAndTokenData(), updateOutputsAndTokens(), updateParameterConditionalVisibilityAndRefreshOutputs, updateSplitOnSetting(), NodeInputsWithDependencies (+57 more)

### Community 82 - "WorkflowTemplateData"
Cohesion: 0.18
Nodes (16): addWorkflowsData, loadResourceDetailsFromWorkflowSource, saveWorkflowsData, WorkflowTemplateData, ConfigureWorkflowsPanel(), ConfigureWorkflowsTabProps, useStyles, useConfigureWorkflowPanelTabs() (+8 more)

### Community 83 - "src/lib/core/actions/bjsworkflow/connections.ts"
Cohesion: 0.05
Nodes (61): ApiHubAuthentication, trySetDefaultConnectionForNode(), autoCreateConnectionIfPossible(), ConnectionPayload, connectorHasMultiAuth(), getConnectionMappingForNode(), getConnectionProperties(), getConnectionPropertiesIfRequired() (+53 more)

### Community 84 - "lib/core/mcp/McpDataProvider.tsx"
Cohesion: 0.15
Nodes (13): initializeMcpServices, McpServiceOptions, resetMcpStateOnResourceChange, McpDataProvider(), McpDataProviderProps, InitialResourceState, initialState, resourceSlice (+5 more)

### Community 85 - "src/lib/core/state/designerOptions/designerOptionsSelectors.ts"
Cohesion: 0.06
Nodes (51): NodeStaticResults, StaticResultOption, useIsOperationMissingConnection(), useSwagger(), useEditableCodeViewEnabled(), useHostOptions(), useIsXrmConnectionReferenceMode(), usePanelTabHideKeys() (+43 more)

### Community 86 - "Test Coverage"
Cohesion: 0.12
Nodes (16): 1. Basic Rendering, 2. Chat Dialog Functionality, 3. Info Dialog - Draft Mode, 4. Info Dialog - Production Mode, 5. Child Components, 6. useAgentUrl Hook, 7. Tooltip Behavior, Chat Button Test Suite (+8 more)

### Community 87 - "lib/ui/mcp/wizard/McpWizard.tsx"
Cohesion: 0.17
Nodes (14): deinitializeOperations, connectorTableCellStyles, lastCellStyles, ListConnectors(), LogicAppSelector(), useMcpDetailsStyles, ListOperations(), McpPanelRoot() (+6 more)

### Community 88 - "src/lib/core/actions/bjsworkflow/settings.ts"
Cohesion: 0.08
Nodes (68): areRequestOptionsSupported(), areTrackedPropertiesSupported(), ConcurrencySettings, CorrelationSettings, getAsynchronous(), getConcurrency(), getConditionExpressions(), getCorrelationSettings() (+60 more)

### Community 89 - "src/lib/core/actions/bjsworkflow/configuretemplate.ts"
Cohesion: 0.08
Nodes (59): addWorkflowsData, deleteWorkflowData, getAllParametersForWorkflows(), getConnectionsForConsumption(), getConnectionsForStandard(), getDefinitionAndUsedConnectionMappings(), getFeaturedConnectorsForWorkflows(), getTemplateConnections() (+51 more)

### Community 90 - "lib/ui/panel/connectionsPanel/selectConnection/connectionTable.tsx"
Cohesion: 0.26
Nodes (11): ConnectionTableProps, ConnectionTableDetailsButton(), ConnectionTableDetailsButtonProps, compareFlattenedConnections(), ConnectionWithFlattenedProperties, flattenConnection(), getLabelForConnection(), getSubLabelForConnection() (+3 more)

### Community 91 - "src/lib/ui/panel/connectionsPanel/createConnection/createConnection.tsx"
Cohesion: 0.06
Nodes (48): needsOAuth(), useHasRequiredRoleDefinitionsQuery(), useHasRoleAssignmentsWritePermissionQuery(), useSubscriptions(), useTenants(), isA2AKind(), isAgentWorkflow(), useShouldEnableAPIMGatewayConnection() (+40 more)

### Community 93 - "src/lib/core/utils/parameters/segment.ts"
Cohesion: 0.06
Nodes (23): getClosestRepetitionValue(), getFullPath(), parseForeach(), FxBrandColor, FxIcon, ParameterBrandColor, ParameterIcon, VariableBrandColor (+15 more)

### Community 94 - "lib/ui/panel/recommendation/details/connectorDetailsView.tsx"
Cohesion: 0.25
Nodes (9): ConnectorDetailsView(), ConnectorDetailsViewProps, OperationAccordionItem(), OperationAccordionItemProps, OperationsAccordion(), OperationsAccordionProps, useOperationsByConnector(), useConnectorDetailsViewStyles (+1 more)

### Community 95 - "src/lib/ui/settings/index.tsx"
Cohesion: 0.09
Nodes (47): SettingData, Settings, useOutputParameters(), SettingSectionName, SettingsState, initialState, settingsSlice, isSecureOutputsLinkedToInputs() (+39 more)

### Community 96 - "RootState"
Cohesion: 0.09
Nodes (43): useParameterDefinition(), workflowsHaveErrors(), formatNameWithIdentifierToDisplay(), getDateTimeString(), getSupportedSkus(), useTemplate(), useTemplateWorkflowResources(), RootState (+35 more)

### Community 97 - "useNodeDisplayName"
Cohesion: 0.07
Nodes (40): useShowMultiSelectDeleteModal(), useOperationVisuals(), useCanWrapSelectedNodes(), useNodeDisplayName(), useNodeIds(), MultiSelectDeleteModal(), MultiSelectDeleteTag(), useMultiSelectDeleteModalStyles (+32 more)

### Community 98 - "lib/ui/panel/agentChat/__test__/agentChat.spec.tsx"
Cohesion: 0.16
Nodes (11): capturedChatbotUIProps, createPanelContainerRef(), mockCancelRun, mockDispatch, mockInvokeAgentChat, mockRefetchChatHistory, mockRefreshChat, renderAgentChat() (+3 more)

### Community 99 - "src/lib/core/state/global.ts"
Cohesion: 0.09
Nodes (32): AllCustomCodeFiles, CustomCode, CustomCodeFileNameMapping, CustomCodeWithData, NodeId, ConnectionReferenceMap, connectionSlice, getReferenceForConnection() (+24 more)

### Community 100 - "src/lib/core/utils/parameters/dynamicdata.ts"
Cohesion: 0.09
Nodes (42): getDynamicSchemaProperties(), getDynamicTreeItems(), getDynamicTreeValueIdFromCollectionDataValue(), getFirstArrayProperty(), getLegacyDynamicSchema(), getLegacyDynamicTreeItems(), getLegacyDynamicValues(), getListDynamicValues() (+34 more)

### Community 101 - "lib/core/actions/bjsworkflow/delete.ts"
Cohesion: 0.08
Nodes (24): getTemplateParameters(), deleteCustomCodeInfo(), DeleteGraphPayload, deleteMcpServerNode, deleteOperationDetails(), DeleteOperationPayload, deleteOperations, DeleteOperationsPayload (+16 more)

### Community 102 - "useTemplatesStrings"
Cohesion: 0.09
Nodes (36): validateTriggerDescription(), useAllLogicApps(), useLocations(), useLogicApps(), useResourceGroups(), useSubscriptions(), useTemplateConnections(), useTemplateParameterDefinitions() (+28 more)

### Community 103 - "src/lib/core/state/templates/store.ts"
Cohesion: 0.11
Nodes (23): createQueryClient(), getPersister(), queryKeyDefaultWhitelist, ReactQueryProvider(), ReactQueryProviderProps, closePanelReducer(), ConfigPanelView, initialState (+15 more)

### Community 104 - "RootState"
Cohesion: 0.21
Nodes (9): RootState, lastCellStyles, toolNameCellStyles, toolTableCellStyles, OperationProgress(), OperationCellProps, OperationSelectionGrid(), OperationSelectionGridProps (+1 more)

### Community 105 - "src/lib/core/state/connection/connectionSelector.ts"
Cohesion: 0.13
Nodes (36): useIsAgentSubGraph(), closeConnectionsFlow, getConnectionMetadata(), reloadParametersTab, updateNodeConnection, useConnectionsForConnector(), useConnectionMapping(), useConnectionRefs() (+28 more)

### Community 106 - "src/lib/core/index.ts"
Cohesion: 0.08
Nodes (29): useShowPerformanceDebug(), useReduxActionCounts(), useIsCombineVariableModalOpen(), useIsTriggerDescriptionModalOpen(), useKindChangeDialogType(), useResolveCombineVariable(), useShouldPromptForTriggerDescription(), initialState (+21 more)

### Community 107 - "src/lib/core/queries/browse.ts"
Cohesion: 0.08
Nodes (37): filterOperationsByConnector(), filterOperationsFromList(), isManagedConnector(), pagedOpts, queryOpts, useAllActions(), useAllConnectors(), useAllOperations() (+29 more)

### Community 108 - "src/lib/core/actions/bjsworkflow/serializer.ts"
Cohesion: 0.10
Nodes (42): MCP_AUTH_PROPERTY_KEYS, AgentConnectionInfo, ApiManagementConnectionInfo, FunctionConnectionInfo, getActions(), getNodeOutputOperations(), getOperationInputsToSerialize(), getRetryPolicy() (+34 more)

### Community 109 - "src/lib/core/state/templates/templateSlice.ts"
Cohesion: 0.10
Nodes (34): loadResourceDetailsFromWorkflowSource, saveWorkflowsData, WorkflowTemplateData, ConnectionsAndWorkflowsData, ParametersAndWorkflowsData, useWorkflowsInApp(), initialState, templateSlice (+26 more)

### Community 111 - "lib/common/utilities/__test__/error.test.ts"
Cohesion: 0.29
Nodes (9): EXPECTED_EMPTY_ERROR_PROPS, TEST_CODES, TEST_ERROR_RUNS, TEST_MESSAGES, ErrorProps, ErrorRun, extractErrorInfo(), getMonitoringError() (+1 more)

### Community 112 - "src/lib/core/state/operation/operationMetadataSlice.ts"
Cohesion: 0.06
Nodes (37): resetNodesLoadStatus, AddDynamicInputsPayload, AddDynamicOutputsPayload, AddSettingsPayload, AddStaticResultsPayload, ClearDynamicIOPayload, DependencyType, DynamicLoadStatus (+29 more)

### Community 113 - "src/lib/ui/MonitoringTimeline/index.tsx"
Cohesion: 0.11
Nodes (28): useTimelineRepetitionIndex(), ConnectorIcon(), ConnectorIconProps, parseRepetitions(), TimelineRepetitionWithActions, TimelineRepetition, useTimelineRepetitionCount(), useTimelineRepetitions() (+20 more)

### Community 114 - "lib/core/parsers/addNodeToWorkflow.ts"
Cohesion: 0.48
Nodes (10): addAgentToolToWorkflow(), addChildEdge(), addChildNode(), addMcpServerToWorkflow(), addSwitchCaseToWorkflow(), createSubgraphNode(), handleExtraScopeNodeSetup(), createWorkflowEdge() (+2 more)

### Community 115 - "lib/ui/__test__/DesignerReactFlow.spec.tsx"
Cohesion: 0.20
Nodes (8): capturedReactFlowProps, mockAllAgentIds, mockDisconnectedNodes, mockDispatch, mockNodesMetadata, mockNotes, mockPanelSelectedNodeIds, mockSetViewport

### Community 116 - "lib/core/state/mcp/panel/mcpPanelSlice.ts"
Cohesion: 0.18
Nodes (13): CloseIcon, SelectionPanel(), useMcpConnectorPanelTabs(), CloseIcon, EditOperationPanel(), ConfigPanelView, initialState, mcpPanelSlice (+5 more)

### Community 117 - "lib/ui/panel/nodeDetailsPanel/tabs/parametersTab/custom/deploymentModelResource.tsx"
Cohesion: 0.36
Nodes (4): CustomDeploymentModelResource(), deploymentModelNameStyle, useDeploymentModelResourceStyles, mockCreateNewDeployment

### Community 118 - "src/lib/core/state/workflow/workflowSlice.ts"
Cohesion: 0.18
Nodes (31): PasteScopeOperationPayload, isWorkflowOperationNode(), AddNodePayload, addNodeToWorkflow(), deleteMcpServerNodeFromWorkflow(), deleteNodeFromWorkflow(), DeleteNodePayload, deleteWorkflowNode() (+23 more)

### Community 120 - "fetchBuiltInToolRunData"
Cohesion: 0.20
Nodes (8): fetchBuiltInToolRunData, initializeInputsOutputsBinding, mockDispatch, mockGetAgentActionsRepetition, mockGetAgentRepetition, mockGetContent, mockParseInputs, mockParseOutputs

### Community 121 - "lib/ui/connections/__tests__/edge.spec.tsx"
Cohesion: 0.29
Nodes (6): LogicAppsEdgeProps, mockUseActionMetadata, mockUseIsNodeSelectedInOperationPanel, mockUseNodeEdgeTargets, mockUseNodeMetadata, mockUseReadOnly

### Community 122 - "src/lib/ui/panel/errorsPanel/tabs/errorsTab.hooks.ts"
Cohesion: 0.13
Nodes (30): useAllConnectionErrors(), useErrorsPanelSelectedTabId(), useFlowErrors(), useWorkflowParameterValidationErrors(), CollapseIcon, ErrorCategory(), ErrorCategoryProps, ExpandIcon (+22 more)

### Community 123 - "lib/ui/panel/connectionsPanel/createConnection/formInputs/gatewayPicker.tsx"
Cohesion: 0.43
Nodes (5): GatewayPicker(), GatewayPickerProps, GatewaysWithNewOption, NewGatewayOption, useGatewayPickerStyles

### Community 124 - "src/lib/core/utils/swagger/inputsbuilder.ts"
Cohesion: 0.09
Nodes (37): getExtraSegments(), reduceRedundantSegments(), transformInputParameter(), updateParameterWithValues(), countOccurrence(), getExtensionInputs(), getFormDataValue(), getPathInputs() (+29 more)

### Community 125 - "lib/core/mcp/utils/serializer.ts"
Cohesion: 0.16
Nodes (15): getAuthenticationDetails(), getConnectionsToUpdate(), getUpdatedConnectionForManagedApiReference(), hasNewConnectionRuntimeUrl(), hasNewKeys(), convertConnectionsDataToReferences(), getStandardLogicAppId(), getConnectionsInWorkflowApp() (+7 more)

### Community 126 - "src/lib/ui/CustomNodes/__test__/OperationCardNode.spec.tsx"
Cohesion: 0.05
Nodes (37): mockDispatch, mockUseActionMetadata, mockUseAllOperations, mockUseConnectorName, mockUseFlowErrorsForNode, mockUseIsA2AWorkflow, mockUseIsCopilotModifiedNode, mockUseIsLeafNode (+29 more)

### Community 128 - "lib/ui/panel/connectionsPanel/actionList/actionList.tsx"
Cohesion: 0.40
Nodes (4): ActionList(), ActionListProps, ConnectionActionHeader(), ConnectorActionHeaderProps

### Community 129 - "src/lib/core/state/undoRedo/undoRedoTypes.ts"
Cohesion: 0.14
Nodes (25): onRedoClick, onUndoClick, initialState, undoRedoSlice, CompressedSliceMap, StateHistory, StateHistoryItem, UNDO_REDO_SLICE_NAMES (+17 more)

### Community 130 - "src/lib/ui/CustomNodes/components/card/actionCard.tsx"
Cohesion: 0.11
Nodes (18): ActionCard(), ActionCardProps, colors, useCardStyles, CardErrorBadge(), CardIndicatorBadges(), CardIndicatorBadgesProps, Indicator (+10 more)

### Community 131 - "src/lib/ui/templates/templateoverview.tsx"
Cohesion: 0.12
Nodes (25): isMultiWorkflowTemplate(), useTemplateManifest(), ConnectionMapping, getQuickViewTabs(), getUniqueConnectors(), CreateWorkflowPanelProps, QuickViewPanel(), QuickViewPanelHeader() (+17 more)

### Community 132 - "src/lib/ui/connections/dropTarget.tsx"
Cohesion: 0.09
Nodes (24): useIsDarkMode(), useNodesTokenDependencies(), useOperationsInputParameters(), useAllGraphParents(), useAddButtonStyles, AddButton(), AddButtonProps, Plus() (+16 more)

### Community 142 - "src/lib/core/state/panel/panelSlice.ts"
Cohesion: 0.10
Nodes (24): getInitialConnectionContentState(), getInitialDiscoveryContentState(), getInitialErrorContentState(), getInitialNodeSearchContentState(), getInitialOperationContentState(), getInitialWorkflowParametersContentState(), initialState, panelSlice (+16 more)

### Community 143 - "src/lib/core/state/workflow/workflowInterfaces.ts"
Cohesion: 0.12
Nodes (18): mockGetConnectorWithSwagger, mockGetOperationManifest, agentMcpWorkflowDefinitionInput, expectedAgentMcpWorkflowDefinitionOutput, expectedScopedWorkflowDefinitionOutput, scopedWorkflowDefinitionInput, expectedSimpleWorkflowDefinitionOutput, simpleWorkflowDefinitionInput (+10 more)

### Community 144 - "src/lib/core/state/designerView/designerViewSlice.ts"
Cohesion: 0.09
Nodes (21): DesignerViewState, EdgeContextMenuObject, NodeContextMenuObject, designerViewSlice, initialState, DraftEdge(), ArrowCap(), HandoffIcon() (+13 more)

### Community 145 - "src/lib/core/utils/validation.ts"
Cohesion: 0.10
Nodes (26): RFC-3339, RFC-5322, getTitleOrSummary(), isOneOf(), isParameterRequired(), shouldUseParameterInGroup(), isISO8601(), isValidArrayFormat() (+18 more)

### Community 146 - "src/lib/ui/panel/connectionsPanel/createConnection/createConnectionInternal.tsx"
Cohesion: 0.13
Nodes (25): getApiHubAuthentication(), getApiHubAuthenticationIfRequired(), updateMcpConnection, updateTemplateConnection, updateNewConnectionInQueryCache(), useConnector(), useGateways(), useGatewayServiceConfig() (+17 more)

### Community 147 - "src/lib/core/state/mcp/store.ts"
Cohesion: 0.15
Nodes (20): isDependentStaticParameter(), useEditSnapshot(), AppDispatch, AppStore, rootReducer, RootState, useOperationDynamicInputsError(), getGroupIdFromParameterId() (+12 more)

### Community 148 - "src/lib/ui/panel/recommendation/browse/mcpToolWizard.tsx"
Cohesion: 0.09
Nodes (24): useMcpWizardAllowedTools(), useMcpWizardConnectionId(), useMcpWizardHeaders(), useMcpWizardStep(), MCP_WIZARD_STEP, mcpConnectionParameterSets, McpToolWizard(), useMcpToolWizardStyles (+16 more)

### Community 149 - "src/lib/ui/CustomNodes/__test__/ScopeCardNode.spec.tsx"
Cohesion: 0.06
Nodes (30): mockDispatch, mockUseActionMetadata, mockUseAllOperations, mockUseBrandColor, mockUseConnectorName, mockUseFlowErrorsForNode, mockUseHandoffActionsForAgent, mockUseIconUri (+22 more)

### Community 150 - "src/lib/core/BJSWorkflowProvider.tsx"
Cohesion: 0.12
Nodes (20): Workflow, initializeDiscoveryPanelFavoriteOperations(), BJSWorkflowProvider(), BJSWorkflowProviderProps, DataProviderInner(), MultiTriggerContext, useIsUnsupportedMultipleTriggers(), DesignerProviderProps (+12 more)

### Community 151 - "src/lib/ui/panel/templatePanel/createWorkflowPanel/createWorkflowPanel.tsx"
Cohesion: 0.16
Nodes (19): validateWorkflowName(), validateWorkflowsBasicInfo, useExistingWorkflowNames(), useWorkflowBasicsEditable(), getCurrentWorkflowNames(), CreateWorkflowPanel(), CreateWorkflowPanelHeader(), CreateWorkflowTabProps (+11 more)

### Community 152 - "WorkflowNode"
Cohesion: 0.16
Nodes (27): buildState(), nodeMap, addAgentToolToWorkflow(), addChildEdge(), addChildNode(), addMcpServerToWorkflow(), addSwitchCaseToWorkflow(), createSubgraphNode() (+19 more)

### Community 153 - "src/lib/ui/panel/nodeDetailsPanel/tabs/agentHarnessTab/agentHarnessTab.tsx"
Cohesion: 0.09
Nodes (23): AgentHarnessData, AgentHarnessInputFile, AgentHarnessSkill, AgentHarnessTab(), ExpressionTokenPill(), extractErrorDetail(), getExpressionTitle(), inputFileColumns (+15 more)

### Community 154 - "src/lib/common/models/workflow.ts"
Cohesion: 0.13
Nodes (20): isAgentSubgraphFromMetadata(), ConnectionMapping, ConnectionReference, ConnectionReferences, Impersonation, WorkflowParameter, AgentUtils, getSKUDefaultHostOptions() (+12 more)

### Community 155 - "lib/ui/templates/connections/workflowconnections.tsx"
Cohesion: 0.11
Nodes (16): updateTemplateConnection, CompactConnectorConnectionStatus(), ConnectorConnectionName(), ConnectorIcon(), ConnectorIconWithName(), ConnectorWithDetails(), textStyles, ConnectionItem (+8 more)

### Community 156 - "src/lib/ui/mcp/wizard/McpWizard.tsx"
Cohesion: 0.13
Nodes (19): deinitializeOperations, resetQueriesOnRegisterMcpServer(), useEmptyLogicApps(), McpServerCreateData, McpPanelView, ConnectionDisplayName(), connectorTableCellStyles, lastCellStyles (+11 more)

### Community 157 - "src/lib/core/state/mcp/panel/mcpPanelSlice.ts"
Cohesion: 0.16
Nodes (17): initializeOperationsMetadata, clearAllSelectionsReducer(), initialSelectionState, mcpSelectionSlice, McpSelectionState, closePanelReducer(), ConfigPanelView, initialState (+9 more)

### Community 158 - "src/lib/core/mcp/utils/serializer.ts"
Cohesion: 0.17
Nodes (20): getStandardLogicAppId(), getConnectionsInWorkflowApp(), generateDefinition(), generateInputsSchema(), getConnectionsDataToSerialize(), getMcpConnectionData(), getMcpServerInfo(), getOperationDefinitionAndTriggerInputs() (+12 more)

### Community 159 - "src/lib/core/state/workflow/helper.ts"
Cohesion: 0.14
Nodes (12): initialState, mockGraph, collapseFlowTree(), markDownstreamForCollapsed(), pruneTree(), traverseForMapping(), buildNodeIndex(), getWorkflowGraphPath() (+4 more)

### Community 160 - "src/lib/core/actions/bjsworkflow/mcp.ts"
Cohesion: 0.14
Nodes (18): tryGetMostRecentlyUsedConnectionId(), initializeConnectionMappings, initializeMcpServices, initializeServices(), McpServiceOptions, TODO: Initialize dynamic data without user inputs in this section., resetMcpStateOnResourceChange, McpDataProvider() (+10 more)

### Community 161 - "src/lib/core/state/exportconsumption/store.ts"
Cohesion: 0.11
Nodes (14): ExportDataProvider(), ExportDataProviderProps, ExportWizardContext, ExportWizardContextContext, ExportWizardProvider(), ExportWizardProviderProps, initialState, resourceSlice (+6 more)

### Community 162 - "src/lib/core/parsers/BJSWorkflow/BJSDeserializer.ts"
Cohesion: 0.21
Nodes (19): UnsupportedException, UnsupportedExceptionCode, UnsupportedExceptionName, addActionsInstanceMetaData(), addTriggerInstanceMetaData(), buildGraphFromActions(), Deserialize(), getAllActionNames() (+11 more)

### Community 163 - "src/lib/core/actions/bjsworkflow/wrapInScope.ts"
Cohesion: 0.19
Nodes (18): ScopeDefinition, scopeDefinitions, WrapScopeType, wrapSelectedNodesInScope, WrapSelectedNodesPayload, getWorkflowNodeFromGraphState(), getImmediateSourceNodeIds(), getNewNodeId() (+10 more)

### Community 164 - "AppDispatch"
Cohesion: 0.24
Nodes (13): ConfigureTemplateWizard(), getSaveMenuButtons(), AppDispatch, initialState, tabSlice, TabState, connectionsTab(), TemplateWizardTabProps (+5 more)

### Community 165 - "src/lib/common/constants.ts"
Cohesion: 0.15
Nodes (16): connectorDeclaresOwnAuth(), isManagedMcpConnector(), TODO: Prefix the existing profiling events to have this key, SCHEMA, SWAGGER, usesMcpManagedIdentityFallback(), VARIABLE_TYPE, ErrorProps (+8 more)

### Community 166 - "src/lib/core/queries/connections.ts"
Cohesion: 0.14
Nodes (15): getConnection(), getConnectionFromResource(), getConnectionsForConnector(), getUniqueConnectionName(), useConnectionById(), useConnectionResource(), useNodeConnectionName(), isConnectionReferenceValid() (+7 more)

### Community 167 - "src/lib/core/queries/role.ts"
Cohesion: 0.14
Nodes (16): appIdentityRoleAssignmentsQueryOpts(), queryOpts, resourceRoleDefinitionQueryOpts(), roleDefinitionByIdQueryOpts(), roleQueryKeys, useAppIdentityRoleAssignmentsForResourceQuery(), useResourceRoleDefinitionsQuery(), useRoleDefinitionsByIdQuery() (+8 more)

### Community 168 - "src/lib/ui/CustomNodes/__test__/SubgraphCardNode.spec.tsx"
Cohesion: 0.10
Nodes (20): mockDispatch, mockUseActionMetadata, mockUseFlowErrorsForNode, mockUseIconUri, mockUseIsGraphCollapsed, mockUseIsLeafNode, mockUseMonitoringView, mockUseNewAdditiveSubgraphId (+12 more)

### Community 169 - "src/lib/core/utils/graph.ts"
Cohesion: 0.17
Nodes (13): extendUpstreamNodeIdsForScopePaste(), mockGetMyOffice365ProfileOpenApiManifest, mockPostTeamsAdaptiveCardOpenApiManifest, mockSendAnOfficeOutlookEmailOpenApiManifest, isWorkflowGraph(), getAllNodesInsideNode(), getAllSourceNodeIds(), getGraphNode() (+5 more)

### Community 170 - "src/lib/ui/templates/connections/workflowconnections.tsx"
Cohesion: 0.22
Nodes (15): getConnector(), getOperation(), ConnectorInfo, useConnectorInfo(), ConnectorIcon(), ConnectorIconWithName(), textStyles, ConnectionItem (+7 more)

### Community 171 - "src/lib/ui/FloatingRunButton/index.tsx"
Cohesion: 0.17
Nodes (15): resetDesignerDirtyState, useIsDesignerDirty(), getCustomCodeFilesWithData(), AllowedTriggerTypes, FloatingRunButton(), FloatingRunButtonProps, getPublishedRunUrl(), PayloadData (+7 more)

### Community 172 - "src/lib/ui/panel/connectionsPanel/createConnection/__test__/createConnection.spec.tsx"
Cohesion: 0.17
Nodes (16): CreateConnectionProps, findConnectionsParamContainer(), findInput(), findLegacyMultiAuth(), findMultiAuthInput(), findMultiAuthManagedIdentityPicker(), findParameterComponents(), findParameterSetsDropdown() (+8 more)

### Community 173 - "src/lib/core/graphlayout/elklayout.tsx"
Cohesion: 0.15
Nodes (17): convertElkGraphToReactFlow(), convertWorkflowGraphToElkGraph(), defaultLayoutOptions, elk, elkLayout(), exportForTesting, LayoutContext, LayoutContextType (+9 more)

### Community 174 - "src/lib/core/mcp/utils/queries.ts"
Cohesion: 0.19
Nodes (13): queryOpts, useAllManagedConnectors(), useOperationsByConnectorQuery(), ConnectorBrowseView(), ConnectorBrowseViewProps, matchesSearch(), sortConnectors(), supportsActions() (+5 more)

### Community 175 - "src/lib/ui/templates/filters/templatesearchfilters.tsx"
Cohesion: 0.18
Nodes (15): getTemplatePublishCategories(), getUniqueConnectorsFromConnections(), TemplateFeaturedConnectors(), TemplateSelectHandler, Filters(), GalleryTab, SortDropdown(), useTemplateSearchFiltersStyles (+7 more)

### Community 176 - "src/lib/ui/FloatingRunButton/chat.tsx"
Cohesion: 0.12
Nodes (13): ChatAvailabilitySectionProps, ChatButton(), ChatButtonProps, ChatIcon, CloseIcon, ConnectToAgentSectionProps, CopyIcon, CredentialFieldProps (+5 more)

### Community 177 - "lib/ui/panel/nodeDetailsPanel/tabs/parametersTab/helpers.ts"
Cohesion: 0.20
Nodes (15): getCognitiveServiceAccountDeploymentsForConnection(), ParameterGroup, categorizeConnections(), CategorizedConnections, FirstDeploymentInfo, getConnectionToAssign(), getDeploymentIdParameter(), getFirstDeploymentInfo() (+7 more)

### Community 178 - "src/lib/core/parsers/ParseReduxAction.ts"
Cohesion: 0.22
Nodes (12): getConnectionsApiAndMapping(), updateWorkflowParameters(), DeserializedWorkflow, buildConnectionReferencesFromConnectionsParameter(), combineSequentialInitializeVariables(), detectSequentialInitializeVariables(), flattenWorkflowNodes(), hasVariableReference() (+4 more)

### Community 179 - "src/lib/core/utils/monitoring/binders/__test__/outputs.test.ts"
Cohesion: 0.18
Nodes (7): DefaultOutputsBinder, ManifestOutputsBinder, OutputsBinder, nodeParameters, operationMetadata, outputParametersByName, parsedOutputs

### Community 180 - "src/lib/ui/panel/connectionsPanel/createConnection/custom/__test__/openAIConnector.spec.tsx"
Cohesion: 0.11
Nodes (15): capturedOnOptionSelect, defaultProps, mockFetchAccountById, mockFetchAccountKeysById, mockRefetchAPIMAccountApis, mockRefetchAPIMAccounts, mockRefetchServiceAccounts, mockRefetchServiceProjects (+7 more)

### Community 181 - "src/lib/core/actions/bjsworkflow/monitoring.ts"
Cohesion: 0.15
Nodes (12): convertToBoundParameters(), getInputsOutputsBinding(), getParametersToBind(), initializeInputsOutputsBinding, InitInputsOutputsPayload, InputsOutputsBinding, mockGetAgentActionsRepetition, mockGetAgentRepetition (+4 more)

### Community 182 - "Binder"
Cohesion: 0.22
Nodes (3): Binder, getDynamicListLookupValue(), getDynamicTreeLookupValue()

### Community 183 - "Test Coverage"
Cohesion: 0.12
Nodes (16): 1. Basic Rendering, 2. Chat Dialog Functionality, 3. Info Dialog - Draft Mode, 4. Info Dialog - Production Mode, 5. Child Components, 6. useAgentUrl Hook, 7. Tooltip Behavior, Chat Button Test Suite (+8 more)

### Community 184 - "src/lib/ui/panel/connectionsPanel/selectConnection/connectionTable.tsx"
Cohesion: 0.26
Nodes (12): ConnectionTable(), ConnectionTableProps, ConnectionTableDetailsButton(), ConnectionTableDetailsButtonProps, compareFlattenedConnections(), ConnectionWithFlattenedProperties, flattenConnection(), getLabelForConnection() (+4 more)

### Community 185 - "src/lib/core/state/notes/notesSlice.ts"
Cohesion: 0.21
Nodes (11): useChangeCount(), getNotesState(), useIsNotesDirty(), useNote(), useNotes(), useNotesChangeCount(), initialState, markDirty() (+3 more)

### Community 186 - "src/lib/core/utils/monitoring/binders/__test__/inputs.test.ts"
Cohesion: 0.20
Nodes (6): InputsBinder, ManifestInputsBinder, inputParametersByName, nodeParameters, operationMetadata, parsedInputs

### Community 187 - "src/lib/ui/panel/agentChat/__test__/agentChat.spec.tsx"
Cohesion: 0.16
Nodes (11): cache, intl, mockUseIntl(), capturedChatbotUIProps, createPanelContainerRef(), mockCancelRun, mockDispatch, mockInvokeAgentChat (+3 more)

### Community 188 - "lib/core/actions/bjsworkflow/__test__/connections.spec.ts"
Cohesion: 0.22
Nodes (11): getConnectionMappingForNode(), getLegacyConnectionReferenceKey(), getManifestBasedConnectionMapping(), isApiConnectionType(), isConnectionRequiredForOperation(), isOpenApiConnectionType(), getOperationInfo(), mockApiConnection (+3 more)

### Community 189 - "src/lib/core/state/workflowparameters/workflowparametersselector.ts"
Cohesion: 0.31
Nodes (10): deleteWorkflowParameter, useLegacyWorkflowParameters(), getWorkflowParametersState(), useIsWorkflowParametersDirty(), useWorkflowParameters(), useWorkflowParametersChangeCount(), capturedProps, defaultProps (+2 more)

### Community 190 - "lib/ui/panel/recommendation/__test__/recommendationPanelContext.spec.tsx"
Cohesion: 0.17
Nodes (12): createTestStore(), createWrapper(), mockSelectBrowseCategory, mockSelectOperationGroupId, mockUseAllOperations, mockUseDiscoveryPanelIsAddingTrigger, mockUseDiscoveryPanelSearchTerm, mockUseDiscoveryPanelSelectedBrowseCategory (+4 more)

### Community 191 - "constructInputValues"
Cohesion: 0.24
Nodes (12): constructInputValues(), serializeParametersFromSwagger(), encodePathValue(), buildOperationDetailsFromControls(), createMultipart(), groupByFormDataParameterName(), serializeBody(), serializeFormData() (+4 more)

### Community 192 - "updateNodeFromCodeView.spec.ts"
Cohesion: 0.20
Nodes (11): buildWorkflowState(), composeWithoutRunAfter, makeNodeData(), makeStore(), mockConnector, mockInitializeVariables, mockManagedMcp, mockManifest (+3 more)

### Community 193 - "src/lib/ui/mcp/operations/OperationSelectionGrid.tsx"
Cohesion: 0.27
Nodes (8): getDynamicSchemaDependencies(), operationHasEmptyStaticDependencies(), OperationProgress(), getColumnsCount(), OperationCellProps, OperationSelectionGrid(), OperationSelectionGridProps, useOperationSelectionGridStyles

### Community 194 - "src/lib/core/actions/bjsworkflow/delete.ts"
Cohesion: 0.24
Nodes (10): deleteCustomCodeInfo(), DeleteGraphPayload, deleteMcpServerNode, deleteOperationDetails(), DeleteOperationPayload, DeleteOperationsPayload, deletePinnedOperation(), removeAllTokensFromNode() (+2 more)

### Community 195 - "src/lib/ui/CustomNodes/NoteNode/index.tsx"
Cohesion: 0.29
Nodes (7): DeleteIcon, NoteNode(), ColorButton(), ColorIcon, MarkdownRenderer(), YoutubeEmbed(), useNoteNodeStyles

### Community 196 - "src/lib/ui/panel/nodeDetailsPanel/tabs/parametersTab/custom/deploymentModelResource.tsx"
Cohesion: 0.25
Nodes (6): CustomDeploymentModelResource(), deploymentModelNameStyle, useDeploymentModelResourceStyles, mockAvailableModels, mockCreateNewDeployment, OPENAI_CATALOG

### Community 197 - "lib/core/configuretemplate/utils/errors.ts"
Cohesion: 0.27
Nodes (9): TemplateErrors, WorkflowErrors, ApiValidationError, appendToError(), ErrorDetails, ErrorInfoWithTarget, parseValidationError(), TemplateValidationError (+1 more)

### Community 198 - "src/lib/core/configuretemplate/utils/errors.ts"
Cohesion: 0.27
Nodes (9): TemplateErrors, WorkflowErrors, ApiValidationError, appendToError(), ErrorDetails, ErrorInfoWithTarget, parseValidationError(), TemplateValidationError (+1 more)

### Community 199 - "src/lib/ui/__test__/DesignerReactFlow.spec.tsx"
Cohesion: 0.20
Nodes (8): capturedReactFlowProps, mockAllAgentIds, mockDisconnectedNodes, mockDispatch, mockNodesMetadata, mockNotes, mockPanelSelectedNodeIds, mockSetViewport

### Community 201 - "lib/core/state/workflow/helper.ts"
Cohesion: 0.36
Nodes (6): collapseFlowTree(), isA2AKind(), isAgentWorkflow(), pruneTree(), shouldClearNodeRunData(), traverseForMapping()

### Community 202 - "src/lib/core/actions/bjsworkflow/__test__/serializerAgentParams.spec.ts"
Cohesion: 0.38
Nodes (4): SerializedParameter, makeAgentModelTypeParam(), makeDeploymentModelPropParam(), makeParam()

### Community 203 - "src/lib/core/mcp/McpWizardProvider.tsx"
Cohesion: 0.33
Nodes (5): McpWizardContext, McpWrappedContext, McpWizardProvider(), McpWizardProviderProps, mcpStore

### Community 204 - "src/lib/__test__/redux-test-helper.tsx"
Cohesion: 0.38
Nodes (5): AppStore, ExtendedRenderOptions, renderWithRedux(), intlOnError, queryClient

### Community 207 - "src/lib/ui/panel/connectionsPanel/createConnection/formInputs/gatewayPicker.tsx"
Cohesion: 0.43
Nodes (5): GatewayPicker(), GatewayPickerProps, GatewaysWithNewOption, NewGatewayOption, useGatewayPickerStyles

### Community 208 - "getAndEscapeSegment"
Cohesion: 0.47
Nodes (6): serializeParameterWithPath(), deletePropertyValueWithSpecifiedPathSegment(), getAndEscapeSegment(), getPropertyValueWithSpecifiedPathSegments(), deletePropertyValueWithSpecifiedPathSegment(), getPropertyValueWithSpecifiedPathSegments()

### Community 211 - "src/lib/ui/panel/connectionsPanel/actionList/actionList.tsx"
Cohesion: 0.40
Nodes (4): ActionList(), ActionListProps, ConnectionActionHeader(), ConnectorActionHeaderProps

### Community 212 - "src/lib/ui/panel/connectionsPanel/selectConnection/__test__/selectConnection.spec.tsx"
Cohesion: 0.33
Nodes (4): SelectConnection(), defaultProps, mockApi, mockConnection

### Community 214 - "lib/ui/panel/recommendation/browse/__test__/mcpServersBrowse.spec.tsx"
Cohesion: 0.40
Nodes (5): createTestStore(), createWrapper(), mockOpenMcpToolWizard, mockUseConnectionsForConnector, mockUseMcpServersQuery

## Knowledge Gaps
- **1487 isolated node(s):** `cache`, `intl`, `SCHEMA`, `SWAGGER`, `VARIABLE_TYPE` (+1482 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **28 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `ApiConnectionOutputsBinder` connect `ApiConnectionOutputsBinder` to `src/lib/core/utils/monitoring/binders/__test__/outputs.test.ts`, `Binder`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **Why does `isOpenApiSchemaVersion()` connect `src/lib/common/models/workflow.ts` to `lib/index.tsx`, `src/lib/core/state/connection/connectionSelector.ts`, `src/lib/ui/panel/connectionsPanel/createConnection/createConnectionInternal.tsx`, `src/lib/core/actions/bjsworkflow/connections.ts`?**
  _High betweenness centrality (0.008) - this node is a cross-community bridge._
- **Are the 8 inferred relationships involving `getReactQueryClient()` (e.g. with `getCustomTemplates()` and `getTemplate()`) actually correct?**
  _`getReactQueryClient()` has 8 INFERRED edges - model-reasoned connections that need verification._
- **What connects `cache`, `intl`, `SCHEMA` to the rest of the system?**
  _1487 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `lib/core/utils/parameters/helper.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.03487064116985377 - nodes in this community are weakly interconnected._
- **Should `lib/core/state/workflow/workflowSelectors.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.03522450400278455 - nodes in this community are weakly interconnected._
- **Should `lib/core/utils/parameters/dynamicdata.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.04727272727272727 - nodes in this community are weakly interconnected._