# Implementation Plan

## Milestone 1 — Foundation
- Project setup (TypeScript, linting, testing framework)
- Types (`Message`, `Finding`, `SessionMap`)
- Detector interface
- Session manager
- Storage layer (JSON file read/write)

## Milestone 2 — Core Scrubbing
- Email detector
- Phone detector
- URL detector
- Path detector
- Secret detector
- Core `scrub` function and collision resolution logic

## Milestone 3 — Rehydration
- Placeholder replacement mapping
- Session lookup integration
- Missing placeholder handling (pass-through with warning)
- Core `rehydrate` function

## Milestone 4 — CLI
- Setup CLI framework
- `scrub` command
- `rehydrate` command
- `inspect` command
- `sessions` commands (`list`, `show`, `rm`)

## Milestone 5 — Integrations
- Nanocoder integration guide/example
- OpenAI SDK example
- Anthropic example
