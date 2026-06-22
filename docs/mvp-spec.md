# Prompt Scrubber MVP

## Included

- **Email detector**: Identifies standard email address patterns.
- **Phone detector**: Identifies phone numbers.
- **URL detector**: Identifies URLs and endpoints.
- **Path detector**: Identifies absolute file paths and directories.
- **Secret detector**: Identifies high-entropy strings, API keys, and access tokens.
- **Session persistence**: Stores the mapping between placeholders and original strings to disk.
- **Rehydration**: Restores original strings into model responses using the session map.
- **CLI**: `scrub`, `rehydrate`, `inspect`, and session management commands.

## Not Included

- Name detection (proper nouns)
- AI rewriting / Model-based paraphrasing
- Stylistic fingerprint removal
- Browser extension
- VS Code / IDE extension
- At-rest encryption for session maps

## Success Criteria

**Input:**
```text
My email is akram@example.com
```

**Output:**
```text
My email is [Email_1]
```

**Rehydration:**
```text
My email is akram@example.com
```

**Quality & Testing:**
- All built-in detectors are thoroughly covered by unit tests.
- 90%+ overall test coverage for the core library.
- Zero data loss for non-matched content.
