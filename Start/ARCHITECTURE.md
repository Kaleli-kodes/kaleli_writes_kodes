# Architecture

## MVP implementation
The supplied app is a static PWA: `app.js` holds a versioned local data store in IndexedDB when available, falling back to localStorage. A service worker caches the app shell. Writes are assigned UUIDs and queued while offline; duplicate IDs are ignored by the local reducer.

## Production target
`Next.js client -> /api/v1 TypeScript service -> PostgreSQL` with S3-compatible private object storage. Authentication issues secure, HttpOnly, SameSite cookies. Every request obtains a business membership and passes `business_id` to repository methods. PostgreSQL row-level security is defense in depth.

The AI adapter receives an authenticated business scope and may call allow-listed, parameterized functions (`getSales`, `getExpenses`, `getInventory`, `getCustomerBalances`). It cannot execute SQL or mutate records. Financial computations are deterministic decimal calculations in the service.

## Country configuration
Countries, currencies, tax rules, document requirements, telephone validation and payment-provider adapters are configuration records, never core constants. Kenya/KES is only a setup default.
