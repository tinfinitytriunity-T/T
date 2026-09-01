# T-LAB access architecture

Status: reference architecture, 2026-09-01.

## Priority order

1. `VERCEL^CONTROL` — `t-lab-fs-control.vercel.app` is the primary daily control plane for GPT ↔ Infomaniak file operations. It stores no signing private key and relays only already-signed requests.
2. `INFOMANIAK^FS-BRIDGE` — `/web/T-GPT/T-AI/fs-read-bridge.php` verifies RSA signatures and performs narrowly scoped operations inside `/web/T-LAB/`.
3. `PRIVATE^CONTROL` — `tinfinitytriunity-T/T-private` stores the canonical source/client/documentation and remains the privileged fallback/maintenance rail.
4. `PUBLIC^RUN` — `tinfinitytriunity-T/T` remains the free GitHub-hosted deployment/emergency rail for T-GPT bridge maintenance.
5. Future `SELFHOST^PRIVATE` — a private self-hosted GitHub runner on Infomaniak infrastructure may later handle privileged server maintenance with no GitHub-hosted private minutes.

## Normal data path

`GPT → RSA-signed HTTPS request → Vercel T-LAB^FS control → Infomaniak T-LAB_FS_BRIDGE v2 → /web/T-LAB/... → response → GPT`

No GitHub Actions job is required for ordinary reads or writes.

## Authentication boundary

- The RSA private signing key is held outside GitHub repositories.
- Vercel holds no signing secret; it cannot manufacture a valid filesystem command by itself.
- Infomaniak stores only the corresponding public key in the bridge.
- Signed request validity is 180 seconds.
- Mutating requests use one-time nonces with server-side anti-replay storage.
- Signature canonical form: `TBRIDGE1\n<base64url-json-q>\n<sha256-body>`.
- Vercel rejects unsigned requests before forwarding them.

## Permanent bridge operations

Read:
- `ping`
- `list`
- `stat`
- `read`
- `download`

Write:
- `mkdir`
- `write`

`write` validates declared size and SHA-256, writes a temporary sibling file, then commits by atomic rename. Vercel currently limits a permanent write request to 4,000,000 bytes.

Destructive operations (`delete`, `move`, `rename`) are not exposed by the permanent bridge.

## Write surface

Permanent writes reject hidden/configuration/server-executable targets. The allowlist contains ordinary text, web assets, office files, PDFs, archives, images and data files. PHP, `.htaccess`, `.user.ini`, CGI/shell/server executables are not writable through T-LAB^FS.

## Security boundaries

- Public repository visibility does not grant repository write access.
- The public deployment workflow uses `permissions: contents: read` only.
- Checkout is pinned to a full commit SHA and `persist-credentials: false`.
- The public FTPS credential is `ngw_GPT-PUBLISH`, jailed to the T-GPT publication root.
- The private T-LAB credential is distinct: `ngw_T-LAB-PUBLISH`.
- Server-side executable files and deployment workflows are CODEOWNERS-controlled.
- Symlinks are rejected from the public deployment payload and from bridge path traversal.
- Secrets are never committed to Git.
- No unauthenticated filesystem browser or generic unauthenticated write API is exposed.

## Validated 2026-09-01

- Vercel production project `t-lab-fs-control` deployed READY.
- Signed `ping` through Vercel returned `T-LAB_FS_BRIDGE` v2.
- Signed listing of `DossiersArchives` through Vercel succeeded.
- Signed Vercel POST write to T-LAB succeeded atomically.
- `stat` and `read` returned the exact written size and SHA-256.
- Test artifact was removed after verification.
- Temporary Vercel self-test route was removed from production.

## Fallback rails

### Private fallback

`GPT → T-private → private GitHub Actions → FTPS ngw_T-LAB-PUBLISH → /web/T-LAB/...`

Use for recovery or privileged maintenance. It may consume private GitHub-hosted minutes unless migrated to a self-hosted runner.

### Public deployment/emergency

`GPT → public T repository → public GitHub-hosted runner → FTPS ngw_GPT-PUBLISH → /web/T-GPT/T-AI/`

This rail maintains the bridge and can host narrowly scoped one-shot recovery probes. It is not the normal data path anymore.

## Future privileged rail

`GPT → T-private → GitHub Actions → Infomaniak self-hosted runner → privileged maintenance`

This would combine private source/control with no GitHub-hosted private-minute consumption, subject to having a persistent Infomaniak environment capable of running the GitHub runner daemon.
