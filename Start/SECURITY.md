# Security architecture

- Argon2id password hashes; verified email and reset-token expiry.
- TLS, secure HttpOnly cookies, CSRF tokens for state-changing cookie requests, CSP and secure headers.
- Per-business authorization plus PostgreSQL RLS; immutable audit records for sensitive changes.
- Parameterized ORM/repositories, server validation, output encoding, rate limits and generic client errors.
- Receipt uploads: allow-list MIME/content signatures, size limits, randomized keys, malware scanning, private object storage and time-limited authorized URLs.
- Secrets reside only in managed environment variables. AI receives minimum necessary, sanitized tool results and never arbitrary SQL.

## Implemented API controls

The API uses Argon2id password hashing, signed/expiring HttpOnly cookies, origin-restricted credentialed CORS, Helmet headers, JSON body limits, auth rate limits, Zod validation, parameterized queries and opaque errors. PostgreSQL RLS predicates apply the authenticated user context on each transaction; API role checks provide Owner/Manager/Employee authorization. Sales use one transaction with a row lock, inventory decrement, immutable sale line, audit record and client idempotency key.
