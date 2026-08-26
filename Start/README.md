# BizAI Africa — MVP

A local-first, installable MVP for African SMEs. It is intentionally a browser-only prototype: records are stored in the browser on this device, not on a server. It is **not** a replacement for the PostgreSQL/API production architecture described in the documentation.

## Run the browser MVP

Serve this folder from a local HTTP server (service workers do not run from `file://`). For example: `npx serve .` then open the displayed URL. No account is required in this prototype.

## What works

- Business setup with configurable base currency
- Products and automatic stock reduction on sales
- Sales, cash/mobile-money/credit payments, and receipt download
- Expenses, customer balances and credit-payment recording
- Live dashboard, low-stock and debt signals
- CSV report export and a safety-bounded business assistant
- PWA manifest, offline shell, and local transaction queue

## API and PostgreSQL foundation

The repository now includes an Express/PostgreSQL API in `server/`. Copy `.env.example` to `.env`, replace `AUTH_SECRET` with a unique 32+ character value, then run:

```powershell
npm install
npm run db:up
npm run db:migrate
npm run api
```

The API runs at `http://localhost:3001`. It includes registration/login/logout/session cookies, business creation, per-business roles, products, atomic stock-backed sales, a tenant-scoped dashboard, audit logging, rate limits and security headers. Use an API client with `credentials: 'include'` and the selected business UUID in `X-Business-Id` after login.

The existing static UI remains local-first and has not yet been migrated to these API endpoints. Do not present it as a production financial platform until the UI integration, email verification/reset flow, private file storage, observability, deployment and security review are completed.
