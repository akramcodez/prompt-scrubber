# prompt-scrub

> [!WARNING]  
> This project is still being built and finalised - it is not yet publically versioned and released. Feel free to star, inspect the code thus far and get involved! Release coming soon. 

Built by the [Nano Collective](https://nanocollective.org) — a community collective building AI tooling not for profit, but for the community.

`prompt-scrub` is a local-first utility designed to strip identifying content out of prompts and messages before they hit any cloud LLM.

![Build Status](https://github.com/Nano-Collective/prompt-scrubber/raw/main/badges/build.svg)
![Coverage](https://github.com/Nano-Collective/prompt-scrubber/raw/main/badges/coverage.svg)
![Version](https://github.com/Nano-Collective/prompt-scrubber/raw/main/badges/npm-version.svg)
![Downloads](https://github.com/Nano-Collective/prompt-scrubber/raw/main/badges/npm-downloads-monthly.svg)
![License](https://github.com/Nano-Collective/prompt-scrubber/raw/main/badges/npm-license.svg)
![Repo Size](https://github.com/Nano-Collective/prompt-scrubber/raw/main/badges/repo-size.svg)
![Stars](https://github.com/Nano-Collective/prompt-scrubber/raw/main/badges/stars.svg)
![Forks](https://github.com/Nano-Collective/prompt-scrubber/raw/main/badges/forks.svg)

It maps sensitive data (emails, secrets, paths, URLs, phone numbers) to stable placeholders locally, allowing you to rehydrate the model's responses back to their original forms securely.

## Quick Start

Install globally to use the CLI:

```bash
npm install -g @nanocollective/prompt-scrub
```

Or install as a dependency in your Node.js project:

```bash
npm install @nanocollective/prompt-scrub
```

## Usage Examples

**CLI: Scrubbing text**
```bash
echo "My email is user@example.com" | prompt-scrub scrub
# Output: My email is Email_1
```

**Node.js API: Scrubbing and Rehydrating**
```typescript
import { scrub, rehydrate } from '@nanocollective/prompt-scrub';

const prompt = "My key is sk-12345";
const { scrubbedContent, sessionId } = scrub({ content: prompt });
console.log(scrubbedContent); // "My key is Secret_1"

// ... send to LLM ... get response "I see your key is Secret_1"

const { content } = rehydrate({ 
  content: "I see your key is Secret_1", 
  sessionId 
});
console.log(content); // "I see your key is sk-12345"
```

## Documentation

Full user guides and architecture details are in the [`docs/`](docs/) directory:
- [Getting Started](docs/getting-started/index.md)
- [Architecture & Threat Model](docs/features/index.md)

Read the full whitepaper at [docs.nanocollective.org](https://docs.nanocollective.org).

## Community

- **Discord:** [Join the Nano Collective Discord](https://discord.gg/ktPDV6rekE)
- **Contributing:** Read our [Contributing Guide](CONTRIBUTING.md) to get started.
- **Issues:** Check the [GitHub Issues](https://github.com/Nano-Collective/prompt-scrubber/issues) for planned work or to report bugs.
