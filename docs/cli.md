# CLI Reference

The `prompt-scrub` package provides a command-line interface for manual inspection, scripting, and pipeline integration. 

## Core Commands

### `prompt-scrub scrub`
Reads a message from `stdin` and prints the scrubbed message to `stdout`. The session ID is printed to `stderr`.

**Options:**
- `--session-id <id>`: Reuse an existing session map. If omitted, a new UUID is generated.
- `--inspect`: Dry run. Prints a diff of what would change without committing the transformation or updating the session map.

### `prompt-scrub rehydrate`
Reads a scrubbed response from `stdin` and prints the rehydrated response to `stdout`.

**Options:**
- `--session-id <id>` (Required): The session ID used during the `scrub` phase to restore original values.

### `prompt-scrub inspect`
Reads a message from `stdin` and prints a human-readable diff of the transformations the scrubber will apply.

**Crucially**, it also prints the **hash** of the scrubbed output. This allows callers to verify that the prefix is byte-stable across calls, proving the cache-aware determinism contract is intact.

## Session Management

### `prompt-scrub sessions list`
Lists all known session IDs currently stored on disk along with their file sizes.

### `prompt-scrub sessions show <id>`
Prints the raw JSON contents of a session map for inspection or manual editing.

### `prompt-scrub sessions rm <id>`
Deletes a session map from the disk permanently.

## Extensibility

### `prompt-scrub rules list`
Lists the active detector set, including both built-in rules and any registered custom rule packs.

## Utility

### `prompt-scrub --version`
Prints the current version of the CLI.

### `prompt-scrub --help`
Prints standard help documentation and available commands.
