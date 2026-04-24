# Graph Report - src  (2026-04-24)

## Corpus Check
- 328 files · ~198,710 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1242 nodes · 1898 edges · 38 communities detected
- Extraction: 70% EXTRACTED · 30% INFERRED · 0% AMBIGUOUS · INFERRED: 575 edges (avg confidence: 0.8)
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
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 33|Community 33]]
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
- [[_COMMUNITY_Community 66|Community 66]]
- [[_COMMUNITY_Community 72|Community 72]]
- [[_COMMUNITY_Community 78|Community 78]]

## God Nodes (most connected - your core abstractions)
1. `map()` - 70 edges
2. `equals()` - 48 edges
3. `includes()` - 27 edges
4. `StandardRunService` - 26 edges
5. `getAzureResourceRecursive()` - 26 edges
6. `isHybridLogicApp()` - 24 edges
7. `ConsumptionRunService` - 24 edges
8. `SchemaProcessor` - 21 edges
9. `startsWith()` - 19 edges
10. `SwaggerParser` - 19 edges

## Surprising Connections (you probably didn't know these)
- `canRunBeInvokedWithPayload()` --calls--> `equals()`  [INFERRED]
  src/utils/src/lib/helpers/logicapps.ts → src/utils/src/lib/helpers/functions.ts
- `filterStateful()` --calls--> `includes()`  [INFERRED]
  src/designer-client-services/lib/standard/search.ts → src/utils/src/lib/helpers/functions.ts
- `includePathItemParameters()` --calls--> `map()`  [INFERRED]
  src/parsers/lib/swagger/parser.ts → src/utils/src/lib/helpers/functions.ts
- `getIntl()` --calls--> `getTriggerType()`  [INFERRED]
  src/intl/src/intl.tsx → src/utils/src/lib/helpers/logicapps.ts
- `getClientRequestIdFromHeaders()` --calls--> `_getResponseFromDynamicApi()`  [INFERRED]
  src/designer-client-services/lib/helpers.ts → src/designer-client-services/lib/base/connector.ts

## Communities

### Community 0 - "Community 0"
Cohesion: 0.04
Nodes (53): ExpressionBuilder, ExpressionBuilderException, connectorContainsAllClientCertificateConnectionParameters(), connectorContainsAllServicePrincipalConnectionParameters(), getAuthRedirect(), _getConnectionParameterSetParametersUsingType(), getConnectionParametersWithType(), getIdentityDropdownOptions() (+45 more)

### Community 1 - "Community 1"
Cohesion: 0.05
Nodes (42): BrowserReporter, convertLevelToType(), ConsumptionConnectionService, createConnectionInApiHub(), deleteConnection(), _getAdditionalPropertiesForCreateConnection(), getAzureConnectionRequestPath(), _getAzureConnector() (+34 more)

### Community 2 - "Community 2"
Cohesion: 0.04
Nodes (11): fetchAppsByQuery(), getAzureResourceRecursive(), BaseCognitiveServiceService, getAllConnectionsInLocation(), BaseFunctionService, BaseGatewayService, guid(), BaseResourceService (+3 more)

### Community 3 - "Community 3"
Cohesion: 0.04
Nodes (24): clone(), combineObjects(), copy(), deepMerge(), deleteObjectProperties(), deleteObjectProperty(), excludePathValueFromTarget(), extend() (+16 more)

### Community 4 - "Community 4"
Cohesion: 0.06
Nodes (29): makeFetchResponse(), BaseExperimentationService, ExperimentationService(), enableAPIMGatewayConnection(), ConsumptionSearchService, filterAzureConnection(), filterStateful(), getActiveSearchOperations() (+21 more)

### Community 5 - "Community 5"
Cohesion: 0.08
Nodes (19): aggregate(), getIntl(), create(), isDynamicTreeExtension(), isLegacyDynamicValuesBuiltInExtension(), isLegacyDynamicValuesExtension(), isLegacyDynamicValuesTreeExtension(), ParametersProcessor (+11 more)

### Community 6 - "Community 6"
Cohesion: 0.05
Nodes (21): StandardArtifactService, hex2rgb(), hsv2rgb(), rgb2hex(), rgb2hsv(), toHex(), transformColor(), copyArray() (+13 more)

### Community 7 - "Community 7"
Cohesion: 0.06
Nodes (32): convertAgentConnectionDataToConnection(), convertApimConnectionDataToConnection(), convertFunctionsConnectionDataToConnection(), convertKnowledgeHubConnectionDataToConnection(), convertMcpConnectionDataToConnection(), convertServiceProviderConnectionDataToConnection(), convertToAgentConnectionsData(), convertToApimConnectionsData() (+24 more)

### Community 8 - "Community 8"
Cohesion: 0.05
Nodes (24): BaseApiManagementService, BaseAppServiceService, connectorIsAppService(), fallbackConnectorIconUrl(), getAllConnectorProperties(), getBrandColorFromConnector(), getDescriptionFromConnector(), getDisplayNameFromConnector() (+16 more)

### Community 9 - "Community 9"
Cohesion: 0.06
Nodes (8): getHybridAppBaseRelativeUrl(), isHybridLogicApp(), ConsumptionOperationManifestService, getBuiltInOperationInfo(), isBuiltInOperation(), isServiceProviderOperation(), StandardOperationManifestService, StandardRunService

### Community 10 - "Community 10"
Cohesion: 0.07
Nodes (17): ConnectionService(), getSwaggerFromConnector(), BaseCopilotWorkflowEditorService, buildActionTemplate(), deriveReferenceName(), discoverConnectors(), executeCopilotTool(), findSwaggerOperation() (+9 more)

### Community 11 - "Community 11"
Cohesion: 0.08
Nodes (20): StandardCustomCodeService, exclude(), getRecordEntry(), isNullOrUndefined(), remove(), validateRequiredServiceArguments(), cleanIndexedValue(), createEx() (+12 more)

### Community 12 - "Community 12"
Cohesion: 0.06
Nodes (6): deepCompareObjects(), isObject(), parseErrorMessage(), ConsumptionRunService, getCallbackUrl(), isCallbackInfoWithRelativePath()

### Community 13 - "Community 13"
Cohesion: 0.2
Nodes (23): buildAgentsUri(), buildAgentUri(), buildProxyUri(), buildUpdateBody(), createFoundryAgentViaProxy(), extractVersionsData(), foundryHeaders(), getFoundryAgent() (+15 more)

### Community 14 - "Community 14"
Cohesion: 0.15
Nodes (4): getWindowDimensions(), useEdgeIndex(), useWindowDimensions(), useEdgesData()

### Community 15 - "Community 15"
Cohesion: 0.2
Nodes (5): cleanDynamicSchemaParameters(), getStaticResultSchemaForAPIConnector(), wrapOutputsSchemaToOperationSchema(), OutputsProcessor, getArrayOutputMetadata()

### Community 17 - "Community 17"
Cohesion: 0.47
Nodes (1): BaseChatbotService

### Community 19 - "Community 19"
Cohesion: 0.4
Nodes (1): BaseUserPreferenceService

### Community 20 - "Community 20"
Cohesion: 0.5
Nodes (1): TestSearchService

### Community 23 - "Community 23"
Cohesion: 0.5
Nodes (1): InvalidFormatException

### Community 29 - "Community 29"
Cohesion: 0.5
Nodes (1): ConsumptionTemplateService

### Community 30 - "Community 30"
Cohesion: 0.5
Nodes (1): BaseTemplateService

### Community 31 - "Community 31"
Cohesion: 0.5
Nodes (1): BaseCloneService

### Community 33 - "Community 33"
Cohesion: 0.5
Nodes (1): ServiceException

### Community 35 - "Community 35"
Cohesion: 1.0
Nodes (2): getDuration(), toFriendlyDurationString()

### Community 36 - "Community 36"
Cohesion: 0.67
Nodes (1): ValidationException

### Community 37 - "Community 37"
Cohesion: 0.67
Nodes (1): ArgumentException

### Community 38 - "Community 38"
Cohesion: 0.67
Nodes (1): AssertionException

### Community 39 - "Community 39"
Cohesion: 0.67
Nodes (1): UnsupportedException

### Community 40 - "Community 40"
Cohesion: 0.67
Nodes (1): SerializationException

### Community 41 - "Community 41"
Cohesion: 0.67
Nodes (1): UserException

### Community 42 - "Community 42"
Cohesion: 0.67
Nodes (1): ConnectorServiceException

### Community 43 - "Community 43"
Cohesion: 0.67
Nodes (1): ScannerException

### Community 44 - "Community 44"
Cohesion: 0.67
Nodes (1): ParserException

### Community 45 - "Community 45"
Cohesion: 0.67
Nodes (1): ExpressionException

### Community 66 - "Community 66"
Cohesion: 0.67
Nodes (1): ConnectorConnectionException

### Community 72 - "Community 72"
Cohesion: 1.0
Nodes (1): ExpressionConstants

### Community 78 - "Community 78"
Cohesion: 1.0
Nodes (1): DevLogger

## Knowledge Gaps
- **2 isolated node(s):** `ExpressionConstants`, `DevLogger`
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 17`** (6 nodes): `BaseChatbotService`, `.constructor()`, `.getCopilotDocumentation()`, `.getCopilotResponse()`, `._getCopilotResponseV2()`, `chatbot.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 19`** (5 nodes): `userpreference.ts`, `BaseUserPreferenceService`, `.constructor()`, `.getMostRecentlyUsedConnectionId()`, `.setMostRecentlyUsedConnectionId()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 20`** (5 nodes): `search.spec.ts`, `TestSearchService`, `.constructor()`, `.getAgentWorkflows()`, `.getWorkflows()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 23`** (4 nodes): `InvalidFormatException`, `.constructor()`, `invalidFormat.ts`, `invalidFormat.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 29`** (4 nodes): `template.ts`, `ConsumptionTemplateService`, `.constructor()`, `.isResourceAvailable()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 30`** (4 nodes): `template.ts`, `BaseTemplateService`, `.constructor()`, `.dispose()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 31`** (4 nodes): `BaseCloneService`, `.constructor()`, `.dispose()`, `clone.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 33`** (4 nodes): `service.ts`, `ServiceException`, `.constructor()`, `throwWhenNotOk()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 35`** (3 nodes): `getDuration()`, `toFriendlyDurationString()`, `datetime.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 36`** (3 nodes): `validation.ts`, `ValidationException`, `.constructor()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 37`** (3 nodes): `ArgumentException`, `.constructor()`, `argument.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 38`** (3 nodes): `AssertionException`, `.constructor()`, `assertion.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 39`** (3 nodes): `UnsupportedException`, `.constructor()`, `unsupported.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 40`** (3 nodes): `SerializationException`, `.constructor()`, `serialization.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (3 nodes): `UserException`, `.constructor()`, `user.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 42`** (3 nodes): `ConnectorServiceException`, `.constructor()`, `connector.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 43`** (3 nodes): `scanner.ts`, `ScannerException`, `.constructor()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 44`** (3 nodes): `ParserException`, `.constructor()`, `parser.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 45`** (3 nodes): `ExpressionException`, `.constructor()`, `expression.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 66`** (3 nodes): `ConnectorConnectionException`, `.constructor()`, `connection.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 72`** (2 nodes): `ExpressionConstants`, `constants.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 78`** (2 nodes): `devLogger.ts`, `DevLogger`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `map()` connect `Community 6` to `Community 0`, `Community 1`, `Community 2`, `Community 3`, `Community 4`, `Community 5`, `Community 7`, `Community 8`, `Community 10`, `Community 11`, `Community 12`, `Community 13`, `Community 15`?**
  _High betweenness centrality (0.163) - this node is a cross-community bridge._
- **Why does `equals()` connect `Community 0` to `Community 1`, `Community 3`, `Community 5`, `Community 6`, `Community 7`, `Community 9`, `Community 11`, `Community 15`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **Why does `includes()` connect `Community 8` to `Community 0`, `Community 1`, `Community 3`, `Community 4`, `Community 5`, `Community 7`, `Community 9`, `Community 10`, `Community 11`, `Community 13`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Are the 65 inferred relationships involving `map()` (e.g. with `normalizeConnectorIds()` and `hex2rgb()`) actually correct?**
  _`map()` has 65 INFERRED edges - model-reasoned connections that need verification._
- **Are the 41 inferred relationships involving `equals()` (e.g. with `canRunBeInvokedWithPayload()` and `isCustomConnectorId()`) actually correct?**
  _`equals()` has 41 INFERRED edges - model-reasoned connections that need verification._
- **Are the 23 inferred relationships involving `includes()` (e.g. with `isIndependentPublisherConnector()` and `containsIdTag()`) actually correct?**
  _`includes()` has 23 INFERRED edges - model-reasoned connections that need verification._
- **Are the 17 inferred relationships involving `getAzureResourceRecursive()` (e.g. with `.fetchFunctionApps()` and `.fetchFunctionAppsFunctions()`) actually correct?**
  _`getAzureResourceRecursive()` has 17 INFERRED edges - model-reasoned connections that need verification._