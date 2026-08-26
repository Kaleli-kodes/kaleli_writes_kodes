# Deployment

Deploy the web app and API separately behind HTTPS. Provision managed PostgreSQL with PITR backups, private object storage, error monitoring, uptime checks, encrypted secrets, staging and production environments. Apply migrations through CI only after backups. Test a restore regularly. Do not activate country tax or invoice rules until validated from authoritative sources.

## Backups

Run `npm run db:backup` daily from a restricted CI job or scheduler. It creates a PostgreSQL custom-format dump and retains the newest 14 local copies. Production backup storage must be encrypted and copied to a separate restricted bucket. A restore is intentionally manual: provision an isolated database and use `pg_restore --clean --if-exists --no-owner --dbname=... backup.dump`; validate it before any production cutover.

## Production controls

Use distinct database roles: a migration role, a least-privileged API role, and read-only monitoring. Put `COOKIE_SECURE=true`, a HTTPS `APP_URL` and exact `CORS_ORIGIN` in production. Use a managed secrets service, rotate `AUTH_SECRET` deliberately, set database TLS verification, and configure platform-level scheduled backups/PITR in addition to dump retention.
