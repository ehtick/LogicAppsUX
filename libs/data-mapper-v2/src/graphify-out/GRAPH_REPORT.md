# Graph Report - src  (2026-11-06)

## Corpus Check
- 143 files · ~77,576 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1449 nodes · 4624 edges · 60 communities (51 shown, 9 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 74 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `82639b8e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- MapDefinitionDeserializer
- MapDefinitionSerializer.ts
- images/FunctionIcons/FunctionIcons.tsx
- images/FunctionIcons/DataType16Icons.tsx
- images/FunctionIcons/DataType24Icons.tsx
- src/components/functionConfigurationMenu/inputDropdown/InputDropdown.tsx
- DataMapperDesignerProvider.tsx
- core/state/AppSlice.ts
- Schema.Utils.ts
- Function.Utils.ts
- DataMap.Utils.ts
- TrieTree
- components/common/selector/FileSelector.tsx
- ReactFlow.Util.ts
- components/schema/useSchema.ts
- DataMapDataProvider.tsx
- components/test/TestPanel.tsx
- src/components/commandBar/EditorCommandBar.tsx
- FunctionConstants.tsx
- components/schema/SchemaPanel.tsx
- core/index.ts
- components/canvas/ReactFlow.tsx
- IDataMapperFileService
- Icon.Utils.tsx
- DataMapperApiServiceInstance
- src/core/state/ErrorsSlice.ts
- components/common/reactflow/FunctionNode.tsx
- core/state/FunctionSlice.ts
- core/state/SchemaSlice.ts
- core/state/Store.ts
- src/core/state/DataMapSlice.ts
- src/components/functionConfigurationMenu/inputTab/inputTab.tsx
- src/core/state/Store.ts
- components/functionIcon/FunctionIcon.tsx
- intl-test-helper.tsx
- utils/reactFlowTesting/NodeInspector.tsx
- Svg.d.ts
- DataMapperDesigner.tsx
- Connection.Utils.ts
- src/components/canvas/ReactFlow.tsx
- src/images/FunctionIcons/DataType16Icons.tsx
- src/images/FunctionIcons/DataType24Icons.tsx
- src/components/schema/SchemaPanel.tsx
- src/components/schema/tree/SchemaTreeNode.tsx
- TrieTree
- src/components/common/reactflow/FunctionNode.tsx
- ref_react_redux
- core/state/PanelSlice.ts
- src/components/functionConfigurationMenu/outputTab/outputTab.tsx
- src/core/services/dataMapperApiService/index.ts
- src/core/state/ModalSlice.ts
- src/core/state/PanelSlice.ts
- components/commandBar/EditorCommandBar.tsx
- src/components/test/TestPanel.tsx
- ext_logic_apps_shared_src_index_ts
- MapDefinition.Utils.ts
- src/utils/reactFlowTesting/NodeInspector.tsx
- ref_react

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
- `FunctionListItemProps` --references--> `FunctionData`  [EXTRACTED]
  components/functionList/FunctionListItem.tsx → src/models/Function.ts
- `InputDropdownProps` --references--> `FunctionData`  [EXTRACTED]
  components/functionConfigurationMenu/inputDropdown/InputDropdown.tsx → src/models/Function.ts
- `FunctionState` --references--> `FunctionData`  [EXTRACTED]
  core/state/FunctionSlice.ts → src/models/Function.ts
- `FunctionIconProps` --references--> `FunctionCategory`  [EXTRACTED]
  components/functionIcon/FunctionIcon.tsx → src/models/Function.ts
- `ExtendedRenderOptions` --references--> `RootState`  [EXTRACTED]
  src/__test__/redux-test-helper-dm.tsx → core/state/Store.ts

## Import Cycles
- 2-file cycle: `src/components/functionConfigurationMenu/inputTab/InputList.tsx -> src/components/functionConfigurationMenu/inputTab/inputTab.tsx -> src/components/functionConfigurationMenu/inputTab/InputList.tsx`
- 2-file cycle: `src/core/services/dataMapperApiService/DataMapperApiService.ts -> src/core/services/dataMapperApiService/index.ts -> src/core/services/dataMapperApiService/DataMapperApiService.ts`
- 2-file cycle: `src/utils/Function.Utils.ts -> utils/Connection.Utils.ts -> src/utils/Function.Utils.ts`
- 2-file cycle: `src/utils/ReactFlow.Util.ts -> utils/Connection.Utils.ts -> src/utils/ReactFlow.Util.ts`
- 2-file cycle: `src/utils/Schema.Utils.ts -> utils/ReactFlow.Util.ts -> src/utils/Schema.Utils.ts`
- 4-file cycle: `src/utils/ReactFlow.Util.ts -> utils/Connection.Utils.ts -> src/utils/Schema.Utils.ts -> utils/ReactFlow.Util.ts -> src/utils/ReactFlow.Util.ts`

## Communities (60 total, 9 thin omitted)

### Community 0 - "MapDefinitionDeserializer"
Cohesion: 0.11
Nodes (13): DataMapDataProvider(), DataProviderInner(), MapDefinitionDeserializer, createSchemaNodeOrFunction(), getSingleValueMetadata(), getSourceNode(), isTokenCustomValue(), separateFunctions() (+5 more)

### Community 1 - "MapDefinitionSerializer.ts"
Cohesion: 0.12
Nodes (36): addConditionalToNewPathItems(), addLoopingForToNewPathItems(), applyValueAtPath(), convertToArray(), convertToMapDefinition(), createNewPathItems(), createSourcePath(), createYamlFromMap() (+28 more)

### Community 2 - "images/FunctionIcons/FunctionIcons.tsx"
Cohesion: 0.05
Nodes (20): AbsoluteValue32Regular, AngleIcon, CeilingValue32Regular, Count32Regular, Divide32Regular, EPowerX32Regular, FloorValue32Regular, GreaterThan32Regular (+12 more)

### Community 3 - "images/FunctionIcons/DataType16Icons.tsx"
Cohesion: 0.08
Nodes (12): Any16Filled, Any16Regular, Array16Filled, Array16Regular, Binary16Filled, Binary16Regular, Decimal16Filled, Decimal16Regular (+4 more)

### Community 4 - "images/FunctionIcons/DataType24Icons.tsx"
Cohesion: 0.08
Nodes (12): Any24Filled, Any24Regular, Array24Filled, Array24Regular, Binary24Filled, Binary24Regular, Decimal24Filled, Decimal24Regular (+4 more)

### Community 5 - "src/components/functionConfigurationMenu/inputDropdown/InputDropdown.tsx"
Cohesion: 0.28
Nodes (4): InputDropdownProps, InputOptionProps, useStyles, UnboundedInput

### Community 6 - "DataMapperDesignerProvider.tsx"
Cohesion: 0.15
Nodes (7): reactPlugin, DataMapperDesignerContext, DataMapperDesignerProvider(), DataMapperDesignerProviderProps, reactPlugin, getCustomizedTheme(), store

### Community 7 - "core/state/AppSlice.ts"
Cohesion: 0.50
Nodes (3): appSlice, AppState, initialState

### Community 8 - "Schema.Utils.ts"
Cohesion: 0.05
Nodes (27): connectionDict, functionData, functionDict, getConnectionForAnyKey(), hasExpectedConnection(), createSchemaToSchemaNodeConnection(), isEqualToCustomValue(), functionMock (+19 more)

### Community 9 - "Function.Utils.ts"
Cohesion: 0.15
Nodes (18): DataMapOperationState, InitialDataMapAction, convertConnectionShorthandToId(), generateFunctionConnectionMetadata(), generateMapMetadata(), ConnectionDictionary, FunctionDictionary, DataMapOperationState (+10 more)

### Community 10 - "DataMap.Utils.ts"
Cohesion: 0.08
Nodes (35): mapDefinitionVersion, mapNodeParams, reservedMapDefinitionKeys, reservedMapDefinitionKeysArray, reservedMapNodeParamsArray, targetPrefix, ConditionalMetadata, getLoopTargetNode() (+27 more)

### Community 11 - "TrieTree"
Cohesion: 0.15
Nodes (3): TrieTree, TrieTreeNode, AppState

### Community 12 - "components/common/selector/FileSelector.tsx"
Cohesion: 0.15
Nodes (15): useStyles, DataMapperFileService(), FileDropdownTree(), FileDropdownTreeProps, CustomListItem(), InputTabContents(), useStyles, XsltFilePicker() (+7 more)

### Community 13 - "ReactFlow.Util.ts"
Cohesion: 0.05
Nodes (59): Panel(), PanelProps, PanelXButton(), PanelXButtonProps, useStyles, getCoordinatesForHandle(), useEdgePath(), FunctionPanel() (+51 more)

### Community 14 - "components/schema/useSchema.ts"
Cohesion: 0.25
Nodes (14): HandleResponseProps, useSchema(), useSchemaProps, SchemaTree(), SchemaTreeProps, SchemaTreeNode(), SchemaTreeNodeProps, TypeAnnotation() (+6 more)

### Community 15 - "DataMapDataProvider.tsx"
Cohesion: 0.12
Nodes (4): DataMapDataProviderProps, appSlice, AppState, initialState

### Community 16 - "components/test/TestPanel.tsx"
Cohesion: 0.20
Nodes (12): Panel(), PanelProps, PanelXButton(), PanelXButtonProps, useStyles, useStyles, TestPanel(), TestPanelProps (+4 more)

### Community 17 - "src/components/commandBar/EditorCommandBar.tsx"
Cohesion: 0.21
Nodes (4): EditorCommandBar(), EditorCommandBarProps, useStyles, generateDataMapXslt()

### Community 18 - "FunctionConstants.tsx"
Cohesion: 0.13
Nodes (16): collectionBranding, conversionBranding, customBranding, dateTimeBranding, FunctionGroupBranding, logicalBranding, mathBranding, stringBranding (+8 more)

### Community 19 - "components/schema/SchemaPanel.tsx"
Cohesion: 0.25
Nodes (12): FileWithVsCodePath, SchemaFile, SchemaPanelNodeReactFlowDataProps, ConfigPanelProps, schemaFileQuerySettings, SchemaPanel(), SchemaPanelBody(), SchemaPanelBodyProps (+4 more)

### Community 21 - "components/canvas/ReactFlow.tsx"
Cohesion: 0.10
Nodes (24): EdgePopOver(), EdgePopOverProps, DMReactFlowProps, edgeTypes, nodeTypes, ReactFlowWrapper(), reactFlowStyle, useStyles (+16 more)

### Community 23 - "Icon.Utils.tsx"
Cohesion: 0.08
Nodes (25): String24Regular, AbsoluteValue32Regular, AngleIcon, CeilingValue32Regular, Count32Regular, Divide32Regular, EPowerX32Regular, FloorValue32Regular (+17 more)

### Community 24 - "DataMapperApiServiceInstance"
Cohesion: 0.33
Nodes (6): DataMapperApiServiceInstance(), pseudoFunctions, generateDataMapXslt(), testDataMap(), getFunctions(), getSelectedSchema()

### Community 25 - "src/core/state/ErrorsSlice.ts"
Cohesion: 0.28
Nodes (7): errorsSlice, ErrorsState, initialFunctionState, errorsSlice, ErrorsState, initialFunctionState, MapIssue

### Community 26 - "components/common/reactflow/FunctionNode.tsx"
Cohesion: 0.17
Nodes (15): DetailsTabContents(), FunctionConfigurationPopover(), FunctionConfigurationPopoverProps, TabTypes, useStyles, OutputTabContents(), CanvasNode(), CanvasNodeProps (+7 more)

### Community 27 - "core/state/FunctionSlice.ts"
Cohesion: 0.50
Nodes (3): functionSlice, FunctionState, initialFunctionState

### Community 28 - "core/state/SchemaSlice.ts"
Cohesion: 0.50
Nodes (3): initialSchemaState, schemaSlice, SchemaState

### Community 31 - "core/state/Store.ts"
Cohesion: 0.25
Nodes (10): ReactFlowStatesProps, CodeViewPanel(), CodeViewPanelProps, CodeViewPanelBody(), CodeViewPanelBodyProps, useStyles, NodeIds, AppDispatch (+2 more)

### Community 33 - "src/core/state/DataMapSlice.ts"
Cohesion: 0.06
Nodes (62): addConnection(), ComponentState, dataMapSlice, DataMapState, DeleteConnectionAction, deleteConnectionFromConnections(), deleteNodeFromConnections(), deleteParentRepeatingConnections() (+54 more)

### Community 34 - "src/components/functionConfigurationMenu/inputTab/inputTab.tsx"
Cohesion: 0.15
Nodes (19): InputDropdown(), InputCustomInfoLabel(), CommonProps, CustomListItemProps, InputList(), InputListProps, InputListWrapper, TemplateItemProps (+11 more)

### Community 35 - "src/core/state/Store.ts"
Cohesion: 0.15
Nodes (11): functionSlice, FunctionState, initialFunctionState, initialSchemaState, schemaSlice, SchemaState, AppStore, includedActionsForUndo (+3 more)

### Community 36 - "components/functionIcon/FunctionIcon.tsx"
Cohesion: 0.15
Nodes (7): FunctionIcon(), FunctionIconProps, CollectionRegular, StringCategory20Regular, CollectionRegular, StringCategory20Regular, iconForFunctionCategory()

### Community 44 - "DataMapperDesigner.tsx"
Cohesion: 0.14
Nodes (14): Bounds, DataMapperWrappedContext, ScrollLocation, ScrollProps, InitDataMapperFileService(), IDataMapperFileService, InitDataMapperFileService(), SchemaFile (+6 more)

### Community 45 - "Connection.Utils.ts"
Cohesion: 0.09
Nodes (33): SetConnectionInputAction, InputOptionProps, InputCustomInfoLabel(), CommonProps, CustomListItemProps, InputListProps, TemplateItemProps, getInputTypeFromNode() (+25 more)

### Community 46 - "src/components/canvas/ReactFlow.tsx"
Cohesion: 0.05
Nodes (46): useReactFlowStates(), EdgePopOver(), EdgePopOverProps, DMReactFlowProps, edgeTypes, nodeTypes, ReactFlowWrapper(), reactFlowStyle (+38 more)

### Community 47 - "src/images/FunctionIcons/DataType16Icons.tsx"
Cohesion: 0.08
Nodes (12): Any16Filled, Any16Regular, Array16Filled, Array16Regular, Binary16Filled, Binary16Regular, Decimal16Filled, Decimal16Regular (+4 more)

### Community 48 - "src/images/FunctionIcons/DataType24Icons.tsx"
Cohesion: 0.08
Nodes (11): Any24Filled, Any24Regular, Array24Filled, Array24Regular, Binary24Filled, Binary24Regular, Decimal24Filled, Decimal24Regular (+3 more)

### Community 50 - "src/components/schema/SchemaPanel.tsx"
Cohesion: 0.18
Nodes (14): SchemaPanelNode(), SchemaPanelNodeReactFlowDataProps, FileSelectorOption, ConfigPanelProps, schemaFileQuerySettings, SchemaPanel(), SchemaPanelBody(), SchemaPanelBodyProps (+6 more)

### Community 51 - "src/components/schema/tree/SchemaTreeNode.tsx"
Cohesion: 0.18
Nodes (16): SchemaTree(), SchemaTreeProps, SchemaTreeNode(), SchemaTreeNodeProps, TypeAnnotation(), SchemaTreeNodeHandle(), SchemaTreeNodeHandleProps, useHandleStyles (+8 more)

### Community 52 - "TrieTree"
Cohesion: 0.22
Nodes (4): TrieTree, TrieTreeNode, AppState, useSearch()

### Community 53 - "src/components/common/reactflow/FunctionNode.tsx"
Cohesion: 0.06
Nodes (47): CanvasNode(), CanvasNodeProps, CardProps, FunctionCardProps, FunctionNode(), useStyles, FunctionIcon(), FunctionIconProps (+39 more)

### Community 54 - "ref_react_redux"
Cohesion: 0.19
Nodes (6): CodeViewPanel(), CodeViewPanelProps, CodeViewPanelBody(), CodeViewPanelBodyProps, useStyles, RootState

### Community 55 - "core/state/PanelSlice.ts"
Cohesion: 0.18
Nodes (11): InputListWrapper, CodeViewState, ConfigPanelView, FunctionPanelState, initialState, MapCheckPanelState, MapCheckTabType, panelSlice (+3 more)

### Community 56 - "src/components/functionConfigurationMenu/outputTab/outputTab.tsx"
Cohesion: 0.29
Nodes (8): DetailsTabContents(), FunctionConfigurationPopover(), FunctionConfigurationPopoverProps, TabTypes, CustomListItem(), OutputTabContents(), validateAndCreateConnectionOutput(), useStyles

### Community 57 - "src/core/services/dataMapperApiService/index.ts"
Cohesion: 0.05
Nodes (26): DataMapperApiService, DataMapperApiServiceOptions, DmErrorResponse, dataMapperApiVersions, defaultDataMapperApiServiceOptions, GenerateXsltResponse, IDataMapperApiService, InitDataMapperApiService() (+18 more)

### Community 58 - "src/core/state/ModalSlice.ts"
Cohesion: 0.33
Nodes (4): initialState, modalSlice, ModalState, WarningModalState

### Community 59 - "src/core/state/PanelSlice.ts"
Cohesion: 0.24
Nodes (9): CodeViewState, ConfigPanelView, FunctionPanelState, initialState, MapCheckPanelState, MapCheckTabType, panelSlice, PanelState (+1 more)

### Community 62 - "components/commandBar/EditorCommandBar.tsx"
Cohesion: 0.24
Nodes (8): EditorCommandBar(), EditorCommandBarProps, useStyles, MetaMapDefinition, initialState, modalSlice, ModalState, WarningModalState

### Community 63 - "src/components/test/TestPanel.tsx"
Cohesion: 0.24
Nodes (6): useStyles, TestPanel(), TestPanelProps, TestPanelBody(), TestPanelBodyProps, testDataMap()

### Community 65 - "ext_logic_apps_shared_src_index_ts"
Cohesion: 0.15
Nodes (11): FileDropdownTree(), FileDropdownTreeProps, MockFileService, FileSelectorProps, SchemaFileSelector(), U, useStyles, MockFileService (+3 more)

### Community 68 - "src/utils/reactFlowTesting/NodeInspector.tsx"
Cohesion: 0.67
Nodes (3): NodeInfo(), NodeInfoProps, NodeInspector()

## Knowledge Gaps
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `FunctionData` connect `Connection.Utils.ts` to `MapDefinitionDeserializer`, `src/core/state/DataMapSlice.ts`, `src/components/functionConfigurationMenu/inputTab/inputTab.tsx`, `src/core/state/Store.ts`, `src/components/functionConfigurationMenu/inputDropdown/InputDropdown.tsx`, `Schema.Utils.ts`, `Function.Utils.ts`, `DataMap.Utils.ts`, `ReactFlow.Util.ts`, `DataMapDataProvider.tsx`, `FunctionConstants.tsx`, `core/index.ts`, `src/components/common/reactflow/FunctionNode.tsx`, `src/components/functionConfigurationMenu/outputTab/outputTab.tsx`, `DataMapperApiServiceInstance`, `components/common/reactflow/FunctionNode.tsx`, `core/state/FunctionSlice.ts`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._
- **Should `MapDefinitionDeserializer` be split into smaller, more focused modules?**
  _Cohesion score 0.11265969802555169 - nodes in this community are weakly interconnected._
- **Should `MapDefinitionSerializer.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11666666666666667 - nodes in this community are weakly interconnected._
- **Should `images/FunctionIcons/FunctionIcons.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.04878048780487805 - nodes in this community are weakly interconnected._
- **Should `images/FunctionIcons/DataType16Icons.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `images/FunctionIcons/DataType24Icons.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `Schema.Utils.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.04994400895856663 - nodes in this community are weakly interconnected._