# prompt-scrub

`prompt-scrub` is a small open-source, local-first utility designed to strip identifying content out of prompts and messages before they hit any cloud LLM. It maps your sensitive data (emails, secrets, paths) to stable placeholders, allowing you to rehydrate the model's responses back to their original forms locally.

Read the full whitepaper at [docs.nanocollective.org](https://docs.nanocollective.org).

## Principles

- **Privacy-respecting**: The tool keeps identifying content on your machine. No telemetry, no remote rule fetching, no opt-out logging.
- **Local-first**: It runs entirely on the user's hardware. V1 requires zero network access.
- **Open for all**: Full source open, pluggable rule packs, trivial deployment. Anyone can install, audit, and extend it.

## Threat Model

`prompt-scrub` operates exclusively at the content layer. It modifies the text you send, not how you send it.

### In Scope
- **Accidental secret leakage in prompts**: Strong defense. Catches common API keys, tokens, and credentials.
- **Accidental identifier leakage in one-off prompts**: Strong defense. Strips emails, phone numbers, postal addresses, paths, and URLs.

### Partial Defense
- **Long-term provider profile building**: Stable session mappings prevent correlation across a single session, but stylistic fingerprinting can still allow an LLM provider to build a profile across sessions.
- **Cloud LLM providers reading identifiers**: Detectors reduce visibility significantly but not to zero (e.g., `Path_1` vs `/Users/me`).
- **Tool call results in agentic settings**: It scrubs results from commands like `ls` and `git log` before the next turn, but coverage is limited to configured detectors.

### Out of Scope
- **An adversary on the user's machine**: If your local environment is compromised, the prompt is compromised. Session maps are stored as plain JSON.
- **Semantic leakage**: Asking "what is wrong with my taxes given I made $X" is inherently identifying. Stripping names does not anonymize the question itself.
- **Style fingerprinting**: Your writing style and cadence go out unchanged.
- **Network/Key layer privacy**: We do not hide your IP address or request timing. Use a VPN, Tor, or a proxy for network-level privacy.

## Relationship to the Private Inference Proxy
`prompt-scrub` was originally conceived as "Mode C" of the proposed Private Inference Proxy. It has since outgrown that framing to become a standalone tool. It has a different deployment shape (local library vs network service), threat model (content vs network), and release cadence. If the Proxy ships, it will act as a sibling project, and `prompt-scrub` will compose cleanly in front of it. 

## Alternatives Considered

- **Server-side redaction by the LLM provider**: Puts the provider back in the trust boundary. `prompt-scrub` ensures redaction happens *before* it leaves your machine.
- **A model-only v1**: A local paraphrasing model is great for style fingerprinting, but delays shipping the MVP. A fast, regex-based tool solves the immediate problem of exposed secrets and identifiers.
- **Ship as Mode C of the Proxy**: Rejected because it couples a local content-layer library to a network-layer service.
- **Doing nothing**: The status quo leaks more than users realize.
