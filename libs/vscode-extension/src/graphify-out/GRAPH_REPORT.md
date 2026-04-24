# Graph Report - src  (2026-04-24)

## Corpus Check
- 31 files · ~4,796 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 51 nodes · 38 edges · 3 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]

## God Nodes (most connected - your core abstractions)
1. `HttpClient` - 9 edges
2. `JwtTokenHelper` - 5 edges
3. `isArmResourceId()` - 5 edges
4. `isSuccessResponse()` - 4 edges
5. `parseResponse()` - 4 edges
6. `getExtraHeaders()` - 2 edges
7. `isUrl()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 0 - "Community 0"
Cohesion: 0.5
Nodes (3): isArmResourceId(), isSuccessResponse(), parseResponse()

### Community 1 - "Community 1"
Cohesion: 0.33
Nodes (3): getExtraHeaders(), HttpClient, isUrl()

### Community 2 - "Community 2"
Cohesion: 0.47
Nodes (1): JwtTokenHelper

## Knowledge Gaps
- **Thin community `Community 2`** (6 nodes): `JwtTokenHelper`, `.base64DecodeStringUrlSafe()`, `.createInstance()`, `.decodeJwt()`, `.extractJwtTokenPayload()`, `JwtHelper.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `HttpClient` connect `Community 1` to `Community 0`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **Why does `isArmResourceId()` connect `Community 0` to `Community 1`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._