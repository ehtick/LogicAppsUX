# Graph Report - src  (2026-05-28)

## Corpus Check
- 143 files · ~77,576 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1060 nodes · 2318 edges · 53 communities (49 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.8)
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
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]

## God Nodes (most connected - your core abstractions)
1. `FunctionData` - 35 edges
2. `RootState` - 31 edges
3. `isSchemaNodeExtended()` - 24 edges
4. `ConnectionDictionary` - 24 edges
5. `applyConnectionValue()` - 21 edges
6. `isEmptyConnection()` - 18 edges
7. `isCustomValueConnection()` - 18 edges
8. `convertSchemaToSchemaExtended()` - 18 edges
9. `isNodeConnection()` - 17 edges
10. `isFunctionData()` - 16 edges

## Surprising Connections (you probably didn't know these)
- `DataProviderInner()` --calls--> `convertSchemaToSchemaExtended()`  [EXTRACTED]
  core/DataMapDataProvider.tsx → utils/Schema.Utils.ts
- `DataMapDataProviderProps` --references--> `FunctionData`  [EXTRACTED]
  core/DataMapDataProvider.tsx → models/Function.ts
- `FunctionState` --references--> `FunctionData`  [EXTRACTED]
  core/state/FunctionSlice.ts → models/Function.ts
- `FunctionListItemProps` --references--> `FunctionData`  [EXTRACTED]
  components/functionList/FunctionListItem.tsx → models/Function.ts
- `InputDropdownProps` --references--> `FunctionData`  [EXTRACTED]
  components/functionConfigurationMenu/inputDropdown/InputDropdown.tsx → models/Function.ts

## Communities (53 total, 4 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.01
Nodes (144): actualForLoopObject, actualForLoopObjectKeys, addFunctionId, categorizedCatalogChildren, categorizedCatalogObject, complexArray1Object, complexArrayObject, concatFunctionId (+136 more)

### Community 1 - "Community 1"
Cohesion: 0.06
Nodes (49): useStyles, DataMapperFileService(), FileDropdownTree(), FileDropdownTreeProps, InputListWrapper, FileWithVsCodePath, SchemaFile, SchemaPanelNodeReactFlowDataProps (+41 more)

### Community 2 - "Community 2"
Cohesion: 0.05
Nodes (42): DataMapperApiService, DataMapperApiServiceOptions, DmErrorResponse, filename, formattedFilePath, DataMapperApiServiceInstance(), dataMapperApiVersions, defaultDataMapperApiServiceOptions (+34 more)

### Community 3 - "Community 3"
Cohesion: 0.06
Nodes (22): AbsoluteValue32Regular, AngleIcon, CeilingValue32Regular, Count32Regular, Divide32Regular, EPowerX32Regular, FloorValue32Regular, GreaterThan32Regular (+14 more)

### Community 4 - "Community 4"
Cohesion: 0.07
Nodes (32): functionMock, extendedSchema, connectionDictionary, extendedSource, extendedTarget, getConnectionForAnyKey(), hasExpectedConnection(), mapDefinitionDeserializer (+24 more)

### Community 5 - "Community 5"
Cohesion: 0.06
Nodes (35): absoluteKey, amendedSourceKey, backoutRegex, childKey, ConditionalMetadata, connections, directAccessSeparated, error (+27 more)

### Community 6 - "Community 6"
Cohesion: 0.06
Nodes (31): atypicallyMockFunctionNode, connections, dummyNode, extendedComprehensiveSourceSchema, extendedComprehensiveTargetSchema, extendedSourceSchema, extendedTargetSchema, funcData (+23 more)

### Community 7 - "Community 7"
Cohesion: 0.12
Nodes (27): ReactFlowStatesProps, useReactFlowStates(), NodeIds, ReactFlowEdgeType, ReactFlowNodeType, getCoordinatesForHandle(), MapCheckerItem(), MapCheckerItemProps (+19 more)

### Community 8 - "Community 8"
Cohesion: 0.13
Nodes (25): addConditionalToNewPathItems(), convertToArray(), convertToMapDefinition(), createNewPathItems(), createSourcePath(), createYamlFromMap(), findKeyInMap(), generateMapDefinitionBody() (+17 more)

### Community 9 - "Community 9"
Cohesion: 0.10
Nodes (19): mapNodeParams, reservedMapDefinitionKeys, reservedMapDefinitionKeysArray, reservedMapNodeParamsArray, directAccessPseudoFunction, ifPseudoFunction, indexPseudoFunction, amendSourceKeyForDirectAccessIfNeeded() (+11 more)

### Community 10 - "Community 10"
Cohesion: 0.10
Nodes (22): ComponentState, dataMapSlice, DataMapState, DeleteConnectionAction, deleteConnectionFromConnections(), deleteParentRepeatingConnections(), Draft2, emptyPristineState (+14 more)

### Community 11 - "Community 11"
Cohesion: 0.08
Nodes (12): Any16Filled, Any16Regular, Array16Filled, Array16Regular, Binary16Filled, Binary16Regular, Decimal16Filled, Decimal16Regular (+4 more)

### Community 12 - "Community 12"
Cohesion: 0.08
Nodes (12): Any24Filled, Any24Regular, Array24Filled, Array24Regular, Binary24Filled, Binary24Regular, Decimal24Filled, Decimal24Regular (+4 more)

### Community 13 - "Community 13"
Cohesion: 0.08
Nodes (20): a, aName, children, customerTarget, extendedAdjSchema, extendedComprehensiveSourceSchema, extendedComprehensiveTargetSchema, extendedLoopSource (+12 more)

### Community 14 - "Community 14"
Cohesion: 0.12
Nodes (15): DataMapDataProviderProps, DataProviderInner(), appSlice, AppState, initialState, functionSlice, FunctionState, initialFunctionState (+7 more)

### Community 15 - "Community 15"
Cohesion: 0.13
Nodes (21): addConnection(), deleteNodeFromConnections(), connectionDict, connections, connections1, destinationId, extendedSchema, functionData (+13 more)

### Community 16 - "Community 16"
Cohesion: 0.12
Nodes (15): errorsSlice, ErrorsState, initialFunctionState, isValidConnectionByType(), isValidCustomValueByType(), nodeHasSourceNodeEventually(), IntlMessage, areInputTypesValidForSchemaNode() (+7 more)

### Community 17 - "Community 17"
Cohesion: 0.13
Nodes (16): EdgePopOver(), EdgePopOverProps, DMReactFlowProps, edgeTypes, nodeTypes, ReactFlowWrapper(), reactFlowStyle, useStyles (+8 more)

### Community 18 - "Community 18"
Cohesion: 0.13
Nodes (17): MapCheckerPanel(), useStyles, CodeViewState, ConfigPanelView, FunctionPanelState, initialState, MapCheckPanelState, MapCheckTabType (+9 more)

### Community 19 - "Community 19"
Cohesion: 0.15
Nodes (3): TrieTree, TrieTreeNode, AppState

### Community 20 - "Community 20"
Cohesion: 0.19
Nodes (14): useStyles, validateAndCreateConnectionInput(), MapDefinitionDeserializer, EmptyConnection, InputConnection, NodeConnection, FunctionData, validateAndCreateConnectionOutput() (+6 more)

### Community 21 - "Community 21"
Cohesion: 0.20
Nodes (12): InputCustomInfoLabel(), CommonProps, CustomListItem(), CustomListItemProps, InputListProps, TemplateItemProps, getInputTypeFromNode(), useStyles (+4 more)

### Community 22 - "Community 22"
Cohesion: 0.21
Nodes (13): customTokens, FunctionDataTreeItem, FunctionListProps, fuseFunctionSearchOptions, loopFuseFunctionSearchOptions, FunctionListHeader(), FunctionListHeaderProps, DropResult (+5 more)

### Community 23 - "Community 23"
Cohesion: 0.21
Nodes (10): Panel(), PanelProps, PanelXButton(), PanelXButtonProps, useStyles, AppDispatch, useStyles, TestPanelProps (+2 more)

### Community 24 - "Community 24"
Cohesion: 0.23
Nodes (10): collectionBranding, conversionBranding, customBranding, dateTimeBranding, FunctionGroupBranding, logicalBranding, mathBranding, stringBranding (+2 more)

### Community 25 - "Community 25"
Cohesion: 0.19
Nodes (10): CustomValueConnection, areAllFunctionInputsFilled(), collectSourceNodeIdsForConnectionChain(), collectTargetNodeIdsForConnectionChain(), getActiveNodes(), inputFromHandleId(), isFunctionInputSlotAvailable(), nodeHasSpecificOutputEventually() (+2 more)

### Community 26 - "Community 26"
Cohesion: 0.13
Nodes (14): connections, extendedSource, extendedTarget, flattenedSource, flattenedTarget, indexed, mockFunctionData, mockSchemaNodeExtended (+6 more)

### Community 27 - "Community 27"
Cohesion: 0.14
Nodes (9): useStyles, FunctionCategoryColorToken, customDarkTokens, DataMapperTheme, extendedWebDarkTheme, extendedWebLightTheme, fnColors, spacingOverrides (+1 more)

### Community 28 - "Community 28"
Cohesion: 0.22
Nodes (11): Bounds, DataMapperWrappedContext, ScrollLocation, ScrollProps, IDataMapperFileService, InitDataMapperFileService(), TestPanel(), DataMapperDesigner() (+3 more)

### Community 29 - "Community 29"
Cohesion: 0.15
Nodes (12): extendedSourceSchema, indexValue, indexValueA, indexValueB, inputArgs, mockConnections, modifiedQuotesString, noQuotesString (+4 more)

### Community 30 - "Community 30"
Cohesion: 0.20
Nodes (9): EditorCommandBar(), EditorCommandBarProps, MetaMapDefinition, generateMapMetadata(), initialState, modalSlice, ModalState, WarningModalState (+1 more)

### Community 31 - "Community 31"
Cohesion: 0.29
Nodes (7): InputDropdown(), InputDropdownProps, InputOptionProps, useStyles, checkIfValueNeedsQuotes(), quoteSelectedCustomValue(), quoteString()

### Community 32 - "Community 32"
Cohesion: 0.29
Nodes (8): convertConnectionShorthandToId(), generateFunctionConnectionMetadata(), ConnectionDictionary, FunctionDictionary, DataMapOperationState, InitialDataMapAction, isNodeConnection(), doesFunctionMetadataExist()

### Community 33 - "Community 33"
Cohesion: 0.31
Nodes (7): CanvasNode(), CanvasNodeProps, CardProps, FunctionNode(), useStyles, useHoverFunctionNode(), useSelectedNode()

### Community 34 - "Community 34"
Cohesion: 0.36
Nodes (6): ConnectedEdge(), useEdgePath(), useHoverEdge(), useHoverNode(), useSelectedEdge(), getReactFlowNodeId()

### Community 35 - "Community 35"
Cohesion: 0.36
Nodes (9): addLoopingForToNewPathItems(), collectTargetNodesForConnectionChain(), isCustomValueConnection(), getDestinationKey(), calculateIndexValue(), functionDropDownItemText(), getIndexValueForCurrentConnection(), getInputName() (+1 more)

### Community 36 - "Community 36"
Cohesion: 0.22
Nodes (8): FailedMapDefinition, Connection, conn, errors, functionConn, hasRequiredInputs, nodeConnection, outputConnection

### Community 37 - "Community 37"
Cohesion: 0.36
Nodes (6): reactPlugin, DataMapperDesignerContext, DataMapperDesignerProvider(), DataMapperDesignerProviderProps, getCustomizedTheme(), store

### Community 38 - "Community 38"
Cohesion: 0.39
Nodes (5): CodeViewPanel(), CodeViewPanelProps, CodeViewPanelBody(), CodeViewPanelBodyProps, useStyles

### Community 39 - "Community 39"
Cohesion: 0.29
Nodes (6): FunctionConfigurationPopover(), FunctionConfigurationPopoverProps, TabTypes, InputTabContents(), OutputTabContents(), isFileDropdownFunction()

### Community 40 - "Community 40"
Cohesion: 0.25
Nodes (7): getPathForSrcSchemaNode(), findLast(), nodeHasSpecificInputEventually(), addParentConnectionForRepeatingElementsNested(), isParentTargetNode(), addSourceReactFlowPrefix(), addTargetReactFlowPrefix()

### Community 41 - "Community 41"
Cohesion: 0.29
Nodes (8): getDestinationNode(), getSourceNode(), findFunctionForFunctionName(), findFunctionForKey(), isIfAndGuid(), findNodeForKey(), removeGuidFromKey(), searchChildrenNodeForKey()

### Community 42 - "Community 42"
Cohesion: 0.33
Nodes (3): CollectionRegular, StringCategory20Regular, result

### Community 43 - "Community 43"
Cohesion: 0.33
Nodes (4): InputTextbox(), InputTextboxProps, FunctionInput, addQuotesToString()

### Community 44 - "Community 44"
Cohesion: 0.53
Nodes (5): FunctionIcon(), FunctionIconProps, FunctionCategory, iconForFunction(), iconForFunctionCategory()

### Community 45 - "Community 45"
Cohesion: 0.40
Nodes (4): FunctionList(), FunctionPanel(), PanelProps, FunctionsSVG()

## Knowledge Gaps
- **403 isolated node(s):** `BoundingBox`, `NodeBoundingBox`, `GraphBoundingBox`, `GetSmoothStepEdgeParams`, `LogMessage` (+398 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `FunctionData` connect `Community 20` to `Community 0`, `Community 2`, `Community 4`, `Community 5`, `Community 6`, `Community 9`, `Community 10`, `Community 14`, `Community 15`, `Community 16`, `Community 21`, `Community 22`, `Community 24`, `Community 25`, `Community 26`, `Community 29`, `Community 31`, `Community 33`, `Community 39`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **Why does `RootState` connect `Community 14` to `Community 33`, `Community 1`, `Community 34`, `Community 38`, `Community 7`, `Community 39`, `Community 45`, `Community 17`, `Community 18`, `Community 20`, `Community 21`, `Community 22`, `Community 23`, `Community 28`, `Community 30`, `Community 31`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **Why does `FunctionCategory` connect `Community 44` to `Community 3`, `Community 6`, `Community 9`, `Community 42`, `Community 15`, `Community 20`, `Community 22`, `Community 24`, `Community 26`, `Community 31`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **What connects `BoundingBox`, `NodeBoundingBox`, `GraphBoundingBox` to the rest of the system?**
  _403 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.013793103448275862 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.05575065847234416 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.05084745762711865 - nodes in this community are weakly interconnected._