# Graph Report - src  (2026-04-24)

## Corpus Check
- 143 files · ~77,576 words
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
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 38|Community 38]]

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
10. `isFunctionData()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `isFunctionNode()` --calls--> `getCoordinatesForHandle()`  [INFERRED]
  src/utils/ReactFlow.Util.ts → src/components/common/reactflow/edges/useEdgePath.ts
- `generateFunctionConnectionMetadata()` --calls--> `isNodeConnection()`  [INFERRED]
  src/mapHandling/MapMetadataSerializer.ts → src/utils/Connection.Utils.ts
- `createSourcePath()` --calls--> `isEmptyConnection()`  [INFERRED]
  src/mapHandling/MapDefinitionSerializer.ts → src/utils/Connection.Utils.ts
- `createSourcePath()` --calls--> `isCustomValueConnection()`  [INFERRED]
  src/mapHandling/MapDefinitionSerializer.ts → src/utils/Connection.Utils.ts
- `createSourcePath()` --calls--> `isSchemaNodeExtended()`  [INFERRED]
  src/mapHandling/MapDefinitionSerializer.ts → src/utils/Schema.Utils.ts

## Communities

### Community 0 - "Community 0"
Cohesion: 0.07
Nodes (33): addRepeatingInputConnection(), applyConnectionValue(), areAllFunctionInputsFilled(), collectSourceNodeIdsForConnectionChain(), collectTargetNodeIdsForConnectionChain(), connectionDoesExist(), createConnectionEntryIfNeeded(), createCustomInputConnection() (+25 more)

### Community 1 - "Community 1"
Cohesion: 0.1
Nodes (18): isNodeConnection(), checkIfValueNeedsQuotes(), quoteSelectedCustomValue(), quoteString(), addQuotesToString(), changeValue(), onChange(), onOptionSelect() (+10 more)

### Community 2 - "Community 2"
Cohesion: 0.11
Nodes (19): getLoopTargetNode(), getLoopTargetNodeWithJson(), MapDefinitionDeserializer, convertSchemaNodeToSchemaNodeExtended(), convertSchemaToSchemaExtended(), deepestNode(), findNodeForKey(), flattenSchemaIntoDictionary() (+11 more)

### Community 3 - "Community 3"
Cohesion: 0.11
Nodes (13): getDestinationKey(), getDestinationNode(), getSourceNode(), calculateIndexValue(), findFunctionForFunctionName(), findFunctionForKey(), functionDropDownItemText(), getFunctionOutputValue() (+5 more)

### Community 4 - "Community 4"
Cohesion: 0.13
Nodes (12): amendSourceKeyForDirectAccessIfNeeded(), collectFunctionValue(), collectSequenceValue(), combineFunctionAndInputs(), createSchemaNodeOrFunction(), extractScopeFromLoop(), getInputValues(), getParentId() (+4 more)

### Community 5 - "Community 5"
Cohesion: 0.18
Nodes (3): TrieTree, TrieTreeNode, useSearch()

### Community 6 - "Community 6"
Cohesion: 0.16
Nodes (14): collectConditionalValues(), formatDirectAccess(), addConditionalToNewPathItems(), convertToArray(), convertToMapDefinition(), createSourcePath(), createYamlFromMap(), findKeyInMap() (+6 more)

### Community 7 - "Community 7"
Cohesion: 0.15
Nodes (14): findLast(), nodeHasSpecificInputEventually(), addParentConnectionForRepeatingElementsNested(), isParentTargetNode(), getPathForSrcSchemaNode(), setUpBackoutLoopTest(), addReactFlowPrefix(), addSourceReactFlowPrefix() (+6 more)

### Community 8 - "Community 8"
Cohesion: 0.12
Nodes (6): generateDataMapXslt(), testDataMap(), DataMapperApiService, getFunctions(), DataMapperApiServiceInstance(), getSelectedSchema()

### Community 9 - "Community 9"
Cohesion: 0.12
Nodes (9): ConnectedEdge(), EdgePopOver(), getReactFlowNodeId(), useHoverEdge(), useHoverNode(), useLooping(), useSelectedEdge(), getCoordinatesForHandle() (+1 more)

### Community 10 - "Community 10"
Cohesion: 0.23
Nodes (12): convertCanvasToGridPoint(), findPath(), generateBoundingBoxes(), generatePathfindingGrid(), getLinearDistance(), getLineStretchLength(), getNextPointFromPosition(), getQuadraticCurve() (+4 more)

### Community 12 - "Community 12"
Cohesion: 0.2
Nodes (1): DeserializationError

### Community 13 - "Community 13"
Cohesion: 0.25
Nodes (4): FunctionIcon(), iconForFunctionCategory(), iconForNormalizedDataType(), TypeAnnotation()

### Community 14 - "Community 14"
Cohesion: 0.29
Nodes (4): DataMapperDesigner(), DataMapperFileService(), InitDataMapperFileService(), XsltFilePicker()

### Community 16 - "Community 16"
Cohesion: 0.4
Nodes (3): createFileDropdownTree(), MockFileService, render()

### Community 19 - "Community 19"
Cohesion: 1.0
Nodes (2): getConnectionForAnyKey(), hasExpectedConnection()

### Community 21 - "Community 21"
Cohesion: 1.0
Nodes (2): fixMapDefinitionCustomValues(), loadMapDefinition()

### Community 38 - "Community 38"
Cohesion: 1.0
Nodes (1): MockFileService

## Knowledge Gaps
- **2 isolated node(s):** `MockFileService`, `MockFileService`
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 12`** (10 nodes): `collectErrorsForMapChecker()`, `collectInfoForMapChecker()`, `collectOtherForMapChecker()`, `collectWarningsForMapChecker()`, `connectionHasOutputs()`, `convertMapIssuesToMessages()`, `DeserializationError`, `.constructor()`, `functionHasRequiredInputs()`, `MapChecker.Utils.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 19`** (3 nodes): `getConnectionForAnyKey()`, `hasExpectedConnection()`, `MapDefinitionDeserializerHelpers.spec.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 21`** (3 nodes): `fixMapDefinitionCustomValues()`, `loadMapDefinition()`, `MapDefinition.Utils.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 38`** (2 nodes): `FileSelector.spec.tsx`, `MockFileService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `isSchemaNodeExtended()` connect `Community 3` to `Community 0`, `Community 2`, `Community 4`, `Community 6`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **Why does `applyConnectionValue()` connect `Community 0` to `Community 1`, `Community 3`, `Community 7`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **Why does `isNodeConnection()` connect `Community 1` to `Community 0`, `Community 3`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **Are the 6 inferred relationships involving `applyConnectionValue()` (e.g. with `setUpBackoutLoopTest()` and `createSchemaToSchemaNodeConnection()`) actually correct?**
  _`applyConnectionValue()` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Are the 9 inferred relationships involving `isSchemaNodeExtended()` (e.g. with `createSourcePath()` and `addLoopingForToNewPathItems()`) actually correct?**
  _`isSchemaNodeExtended()` has 9 INFERRED edges - model-reasoned connections that need verification._
- **Are the 7 inferred relationships involving `createSourcePath()` (e.g. with `isEmptyConnection()` and `isCustomValueConnection()`) actually correct?**
  _`createSourcePath()` has 7 INFERRED edges - model-reasoned connections that need verification._
- **Are the 6 inferred relationships involving `isCustomValueConnection()` (e.g. with `createSourcePath()` and `isEqualToCustomValue()`) actually correct?**
  _`isCustomValueConnection()` has 6 INFERRED edges - model-reasoned connections that need verification._