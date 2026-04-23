# Graph Report - src  (2026-04-23)

## Corpus Check
- 143 files · ~82,089 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 446 nodes · 490 edges · 18 communities detected
- Extraction: 78% EXTRACTED · 22% INFERRED · 0% AMBIGUOUS · INFERRED: 108 edges (avg confidence: 0.8)
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
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 28|Community 28]]

## God Nodes (most connected - your core abstractions)
1. `applyConnectionValue()` - 13 edges
2. `isSchemaNodeExtended()` - 10 edges
3. `TrieTree` - 9 edges
4. `createSourcePath()` - 8 edges
5. `isCustomValueConnection()` - 8 edges
6. `addParentConnectionForRepeatingElementsNested()` - 7 edges
7. `isEmptyConnection()` - 7 edges
8. `isNodeConnection()` - 7 edges
9. `TrieTreeNode` - 7 edges
10. `DataMapperApiService` - 6 edges

## Surprising Connections (you probably didn't know these)
- `isFunctionNode()` --calls--> `getCoordinatesForHandle()`  [INFERRED]
  src/utils/ReactFlow.Util.ts → src/components/common/reactflow/edges/useEdgePath.ts
- `generateDataMapXslt()` --calls--> `DataMapperApiServiceInstance()`  [INFERRED]
  src/core/queries/datamap.ts → src/core/services/dataMapperApiService/index.ts
- `testDataMap()` --calls--> `DataMapperApiServiceInstance()`  [INFERRED]
  src/core/queries/datamap.ts → src/core/services/dataMapperApiService/index.ts
- `deleteConnectionFromConnections()` --calls--> `isFunctionData()`  [INFERRED]
  src/core/state/DataMapSlice.ts → src/utils/Function.Utils.ts
- `deleteParentRepeatingConnections()` --calls--> `isSchemaNodeExtended()`  [INFERRED]
  src/core/state/DataMapSlice.ts → src/utils/Schema.Utils.ts

## Communities

### Community 0 - "Community 0"
Cohesion: 0.06
Nodes (39): addRepeatingInputConnection(), applyConnectionValue(), areAllFunctionInputsFilled(), collectSourceNodeIdsForConnectionChain(), collectTargetNodeIdsForConnectionChain(), connectionDoesExist(), createConnectionEntryIfNeeded(), createCustomInputConnection() (+31 more)

### Community 1 - "Community 1"
Cohesion: 0.1
Nodes (18): isNodeConnection(), checkIfValueNeedsQuotes(), quoteSelectedCustomValue(), quoteString(), addQuotesToString(), changeValue(), onChange(), onOptionSelect() (+10 more)

### Community 2 - "Community 2"
Cohesion: 0.11
Nodes (19): getLoopTargetNode(), getLoopTargetNodeWithJson(), MapDefinitionDeserializer, convertSchemaNodeToSchemaNodeExtended(), convertSchemaToSchemaExtended(), deepestNode(), findNodeForKey(), flattenSchemaIntoDictionary() (+11 more)

### Community 3 - "Community 3"
Cohesion: 0.12
Nodes (15): amendSourceKeyForDirectAccessIfNeeded(), collectConditionalValues(), collectFunctionValue(), collectSequenceValue(), combineFunctionAndInputs(), createSchemaNodeOrFunction(), extractScopeFromLoop(), getInputValues() (+7 more)

### Community 4 - "Community 4"
Cohesion: 0.11
Nodes (13): getDestinationKey(), getDestinationNode(), getSourceNode(), calculateIndexValue(), findFunctionForFunctionName(), findFunctionForKey(), functionDropDownItemText(), getFunctionOutputValue() (+5 more)

### Community 5 - "Community 5"
Cohesion: 0.18
Nodes (3): TrieTree, TrieTreeNode, useSearch()

### Community 6 - "Community 6"
Cohesion: 0.12
Nodes (6): generateDataMapXslt(), testDataMap(), DataMapperApiService, getFunctions(), DataMapperApiServiceInstance(), getSelectedSchema()

### Community 7 - "Community 7"
Cohesion: 0.17
Nodes (11): findLast(), convertToArray(), convertToMapDefinition(), createYamlFromMap(), findKeyInMap(), generateMapDefinitionBody(), generateMapDefinitionHeader(), getConnectionsToTargetNodes() (+3 more)

### Community 8 - "Community 8"
Cohesion: 0.14
Nodes (7): ConnectedEdge(), EdgePopOver(), useHoverEdge(), useLooping(), useSelectedEdge(), getCoordinatesForHandle(), useEdgePath()

### Community 9 - "Community 9"
Cohesion: 0.23
Nodes (12): convertCanvasToGridPoint(), findPath(), generateBoundingBoxes(), generatePathfindingGrid(), getLinearDistance(), getLineStretchLength(), getNextPointFromPosition(), getQuadraticCurve() (+4 more)

### Community 11 - "Community 11"
Cohesion: 0.23
Nodes (10): nodeHasSpecificInputEventually(), addParentConnectionForRepeatingElementsNested(), isParentTargetNode(), addSourceReactFlowPrefix(), addTargetReactFlowPrefix(), getTreeNodeId(), isFunctionNode(), isIntermediateNode() (+2 more)

### Community 12 - "Community 12"
Cohesion: 0.2
Nodes (1): DeserializationError

### Community 13 - "Community 13"
Cohesion: 0.25
Nodes (4): FunctionIcon(), iconForFunctionCategory(), iconForNormalizedDataType(), TypeAnnotation()

### Community 14 - "Community 14"
Cohesion: 0.29
Nodes (4): DataMapperDesigner(), DataMapperFileService(), InitDataMapperFileService(), XsltFilePicker()

### Community 15 - "Community 15"
Cohesion: 0.4
Nodes (3): createFileDropdownTree(), MockFileService, render()

### Community 21 - "Community 21"
Cohesion: 1.0
Nodes (2): getConnectionForAnyKey(), hasExpectedConnection()

### Community 23 - "Community 23"
Cohesion: 1.0
Nodes (2): fixMapDefinitionCustomValues(), loadMapDefinition()

### Community 28 - "Community 28"
Cohesion: 1.0
Nodes (1): MockFileService

## Knowledge Gaps
- **2 isolated node(s):** `MockFileService`, `MockFileService`
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 12`** (10 nodes): `collectErrorsForMapChecker()`, `collectInfoForMapChecker()`, `collectOtherForMapChecker()`, `collectWarningsForMapChecker()`, `connectionHasOutputs()`, `convertMapIssuesToMessages()`, `DeserializationError`, `.constructor()`, `functionHasRequiredInputs()`, `MapChecker.Utils.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 21`** (3 nodes): `getConnectionForAnyKey()`, `hasExpectedConnection()`, `MapDefinitionDeserializerHelpers.spec.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 23`** (3 nodes): `fixMapDefinitionCustomValues()`, `loadMapDefinition()`, `MapDefinition.Utils.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 28`** (2 nodes): `FileSelector.spec.tsx`, `MockFileService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `isSchemaNodeExtended()` connect `Community 4` to `Community 0`, `Community 2`, `Community 3`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **Why does `applyConnectionValue()` connect `Community 0` to `Community 1`, `Community 11`, `Community 4`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **Why does `isNodeConnection()` connect `Community 1` to `Community 0`, `Community 4`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **Are the 6 inferred relationships involving `applyConnectionValue()` (e.g. with `addConnection()` and `setUpBackoutLoopTest()`) actually correct?**
  _`applyConnectionValue()` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Are the 9 inferred relationships involving `isSchemaNodeExtended()` (e.g. with `deleteParentRepeatingConnections()` and `createSourcePath()`) actually correct?**
  _`isSchemaNodeExtended()` has 9 INFERRED edges - model-reasoned connections that need verification._
- **Are the 7 inferred relationships involving `createSourcePath()` (e.g. with `isEmptyConnection()` and `isCustomValueConnection()`) actually correct?**
  _`createSourcePath()` has 7 INFERRED edges - model-reasoned connections that need verification._
- **Are the 6 inferred relationships involving `isCustomValueConnection()` (e.g. with `createSourcePath()` and `isEqualToCustomValue()`) actually correct?**
  _`isCustomValueConnection()` has 6 INFERRED edges - model-reasoned connections that need verification._