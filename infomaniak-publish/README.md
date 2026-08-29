# GPT → GitHub → Infomaniak publisher

This directory is the isolated publication bridge used to deploy selected web pages from GPT/GitHub to an Infomaniak hosting directory.

## Safety model

- Only files placed under `infomaniak-publish/site/` are eligible for deployment.
- The workflow never deploys the rest of the repository.
- Deployment uses explicit FTPS with TLS certificate verification.
- Credentials are never stored in the repository.
- The workflow refuses `REMOTE_DIR=/` and `REMOTE_DIR=.` to reduce the risk of publishing over the hosting root.
- Remote deletion is intentionally disabled: publication updates/adds files but does not delete unrelated remote files.
- Git history remains the rollback/audit trail for published source files.

## GitHub secrets required

In repository `tinfinitytriunity-T/T`, add these secrets under:

`Settings → Secrets and variables → Actions → Repository secrets`

1. `INFOMANIAK_FTP_HOST`
   - FTPS/FTP server hostname shown by Infomaniak for the hosting.
2. `INFOMANIAK_FTP_USER`
   - Dedicated FTP account, ideally restricted to the destination directory.
3. `INFOMANIAK_FTP_PASSWORD`
   - Password for that dedicated FTP account.
4. `INFOMANIAK_REMOTE_DIR`
   - Dedicated remote subdirectory to receive these files.
   - Do not use `/` or `.`.

Do not place the password in a chat, source file, issue, README, commit, or workflow.

## Recommended Infomaniak account

Create a dedicated FTP account rather than using the main hosting credentials. Restrict it to the smallest possible web directory that GPT is allowed to publish to.

Example conceptual destination:

`/web/gpt-publish/`

The exact path must be taken from the Infomaniak hosting configuration; do not guess it.

## Publication flow

Once the four GitHub secrets are configured:

1. GPT creates or updates files under `infomaniak-publish/site/`.
2. A push to `main` affecting that directory triggers `.github/workflows/deploy-infomaniak.yml`.
3. GitHub Actions connects to Infomaniak over explicit FTPS.
4. Files are mirrored from `infomaniak-publish/site/` to the configured remote directory.
5. Existing unrelated remote files are not deleted.

A manual `workflow_dispatch` trigger is also available in GitHub Actions.

## First test

Do not create the first file in `site/` until the four secrets are configured.

The first publication should be a harmless test page, for example:

`infomaniak-publish/site/index.html`

After the FTPS deployment succeeds, verify the corresponding public URL in a browser. Only then use the bridge for real pages.

## Operating rule for GPT

When asked to publish through this bridge, GPT should modify only `infomaniak-publish/site/` unless the user explicitly requests a change to the deployment infrastructure.
