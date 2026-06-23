# prompt-scrub

`prompt-scrub` is a small open-source, local-first utility designed to strip identifying content out of prompts and messages before they hit any cloud LLM. It maps your sensitive data (emails, secrets, paths) to stable placeholders, allowing you to rehydrate the model's responses back to their original forms locally.

Read the full whitepaper at [docs.nanocollective.org](https://docs.nanocollective.org).

## Principles

- **Privacy-respecting**: The tool keeps identifying content on your machine. No telemetry, no remote rule fetching, no opt-out logging.
- **Local-first**: It runs entirely on the user's hardware. V1 requires zero network access.
- **Open for all**: Full source open, pluggable rule packs, trivial deployment. Anyone can install, audit, and extend it.

## Threat Model: What `prompt-scrub` Is and Isn't

`prompt-scrub` is a 70% solution, not a 100% solution. It does **not** provide complete anonymity.

It is critical that users understand what the tool defends against (accidental secrets and identifiers), what it partially mitigates (provider profile building), and what is explicitly out of scope (style fingerprinting, network-level identification, local adversaries).

**Please read the full [Threat Model](docs/threat-model.md)** before relying on this tool.

## Documentation
- [Threat Model](docs/threat-model.md)
- [MVP Specification](docs/mvp-spec.md)
- [Architecture](docs/architecture.md)
- [v1 API Reference](docs/v1-api.md)
- [CLI Reference](docs/cli.md)
- [Detector System](docs/detector-system.md)
- [Session Management](docs/session-management.md)
- [Examples](docs/examples.md)

## Relationship to the Private Inference Proxy
`prompt-scrub` was originally conceived as "Mode C" of the proposed Private Inference Proxy. It has since outgrown that framing to become a standalone tool. It has a different deployment shape (local library vs network service), threat model (content vs network), and release cadence. If the Proxy ships, it will act as a sibling project, and `prompt-scrub` will compose cleanly in front of it. 

## Alternatives Considered

- **Server-side redaction by the LLM provider**: Puts the provider back in the trust boundary. `prompt-scrub` ensures redaction happens *before* it leaves your machine.
- **A model-only v1**: A local paraphrasing model is great for style fingerprinting, but delays shipping the MVP. A fast, regex-based tool solves the immediate problem of exposed secrets and identifiers.
- **Ship as Mode C of the Proxy**: Rejected because it couples a local content-layer library to a network-layer service.
- **Doing nothing**: The status quo leaks more than users realize.
