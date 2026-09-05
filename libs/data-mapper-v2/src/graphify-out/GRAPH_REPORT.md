# Graph Report - src  (2026-09-05)

## Corpus Check
- 143 files · ~77,576 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1292 nodes · 3838 edges · 74 communities (62 shown, 8 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 74 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `017bfa58`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- MapDefinitionDeserializer
- MapDefinitionSerializer.ts
- images/FunctionIcons/FunctionIcons.tsx
- images/FunctionIcons/DataType16Icons.tsx
- images/FunctionIcons/DataType24Icons.tsx
- components/functionConfigurationMenu/inputTab/inputTab.tsx
- core/services/dataMapperApiService/index.ts
- DataMapDataProvider.tsx
- Schema.Utils.ts
- core/state/DataMapSlice.ts
- utils/__test__/DataMapUtils.spec.ts
- TrieTree
- components/common/selector/FileSelector.tsx
- MapChecker.Utils.ts
- components/schema/useSchema.ts
- src/components/functionIcon/FunctionIcon.tsx
- DataMapperDesigner.tsx
- Edge.Utils.ts
- Function.Utils.ts
- components/schema/SchemaPanel.tsx
- components/functionList/FunctionList.tsx
- components/canvas/ReactFlow.tsx
- DataMap.Utils.ts
- src/images/FunctionIcons/FunctionIcons.tsx
- ThemeConect.ts
- CustomValue.Utils.ts
- components/common/reactflow/FunctionNode.tsx
- ReactFlow.Util.ts
- Connection.Utils.ts
- src/core/state/selectors/selectors.ts
- components/functionConfigurationMenu/functionConfigurationPopover.tsx
- RootState
- src/components/functionsPanel/FunctionPanel.tsx
- ui/hooks/useAutoLayout.ts
- src/core/state/DataMapSlice.ts
- src/components/functionConfigurationMenu/inputTab/inputTab.tsx
- Icon.Utils.tsx
- FunctionData
- intl-test-helper.tsx
- utils/reactFlowTesting/NodeInspector.tsx
- ReactFlow.ts
- Svg.d.ts
- src/components/schema/useSchema.ts
- src/images/FunctionIcons/DataType16Icons.tsx
- src/images/FunctionIcons/DataType24Icons.tsx
- src/core/state/Store.ts
- core/index.ts
- applyConnectionValue
- TrieTree
- src/components/canvas/ReactFlow.tsx
- customTokens
- src/components/test/TestPanel.tsx
- src/components/common/selector/FileSelector.tsx
- isEmptyConnection
- src/core/services/dataMapperApiService/index.ts
- src/core/state/PanelSlice.ts
- core/state/Store.ts
- src/components/commandBar/EditorCommandBar.tsx
- DataMapperApiService
- DataMapperApiService
- core/state/PanelSlice.ts
- DataMapperDesignerProvider.tsx
- components/commandBar/EditorCommandBar.tsx
- src/components/common/reactflow/FunctionNode.tsx
- src/components/schema/SchemaPanel.tsx
- components/common/panel/Panel.tsx
- src/ui/hooks/useAutoLayout.ts
- FunctionManifest
- MapDefinition.Utils.ts
- src/utils/reactFlowTesting/NodeInspector.tsx

## God Nodes (most connected - your core abstractions)
1. `FunctionData` - 60 edges
2. `isSchemaNodeExtended()` - 43 edges
3. `MapDefinitionDeserializer` - 38 edges
4. `ConnectionDictionary` - 38 edges
5. `applyConnectionValue()` - 36 edges
6. `isNodeConnection()` - 32 edges
7. `RootState` - 31 edges
8. `RootState` - 31 edges
9. `isCustomValueConnection()` - 30 edges
10. `convertSchemaToSchemaExtended()` - 30 edges

## Surprising Connections (you probably didn't know these)
- `InitialDataMapAction` --references--> `ConnectionDictionary`  [EXTRACTED]
  core/state/DataMapSlice.ts → src/models/Connection.ts
- `FunctionListItemProps` --references--> `FunctionData`  [EXTRACTED]
  components/functionList/FunctionListItem.tsx → src/models/Function.ts
- `InputDropdownProps` --references--> `FunctionData`  [EXTRACTED]
  components/functionConfigurationMenu/inputDropdown/InputDropdown.tsx → src/models/Function.ts
- `FunctionState` --references--> `FunctionData`  [EXTRACTED]
  core/state/FunctionSlice.ts → src/models/Function.ts
- `FunctionIconProps` --references--> `FunctionCategory`  [EXTRACTED]
  components/functionIcon/FunctionIcon.tsx → src/models/Function.ts

## Import Cycles
- None detected.

## Communities (74 total, 8 thin omitted)

### Community 0 - "MapDefinitionDeserializer"
Cohesion: 0.13
Nodes (9): DataProviderInner(), MapDefinitionDeserializer, addParentConnectionForRepeatingElementsNested(), isParentTargetNode(), separateFunctions(), DeserializationError, addSourceReactFlowPrefix(), addTargetReactFlowPrefix() (+1 more)

### Community 1 - "MapDefinitionSerializer.ts"
Cohesion: 0.15
Nodes (29): addConditionalToNewPathItems(), addLoopingForToNewPathItems(), applyValueAtPath(), createNewPathItems(), createSourcePath(), createYamlFromMap(), findKeyInMap(), generateMapDefinitionBody() (+21 more)

### Community 2 - "images/FunctionIcons/FunctionIcons.tsx"
Cohesion: 0.05
Nodes (20): AbsoluteValue32Regular, AngleIcon, CeilingValue32Regular, Count32Regular, Divide32Regular, EPowerX32Regular, FloorValue32Regular, GreaterThan32Regular (+12 more)

### Community 3 - "images/FunctionIcons/DataType16Icons.tsx"
Cohesion: 0.08
Nodes (12): Any16Filled, Any16Regular, Array16Filled, Array16Regular, Binary16Filled, Binary16Regular, Decimal16Filled, Decimal16Regular (+4 more)

### Community 4 - "images/FunctionIcons/DataType24Icons.tsx"
Cohesion: 0.08
Nodes (12): Any24Filled, Any24Regular, Array24Filled, Array24Regular, Binary24Filled, Binary24Regular, Decimal24Filled, Decimal24Regular (+4 more)

### Community 5 - "components/functionConfigurationMenu/inputTab/inputTab.tsx"
Cohesion: 0.18
Nodes (13): InputDropdown(), InputDropdownProps, InputOptionProps, useStyles, InputCustomInfoLabel(), CommonProps, CustomListItem(), CustomListItemProps (+5 more)

### Community 6 - "core/services/dataMapperApiService/index.ts"
Cohesion: 0.23
Nodes (9): DataMapperApiServiceOptions, DmErrorResponse, dataMapperApiVersions, defaultDataMapperApiServiceOptions, GenerateXsltResponse, IDataMapperApiService, InitDataMapperApiService(), exampleTree (+1 more)

### Community 7 - "DataMapDataProvider.tsx"
Cohesion: 0.11
Nodes (13): DataMapDataProviderProps, initialSchemaState, schemaSlice, SchemaState, appSlice, AppState, initialState, functionSlice (+5 more)

### Community 8 - "Schema.Utils.ts"
Cohesion: 0.16
Nodes (14): convertSchemaNodeToSchemaNodeExtended(), convertSchemaToSchemaExtended(), deepestNode(), findNodeForKey(), getFileNameAndPath(), maxProperties(), nodeCount(), NodeScrollDirectionType (+6 more)

### Community 9 - "core/state/DataMapSlice.ts"
Cohesion: 0.09
Nodes (28): DataMapOperationState, convertConnectionShorthandToId(), generateFunctionConnectionMetadata(), generateMapMetadata(), FunctionDictionary, ComponentState, DataMapOperationState, dataMapSlice (+20 more)

### Community 10 - "utils/__test__/DataMapUtils.spec.ts"
Cohesion: 0.20
Nodes (12): indexed, amendSourceKeyForDirectAccessIfNeeded(), getDestinationNode(), getTargetValueWithoutLoops(), isQuotedString(), qualifyLoopRelativeSourceKeys(), reservedToken, separators (+4 more)

### Community 11 - "TrieTree"
Cohesion: 0.15
Nodes (3): TrieTree, TrieTreeNode, AppState

### Community 12 - "components/common/selector/FileSelector.tsx"
Cohesion: 0.19
Nodes (12): useStyles, DataMapperFileService(), FileDropdownTree(), FileDropdownTreeProps, XsltFilePicker(), XsltFilePickerProps, FileSelectorProps, SchemaFileSelector() (+4 more)

### Community 13 - "MapChecker.Utils.ts"
Cohesion: 0.09
Nodes (34): MapCheckerItem(), MapCheckerItemProps, MapCheckerPanel(), useMapCheckerItemStyles, useStyles, errorsSlice, ErrorsState, initialFunctionState (+26 more)

### Community 14 - "components/schema/useSchema.ts"
Cohesion: 0.25
Nodes (14): HandleResponseProps, useSchema(), useSchemaProps, SchemaTree(), SchemaTreeProps, SchemaTreeNode(), SchemaTreeNodeProps, TypeAnnotation() (+6 more)

### Community 15 - "src/components/functionIcon/FunctionIcon.tsx"
Cohesion: 0.43
Nodes (6): FunctionIcon(), FunctionIconProps, FunctionIcon(), FunctionIconProps, iconForFunction(), iconForFunctionCategory()

### Community 16 - "DataMapperDesigner.tsx"
Cohesion: 0.11
Nodes (13): DataMapperWrappedContext, ScrollLocation, ScrollProps, IDataMapperFileService, InitDataMapperFileService(), IDataMapperFileService, InitDataMapperFileService(), SchemaFile (+5 more)

### Community 17 - "Edge.Utils.ts"
Cohesion: 0.19
Nodes (17): BoundingBox, convertCanvasToGridPoint(), convertGridToCanvasPoint(), findPath(), generateBoundingBoxes(), generatePathfindingGrid(), getLinearDistance(), getLineStretchLength() (+9 more)

### Community 18 - "Function.Utils.ts"
Cohesion: 0.13
Nodes (17): InputTextbox(), InputTextboxProps, collectionBranding, conversionBranding, customBranding, dateTimeBranding, FunctionGroupBranding, logicalBranding (+9 more)

### Community 19 - "components/schema/SchemaPanel.tsx"
Cohesion: 0.25
Nodes (12): FileWithVsCodePath, SchemaFile, SchemaPanelNodeReactFlowDataProps, ConfigPanelProps, schemaFileQuerySettings, SchemaPanel(), SchemaPanelBody(), SchemaPanelBodyProps (+4 more)

### Community 20 - "components/functionList/FunctionList.tsx"
Cohesion: 0.25
Nodes (11): FunctionDataTreeItem, FunctionList(), FunctionListProps, fuseFunctionSearchOptions, loopFuseFunctionSearchOptions, FunctionListHeader(), FunctionListHeaderProps, DropResult (+3 more)

### Community 21 - "components/canvas/ReactFlow.tsx"
Cohesion: 0.16
Nodes (17): EdgePopOver(), EdgePopOverProps, DMReactFlowProps, edgeTypes, nodeTypes, ReactFlowWrapper(), reactFlowStyle, useStyles (+9 more)

### Community 22 - "DataMap.Utils.ts"
Cohesion: 0.10
Nodes (25): mapDefinitionVersion, mapNodeParams, reservedMapDefinitionKeysArray, reservedMapNodeParamsArray, targetPrefix, ConditionalMetadata, getLoopTargetNode(), getLoopTargetNodeWithJson() (+17 more)

### Community 23 - "src/images/FunctionIcons/FunctionIcons.tsx"
Cohesion: 0.05
Nodes (20): AbsoluteValue32Regular, AngleIcon, CeilingValue32Regular, Count32Regular, Divide32Regular, EPowerX32Regular, FloorValue32Regular, GreaterThan32Regular (+12 more)

### Community 24 - "ThemeConect.ts"
Cohesion: 0.20
Nodes (7): FunctionCategoryColorToken, customDarkTokens, DataMapperTheme, extendedWebDarkTheme, extendedWebLightTheme, fnColors, spacingOverrides

### Community 25 - "CustomValue.Utils.ts"
Cohesion: 0.73
Nodes (3): checkIfValueNeedsQuotes(), quoteSelectedCustomValue(), quoteString()

### Community 26 - "components/common/reactflow/FunctionNode.tsx"
Cohesion: 0.31
Nodes (8): CanvasNode(), CanvasNodeProps, CardProps, FunctionCardProps, FunctionNode(), useStyles, useHoverFunctionNode(), useSelectedNode()

### Community 27 - "ReactFlow.Util.ts"
Cohesion: 0.13
Nodes (24): ReactFlowStatesProps, useReactFlowStates(), ReactFlowStatesProps, useReactFlowStates(), functionPrefix, NodeIds, ReactFlowEdgeType, ReactFlowNodeType (+16 more)

### Community 28 - "Connection.Utils.ts"
Cohesion: 0.15
Nodes (22): SetConnectionInputAction, InputConnection, FunctionCategory, SetConnectionInputAction, mockBoundedFunctionInputs, parentManyToOneTargetNode, parentTargetNode, areAllFunctionInputsFilled() (+14 more)

### Community 29 - "src/core/state/selectors/selectors.ts"
Cohesion: 0.27
Nodes (10): ConnectedEdge(), getCoordinatesForHandle(), useEdgePath(), useHoverEdge(), useHoverNode(), useSelectedEdge(), useSelectedIntermediateEdge(), useHoverNode() (+2 more)

### Community 30 - "components/functionConfigurationMenu/functionConfigurationPopover.tsx"
Cohesion: 0.36
Nodes (7): DetailsTabContents(), FunctionConfigurationPopover(), FunctionConfigurationPopoverProps, TabTypes, useStyles, OutputTabContents(), isFileDropdownFunction()

### Community 31 - "RootState"
Cohesion: 0.42
Nodes (6): CodeViewPanel(), CodeViewPanelProps, CodeViewPanelBody(), CodeViewPanelBodyProps, useStyles, RootState

### Community 32 - "src/components/functionsPanel/FunctionPanel.tsx"
Cohesion: 0.26
Nodes (7): FunctionPanel(), PanelProps, useStyles, FunctionPanel(), PanelProps, useStyles, FunctionsSVG()

### Community 33 - "ui/hooks/useAutoLayout.ts"
Cohesion: 0.29
Nodes (5): autoLayout(), Direction, elk, LayoutAlgorithm, LayoutOptions

### Community 34 - "src/core/state/DataMapSlice.ts"
Cohesion: 0.09
Nodes (36): UnboundedInput, ComponentState, dataMapSlice, DataMapState, DeleteConnectionAction, deleteConnectionFromConnections(), deleteNodeFromConnections(), deleteParentRepeatingConnections() (+28 more)

### Community 35 - "src/components/functionConfigurationMenu/inputTab/inputTab.tsx"
Cohesion: 0.14
Nodes (26): InputDropdown(), InputDropdownProps, InputOptionProps, useStyles, InputCustomInfoLabel(), CommonProps, CustomListItem(), CustomListItemProps (+18 more)

### Community 36 - "Icon.Utils.tsx"
Cohesion: 0.18
Nodes (7): CollectionRegular, StringCategory20Regular, CollectionRegular, StringCategory20Regular, iconBaseUrl, iconSize, mapCheckerIconStyle

### Community 37 - "FunctionData"
Cohesion: 0.17
Nodes (15): getConnectionForAnyKey(), hasExpectedConnection(), ConnectionDictionary, CustomValueConnection, EmptyConnection, NodeConnection, FunctionData, functionMock (+7 more)

### Community 44 - "src/components/schema/useSchema.ts"
Cohesion: 0.19
Nodes (19): FileSelectorOption, SchemaPanelBody(), SchemaPanelBodyProps, usePanelBodyStyles, SchemaTree(), SchemaTreeProps, SchemaTreeNode(), SchemaTreeNodeProps (+11 more)

### Community 45 - "src/images/FunctionIcons/DataType16Icons.tsx"
Cohesion: 0.08
Nodes (12): Any16Filled, Any16Regular, Array16Filled, Array16Regular, Binary16Filled, Binary16Regular, Decimal16Filled, Decimal16Regular (+4 more)

### Community 46 - "src/images/FunctionIcons/DataType24Icons.tsx"
Cohesion: 0.08
Nodes (12): Any24Filled, Any24Regular, Array24Filled, Array24Regular, Binary24Filled, Binary24Regular, Decimal24Filled, Decimal24Regular (+4 more)

### Community 47 - "src/core/state/Store.ts"
Cohesion: 0.15
Nodes (16): CodeViewPanel(), CodeViewPanelProps, CodeViewPanelBody(), CodeViewPanelBodyProps, useStyles, appSlice, AppState, initialState (+8 more)

### Community 48 - "core/index.ts"
Cohesion: 0.16
Nodes (11): generateDataMapXslt(), testDataMap(), getFunctions(), DataMapperApiServiceInstance(), SchemaFile, DataMapperApiServiceInstance(), pseudoFunctions, generateDataMapXslt() (+3 more)

### Community 49 - "applyConnectionValue"
Cohesion: 0.21
Nodes (18): reservedMapDefinitionKeys, addConnection(), convertToArray(), generateMapDefinitionHeader(), createSchemaToSchemaNodeConnection(), isEqualToCustomValue(), directAccessPseudoFunction, ifPseudoFunction (+10 more)

### Community 50 - "TrieTree"
Cohesion: 0.22
Nodes (4): TrieTree, TrieTreeNode, AppState, useSearch()

### Community 51 - "src/components/canvas/ReactFlow.tsx"
Cohesion: 0.16
Nodes (15): EdgePopOver(), EdgePopOverProps, DMReactFlowProps, edgeTypes, nodeTypes, NOTE: Putting this useEffect here for vis next to onSave, ReactFlowWrapper(), reactFlowStyle (+7 more)

### Community 52 - "customTokens"
Cohesion: 0.20
Nodes (16): functionCategoryItemKeyPrefix, FunctionDataTreeItem, FunctionList(), FunctionListProps, fuseFunctionSearchOptions, loopFuseFunctionSearchOptions, NOTE: Explicitly use this instead of isAddingInlineFunction to track…, FunctionListHeader() (+8 more)

### Community 53 - "src/components/test/TestPanel.tsx"
Cohesion: 0.22
Nodes (11): Panel(), PanelProps, PanelXButton(), PanelXButtonProps, useStyles, useStyles, TestPanel(), TestPanelProps (+3 more)

### Community 54 - "src/components/common/selector/FileSelector.tsx"
Cohesion: 0.23
Nodes (10): FileDropdownTree(), FileDropdownTreeProps, MockFileService, FileSelectorProps, SchemaFileSelector(), U, useStyles, MockFileService (+2 more)

### Community 55 - "isEmptyConnection"
Cohesion: 0.26
Nodes (12): DetailsTabContents(), FunctionConfigurationPopover(), FunctionConfigurationPopoverProps, TabTypes, OutputTabContents(), validateAndCreateConnectionOutput(), useStyles, validateAndCreateConnectionInput() (+4 more)

### Community 56 - "src/core/services/dataMapperApiService/index.ts"
Cohesion: 0.20
Nodes (11): DataMapperApiServiceOptions, DmErrorResponse, NOTE: From BPM repo, looks like two schema files with the same name will prefer…, dataMapperApiVersions, defaultDataMapperApiServiceOptions, GenerateXsltResponse, InitDataMapperApiService(), TestMapResponse (+3 more)

### Community 57 - "src/core/state/PanelSlice.ts"
Cohesion: 0.18
Nodes (11): CodeViewState, ConfigPanelView, FunctionPanelState, initialState, MapCheckPanelState, MapCheckTabType, panelSlice, PanelState (+3 more)

### Community 58 - "core/state/Store.ts"
Cohesion: 0.27
Nodes (9): AppDispatch, includedActionsForUndo, useStyles, TestPanel(), TestPanelProps, TestPanelBody(), TestPanelBodyProps, LogCategory (+1 more)

### Community 59 - "src/components/commandBar/EditorCommandBar.tsx"
Cohesion: 0.22
Nodes (9): EditorCommandBar(), EditorCommandBarProps, useStyles, initialState, modalSlice, ModalState, NOTE: Currently, modal is just used for discard data map changes warning, WarningModalState (+1 more)

### Community 62 - "core/state/PanelSlice.ts"
Cohesion: 0.21
Nodes (11): TestMapResponse, CodeViewState, ConfigPanelView, FunctionPanelState, initialState, MapCheckPanelState, MapCheckTabType, panelSlice (+3 more)

### Community 63 - "DataMapperDesignerProvider.tsx"
Cohesion: 0.25
Nodes (8): reactPlugin, DataMapperDesignerContext, DataMapperDesignerProvider(), DataMapperDesignerProviderProps, reactPlugin, store, getCustomizedTheme(), store

### Community 64 - "components/commandBar/EditorCommandBar.tsx"
Cohesion: 0.24
Nodes (8): EditorCommandBar(), EditorCommandBarProps, useStyles, MetaMapDefinition, initialState, modalSlice, ModalState, WarningModalState

### Community 65 - "src/components/common/reactflow/FunctionNode.tsx"
Cohesion: 0.31
Nodes (8): CanvasNode(), CanvasNodeProps, CardProps, FunctionCardProps, FunctionNode(), useStyles, useHoverFunctionNode(), useSelectedNode()

### Community 66 - "src/components/schema/SchemaPanel.tsx"
Cohesion: 0.33
Nodes (8): ConfigPanelProps, schemaFileQuerySettings, SchemaPanel(), usePanelStyles, useStyles, getSelectedSchema(), panelWidthWithoutHandles, flattenSchemaNodeMap()

### Community 67 - "components/common/panel/Panel.tsx"
Cohesion: 0.39
Nodes (5): Panel(), PanelProps, PanelXButton(), PanelXButtonProps, useStyles

### Community 68 - "src/ui/hooks/useAutoLayout.ts"
Cohesion: 0.29
Nodes (7): autoLayout(), Direction, elk, elkLayout(), LayoutAlgorithm, LayoutOptions, panelWidth

### Community 70 - "MapDefinition.Utils.ts"
Cohesion: 0.67
Nodes (3): fixMapDefinitionCustomValues(), loadMapDefinition(), TODO: Handle arrays better, currently fine for XML, but this will need to be…

## Knowledge Gaps
- **197 isolated node(s):** `cache`, `intl`, `EdgePopOverProps`, `DMReactFlowProps`, `nodeTypes` (+192 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 364 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `FunctionData` connect `FunctionData` to `MapDefinitionDeserializer`, `components/functionConfigurationMenu/inputTab/inputTab.tsx`, `DataMapDataProvider.tsx`, `Schema.Utils.ts`, `core/state/DataMapSlice.ts`, `utils/__test__/DataMapUtils.spec.ts`, `MapChecker.Utils.ts`, `Function.Utils.ts`, `components/functionList/FunctionList.tsx`, `DataMap.Utils.ts`, `components/common/reactflow/FunctionNode.tsx`, `ReactFlow.Util.ts`, `Connection.Utils.ts`, `components/functionConfigurationMenu/functionConfigurationPopover.tsx`, `src/core/state/DataMapSlice.ts`, `src/components/functionConfigurationMenu/inputTab/inputTab.tsx`, `src/core/state/Store.ts`, `core/index.ts`, `applyConnectionValue`, `customTokens`, `isEmptyConnection`, `src/components/common/reactflow/FunctionNode.tsx`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **Why does `LogCategory` connect `core/state/Store.ts` to `components/commandBar/EditorCommandBar.tsx`, `Icon.Utils.tsx`, `Schema.Utils.ts`, `core/index.ts`, `Edge.Utils.ts`, `Function.Utils.ts`, `customTokens`, `src/components/test/TestPanel.tsx`, `components/functionList/FunctionList.tsx`, `src/components/commandBar/EditorCommandBar.tsx`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **Why does `FunctionCategory` connect `Connection.Utils.ts` to `src/core/state/DataMapSlice.ts`, `src/components/functionConfigurationMenu/inputTab/inputTab.tsx`, `Icon.Utils.tsx`, `components/functionConfigurationMenu/inputTab/inputTab.tsx`, `FunctionData`, `core/state/DataMapSlice.ts`, `utils/__test__/DataMapUtils.spec.ts`, `src/components/functionIcon/FunctionIcon.tsx`, `Function.Utils.ts`, `customTokens`, `components/functionList/FunctionList.tsx`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **What connects `cache`, `intl`, `EdgePopOverProps` to the rest of the system?**
  _197 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `MapDefinitionDeserializer` be split into smaller, more focused modules?**
  _Cohesion score 0.12802275960170698 - nodes in this community are weakly interconnected._
- **Should `MapDefinitionSerializer.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.14623655913978495 - nodes in this community are weakly interconnected._
- **Should `images/FunctionIcons/FunctionIcons.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.04878048780487805 - nodes in this community are weakly interconnected._