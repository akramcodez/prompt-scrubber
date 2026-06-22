# Roadmap

## Phase 1: MVP (v1.0.0)
- **Status:** Planning
- **Goal:** Deliver the core CLI and library API for local, deterministic prompt scrubbing.
- **Features:**
  - Base detector set: Email, Phone, URL, Path, Secret.
  - Session-based stable placeholder mappings.
  - CLI operations: `scrub`, `rehydrate`, `inspect`.
  - Seamless cache-aware deterministic replacement.

## Phase 2: Extensibility & Quality of Life (v1.1.0)
- **Goal:** Improve configurability and support custom rules.
- **Features:**
  - Pluggable rule packs (distributable via npm).
  - Optional detectors: Name, Code Tell.
  - At-rest encryption for session map files.

## Phase 3: Advanced Rewriting (v2.0.0)
- **Goal:** Address stylistic and contextual fingerprinting.
- **Features:**
  - Local model-based paraphrasing.
  - Intent-preserving structural rewrites.
