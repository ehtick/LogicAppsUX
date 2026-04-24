# Graph Report - src  (2026-04-24)

## Corpus Check
- 139 files · ~79,356 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 409 nodes · 440 edges · 20 communities detected
- Extraction: 82% EXTRACTED · 18% INFERRED · 0% AMBIGUOUS · INFERRED: 79 edges (avg confidence: 0.8)
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
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]

## God Nodes (most connected - your core abstractions)
1. `SessionManager` - 18 edges
2. `ChatInterface` - 17 edges
3. `HttpClient` - 13 edges
4. `SSEClient` - 13 edges
5. `ServerHistoryStorage` - 12 edges
6. `PluginManager` - 10 edges
7. `AgentDiscovery` - 7 edges
8. `MockSSEClient` - 7 edges
9. `MockSSEClient` - 7 edges
10. `MockSSEClient` - 7 edges

## Surprising Connections (you probably didn't know these)
- `messageHandler()` --calls--> `validatePopupUrl()`  [INFERRED]
  src/client/a2a-client.ts → src/utils/popup-window.ts
- `isJsonRpcError()` --calls--> `messageHandler()`  [INFERRED]
  src/types/schemas.ts → src/client/a2a-client.ts
- `ExampleWithHooks()` --calls--> `useA2A()`  [INFERRED]
  src/examples/obo-authentication.ts → src/react/use-a2a.ts
- `openPopupWindow()` --calls--> `manualAuthFlow()`  [INFERRED]
  src/utils/popup-window.ts → src/examples/obo-authentication.ts
- `sanitizeHtml()` --calls--> `MessageComponent()`  [INFERRED]
  src/utils/sanitize.ts → src/react/components/Message/Message.tsx

## Communities

### Community 0 - "Community 0"
Cohesion: 0.11
Nodes (3): AgentDiscovery, PluginManager, ServerHistoryStorage

### Community 1 - "Community 1"
Cohesion: 0.08
Nodes (6): A2AClient, MockSSEClient, errorHandler(), messageHandler(), SSEClient, MockEventSource

### Community 2 - "Community 2"
Cohesion: 0.09
Nodes (11): A2AError, AuthenticationError, extractErrorDetails(), isJsonRpcErrorResponse(), JsonRpcErrorResponse, NetworkError, StreamingError, TaskError (+3 more)

### Community 3 - "Community 3"
Cohesion: 0.15
Nodes (2): LocalStoragePlugin, SessionManager

### Community 4 - "Community 4"
Cohesion: 0.18
Nodes (5): HttpClient, createJsonRpcResponseSchema(), createJsonRpcResultSchema(), isJsonRpcError(), isJsonRpcResult()

### Community 5 - "Community 5"
Cohesion: 0.23
Nodes (1): ChatInterface

### Community 6 - "Community 6"
Cohesion: 0.2
Nodes (2): AnalyticsPlugin, LoggerPlugin

### Community 7 - "Community 7"
Cohesion: 0.18
Nodes (6): ExampleWithHooks(), manualAuthFlow(), openPopupWindow(), validatePopupUrl(), useA2A(), useChatWidget()

### Community 8 - "Community 8"
Cohesion: 0.25
Nodes (2): createHistoryApi(), HistoryApiClient

### Community 9 - "Community 9"
Cohesion: 0.38
Nodes (8): extractAuthEventFromMessage(), extractLastMessage(), isAuthRequiredMessage(), parseServerDate(), transformContext(), transformMessage(), transformMessageParts(), transformTasksToMessages()

### Community 10 - "Community 10"
Cohesion: 0.22
Nodes (2): EnterpriseAgentRegistry, PublicAgentRegistry

### Community 11 - "Community 11"
Cohesion: 0.36
Nodes (6): escapeAttr(), getLanguageFromFilename(), highlight(), link(), MessageComponent(), sanitizeHtml()

### Community 12 - "Community 12"
Cohesion: 0.25
Nodes (1): MockSSEClient

### Community 13 - "Community 13"
Cohesion: 0.25
Nodes (1): MockSSEClient

### Community 14 - "Community 14"
Cohesion: 0.25
Nodes (1): DataTransferPolyfill

### Community 15 - "Community 15"
Cohesion: 0.52
Nodes (6): createArtifactMessage(), createGroupedArtifactMessage(), createMessage(), formatCodeContent(), generateMessageId(), getLanguageFromFilename()

### Community 16 - "Community 16"
Cohesion: 0.33
Nodes (2): handleKeyDown(), handleSubmit()

### Community 18 - "Community 18"
Cohesion: 0.6
Nodes (3): getAgentContextStorageKey(), getAgentMessagesStorageKey(), getAgentStorageIdentifier()

### Community 22 - "Community 22"
Cohesion: 0.83
Nodes (3): adjustBrightness(), createCustomTheme(), generateBrandVariants()

### Community 23 - "Community 23"
Cohesion: 0.67
Nodes (2): mergeTheme(), useTheme()

## Knowledge Gaps
- **Thin community `Community 3`** (23 nodes): `.clearCache()`, `LocalStoragePlugin`, `.clear()`, `.constructor()`, `.getItem()`, `.removeItem()`, `.setItem()`, `SessionManager`, `.cleanup()`, `.clear()`, `.constructor()`, `.createSession()`, `.debouncedSave()`, `.destroy()`, `.generateSessionId()`, `.getSession()`, `.initializeSession()`, `.loadSession()`, `.persistSession()`, `.rotate()`, `.save()`, `.waitForInit()`, `session-manager.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 5`** (16 nodes): `chat-interface.ts`, `ChatInterface`, `.clearConversation()`, `.createChatMessage()`, `.destroy()`, `.exportConversation()`, `.extractTextContent()`, `.generateConversationId()`, `.generateMessageId()`, `.getConversationId()`, `.getMessages()`, `.newConversation()`, `.saveConversationHistory()`, `.send()`, `.sendMultipart()`, `.stream()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 6`** (14 nodes): `AnalyticsPlugin`, `.constructor()`, `.flush()`, `.install()`, `.startFlushTimer()`, `.track()`, `.uninstall()`, `LoggerPlugin`, `.constructor()`, `.formatMessage()`, `.log()`, `.shouldLog()`, `analytics-plugin.ts`, `logger-plugin.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 8`** (11 nodes): `history-api.ts`, `createHistoryApi()`, `HistoryApiClient`, `.constructor()`, `.generateRequestId()`, `.listContexts()`, `.listTasks()`, `.makeRequest()`, `.updateContext()`, `.constructor()`, `.updateSession()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 10`** (9 nodes): `registry.ts`, `EnterpriseAgentRegistry`, `.constructor()`, `.getAgentCard()`, `.searchAgents()`, `PublicAgentRegistry`, `.constructor()`, `.getAgentCard()`, `.searchAgents()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 12`** (8 nodes): `MockSSEClient`, `.close()`, `.constructor()`, `.onError()`, `.onMessage()`, `.simulateError()`, `.simulateMessage()`, `a2a-client.stream.test.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 13`** (8 nodes): `MockSSEClient`, `.close()`, `.constructor()`, `.onError()`, `.onMessage()`, `.simulateError()`, `.simulateMessage()`, `a2a-client.accumulation.test.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 14`** (8 nodes): `setup.ts`, `constructor()`, `DataTransferPolyfill`, `.clearData()`, `.constructor()`, `.getData()`, `.setData()`, `.setDragImage()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 16`** (7 nodes): `handleFileSelect()`, `handleFocusChange()`, `handleInput()`, `handleKeyDown()`, `handleSubmit()`, `removeAttachment()`, `MessageInput.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 23`** (4 nodes): `useTheme.ts`, `applyTheme()`, `mergeTheme()`, `useTheme()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `SessionManager` connect `Community 3` to `Community 0`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **Why does `messageHandler()` connect `Community 1` to `Community 4`, `Community 6`, `Community 7`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.11 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.09 - nodes in this community are weakly interconnected._