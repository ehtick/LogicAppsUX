# Graph Report - src  (2026-11-06)

## Corpus Check
- 17 files · ~6,787 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 135 nodes · 214 edges · 10 communities (7 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `82639b8e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- lib/ui/__test__/CopilotChatbot.spec.tsx
- lib/common/models/workflow.ts
- lib/ui/CopilotChatbot.tsx
- src/lib/ui/ChatbotUi.tsx
- Svg.d.ts
- src/lib/ui/__test__/ChatbotUi.spec.tsx
- src/lib/ui/CopilotChatbot.tsx
- src/lib/common/models/workflow.ts

## God Nodes (most connected - your core abstractions)
1. `AssistantChat()` - 5 edges
2. `CoPilotChatbot()` - 5 edges
3. `CopilotPanelHeader()` - 5 edges
4. `useChatbotStyles` - 5 edges
5. `useChatbotStyles` - 5 edges
6. `mockUseIntl()` - 4 edges
7. `ChatbotUI()` - 4 edges
8. `mockUseIntl()` - 4 edges
9. `CopilotPanelHeader()` - 4 edges
10. `isSuccessResponse()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `CoPilotChatbot()` --calls--> `AssistantChat()`  [EXTRACTED]
  src/lib/ui/CopilotChatbot.tsx → src/lib/ui/ChatbotUi.tsx
- `CoPilotChatbot()` --calls--> `CopilotPanelHeader()`  [EXTRACTED]
  src/lib/ui/CopilotChatbot.tsx → src/lib/ui/panelheader.tsx
- `CoPilotChatbot()` --calls--> `isSuccessResponse()`  [EXTRACTED]
  src/lib/ui/CopilotChatbot.tsx → src/lib/core/util/index.ts
- `ChatbotUI()` --calls--> `useChatbotStyles`  [EXTRACTED]
  src/lib/ui/ChatbotUi.tsx → src/lib/ui/styles.ts
- `CopilotPanelHeader()` --calls--> `useChatbotStyles`  [EXTRACTED]
  src/lib/ui/panelheader.tsx → src/lib/ui/styles.ts

## Import Cycles
- None detected.

## Communities (10 total, 3 thin omitted)

### Community 1 - "lib/ui/__test__/CopilotChatbot.spec.tsx"
Cohesion: 0.15
Nodes (9): capturedAssistantChatProps, defaultProps, mockGetCopilotResponse, mockGetWorkflowEdit, mockWorkflow, cache, intl, mockUseIntl() (+1 more)

### Community 2 - "lib/common/models/workflow.ts"
Cohesion: 0.25
Nodes (7): ApiHubAuthentication, ConnectionReference, ConnectionReferences, Impersonation, ImpersonationSource, ReferenceKey, WorkflowParameter

### Community 3 - "lib/ui/CopilotChatbot.tsx"
Cohesion: 0.15
Nodes (10): RequestData, ResponseData, AssistantChat(), ChatbotUI(), ChatbotUIProps, CoPilotChatbotProps, CopilotPanelHeader(), useChatbotDarkStyles (+2 more)

### Community 4 - "src/lib/ui/ChatbotUi.tsx"
Cohesion: 0.13
Nodes (7): AssistantChat(), ChatbotUI(), ChatbotUIProps, defaultChatbotPanelWidth, CopilotPanelHeader(), useChatbotDarkStyles, useChatbotStyles

### Community 7 - "src/lib/ui/__test__/ChatbotUi.spec.tsx"
Cohesion: 0.11
Nodes (8): cache, intl, mockUseIntl(), capturedAssistantChatProps, defaultProps, mockGetCopilotResponse, mockGetWorkflowEdit, mockWorkflow

### Community 8 - "src/lib/ui/CopilotChatbot.tsx"
Cohesion: 0.11
Nodes (5): RequestData, ResponseData, isSuccessResponse(), CoPilotChatbot(), CoPilotChatbotProps

### Community 9 - "src/lib/common/models/workflow.ts"
Cohesion: 0.25
Nodes (7): ApiHubAuthentication, ConnectionReference, ConnectionReferences, Impersonation, ImpersonationSource, ReferenceKey, WorkflowParameter

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `CopilotPanelHeader()` connect `lib/ui/CopilotChatbot.tsx` to `lib/ui/__test__/CopilotChatbot.spec.tsx`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **Should `lib/ui/CopilotChatbot.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1471861471861472 - nodes in this community are weakly interconnected._
- **Why does `CopilotPanelHeader()` connect `src/lib/ui/ChatbotUi.tsx` to `src/lib/ui/CopilotChatbot.tsx`, `src/lib/ui/__test__/ChatbotUi.spec.tsx`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Should `src/lib/ui/ChatbotUi.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12987012987012986 - nodes in this community are weakly interconnected._
- **Why does `AssistantChat()` connect `src/lib/ui/ChatbotUi.tsx` to `src/lib/ui/CopilotChatbot.tsx`, `src/lib/ui/__test__/ChatbotUi.spec.tsx`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `src/lib/ui/__test__/ChatbotUi.spec.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10826210826210826 - nodes in this community are weakly interconnected._
- **Should `src/lib/ui/CopilotChatbot.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1067193675889328 - nodes in this community are weakly interconnected._