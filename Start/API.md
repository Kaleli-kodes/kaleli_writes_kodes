# API outline

All endpoints are under `/api/v1`, require an authenticated session unless explicitly public, return `{ data }` or `{ error: { code, message, fieldErrors? } }`, and enforce business membership.

| Resource | Operations |
|---|---|
| `/auth` | register, login, logout, reset-password, delete-account |
| `/businesses` | create, read/update current business, members/roles |
| `/products` | list, create, update, archive; stock movements |
| `/sales` | list/filter, create, edit/void; receipt |
| `/expenses` | list/filter, create, update, attachment upload |
| `/customers` | CRUD, balances, credit payments |
| `/reports` | sales, expenses, profit, inventory, debt exports |
| `/ai/answer` | authorized read-only question with cited calculation data |
| `/feedback` | submit rating, NPS, AI feedback, bug or feature-request feedback |

Use cursor pagination, idempotency keys for writes/offline sync, Zod validation, and rate limits for auth/AI routes.

All write requests require the configured `Origin` and authenticated business API calls require `X-Business-Id`. Routes are versioned and return the same `data`/`error` envelope.
