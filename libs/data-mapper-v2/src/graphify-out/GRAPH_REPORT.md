# Graph Report - src  (2026-06-13)

## Corpus Check
- 143 files · ~77,576 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 769 nodes · 2066 edges · 39 communities (36 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d66bad0b`
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
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]

## God Nodes (most connected - your core abstractions)
1. `FunctionData` - 36 edges
2. `RootState` - 31 edges
3. `ConnectionDictionary` - 24 edges
4. `isSchemaNodeExtended()` - 24 edges
5. `applyConnectionValue()` - 20 edges
6. `isEmptyConnection()` - 18 edges
7. `isCustomValueConnection()` - 18 edges
8. `convertSchemaToSchemaExtended()` - 18 edges
9. `isNodeConnection()` - 17 edges
10. `AppDispatch` - 16 edges

## Surprising Connections (you probably didn't know these)
- `InitialDataMapAction` --references--> `ConnectionDictionary`  [EXTRACTED]
  core/state/DataMapSlice.ts → models/Connection.ts
- `FunctionCardProps` --references--> `FunctionData`  [EXTRACTED]
  components/common/reactflow/FunctionNode.tsx → models/Function.ts
- `FunctionNode()` --calls--> `isEmptyConnection()`  [EXTRACTED]
  components/common/reactflow/FunctionNode.tsx → utils/Connection.Utils.ts
- `FunctionNode()` --calls--> `getFunctionBrandingForCategory()`  [EXTRACTED]
  components/common/reactflow/FunctionNode.tsx → utils/Function.Utils.ts
- `useEdgePath()` --calls--> `flattenSchemaNode()`  [EXTRACTED]
  components/common/reactflow/edges/useEdgePath.ts → utils/Schema.Utils.ts

## Import Cycles
- 3-file cycle: `mapHandling/MapMetadataSerializer.ts -> utils/Connection.Utils.ts -> utils/Function.Utils.ts -> mapHandling/MapMetadataSerializer.ts`
- 4-file cycle: `mapHandling/MapMetadataSerializer.ts -> utils/Connection.Utils.ts -> utils/ReactFlow.Util.ts -> utils/Function.Utils.ts -> mapHandling/MapMetadataSerializer.ts`

## Communities (39 total, 3 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.05
Nodes (58): ReactFlowStatesProps, useReactFlowStates(), NodeIds, ReactFlowEdgeType, ReactFlowNodeType, getCoordinatesForHandle(), MapCheckerItem(), useMapCheckerItemStyles (+50 more)

### Community 1 - "Community 1"
Cohesion: 0.11
Nodes (30): FileWithVsCodePath, SchemaFile, SchemaPanelNode(), SchemaPanelNodeReactFlowDataProps, ConfigPanelProps, schemaFileQuerySettings, SchemaPanel(), SchemaPanelBody() (+22 more)

### Community 2 - "Community 2"
Cohesion: 0.09
Nodes (29): EdgePopOver(), EdgePopOverProps, DMReactFlowProps, edgeTypes, nodeTypes, ReactFlowWrapper(), reactFlowStyle, useStyles (+21 more)

### Community 3 - "Community 3"
Cohesion: 0.13
Nodes (25): InputConnection, directAccessPseudoFunction, ifPseudoFunction, addConnection(), SetConnectionInputAction, mockBoundedFunctionInputs, parentManyToOneTargetNode, parentTargetNode (+17 more)

### Community 4 - "Community 4"
Cohesion: 0.12
Nodes (28): addConditionalToNewPathItems(), addLoopingForToNewPathItems(), convertToArray(), convertToMapDefinition(), createNewPathItems(), createSourcePath(), createYamlFromMap(), findKeyInMap() (+20 more)

### Community 5 - "Community 5"
Cohesion: 0.13
Nodes (23): InputDropdown(), InputOptionProps, useStyles, InputCustomInfoLabel(), CommonProps, CustomListItem(), CustomListItemProps, InputListProps (+15 more)

### Community 6 - "Community 6"
Cohesion: 0.07
Nodes (31): useStyles, DataMapperApiService, DataMapperApiServiceOptions, DmErrorResponse, DataMapperApiServiceInstance(), dataMapperApiVersions, defaultDataMapperApiServiceOptions, GenerateXsltResponse (+23 more)

### Community 7 - "Community 7"
Cohesion: 0.07
Nodes (8): Count32Regular, Divide32Regular, EPowerX32Regular, GreaterThan32Regular, IndexRegular, LessThan32Regular, LessThanOrEqual32Regular, TenPowerX32Regular

### Community 8 - "Community 8"
Cohesion: 0.08
Nodes (12): Any16Filled, Any16Regular, Array16Filled, Array16Regular, Binary16Filled, Binary16Regular, Decimal16Filled, Decimal16Regular (+4 more)

### Community 9 - "Community 9"
Cohesion: 0.08
Nodes (12): Any24Filled, Any24Regular, Array24Filled, Array24Regular, Binary24Filled, Binary24Regular, Decimal24Filled, Decimal24Regular (+4 more)

### Community 10 - "Community 10"
Cohesion: 0.15
Nodes (16): DataProviderInner(), convertSchemaNodeToSchemaNodeExtended(), convertSchemaToSchemaExtended(), deepestNode(), flattenSchemaIntoDictionary(), flattenSchemaIntoSortArray(), flattenSchemaNode(), flattenSchemaNodeMap() (+8 more)

### Community 11 - "Community 11"
Cohesion: 0.15
Nodes (3): TrieTree, TrieTreeNode, AppState

### Community 12 - "Community 12"
Cohesion: 0.22
Nodes (13): convertConnectionShorthandToId(), generateFunctionConnectionMetadata(), ConnectionDictionary, FunctionDictionary, DataMapOperationState, isNodeConnection(), addQuotesToString(), calculateIndexValue() (+5 more)

### Community 13 - "Community 13"
Cohesion: 0.15
Nodes (14): indexed, amendSourceKeyForDirectAccessIfNeeded(), createSchemaNodeOrFunction(), DSeparators, getDestinationKey(), getSingleValueMetadata(), getTargetValueWithoutLoops(), isQuotedString() (+6 more)

### Community 14 - "Community 14"
Cohesion: 0.13
Nodes (12): MapCheckerItemProps, errorsSlice, ErrorsState, initialFunctionState, IntlMessage, DeserializationError, deserializationMessages, functionHasRequiredInputs() (+4 more)

### Community 15 - "Community 15"
Cohesion: 0.06
Nodes (42): reactPlugin, FunctionCategoryColorToken, DataMapDataProviderProps, DataMapperDesignerContext, DataMapperWrappedContext, ScrollLocation, ScrollProps, DataMapperDesignerProvider() (+34 more)

### Community 16 - "Community 16"
Cohesion: 0.31
Nodes (8): IDataMapperFileService, InitDataMapperFileService(), SchemaFile, DataMapperDesigner(), DataMapperDesignerProps, DialogView(), useStaticStyles, useStyles

### Community 17 - "Community 17"
Cohesion: 0.18
Nodes (16): BoundingBox, convertCanvasToGridPoint(), findPath(), generateBoundingBoxes(), generatePathfindingGrid(), getLinearDistance(), getLineStretchLength(), getNextPointFromPosition() (+8 more)

### Community 18 - "Community 18"
Cohesion: 0.14
Nodes (12): collectionBranding, conversionBranding, customBranding, dateTimeBranding, FunctionGroupBranding, logicalBranding, mathBranding, stringBranding (+4 more)

### Community 19 - "Community 19"
Cohesion: 0.16
Nodes (14): mapNodeParams, reservedMapDefinitionKeys, reservedMapDefinitionKeysArray, reservedMapNodeParamsArray, ConditionalMetadata, getLoopTargetNode(), getLoopTargetNodeWithJson(), LoopMetadata (+6 more)

### Community 20 - "Community 20"
Cohesion: 0.12
Nodes (14): AbsoluteValue32Regular, AngleIcon, CeilingValue32Regular, FloorValue32Regular, GreaterThanOrEqual32Regular, LogYX32Regular, PercentageIcon, RightTriangleRegular (+6 more)

### Community 21 - "Community 21"
Cohesion: 0.20
Nodes (11): MapCheckerPanel(), useStyles, Panel(), PanelProps, PanelXButton(), PanelXButtonProps, useStyles, MapCheckTabType (+3 more)

### Community 22 - "Community 22"
Cohesion: 0.19
Nodes (11): appSlice, AppState, initialState, initialSchemaState, schemaSlice, SchemaState, AppDispatch, AppStore (+3 more)

### Community 23 - "Community 23"
Cohesion: 0.19
Nodes (10): EditorCommandBar(), EditorCommandBarProps, useStyles, MetaMapDefinition, generateMapMetadata(), initialState, modalSlice, ModalState (+2 more)

### Community 24 - "Community 24"
Cohesion: 0.19
Nodes (10): InputListWrapper, CodeViewState, ConfigPanelView, FunctionPanelState, initialState, MapCheckPanelState, panelSlice, PanelState (+2 more)

### Community 25 - "Community 25"
Cohesion: 0.20
Nodes (10): getPathForSrcSchemaNode(), functionMock, getConnectionForAnyKey(), hasExpectedConnection(), findLast(), nodeHasSpecificInputEventually(), addParentConnectionForRepeatingElementsNested(), isParentTargetNode() (+2 more)

### Community 26 - "Community 26"
Cohesion: 0.27
Nodes (5): checkIfValueNeedsQuotes(), quoteSelectedCustomValue(), quoteString(), fixMapDefinitionCustomValues(), loadMapDefinition()

### Community 27 - "Community 27"
Cohesion: 0.35
Nodes (7): useStyles, TestPanel(), TestPanelProps, TestPanelBody(), TestPanelBodyProps, LogCategory, LogMessage

### Community 28 - "Community 28"
Cohesion: 0.33
Nodes (6): FailedMapDefinition, Connection, CustomValueConnection, NodeConnection, isEqualToCustomValue(), isCustomValueConnection()

### Community 29 - "Community 29"
Cohesion: 0.36
Nodes (7): DetailsTabContents(), FunctionConfigurationPopover(), FunctionConfigurationPopoverProps, TabTypes, useStyles, OutputTabContents(), isFileDropdownFunction()

### Community 30 - "Community 30"
Cohesion: 0.46
Nodes (5): CodeViewPanel(), CodeViewPanelProps, CodeViewPanelBody(), CodeViewPanelBodyProps, useStyles

### Community 31 - "Community 31"
Cohesion: 0.29
Nodes (8): getDestinationNode(), getSourceNode(), findFunctionForFunctionName(), findFunctionForKey(), isIfAndGuid(), findNodeForKey(), removeGuidFromKey(), searchChildrenNodeForKey()

### Community 32 - "Community 32"
Cohesion: 0.43
Nodes (4): FunctionPanel(), PanelProps, useStyles, FunctionsSVG()

## Knowledge Gaps
- **112 isolated node(s):** `cache`, `intl`, `EdgePopOverProps`, `DMReactFlowProps`, `nodeTypes` (+107 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `RootState` connect `Community 22` to `Community 0`, `Community 32`, `Community 2`, `Community 1`, `Community 5`, `Community 6`, `Community 15`, `Community 16`, `Community 21`, `Community 23`, `Community 27`, `Community 29`, `Community 30`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **Why does `FunctionData` connect `Community 15` to `Community 0`, `Community 2`, `Community 3`, `Community 5`, `Community 6`, `Community 10`, `Community 12`, `Community 13`, `Community 14`, `Community 19`, `Community 28`, `Community 29`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **Why does `LogCategory` connect `Community 27` to `Community 6`, `Community 10`, `Community 12`, `Community 15`, `Community 17`, `Community 20`, `Community 23`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **What connects `cache`, `intl`, `EdgePopOverProps` to the rest of the system?**
  _112 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.05110809588421529 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.11097560975609756 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.09230769230769231 - nodes in this community are weakly interconnected._