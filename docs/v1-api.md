# v1 API Reference

The primary interface for `prompt-scrub` is designed to be simple and stateless from the caller's perspective, delegating session persistence to the library.

## Core Functions

### `scrub`

Scrubs identifying content from a prompt or message.

```typescript
import { scrub } from '@nanocollective/prompt-scrub';

const result = await scrub({
  content: prompt, // The string or message object to scrub
  sessionId: "abc123" // Optional. If omitted, a new session is generated.
});

// result.scrubbedContent contains the text with placeholders
// result.sessionId contains the session ID used
```

### `rehydrate`

Restores the original identifying content into a model response.

```typescript
import { rehydrate } from '@nanocollective/prompt-scrub';

const restored = await rehydrate({
  content: response, // The response from the LLM containing placeholders
  sessionId: "abc123" // The session ID used during the scrub phase
});

// restored.content contains the rehydrated text
```

## Types

```typescript
export interface ScrubRequest {
  content: string;
  sessionId?: string;
  options?: ScrubOptions;
}

export interface ScrubResult {
  scrubbedContent: string;
  sessionId: string;
}

export interface RehydrateRequest {
  content: string;
  sessionId: string;
}

export interface RehydrateResult {
  content: string;
}
```
