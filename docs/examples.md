# Examples

Here are some real-world examples of `prompt-scrub` in action.

## Example 1: Basic Identifiers

**Input**
```text
My email is akram@example.com
API key: sk-123456
```

**Scrubbed**
```text
My email is [Email_1]
API key: [Secret_1]
```

**Rehydrated**
```text
My email is akram@example.com
API key: sk-123456
```

## Example 2: Paths and URLs

**Input**
```text
I'm getting an error when fetching https://internal.company.com/api from /Users/akram/dev/app/src/main.ts
```

**Scrubbed**
```text
I'm getting an error when fetching [Url_1] from [Path_1]
```

**Rehydrated**
```text
I'm getting an error when fetching https://internal.company.com/api from /Users/akram/dev/app/src/main.ts
```
