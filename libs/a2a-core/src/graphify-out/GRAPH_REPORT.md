# Graph Report - src  (2026-11-06)

## Corpus Check
- 141 files · ~80,919 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 813 nodes · 2284 edges · 40 communities (16 shown, 24 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 23 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `82639b8e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- history-types.ts
- schemas.ts
- src/react/types/index.ts
- MockSSEClient
- plugins/index.ts
- SessionManager
- react/store/chatStore.ts
- ref_vitest
- SSEClient
- A2A Chat React Components
- DataTransferPolyfill
- MockSSEClient
- react/components/FileUpload/FileUpload.tsx
- src/react/components/Message/Message.tsx
- errors.ts
- AuthRequiredPart
- src/react/components/MessageInput/MessageInput.tsx
- a2a-client.ts
- registry.ts
- useA2A
- DataTransferPolyfill
- MockSSEClient
- MockSSEClient
- react/index.ts

## God Nodes (most connected - your core abstractions)
1. `AgentCard` - 45 edges
2. `A2AClient` - 33 edges
3. `SessionManager` - 29 edges
4. `useChatStore` - 28 edges
5. `ChatSession` - 26 edges
6. `HttpClient` - 26 edges
7. `AuthConfig` - 26 edges
8. `ChatInterface` - 23 edges
9. `SSEClient` - 21 edges
10. `Message` - 20 edges

## Surprising Connections (you probably didn't know these)
- `ChatState` --references--> `ChatSession`  [EXTRACTED]
  react/store/chatStore.ts → src/api/history-types.ts
- `ChatState` --references--> `Message`  [EXTRACTED]
  react/store/chatStore.ts → src/api/history-types.ts
- `ChatState` --references--> `A2AClient`  [EXTRACTED]
  react/store/chatStore.ts → src/client/a2a-client.ts
- `AuthPartState` --inherits--> `AuthRequiredPart`  [EXTRACTED]
  react/components/Message/AuthenticationMessage.tsx → src/client/types.ts
- `Message` --references--> `AuthRequiredPart`  [EXTRACTED]
  react/types/index.ts → src/client/types.ts

## Import Cycles
- None detected.

## Communities (40 total, 24 thin omitted)

### Community 0 - "history-types.ts"
Cohesion: 0.06
Nodes (48): createHistoryApi(), HistoryApi, HistoryApiClient, HistoryApiConfig, JsonRpcRequest, extractAuthEventFromMessage(), extractLastMessage(), isAuthRequiredMessage() (+40 more)

### Community 1 - "schemas.ts"
Cohesion: 0.10
Nodes (35): AgentCapabilitiesSchema, AgentInterface, AgentInterfaceSchema, AgentProvider, AgentProviderSchema, AgentSkill, AgentSkillSchema, Artifact (+27 more)

### Community 2 - "src/react/types/index.ts"
Cohesion: 0.08
Nodes (38): A2AClientConfig, WaitForCompletionOptions, HttpClient, AuthConfig, AuthRequiredEvent, AuthRequiredHandler, HttpClientOptions, IdentityProvider (+30 more)

### Community 4 - "plugins/index.ts"
Cohesion: 0.08
Nodes (18): AnalyticsConfig, AnalyticsEvent, AnalyticsPlugin, LoggerConfig, LoggerPlugin, LogLevel, AnalyticsConfig, AnalyticsEvent (+10 more)

### Community 5 - "SessionManager"
Cohesion: 0.07
Nodes (20): ChatInterface, ChatInterfaceConfig, ChatEventMap, ChatMessage, ChatOptions, ChatRole, ConversationExport, StreamUpdate (+12 more)

### Community 6 - "react/store/chatStore.ts"
Cohesion: 0.06
Nodes (39): CodeBlockHeader(), CodeBlockHeaderProps, useStyles, escapeAttr(), formatTime(), link(), Message, MessageComponent() (+31 more)

### Community 7 - "ref_vitest"
Cohesion: 0.20
Nodes (6): mockAgentCard, AgentDiscovery, CacheEntry, useChatWidget(), getMockAgentCard(), AgentCardSchema

### Community 8 - "SSEClient"
Cohesion: 0.17
Nodes (7): SSEClient, MockEventSource, ErrorHandler, MessageHandler, SSEClientOptions, SSEMessage, SSEParser

### Community 9 - "A2A Chat React Components"
Cohesion: 0.17
Nodes (11): A2A Chat React Components, Components, Features, Hooks, Important: CSS Import Required, Main Component, State Management, TypeScript Support (+3 more)

### Community 21 - "src/react/components/Message/Message.tsx"
Cohesion: 0.06
Nodes (39): ManualAuthUIExample(), ChatWindow(), ChatWindowProps, useStyles, mockUseChatWidget, CompanyLogo(), CompanyLogoProps, AuthenticationMessage() (+31 more)

### Community 22 - "errors.ts"
Cohesion: 0.11
Nodes (17): formatErrorMessage(), getUserFriendlyErrorMessage(), A2AError, AuthenticationError, createJsonRpcError(), extractErrorDetails(), isJsonRpcErrorResponse(), JsonRpcErrorCode (+9 more)

### Community 23 - "AuthRequiredPart"
Cohesion: 0.16
Nodes (15): AuthRequiredPart, ExampleWithHooks(), manualAuthFlow(), AuthenticationMessage(), AuthenticationMessageProps, AuthPartState, useStyles, AuthPartState (+7 more)

### Community 24 - "src/react/components/MessageInput/MessageInput.tsx"
Cohesion: 0.19
Nodes (14): MessageInput(), MessageInputProps, useStyles, StatusMessage(), StatusMessageProps, useStyles, Attachment, ArtifactData (+6 more)

### Community 25 - "a2a-client.ts"
Cohesion: 0.24
Nodes (7): A2AClient, mockAgentCard, mockAgentCard, mockAgentCard, AgentCapabilities, AgentCard, Task

### Community 26 - "registry.ts"
Cohesion: 0.19
Nodes (5): AgentDiscoveryOptions, AgentRegistry, AgentSummary, EnterpriseAgentRegistry, PublicAgentRegistry

### Community 36 - "react/index.ts"
Cohesion: 0.06
Nodes (47): ChatWidget(), useStyles, ChatWindow(), ChatWindowProps, useStyles, CompanyLogo(), CompanyLogoProps, AuthenticatedUsernameExample() (+39 more)

## Knowledge Gaps
- **24 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AgentCard` connect `a2a-client.ts` to `schemas.ts`, `src/react/types/index.ts`, `react/index.ts`, `react/store/chatStore.ts`, `ref_vitest`, `registry.ts`, `useA2A`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **Are the 7 inferred relationships involving `useChatStore` (e.g. with `.addMessage()` and `.clear()`) actually correct?**
  _`useChatStore` has 7 INFERRED edges - model-reasoned connections that need verification._
- **Should `history-types.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05811027224891329 - nodes in this community are weakly interconnected._
- **Why does `Message` connect `react/store/chatStore.ts` to `src/react/types/index.ts`, `plugins/index.ts`, `SessionManager`, `react/index.ts`, `AuthRequiredPart`, `a2a-client.ts`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **Should `schemas.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1014799154334038 - nodes in this community are weakly interconnected._
- **Why does `A2AClient` connect `a2a-client.ts` to `history-types.ts`, `src/react/types/index.ts`, `plugins/index.ts`, `SessionManager`, `react/store/chatStore.ts`, `ref_vitest`, `AuthRequiredPart`, `useA2A`?**
  _High betweenness centrality (0.063) - this node is a cross-community bridge._
- **Should `src/react/types/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07785602503912363 - nodes in this community are weakly interconnected._