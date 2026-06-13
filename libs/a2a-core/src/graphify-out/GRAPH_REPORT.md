# Graph Report - src  (2026-06-13)

## Corpus Check
- 140 files · ~79,356 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 586 nodes · 1461 edges · 24 communities (20 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
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
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 36|Community 36]]

## God Nodes (most connected - your core abstractions)
1. `AgentCard` - 34 edges
2. `SessionManager` - 28 edges
3. `A2AClient` - 27 edges
4. `HttpClient` - 25 edges
5. `ChatInterface` - 23 edges
6. `SSEClient` - 21 edges
7. `Message` - 20 edges
8. `useChatStore` - 19 edges
9. `ServerHistoryStorage` - 19 edges
10. `AuthConfig` - 18 edges

## Surprising Connections (you probably didn't know these)
- `ChatState` --references--> `ChatSession`  [EXTRACTED]
  react/store/chatStore.ts → api/history-types.ts
- `ChatState` --references--> `Message`  [EXTRACTED]
  react/store/chatStore.ts → api/history-types.ts
- `ChatInterfaceConfig` --references--> `A2AClient`  [EXTRACTED]
  chat/chat-interface.ts → client/a2a-client.ts
- `ChatInterfaceConfig` --references--> `SessionManager`  [EXTRACTED]
  chat/chat-interface.ts → session/session-manager.ts
- `ChatInterface` --references--> `A2AClient`  [EXTRACTED]
  chat/chat-interface.ts → client/a2a-client.ts

## Import Cycles
- 1-file cycle: `react/types/index.ts -> react/types/index.ts`

## Communities (24 total, 4 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.07
Nodes (44): createHistoryApi(), HistoryApi, HistoryApiClient, HistoryApiConfig, JsonRpcRequest, extractAuthEventFromMessage(), extractLastMessage(), isAuthRequiredMessage() (+36 more)

### Community 1 - "Community 1"
Cohesion: 0.06
Nodes (48): A2AError, AuthenticationError, createJsonRpcError(), extractErrorDetails(), isJsonRpcErrorResponse(), JsonRpcErrorCode, JsonRpcErrorResponse, NetworkError (+40 more)

### Community 2 - "Community 2"
Cohesion: 0.06
Nodes (42): ChatWidget(), useStyles, AuthRequiredPart, ExampleWithHooks(), manualAuthFlow(), FileUpload(), FileUploadProps, AuthenticationMessage() (+34 more)

### Community 3 - "Community 3"
Cohesion: 0.11
Nodes (28): A2AClientConfig, HttpClient, AuthConfig, AuthRequiredEvent, AuthRequiredHandler, HttpClientOptions, IdentityProvider, RequestConfig (+20 more)

### Community 4 - "Community 4"
Cohesion: 0.09
Nodes (19): A2AClient, mockAgentCard, mockAgentCard, WaitForCompletionOptions, AgentDiscovery, AgentDiscoveryOptions, CacheEntry, AgentRegistry (+11 more)

### Community 5 - "Community 5"
Cohesion: 0.11
Nodes (12): AnalyticsConfig, AnalyticsEvent, AnalyticsPlugin, LoggerConfig, LoggerPlugin, LogLevel, PluginManager, Plugin (+4 more)

### Community 6 - "Community 6"
Cohesion: 0.12
Nodes (10): LocalStoragePlugin, SessionManager, mockLocalStorage, mockSessionStorage, SessionChangeEvent, SessionData, SessionEventMap, SessionOptions (+2 more)

### Community 7 - "Community 7"
Cohesion: 0.17
Nodes (10): ChatInterface, ChatInterfaceConfig, ChatEventMap, ChatMessage, ChatOptions, ChatRole, ConversationExport, StreamUpdate (+2 more)

### Community 8 - "Community 8"
Cohesion: 0.18
Nodes (7): SSEClient, MockEventSource, ErrorHandler, MessageHandler, SSEClientOptions, SSEMessage, SSEParser

### Community 9 - "Community 9"
Cohesion: 0.17
Nodes (11): A2A Chat React Components, Components, Features, Hooks, Important: CSS Import Required, Main Component, State Management, TypeScript Support (+3 more)

### Community 33 - "Community 33"
Cohesion: 0.09
Nodes (22): CodeBlockHeader(), CodeBlockHeaderProps, useStyles, escapeAttr(), formatTime(), link(), Message, MessageComponent() (+14 more)

### Community 36 - "Community 36"
Cohesion: 0.09
Nodes (21): ChatWindow(), ChatWindowProps, useStyles, CompanyLogo(), CompanyLogoProps, AuthStateExample(), CustomChatImplementation(), ManualAuthUIExample() (+13 more)

## Knowledge Gaps
- **49 isolated node(s):** `JsonRpcRequest`, `mockAgentCard`, `mockAgentCard`, `mockAgentCard`, `mockUseChatWidget` (+44 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Message` connect `Community 33` to `Community 0`, `Community 2`, `Community 3`, `Community 4`, `Community 5`, `Community 7`?**
  _High betweenness centrality (0.126) - this node is a cross-community bridge._
- **Why does `AgentCard` connect `Community 4` to `Community 1`, `Community 2`, `Community 3`?**
  _High betweenness centrality (0.116) - this node is a cross-community bridge._
- **Why does `A2AClient` connect `Community 4` to `Community 2`, `Community 3`, `Community 5`, `Community 7`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._
- **What connects `JsonRpcRequest`, `mockAgentCard`, `mockAgentCard` to the rest of the system?**
  _49 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.06801093643198906 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.059676044330775786 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.05662862159789289 - nodes in this community are weakly interconnected._