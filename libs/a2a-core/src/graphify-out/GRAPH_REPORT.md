# Graph Report - src  (2026-05-28)

## Corpus Check
- 140 files · ~79,356 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1065 nodes · 1977 edges · 62 communities (56 shown, 6 thin omitted)
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
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]

## God Nodes (most connected - your core abstractions)
1. `AgentCard` - 34 edges
2. `SessionManager` - 28 edges
3. `A2AClient` - 27 edges
4. `HttpClient` - 25 edges
5. `ChatInterface` - 23 edges
6. `SSEClient` - 21 edges
7. `Message` - 20 edges
8. `ServerHistoryStorage` - 19 edges
9. `useChatStore` - 19 edges
10. `AuthConfig` - 18 edges

## Surprising Connections (you probably didn't know these)
- `A2AClientConfig` --references--> `AgentCard`  [EXTRACTED]
  client/a2a-client.ts → types/schemas.ts
- `ChatInterface` --references--> `A2AClient`  [EXTRACTED]
  chat/chat-interface.ts → client/a2a-client.ts
- `ChatInterfaceConfig` --references--> `A2AClient`  [EXTRACTED]
  chat/chat-interface.ts → client/a2a-client.ts
- `A2AClient` --references--> `AgentCard`  [EXTRACTED]
  client/a2a-client.ts → types/schemas.ts
- `ChatState` --references--> `A2AClient`  [EXTRACTED]
  react/store/chatStore.ts → client/a2a-client.ts

## Communities (62 total, 6 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.05
Nodes (47): ChatSession, Message, ChatWidget(), chatWindow, { container }, props, theme, themeData (+39 more)

### Community 1 - "Community 1"
Cohesion: 0.06
Nodes (53): createHistoryApi(), HistoryApi, HistoryApiClient, HistoryApiConfig, JsonRpcRequest, api, error, firstRequestBody (+45 more)

### Community 2 - "Community 2"
Cohesion: 0.06
Nodes (31): AnalyticsConfig, AnalyticsEvent, AnalyticsPlugin, LoggerConfig, LoggerPlugin, LogLevel, PluginManager, asyncHook (+23 more)

### Community 3 - "Community 3"
Cohesion: 0.05
Nodes (44): AuthRequiredPart, CompanyLogo(), CompanyLogoProps, branding, { container }, logo, ExampleWithHooks(), manualAuthFlow() (+36 more)

### Community 4 - "Community 4"
Cohesion: 0.07
Nodes (27): LocalStoragePlugin, newSession, SessionManager, changeHandler, dataCall, destroyHandler, event, existingSession (+19 more)

### Community 5 - "Community 5"
Cohesion: 0.06
Nodes (42): MessageInput(), MessageInputProps, buttons, { container }, dataTransfer, file, fileInput, files (+34 more)

### Community 6 - "Community 6"
Cohesion: 0.10
Nodes (22): ChatInterface, ChatInterfaceConfig, chat, error, errorHandler, errorStream, exported, history (+14 more)

### Community 7 - "Community 7"
Cohesion: 0.08
Nodes (33): request, result, AgentCapabilitiesSchema, AgentInterface, AgentInterfaceSchema, AgentProvider, AgentProviderSchema, AgentSkill (+25 more)

### Community 8 - "Community 8"
Cohesion: 0.13
Nodes (13): SSEClient, errors, iterator, messages, MockEventSource, mockReload, onTokenRefreshRequired, onUnauthorized (+5 more)

### Community 9 - "Community 9"
Cohesion: 0.07
Nodes (28): artifactContent, artifactMessage, assistantMessage, authMessage, baseMessage, codeBlock, codeElement, codeMessage (+20 more)

### Community 10 - "Community 10"
Cohesion: 0.08
Nodes (23): AuthenticationError, TaskError, cause, converted, customError, details, error, errorObj (+15 more)

### Community 11 - "Community 11"
Cohesion: 0.09
Nodes (19): FileUpload(), FileUploadProps, allowedFileTypes, button, clickSpy, file, file1, file2 (+11 more)

### Community 12 - "Community 12"
Cohesion: 0.11
Nodes (17): a2aMessage, checkQueue, headers, jsonRpcRequest, messageHandler(), messageQueue, messageRequest, messageValidation (+9 more)

### Community 13 - "Community 13"
Cohesion: 0.16
Nodes (11): AgentDiscovery, AgentDiscoveryOptions, CacheEntry, agentCard, cached, invalidAgentCard, invalidCard, mockAgentCard (+3 more)

### Community 14 - "Community 14"
Cohesion: 0.15
Nodes (9): AgentRegistry, AgentSummary, mockFetch, registry, EnterpriseAgentRegistry, PublicAgentRegistry, mockAgentCard, mockFetch (+1 more)

### Community 15 - "Community 15"
Cohesion: 0.11
Nodes (18): baseMessage, { container }, fileNameElements, images, imageTypes, img, messageWithEmptyData, messageWithEmptyFiles (+10 more)

### Community 16 - "Community 16"
Cohesion: 0.13
Nodes (15): SessionList(), SessionListProps, confirmButton, defaultProps, deleteButton, input, mockSessions, newButton (+7 more)

### Community 17 - "Community 17"
Cohesion: 0.15
Nodes (12): A2AError, createJsonRpcError(), extractErrorDetails(), isJsonRpcErrorResponse(), NetworkError, StreamingError, ValidationError, JsonRpcErrorObject (+4 more)

### Community 18 - "Community 18"
Cohesion: 0.11
Nodes (17): authenticatedClient, completedPromise, errorPromise, firstPromise, initialPromise, invalidRequest, iterator, mockAgentCard (+9 more)

### Community 19 - "Community 19"
Cohesion: 0.27
Nodes (11): A2AClientConfig, AuthConfig, AuthRequiredEvent, AuthRequiredHandler, UnauthorizedHandler, UseChatWidgetProps, UseA2AOptions, ChatState (+3 more)

### Community 20 - "Community 20"
Cohesion: 0.14
Nodes (13): agentCard, mockAgentCard, mockFetch, mockAgentCard, mockFetch, getMockAgentCard(), completeCard, invalidCard (+5 more)

### Community 21 - "Community 21"
Cohesion: 0.12
Nodes (15): agentCard, mockAddMessage, mockClearLocalMessages, mockClearMessages, mockConnect, mockDiscoveryInstance, mockFromWellKnownUri, mockMessage (+7 more)

### Community 22 - "Community 22"
Cohesion: 0.12
Nodes (14): { container }, message, message1, message2, messageElements, messageList, mockMessages, mockScrollElement (+6 more)

### Community 23 - "Community 23"
Cohesion: 0.13
Nodes (14): agentDescription, agentName, chatWindow, { container }, defaultProps, input, logos, mockClearSession (+6 more)

### Community 24 - "Community 24"
Cohesion: 0.13
Nodes (14): bubbleElement, { container }, { container: container1 }, { container: container2 }, containerElement, dots, elements1, elements2 (+6 more)

### Community 25 - "Community 25"
Cohesion: 0.13
Nodes (14): complexError, converted, data, error, errorData, errorWithNullId, jsonRpcError, parseResult (+6 more)

### Community 26 - "Community 26"
Cohesion: 0.13
Nodes (14): assistantMessage, completedTask, failedTask, filePart, invalidState, multiPartMessage, pendingTask, result (+6 more)

### Community 27 - "Community 27"
Cohesion: 0.15
Nodes (9): errorData, expectedResponse, expectedResult, expectedTask, jsonRpcError, mockFetch, JsonRpcErrorCode, JsonRpcErrorResponse (+1 more)

### Community 28 - "Community 28"
Cohesion: 0.24
Nodes (9): escapeAttr(), formatTime(), link(), MessageComponent(), MessageProps, useStyles, downloadFile(), getMimeType() (+1 more)

### Community 29 - "Community 29"
Cohesion: 0.21
Nodes (10): ChatWindow(), ChatWindowProps, useStyles, agentNameElement, defaultProps, mockUseChatWidget, propsWithoutName, propsWithTestAgent (+2 more)

### Community 30 - "Community 30"
Cohesion: 0.15
Nodes (12): body, capabilities, completedTask, invalidMessage, iterator, message, mockClose, mockEmit (+4 more)

### Community 32 - "Community 32"
Cohesion: 0.15
Nodes (12): A2A Chat React Components, code:tsx (// Import the chat widget component), Components, Features, Hooks, Important: CSS Import Required, Main Component, State Management (+4 more)

### Community 33 - "Community 33"
Cohesion: 0.18
Nodes (5): A2AClient, client, mockAgentCard, mockHttpClient, AgentCapabilities

### Community 34 - "Community 34"
Cohesion: 0.17
Nodes (11): finalPromise, iterator, mockAgentCard, request, stream, task1Promise, task2Promise, task4Promise (+3 more)

### Community 35 - "Community 35"
Cohesion: 0.17
Nodes (11): artifact, iterator, mockAgentCard, request, stream, task1Promise, task2Promise, task3Promise (+3 more)

### Community 36 - "Community 36"
Cohesion: 0.18
Nodes (10): authConfig, body, clonedReq, interceptor, mockFetch, mockReload, onTokenRefreshRequired, onUnauthorized (+2 more)

### Community 37 - "Community 37"
Cohesion: 0.27
Nodes (6): Message, MessageList(), MessageListProps, useStyles, TypingIndicator(), TypingIndicatorProps

### Community 38 - "Community 38"
Cohesion: 0.18
Nodes (10): errorMessage, message, message1, message2, messages, messageWithAttachments, messageWithMetadata, state1 (+2 more)

### Community 39 - "Community 39"
Cohesion: 0.24
Nodes (7): DEFAULT_THEME, mergeTheme(), customTheme, { rerender }, { result }, { result, rerender }, useTheme()

### Community 41 - "Community 41"
Cohesion: 0.22
Nodes (7): assistantMessage, mockAgentCard, mockStreamReturnValue, removeItemSpy, { result }, setItemSpy, storedMessages

### Community 42 - "Community 42"
Cohesion: 0.57
Nodes (5): HttpClientOptions, IdentityProvider, RequestInterceptor, ResponseInterceptor, UnauthorizedEvent

### Community 43 - "Community 43"
Cohesion: 0.43
Nodes (5): AuthStateExample(), CustomChatImplementation(), ManualAuthUIExample(), useChatWidget(), useChatStore

### Community 47 - "Community 47"
Cohesion: 0.33
Nodes (5): ALLOWED_ATTR, ALLOWED_TAGS, sanitizeHtml(), result, result2

### Community 48 - "Community 48"
Cohesion: 0.47
Nodes (4): CodeBlockHeader(), CodeBlockHeaderProps, useStyles, copyButton

### Community 49 - "Community 49"
Cohesion: 0.33
Nodes (5): consoleErrorSpy, mockAgentCard, { result }, store, storeState

### Community 50 - "Community 50"
Cohesion: 0.40
Nodes (4): copyButton, copyButtons, message, viewButton

### Community 51 - "Community 51"
Cohesion: 0.40
Nodes (3): { container }, link, message

### Community 52 - "Community 52"
Cohesion: 0.50
Nodes (3): body, mockFetch, [request]

## Knowledge Gaps
- **520 isolated node(s):** `onUnauthorized`, `mockTask`, `message`, `invalidMessage`, `completedTask` (+515 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AgentCard` connect `Community 13` to `Community 0`, `Community 33`, `Community 34`, `Community 35`, `Community 3`, `Community 6`, `Community 7`, `Community 41`, `Community 12`, `Community 14`, `Community 49`, `Community 18`, `Community 19`, `Community 20`, `Community 30`?**
  _High betweenness centrality (0.106) - this node is a cross-community bridge._
- **Why does `Message` connect `Community 19` to `Community 0`, `Community 2`, `Community 3`, `Community 5`, `Community 6`, `Community 9`, `Community 15`, `Community 50`, `Community 51`, `Community 22`, `Community 28`, `Community 30`?**
  _High betweenness centrality (0.102) - this node is a cross-community bridge._
- **Why does `SessionManager` connect `Community 4` to `Community 2`, `Community 6`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **What connects `onUnauthorized`, `mockTask`, `message` to the rest of the system?**
  _520 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.05157894736842105 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.06180733162830349 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.06265664160401002 - nodes in this community are weakly interconnected._