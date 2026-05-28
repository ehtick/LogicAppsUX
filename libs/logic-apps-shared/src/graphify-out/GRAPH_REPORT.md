# Graph Report - src  (2026-05-28)

## Corpus Check
- 351 files · ~633,564 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 12695 nodes · 15526 edges · 109 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
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
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_Community 56|Community 56]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 58|Community 58]]
- [[_COMMUNITY_Community 59|Community 59]]
- [[_COMMUNITY_Community 60|Community 60]]
- [[_COMMUNITY_Community 61|Community 61]]
- [[_COMMUNITY_Community 62|Community 62]]
- [[_COMMUNITY_Community 63|Community 63]]
- [[_COMMUNITY_Community 64|Community 64]]
- [[_COMMUNITY_Community 65|Community 65]]
- [[_COMMUNITY_Community 66|Community 66]]
- [[_COMMUNITY_Community 67|Community 67]]
- [[_COMMUNITY_Community 68|Community 68]]
- [[_COMMUNITY_Community 69|Community 69]]
- [[_COMMUNITY_Community 70|Community 70]]
- [[_COMMUNITY_Community 71|Community 71]]
- [[_COMMUNITY_Community 72|Community 72]]
- [[_COMMUNITY_Community 73|Community 73]]
- [[_COMMUNITY_Community 74|Community 74]]
- [[_COMMUNITY_Community 75|Community 75]]
- [[_COMMUNITY_Community 76|Community 76]]
- [[_COMMUNITY_Community 77|Community 77]]
- [[_COMMUNITY_Community 78|Community 78]]
- [[_COMMUNITY_Community 79|Community 79]]
- [[_COMMUNITY_Community 80|Community 80]]
- [[_COMMUNITY_Community 81|Community 81]]
- [[_COMMUNITY_Community 82|Community 82]]
- [[_COMMUNITY_Community 83|Community 83]]
- [[_COMMUNITY_Community 84|Community 84]]
- [[_COMMUNITY_Community 85|Community 85]]
- [[_COMMUNITY_Community 86|Community 86]]
- [[_COMMUNITY_Community 87|Community 87]]
- [[_COMMUNITY_Community 88|Community 88]]
- [[_COMMUNITY_Community 89|Community 89]]
- [[_COMMUNITY_Community 90|Community 90]]
- [[_COMMUNITY_Community 91|Community 91]]
- [[_COMMUNITY_Community 92|Community 92]]
- [[_COMMUNITY_Community 93|Community 93]]
- [[_COMMUNITY_Community 94|Community 94]]
- [[_COMMUNITY_Community 95|Community 95]]
- [[_COMMUNITY_Community 96|Community 96]]
- [[_COMMUNITY_Community 97|Community 97]]
- [[_COMMUNITY_Community 98|Community 98]]
- [[_COMMUNITY_Community 99|Community 99]]
- [[_COMMUNITY_Community 100|Community 100]]
- [[_COMMUNITY_Community 101|Community 101]]
- [[_COMMUNITY_Community 102|Community 102]]
- [[_COMMUNITY_Community 103|Community 103]]
- [[_COMMUNITY_Community 104|Community 104]]
- [[_COMMUNITY_Community 105|Community 105]]
- [[_COMMUNITY_Community 106|Community 106]]
- [[_COMMUNITY_Community 107|Community 107]]
- [[_COMMUNITY_Community 108|Community 108]]

## God Nodes (most connected - your core abstractions)
1. `equals()` - 74 edges
2. `IHttpClient` - 59 edges
3. `OperationManifest` - 58 edges
4. `Connector` - 53 edges
5. `getIntl()` - 38 edges
6. `SettingScope` - 37 edges
7. `BaseException` - 35 edges
8. `BaseConnectionService` - 35 edges
9. `SwaggerParser` - 34 edges
10. `AssertionException` - 29 edges

## Surprising Connections (you probably didn't know these)
- `includePathItemParameters()` --calls--> `equals()`  [EXTRACTED]
  parsers/lib/swagger/parser.ts → utils/src/lib/helpers/functions.ts
- `getInputByName()` --calls--> `equals()`  [EXTRACTED]
  parsers/lib/manifest/__test__/parser.spec.ts → utils/src/lib/helpers/functions.ts
- `getOutputByName()` --calls--> `equals()`  [EXTRACTED]
  parsers/lib/manifest/__test__/parser.spec.ts → utils/src/lib/helpers/functions.ts
- `splitEx()` --calls--> `isNullOrUndefined()`  [EXTRACTED]
  parsers/lib/common/helpers/keysutility.ts → utils/src/lib/helpers/functions.ts
- `getTriggerType()` --calls--> `getIntl()`  [EXTRACTED]
  utils/src/lib/helpers/logicapps.ts → intl/src/intl.tsx

## Communities (109 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.00
Nodes (500): 00xlpa, 02vyBk, 03RO5d, 04AwK7, 06zKZg, 07oZoX, 07ZsoY, 08e2rO (+492 more)

### Community 1 - "Community 1"
Cohesion: 0.00
Nodes (500): 00xlpa, 02vyBk, 03RO5d, 04AwK7, 06zKZg, 07oZoX, 07ZsoY, 08e2rO (+492 more)

### Community 2 - "Community 2"
Cohesion: 0.00
Nodes (500): 00xlpa, 02vyBk, 03RO5d, 04AwK7, 06zKZg, 07oZoX, 07ZsoY, 08e2rO (+492 more)

### Community 3 - "Community 3"
Cohesion: 0.00
Nodes (500): 00xlpa, 02vyBk, 03RO5d, 04AwK7, 06zKZg, 07oZoX, 07ZsoY, 08e2rO (+492 more)

### Community 4 - "Community 4"
Cohesion: 0.00
Nodes (500): 00xlpa, 02vyBk, 03RO5d, 04AwK7, 06zKZg, 07oZoX, 07ZsoY, 08e2rO (+492 more)

### Community 5 - "Community 5"
Cohesion: 0.00
Nodes (500): 00xlpa, 02vyBk, 03RO5d, 04AwK7, 06zKZg, 07oZoX, 07ZsoY, 08e2rO (+492 more)

### Community 6 - "Community 6"
Cohesion: 0.00
Nodes (500): 00xlpa, 02vyBk, 03RO5d, 04AwK7, 06zKZg, 07oZoX, 07ZsoY, 08e2rO (+492 more)

### Community 7 - "Community 7"
Cohesion: 0.00
Nodes (500): 00xlpa, 02vyBk, 03RO5d, 04AwK7, 06zKZg, 07oZoX, 07ZsoY, 08e2rO (+492 more)

### Community 8 - "Community 8"
Cohesion: 0.00
Nodes (500): 00xlpa, 02vyBk, 03RO5d, 04AwK7, 06zKZg, 07oZoX, 07ZsoY, 08e2rO (+492 more)

### Community 9 - "Community 9"
Cohesion: 0.00
Nodes (500): 00xlpa, 02vyBk, 03RO5d, 04AwK7, 06zKZg, 07oZoX, 07ZsoY, 08e2rO (+492 more)

### Community 10 - "Community 10"
Cohesion: 0.00
Nodes (500): 00xlpa, 02vyBk, 03RO5d, 04AwK7, 06zKZg, 07oZoX, 07ZsoY, 08e2rO (+492 more)

### Community 11 - "Community 11"
Cohesion: 0.00
Nodes (500): 00xlpa, 02vyBk, 03RO5d, 04AwK7, 06zKZg, 07oZoX, 07ZsoY, 08e2rO (+492 more)

### Community 12 - "Community 12"
Cohesion: 0.00
Nodes (500): 00xlpa, 02vyBk, 03RO5d, 04AwK7, 06zKZg, 07oZoX, 07ZsoY, 08e2rO (+492 more)

### Community 13 - "Community 13"
Cohesion: 0.00
Nodes (500): 00xlpa, 02vyBk, 03RO5d, 04AwK7, 06zKZg, 07oZoX, 07ZsoY, 08e2rO (+492 more)

### Community 14 - "Community 14"
Cohesion: 0.00
Nodes (500): 00xlpa, 02vyBk, 03RO5d, 04AwK7, 06zKZg, 07oZoX, 07ZsoY, 08e2rO (+492 more)

### Community 15 - "Community 15"
Cohesion: 0.00
Nodes (500): 00xlpa, 02vyBk, 03RO5d, 04AwK7, 06zKZg, 07oZoX, 07ZsoY, 08e2rO (+492 more)

### Community 16 - "Community 16"
Cohesion: 0.00
Nodes (500): 00xlpa, 02vyBk, 03RO5d, 04AwK7, 06zKZg, 07oZoX, 07ZsoY, 08e2rO (+492 more)

### Community 17 - "Community 17"
Cohesion: 0.00
Nodes (500): 00xlpa, 02vyBk, 03RO5d, 04AwK7, 06zKZg, 07oZoX, 07ZsoY, 08e2rO (+492 more)

### Community 18 - "Community 18"
Cohesion: 0.00
Nodes (500): 00xlpa, 02vyBk, 03RO5d, 04AwK7, 06zKZg, 07oZoX, 07ZsoY, 08e2rO (+492 more)

### Community 19 - "Community 19"
Cohesion: 0.00
Nodes (500): 00xlpa, 02vyBk, 03RO5d, 04AwK7, 06zKZg, 07oZoX, 07ZsoY, 08e2rO (+492 more)

### Community 20 - "Community 20"
Cohesion: 0.01
Nodes (168): Action, ActionDefinition, Actions, ActionsNode, ActiveDirectoryOAuthAuthentication, AgentAction, AgentChannels, AgentCondition (+160 more)

### Community 21 - "Community 21"
Cohesion: 0.05
Nodes (41): BaseConnectionService, ConnectionsResponse, ConsentLink, getAccessTokenType, LogicAppConsentResponse, ConsumptionConnectionService, ConsumptionConnectionServiceOptions, connectionInfo (+33 more)

### Community 22 - "Community 22"
Cohesion: 0.03
Nodes (81): hasTermsOfUse(), addPrefix(), arrayEquals(), arrayEqualsOrderInsensitive(), BUILT_IN_AGENT_TOOLS, copy(), CopyOptions, csvContains() (+73 more)

### Community 23 - "Community 23"
Cohesion: 0.05
Nodes (34): AzureOperationsFetchResponse, BaseSearchService, BaseSearchServiceOptions, getClientBuiltInConnectors(), getClientBuiltInOperations(), ContinuationTokenResponse, ConsumptionSearchService, ConsumptionSearchServiceOptions (+26 more)

### Community 24 - "Community 24"
Cohesion: 0.04
Nodes (26): BaseCognitiveServiceService, BaseResourceService, BaseResourceServiceOptions, BaseRoleService, BaseRoleServiceOptions, BaseTemplateResourceService, ITemplateResourceServiceOptions, fetchAppsByQuery() (+18 more)

### Community 25 - "Community 25"
Cohesion: 0.05
Nodes (20): ApiManagementServiceOptions, BaseApiManagementService, BaseAppServiceService, BaseAppServiceServiceOptions, connectorIsAppService(), BaseFunctionService, BaseFunctionServiceOptions, ResponseCodes (+12 more)

### Community 26 - "Community 26"
Cohesion: 0.04
Nodes (35): BaseCloneService, BaseCloneServiceOptions, queryParameters, BaseCognitiveServiceServiceOptions, ApiHubServiceDetails, BaseGatewayService, BaseGatewayServiceOptions, BaseTenantService (+27 more)

### Community 27 - "Community 27"
Cohesion: 0.07
Nodes (41): builtInConnectorIds, builtInOperationsMetadata, foreachOperationInfo, getAccessTokenType, ConnectorManifest, addToTimeManifest, convertTimezoneManifest, currentTimeManifest (+33 more)

### Community 28 - "Community 28"
Cohesion: 0.04
Nodes (60): ExtensionProperties, OpenApiSchema, isCustomConnectorId(), isManagedConnectorId(), isSharedManagedConnectorId(), isSharedManagedConnectorIdFromPApps(), clone(), combineObjects() (+52 more)

### Community 29 - "Community 29"
Cohesion: 0.05
Nodes (17): ConsumptionRunService, UnsupportedException, getRecordEntry(), isNullOrUndefined(), parseErrorMessage(), getCallbackUrl(), CallbackInfo, HttpRequestOptions (+9 more)

### Community 30 - "Community 30"
Cohesion: 0.06
Nodes (36): BaseConnectorService, BaseConnectorServiceOptions, GetSchemaFunction, GetValuesFunction, ConsumptionConnectorService, ConsumptionConnectorServiceOptions, isArmResourceId(), getResourceName() (+28 more)

### Community 31 - "Community 31"
Cohesion: 0.03
Nodes (68): Action, ActionDefinition, Actions, ActiveDirectoryOAuthAuthentication, ApiConnectionAction, ApiConnectionHeaders, ApiConnectionHost, ApiConnectionHostApi (+60 more)

### Community 32 - "Community 32"
Cohesion: 0.05
Nodes (50): firstPageResponse, mockContent, mockResponse, secondPageResponse, firstPageResponse, mockContent, mockResponse, secondPageResponse (+42 more)

### Community 33 - "Community 33"
Cohesion: 0.06
Nodes (43): supportedBaseManifestTypes, ConsumptionOperationManifestServiceOptions, supportedConsumptionManifestObjects, supportedConsumptionManifestTypes, coreBadge, iseBadge, previewBadge, apiManagementActionManifest (+35 more)

### Community 34 - "Community 34"
Cohesion: 0.04
Nodes (44): a2aRequestOperation, agentOperation, flatFileDecodingManifest, flatFileEncodingManifest, integrationAccount, settings, xmlTransformManifest, xmlValidationManifest (+36 more)

### Community 35 - "Community 35"
Cohesion: 0.09
Nodes (48): ConnectionAndAppSetting, LocalConnectionModel, buildAgentsUri(), buildAgentUri(), buildProjectEndpointFromResourceId(), buildProxyUri(), buildUpdateBody(), CreateFoundryAgentOptions (+40 more)

### Community 36 - "Community 36"
Cohesion: 0.09
Nodes (37): InternalSchemaProcessorOptions, ParentPropertyInfo, SchemaObject, aggregate(), includes(), create(), dereferenceRefSchema(), EmptyRefs (+29 more)

### Community 37 - "Community 37"
Cohesion: 0.06
Nodes (39): ConnectionParameterEditorService(), IConnectionCredentialMappingEditorProps, IConnectionCredentialMappingInfo, IConnectionCredentialMappingOptions, IConnectionParameterEditorOptions, IConnectionParameterEditorProps, IConnectionParameterEditorService, IConnectionParameterInfo (+31 more)

### Community 38 - "Community 38"
Cohesion: 0.05
Nodes (43): ContactObject, DefinitionsObject, Document, ExampleObject, ExternalDocumentationObject, GeneralParameterObject, HeaderObject, HeadersObject (+35 more)

### Community 39 - "Community 39"
Cohesion: 0.09
Nodes (17): BaseException, ConnectorServiceErrorCode, ConnectorServiceException, Exception, InvalidFormatException, SerializationErrorCode, SerializationException, UnsupportedExceptionCode (+9 more)

### Community 40 - "Community 40"
Cohesion: 0.05
Nodes (37): ApiKeySecurityScheme, BodyParameter, Contact, Definitions, Example, ExternalDocumentation, Header, Headers (+29 more)

### Community 41 - "Community 41"
Cohesion: 0.05
Nodes (26): AgentQueryParams, AgentURL, AGENT_MODEL_CONFIG, SUPPORTED_AGENT_OPENAI_MODELS, SUPPORTED_FOUNDRY_AGENT_MODELS, OperationMetadata, SummaryMetadata, DeepPartial (+18 more)

### Community 42 - "Community 42"
Cohesion: 0.07
Nodes (27): mcpDynamicState, mockMcpToolsResponse, nonMcpDynamicState, mcpDynamicState, mockMcpToolsResponse, nonMcpDynamicState, InitConnectionService(), InitWorkflowService() (+19 more)

### Community 43 - "Community 43"
Cohesion: 0.06
Nodes (7): EditorLanguage, VFSObject, LOCAL_STORAGE_KEYS, canRunBeInvokedWithPayload(), getTriggerFromDefinition(), getTriggerType(), getFrequencyValues()

### Community 44 - "Community 44"
Cohesion: 0.07
Nodes (10): BaseChatbotService, ChatbotServiceOptions, BaseUserPreferenceService, ServiceExceptionCode, IChatbotService, IUserPreferenceService, DocumentationMetadataState, handoffOperation (+2 more)

### Community 45 - "Community 45"
Cohesion: 0.08
Nodes (13): BaseOperationManifestService, BaseOperationManifestServiceOptions, getBuiltInOperationInfo(), isBuiltInOperation(), msiSet, names, IOperationManifestService, ConnectionType (+5 more)

### Community 46 - "Community 46"
Cohesion: 0.10
Nodes (30): copyArray(), createCopy(), AgentConnectionModel, AgentMcpConnectionModel, APIManagementConnectionModel, ConnectionAcl, ConnectionCreationClient, convertAgentConnectionDataToConnection() (+22 more)

### Community 47 - "Community 47"
Cohesion: 0.06
Nodes (29): Annotation, DependentParameterInfo, DeserializationType, DynamicList, DynamicParameter, DynamicParameters, DynamicProperties, DynamicPropertiesExtension (+21 more)

### Community 48 - "Community 48"
Cohesion: 0.16
Nodes (16): ExpressionBuilderErrorCode, isAppSettingExpression(), isBooleanLiteral(), isFunction(), isLiteralExpression(), isNullLiteral(), isNumberLiteral(), isParameterExpression() (+8 more)

### Community 49 - "Community 49"
Cohesion: 0.10
Nodes (14): ParameterLocations, OutputsProcessor, Responses, SchemaProcessorOptions, map(), getArrayOutputMetadata(), ManifestParser, SchemaObject (+6 more)

### Community 50 - "Community 50"
Cohesion: 0.09
Nodes (22): ChunkSizeCapabilities, ExpressionConstants, FILE_PARAMETER_KEYS, Formats, OutputKeys, Permissions, PropertyName, ReservedParameterNames (+14 more)

### Community 51 - "Community 51"
Cohesion: 0.10
Nodes (23): CLIENT_CERTIFICATE_CONSTANTS, connectorContainsAllClientCertificateConnectionParameters(), connectorContainsAllServicePrincipalConnectionParameters(), connectorsShownAsAzure, getAuthRedirect(), _getConnectionParameterSetParametersUsingType(), getConnectionParametersWithType(), getIdentityDropdownOptions() (+15 more)

### Community 52 - "Community 52"
Cohesion: 0.16
Nodes (15): ExpressionException, ExpressionExceptionCode, ExpressionParserErrorCode, ParserException, ScannerException, TokenToParse, Dereference, ExpressionBase (+7 more)

### Community 53 - "Community 53"
Cohesion: 0.10
Nodes (11): areApiIdsEqual(), canStringBeConverted(), capitalizeFirstLetter(), escapeString(), idDisplayCase(), labelCase(), normalizeApiId(), removeIdTag() (+3 more)

### Community 54 - "Community 54"
Cohesion: 0.08
Nodes (25): ActionSetting, BindingMode, BuiltInOutput, ConnectionReferenceKeyFormatMapping, CustomSwaggerServiceDetails, CustomSwaggerServiceNames, Documentation, ExecutionOrder (+17 more)

### Community 55 - "Community 55"
Cohesion: 0.13
Nodes (20): OutputSource, cleanIndexedValue(), _codeBook, createEx(), decodePropertySegment(), _decodeSegment(), encodePropertySegment(), _encodeSegment() (+12 more)

### Community 56 - "Community 56"
Cohesion: 0.12
Nodes (10): BaseTemplateService, BaseTemplateServiceOptions, resourceName, ConsumptionTemplateService, ConsumptionTemplateServiceOptions, ArgumentException, CustomTemplateResource, ITemplateService (+2 more)

### Community 57 - "Community 57"
Cohesion: 0.12
Nodes (18): ActionTemplate, buildActionTemplate(), COPILOT_WORKFLOW_TOOLS, CopilotToolDefinition, deriveReferenceName(), discoverConnectors(), executeCopilotTool(), getConnectorOperations() (+10 more)

### Community 58 - "Community 58"
Cohesion: 0.08
Nodes (23): options, parameters, processor, properties, propertiesForSchemaWithGrandLevelSchema, propertiesForSchemaWithGrandNestArray, propertiesForSchemaWithNestArray, propertiesForSchemaWithNestArrayBothTitle (+15 more)

### Community 59 - "Community 59"
Cohesion: 0.08
Nodes (19): supportedBaseManifestObjects, connectionInfo, connector, mockHttpClient, mockLoggerService, connector, invokeFunctionManifest, ConnectionsData (+11 more)

### Community 60 - "Community 60"
Cohesion: 0.28
Nodes (3): SchemaProcessor, getEditorForParameter(), SchemaProperty

### Community 61 - "Community 61"
Cohesion: 0.10
Nodes (18): Outlook, CyclicalRefMetadata, DereferencedDocument, dereferenceSwagger(), address, addressProps, children, endTime (+10 more)

### Community 62 - "Community 62"
Cohesion: 0.09
Nodes (21): Artifact, Connection, ConnectionInfo, ConnectorRuntimeType, ContentInfo, DetailsType, FeaturedConnector, FeaturedConnectorType (+13 more)

### Community 63 - "Community 63"
Cohesion: 0.12
Nodes (18): createItem, getEmails, onNewEmail, DynamicListExtension, ConnectionReferenceKeyFormat, allInputParameters, allOutputParameters, attachmentsParameter (+10 more)

### Community 64 - "Community 64"
Cohesion: 0.14
Nodes (17): svc, CopilotWorkflowEditorService(), InitCopilotWorkflowEditorService(), isCopilotWorkflowEditorServiceInitialized(), WorkflowChange, WorkflowChangeTargetType, WorkflowChangeType, change (+9 more)

### Community 65 - "Community 65"
Cohesion: 0.16
Nodes (6): validateRequiredServiceArguments(), ICustomCodeService, UploadCustomCodeAppFilePayload, UploadCustomCodePayload, CustomCodeServiceOptions, StandardCustomCodeService

### Community 66 - "Community 66"
Cohesion: 0.31
Nodes (4): ExpressionScanner, isNumeric(), isWhitespace(), ExpressionToken

### Community 67 - "Community 67"
Cohesion: 0.25
Nodes (4): ExpressionBuilder, ExpressionParser, convertToStringLiteral(), Expression

### Community 68 - "Community 68"
Cohesion: 0.15
Nodes (6): getWindowDimensions(), useEdgeIndex(), useWindowDimensions(), EdgeData, useEdgesData(), Size

### Community 69 - "Community 69"
Cohesion: 0.17
Nodes (14): getIsCallbackUrlSupported(), getRequestTriggerName(), getRunTriggerName(), getTriggerName(), CallbackInfo, CallbackInfoWithRelativePath, callbackInfo, definition (+6 more)

### Community 70 - "Community 70"
Cohesion: 0.12
Nodes (16): ArtifactInformation, ContentAndSchemaInputs, EmptyNodeGenerationMode, FlatFileDecodingAction, FlatFileEncodingAction, FlatFileEncodingInputs, FunctionInput, IntegrationAccountArtifactLookupAction (+8 more)

### Community 71 - "Community 71"
Cohesion: 0.25
Nodes (7): BaseOAuthService, OAuthPopup, IOAuthPopup, IOAuthService, IOAuthServiceOptions, LoginResult, OAuthPopupOptions

### Community 72 - "Community 72"
Cohesion: 0.23
Nodes (6): IDesignerUiInteractionsService, DropdownMenuCustomNode, DropdownMenuItem, DropdownMenuOption, TopLevelDropdownMenuItem, UiInteractionData

### Community 73 - "Community 73"
Cohesion: 0.26
Nodes (13): fallbackConnectorIconUrl(), getAllConnectorProperties(), getBrandColorFromConnector(), getDescriptionFromConnector(), getDisplayNameFromConnector(), getIconUriFromConnector(), isIndependentPublisherConnector(), normalizeConnectorId() (+5 more)

### Community 74 - "Community 74"
Cohesion: 0.13
Nodes (14): API, code:typescript (import { isVersionSupported } from '@microsoft/logic-apps-sh), code:typescript (import { isMultiVariableSupport } from '@microsoft/logic-app), code:typescript (import { isVersionSupported } from '@microsoft/logic-apps-sh), code:typescript (import { isVersionSupported } from '@microsoft/logic-apps-sh), code:typescript (// Old (deprecated)), Feature Flags Based on Version, `isMultiVariableSupport(version?)` (deprecated) (+6 more)

### Community 75 - "Community 75"
Cohesion: 0.13
Nodes (14): ArtifactInformation, ContentAndSchemaInputs, EmptyNodeGenerationMode, FlatFileDecodingAction, FlatFileEncodingAction, FlatFileEncodingInputs, FunctionInput, IntegrationAccountArtifactLookupAction (+6 more)

### Community 76 - "Community 76"
Cohesion: 0.13
Nodes (14): AgentMetadata, BindFunction, BoundParameter, BoundParameters, CallbackInfoWithValue, ChatHistory, ContentHash, MessageEntry (+6 more)

### Community 77 - "Community 77"
Cohesion: 0.15
Nodes (7): LiteralSegment, Modes, Segment, Types, UriTemplateGenerator, UriTemplateParser, VariableSegment

### Community 78 - "Community 78"
Cohesion: 0.14
Nodes (6): ConsumptionOperationManifestService, msiSet, names, definition, msiSet, result

### Community 79 - "Community 79"
Cohesion: 0.18
Nodes (12): ChangeHandler, EditorService(), ICustomEditorOptions, IEditorParameterInfo, IEditorProps, IEditorService, InitEditorService(), IRenderDefaultEditorParams (+4 more)

### Community 80 - "Community 80"
Cohesion: 0.21
Nodes (10): Color, hex2rgb(), HSV, hsv2rgb(), lighten(), RGB, rgb2hex(), rgb2hsv() (+2 more)

### Community 81 - "Community 81"
Cohesion: 0.20
Nodes (11): getDuration(), TimeUnit, toFriendlyDurationString(), duration, end, intl, start, cache (+3 more)

### Community 82 - "Community 82"
Cohesion: 0.20
Nodes (10): cache, IntlGlobalProvider(), IntlGlobalProviderProps, resetIntl(), IntlProvider(), IntlProviderProps, loadLocaleData(), intl (+2 more)

### Community 83 - "Community 83"
Cohesion: 0.14
Nodes (13): ConnectionAndOrder, emptyCanvasRect, FunctionMetadata, FunctionMetadataV1, FunctionPositionMetadata, IFileSysTreeItem, ITreeDirectory, ITreeFile (+5 more)

### Community 84 - "Community 84"
Cohesion: 0.28
Nodes (6): BaseExperimentationService, ExperimentationService(), IExperimentationService, InitExperimentationServiceService(), enableAPIMGatewayConnection(), EXP_FLAGS

### Community 85 - "Community 85"
Cohesion: 0.15
Nodes (11): svc, controller, defaultOptions, mockAxiosPost, mockGetAccessToken, simpleWorkflow, textResponse, workflowNoNotes (+3 more)

### Community 86 - "Community 86"
Cohesion: 0.18
Nodes (10): customLengthGuid(), hexValues, isAGuid(), generatedGuid, guid1, guid2, guid3, result (+2 more)

### Community 87 - "Community 87"
Cohesion: 0.21
Nodes (8): normalizeTemplate(), replaceTemplatePlaceholders(), WORKFLOW_EDGE_TYPES, WORKFLOW_NODE_TYPES, WorkflowEdgeType, WorkflowNodeType, placeholderValues, result

### Community 88 - "Community 88"
Cohesion: 0.15
Nodes (12): DataMapSchema, InputFormat, NamespaceDictionary, NormalizedDataType, PathItem, SchemaExtended, SchemaFileFormat, SchemaNode (+4 more)

### Community 89 - "Community 89"
Cohesion: 0.17
Nodes (11): bareDefinition, inner, llmResponse, parsed, raw, repaired, response, result (+3 more)

### Community 90 - "Community 90"
Cohesion: 0.17
Nodes (11): integrationAccount, jsonContent, liquidJsonToJsonManifest, liquidJsonToTextManifest, liquidXmlToJsonManifest, liquidXmlToTextManifest, objectOutput, settings (+3 more)

### Community 91 - "Community 91"
Cohesion: 0.17
Nodes (11): ApiHubAuthentication, ConnectionMapping, ConnectionReference, ConnectionReferences, ConsumptionWorkflowMetadata, Impersonation, ImpersonationSource, NodeId (+3 more)

### Community 92 - "Community 92"
Cohesion: 0.18
Nodes (10): chunktext, composeOperation, csvTableOperation, htmlTableOperation, joinOperation, parsedocument, parsedocumentwithmetadata, parseJsonOperation (+2 more)

### Community 93 - "Community 93"
Cohesion: 0.22
Nodes (6): ExpressionEvaluator, ExpressionEvaluatorErrorCode, ExpressionEvaluatorException, ExpressionEvaluatorOptions, ExpressionEvaluationContext, evaluator

### Community 94 - "Community 94"
Cohesion: 0.33
Nodes (6): BaseCopilotWorkflowEditorService, BaseCopilotWorkflowEditorServiceOptions, ICopilotWorkflowEditorService, WorkflowEditResponse, WorkflowDefinition, Workflow

### Community 95 - "Community 95"
Cohesion: 0.50
Nodes (8): buildResponseFromParsed(), getParseError(), parseChanges(), parseCopilotResponse(), repairJson(), stripJsonComments(), tryExtractJson(), tryJsonParse()

### Community 96 - "Community 96"
Cohesion: 0.22
Nodes (8): agentGroup, controlGroup, dataOperationsGroup, dateTimeGroup, httpGroup, requestGroup, scheduleGroup, variableGroup

### Community 97 - "Community 97"
Cohesion: 0.22
Nodes (8): AddSubtractTimeInputs, AddSubtractTimeInputsType, ConvertTimeZoneInputs, ConvertTimeZoneInputsType, CurrentTimeInputs, ExpressionAction, OffsetTimeInputs, OffsetTimeInputsType

### Community 98 - "Community 98"
Cohesion: 0.25
Nodes (7): appSettings, expectedObject, input, parameters, resolvedString, service, unresolvedObject

### Community 99 - "Community 99"
Cohesion: 0.29
Nodes (6): foreachOperation, ifOperation, scopeOperation, switchOperation, terminateOperation, untilOperation

### Community 100 - "Community 100"
Cohesion: 0.29
Nodes (6): addToTimeOperation, convertTimezoneOperation, currentTimeOperation, getFutureTimeOperation, getPastTimeOperation, subtractFromTimeOperation

### Community 101 - "Community 101"
Cohesion: 0.29
Nodes (6): httpActionOperation, httpSwaggerActionOperation, httpSwaggerTriggerOperation, httpTriggerOperation, httpWebhookActionOperation, httpWebhookTriggerOperation

### Community 102 - "Community 102"
Cohesion: 0.29
Nodes (6): appendArrayVariableOperation, appendStringVariableOperation, decrementVariableOperation, incrementVariableOperation, initializeVariableOperation, setVariableOperation

### Community 103 - "Community 103"
Cohesion: 0.29
Nodes (6): agentModelTypeOptions, deploymentVisValues, dropdownValues, inputs, kbVisValues, v2Option

### Community 104 - "Community 104"
Cohesion: 0.40
Nodes (4): dereferenceJsonSchema(), SchemaObject, result, schema

### Community 105 - "Community 105"
Cohesion: 0.53
Nodes (4): BundleVersionRequirements, compareVersions(), isVersionSupported(), parseVersion()

### Community 106 - "Community 106"
Cohesion: 0.40
Nodes (4): delayOperation, delayUntilOperation, recurrenceOperation, slidingWindowOperation

### Community 107 - "Community 107"
Cohesion: 0.40
Nodes (4): api, apiManagementActionOperation, apiManagementGroup, apiManagementTriggerOperation

### Community 108 - "Community 108"
Cohesion: 0.50
Nodes (3): inlineCSharpManifest, inlinePowershellManifest, inlinePythonManifest

## Knowledge Gaps
- **11108 isolated node(s):** `TimeUnit`, `BundleVersionRequirements`, `EdgeData`, `Primitive`, `NonPrimitive` (+11103 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `loadLocaleData()` connect `Community 82` to `Community 0`, `Community 1`, `Community 2`, `Community 3`, `Community 4`, `Community 5`, `Community 6`, `Community 7`, `Community 8`, `Community 9`, `Community 10`, `Community 11`, `Community 12`, `Community 13`, `Community 14`, `Community 15`, `Community 16`, `Community 17`, `Community 18`, `Community 19`?**
  _High betweenness centrality (0.918) - this node is a cross-community bridge._
- **Why does `BaseConnectionService` connect `Community 21` to `Community 25`, `Community 46`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **Why does `ConsumptionRunService` connect `Community 29` to `Community 56`, `Community 32`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **What connects `TimeUnit`, `BundleVersionRequirements`, `EdgeData` to the rest of the system?**
  _11108 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.003992015968063872 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.003992015968063872 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.003992015968063872 - nodes in this community are weakly interconnected._