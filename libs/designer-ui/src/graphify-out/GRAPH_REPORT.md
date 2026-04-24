# Graph Report - src  (2026-04-24)

## Corpus Check
- 567 files · ~178,664 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1251 nodes · 985 edges · 32 communities detected
- Extraction: 81% EXTRACTED · 19% INFERRED · 0% AMBIGUOUS · INFERRED: 189 edges (avg confidence: 0.8)
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
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 63|Community 63]]
- [[_COMMUNITY_Community 66|Community 66]]

## God Nodes (most connected - your core abstractions)
1. `onChange()` - 31 edges
2. `createLiteralValueSegment()` - 21 edges
3. `convertStringToSegments()` - 17 edges
4. `convertSegmentsToString()` - 14 edges
5. `handleUpdateParent()` - 14 edges
6. `handleBlur()` - 9 edges
7. `processStringSegmentTokensInDomAndLexicalContext()` - 9 edges
8. `handleClick()` - 8 edges
9. `createEmptyLiteralValueSegment()` - 8 edges
10. `notEqual()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `formatShownProperties()` --calls--> `createLiteralValueSegment()`  [INFERRED]
  src/lib/staticResult/util.ts → src/lib/editor/base/utils/helper.ts
- `serialize()` --calls--> `createLiteralValueSegment()`  [INFERRED]
  src/lib/floatingactionmenu/floatingactionmenuinputs/helper.ts → src/lib/editor/base/utils/helper.ts
- `$createExtendedTextNode()` --calls--> `appendStringSegment()`  [INFERRED]
  src/lib/editor/base/nodes/extendedTextNode.tsx → src/lib/editor/base/utils/parsesegments.ts
- `onChange()` --calls--> `onContentChanged()`  [INFERRED]
  src/lib/authentication/CollapsedAuthentication.tsx → src/lib/unitTesting/conditionExpression/index.tsx
- `handleUpdateRootProps()` --calls--> `onChange()`  [INFERRED]
  src/lib/querybuilder/SimpleQueryBuilder.tsx → src/lib/authentication/CollapsedAuthentication.tsx

## Communities

### Community 0 - "Community 0"
Cohesion: 0.04
Nodes (45): collapseLiteralSegments(), convertStringToSegments(), removeNewlinesAndSpaces(), createEmptyLiteralValueSegment(), isTokenValueSegment(), handleValueChange(), appendChildrenNode(), appendStringSegment() (+37 more)

### Community 1 - "Community 1"
Cohesion: 0.05
Nodes (26): handleBlur(), onFileFolderSelected(), GroupDropdown(), addStringLiteralSegment(), containsTokenSegments(), createLiteralValueSegment(), insertQutationForStringType(), DropdownEditor() (+18 more)

### Community 2 - "Community 2"
Cohesion: 0.06
Nodes (28): onChange(), handleOptionSelect(), handleBlur(), handleCollapsedBlur(), handleSetIsValuePlaintext(), handleToggle(), isValueSafeForLexical(), onValueChange() (+20 more)

### Community 3 - "Community 3"
Cohesion: 0.07
Nodes (23): handleArrayElementSaved(), Format(), handleCheckbox(), handleDelete(), handleGroup(), handleMoveChild(), handleSelectedOption(), handleUngroup() (+15 more)

### Community 4 - "Community 4"
Cohesion: 0.06
Nodes (19): updateLayout(), OperationActionDataFromOperation(), getOperationCardDataFromOperation(), getShouldUseSingleColumn(), handleChange(), handleVerifyRunId(), MockStatusIcon(), StatusPill() (+11 more)

### Community 5 - "Community 5"
Cohesion: 0.09
Nodes (11): $createExtendedTextNode(), ExtendedTextNode, generateSchemaForObject(), generateSchemaFromArray(), generateSchemaFromJsonString(), generateSchemaFromValue(), getJsonSchemaType(), tryConvertStringToExpression() (+3 more)

### Community 6 - "Community 6"
Cohesion: 0.08
Nodes (4): conditionalStyles(), FavoriteButton(), mergeClasses(), themeAwareStyles()

### Community 7 - "Community 7"
Cohesion: 0.11
Nodes (15): handleBlur(), handleContentChanged(), handleFileNameChange(), SchemaEditor(), tokenClicked(), buildInlineCodeTextFromToken(), formatForCSharp(), formatForJavascript() (+7 more)

### Community 8 - "Community 8"
Cohesion: 0.1
Nodes (6): isEnterKey(), isEscapeKey(), isSpaceKey(), handleKeyDown(), onCommentTextFieldEscape(), handleKeyDown()

### Community 9 - "Community 9"
Cohesion: 0.15
Nodes (13): canReplaceSpanWithId(), processStringSegmentTokensInDomAndLexicalContext(), cleanHtmlString(), decodeSegmentValueInDomContext(), decodeSegmentValueInLexicalContext(), encodeOrDecodeSegmentValue(), encodeSegmentValueInDomContext(), encodeSegmentValueInLexicalContext() (+5 more)

### Community 10 - "Community 10"
Cohesion: 0.15
Nodes (7): renderGroup(), renderHybridQueryBuilder(), renderQueryBuilder(), createComplexTestData(), createTestGroup(), createTestRow(), createTestValueSegment()

### Community 11 - "Community 11"
Cohesion: 0.16
Nodes (10): convertDynamicallyAddedSchemaKeyToTitle(), createDynamicallyAddedParameterProperties(), deserialize(), getDefaultTitleForDynamicallyAddedParameterType(), getDescriptionForDynamicallyAddedParameterType(), getEmptySchemaValueSegmentForInitialization(), getIconForDynamicallyAddedParameterType(), getMenuItemsForDynamicAddedParameters() (+2 more)

### Community 12 - "Community 12"
Cohesion: 0.12
Nodes (4): getLabel(), saveStaticResults(), formatShownProperties(), serializePropertyValues()

### Community 13 - "Community 13"
Cohesion: 0.17
Nodes (6): handleExpressionEditorMoveDistance(), handleResize(), handleSelectKey(), isDynamicContentAvailable(), onContentChanged(), onExpressionEditorBlur()

### Community 14 - "Community 14"
Cohesion: 0.16
Nodes (4): handleClick(), handleClickOrEnterKeyPress(), handleEnterKeyPress(), handleFocus()

### Community 15 - "Community 15"
Cohesion: 0.22
Nodes (9): BodyLinkValue(), Value(), isContentHash(), isContentLink(), isSecureData(), isXml(), encoded_atob(), removeByteOrderMark() (+1 more)

### Community 16 - "Community 16"
Cohesion: 0.24
Nodes (5): onDescriptionBlur(), onDescriptionChange(), onTitleBlur(), onTitleChange(), renderMenuButton()

### Community 17 - "Community 17"
Cohesion: 0.22
Nodes (4): AssistantError(), AssistantGreeting(), useFeedbackMessage(), useReportBugButton()

### Community 18 - "Community 18"
Cohesion: 0.25
Nodes (3): handleLinkSubmission(), monitorInputInteraction(), sanitizeUrl()

### Community 19 - "Community 19"
Cohesion: 0.25
Nodes (3): CreateAgentParameter(), CreateNaturalLanguageToFlowInputInternal(), useId()

### Community 20 - "Community 20"
Cohesion: 0.29
Nodes (3): handleUpdate(), onDescriptionChange(), onNameChange()

### Community 21 - "Community 21"
Cohesion: 0.29
Nodes (4): onTabSelect(), onItemClick(), onTabSelected(), trackEventHandler()

### Community 22 - "Community 22"
Cohesion: 0.25
Nodes (2): OperationsPreview(), isControlFlowOperation()

### Community 24 - "Community 24"
Cohesion: 0.48
Nodes (6): cssToCamelCase(), generateImports(), generateStyleHook(), transformRule(), transformValue(), transformVariable()

### Community 30 - "Community 30"
Cohesion: 0.4
Nodes (2): getLanguageExtension(), workflow()

### Community 31 - "Community 31"
Cohesion: 0.5
Nodes (2): getInitializeVariableAbcToken(), getInitializeVariableOpenBraceToken()

### Community 32 - "Community 32"
Cohesion: 0.6
Nodes (4): ContainerWithProgressBar(), getContainerStyles(), getProgressBarStyles(), ProgressBar()

### Community 34 - "Community 34"
Cohesion: 0.4
Nodes (2): SecureDataSection(), getBrandColorWithOpacity()

### Community 36 - "Community 36"
Cohesion: 0.5
Nodes (2): Assertions(), isHighContrastBlack()

### Community 46 - "Community 46"
Cohesion: 0.67
Nodes (1): InvalidJsonSchemaTypeException

### Community 63 - "Community 63"
Cohesion: 1.0
Nodes (2): DecimalValue(), localizeDecimalNumber()

### Community 66 - "Community 66"
Cohesion: 1.0
Nodes (2): buildFoundryPortalUrl(), guidToBase64Url()

## Knowledge Gaps
- **Thin community `Community 22`** (8 nodes): `FlowPreview()`, `OperationsPreview()`, `getCaseDisplayName()`, `isControlFlowOperation()`, `isVariableOperation()`, `toOperationInfo()`, `flowPreview.tsx`, `flowPreviewHelper.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 30`** (5 nodes): `getLanguageExtension()`, `languageHasBuiltInCompletion()`, `workflow()`, `CodeMirrorEditor.tsx`, `index.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 31`** (5 nodes): `getCreateNewFolderToken()`, `getInitializeVariableAbcToken()`, `getInitializeVariableOpenBraceToken()`, `getOneDriveFileContentToken()`, `editorToSegment.spec.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 34`** (5 nodes): `SecureDataSection()`, `utils.ts`, `index.tsx`, `getBrandColorWithOpacity()`, `getHeaderStyle()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 36`** (4 nodes): `Assertions()`, `assertions.tsx`, `theme.ts`, `isHighContrastBlack()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 46`** (3 nodes): `InvalidJsonSchemaTypeException`, `.constructor()`, `invalidjsonschematype.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 63`** (3 nodes): `DecimalValue()`, `localizeDecimalNumber()`, `decimal.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 66`** (3 nodes): `buildFoundryPortalUrl()`, `guidToBase64Url()`, `index.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `createLiteralValueSegment()` connect `Community 1` to `Community 0`, `Community 2`, `Community 7`, `Community 10`, `Community 11`, `Community 12`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Why does `onChange()` connect `Community 2` to `Community 1`, `Community 3`, `Community 4`, `Community 7`, `Community 11`, `Community 13`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **Why does `convertStringToSegments()` connect `Community 0` to `Community 1`, `Community 2`, `Community 9`?**
  _High betweenness centrality (0.038) - this node is a cross-community bridge._
- **Are the 30 inferred relationships involving `onChange()` (e.g. with `handleChange()` and `updateSimpleItems()`) actually correct?**
  _`onChange()` has 30 INFERRED edges - model-reasoned connections that need verification._
- **Are the 19 inferred relationships involving `createLiteralValueSegment()` (e.g. with `parseSimpleItems()` and `parseAgentInstruction()`) actually correct?**
  _`createLiteralValueSegment()` has 19 INFERRED edges - model-reasoned connections that need verification._
- **Are the 14 inferred relationships involving `convertStringToSegments()` (e.g. with `parseSimpleItems()` and `parseComplexItems()`) actually correct?**
  _`convertStringToSegments()` has 14 INFERRED edges - model-reasoned connections that need verification._
- **Are the 12 inferred relationships involving `convertSegmentsToString()` (e.g. with `parseSimpleItems()` and `convertComplexItemsToArray()`) actually correct?**
  _`convertSegmentsToString()` has 12 INFERRED edges - model-reasoned connections that need verification._