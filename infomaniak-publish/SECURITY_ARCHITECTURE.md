# T-LAB access architecture

Status: reference architecture, 2026-09-01.

## Priority order

1. `PUBLIC^RUN` — `tinfinitytriunity-T/T` is the primary execution rail for ordinary GPT ↔ Infomaniak operations. Standard GitHub-hosted runners on this public repository are used so the private-repository Actions allowance is not consumed.
2. `PRIVATE^CONTROL` — `tinfinitytriunity-T/T-private` is the secondary/fallback rail for maintenance, recovery, controlled publication and diagnostics.
3. `INFOMANIAK^FS` — `/web/T-LAB/` is the canonical data/filesystem target. `/web/T-GPT/T-AI/` may host narrowly scoped bridge/probe code.

## Security boundaries

- Public repository visibility does not grant repository write access.
- The public deployment workflow uses `permissions: contents: read` only.
- Checkout is pinned to a full commit SHA and `persist-credentials: false`.
- The public FTPS credential is `ngw_GPT-PUBLISH`, jailed to the T-GPT publication root.
- The private T-LAB credential is distinct: `ngw_T-LAB-PUBLISH`.
- Server-side executable files and deployment workflows are CODEOWNERS-controlled.
- Symlinks are rejected from the public deployment payload.
- Secrets are never committed to Git.
- Ordinary reads should use the permanent signed read bridge when possible, avoiding GitHub Actions entirely.
- Writes should use a narrowly scoped, authenticated/one-shot operation and must verify the result after mutation.
- Temporary probes must self-clean or be explicitly removed after verification.
- No public endpoint is intended to expose an unauthenticated filesystem browser or generic unauthenticated write API.

## Functional rails

### Read — preferred

`GPT → signed HTTPS request → /web/T-GPT/T-AI/fs-read-bridge.php → filesystem → /web/T-LAB/... → GPT`

No GitHub Actions run is required for a normal read after deployment of the bridge.

### Write — public primary

`GPT → public repository operation/probe → public GitHub Actions → FTPS ngw_GPT-PUBLISH → narrowly scoped T-GPT server-side operation → filesystem /web/T-LAB/... → read-back verification → cleanup`

The operation must be explicit and targeted. A generic unauthenticated file manager is forbidden.

### Private fallback

`GPT → T-private → private GitHub Actions → FTPS ngw_T-LAB-PUBLISH → /web/T-LAB/...`

Use for recovery, maintenance or when the public rail is unavailable. Because this rail is private, it can consume the private Actions allowance and is therefore secondary by design.

## Mutation policy

Permitted when explicitly requested:

- create directory;
- create file;
- replace/update file;
- upload binary artifacts;
- verify size/hash/content after write.

Destructive operations (`delete`, `rename`, recursive replacement) must remain explicit operations and must not occur as an implicit side effect of an unrelated write.

## Future preferred evolution

A fixed authenticated `FS^BRIDGE` may replace one-shot write probes when a compatible connector can invoke signed write requests directly. A self-hosted runner attached to the private repository is another valid future rail, giving private execution without GitHub-hosted private minutes.
