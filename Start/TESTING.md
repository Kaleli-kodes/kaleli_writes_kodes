# Testing plan

Unit test decimal totals, cost/profit, inventory movement, balance reductions, permissions, and idempotency. Integration-test auth, business isolation, sales-to-stock updates, and AI tool scoping. E2E: register → business → product → sale → dashboard; then credit sale → payment → reduced balance; and cross-tenant access is denied. CI runs lint, typecheck, unit/integration tests and production build.

Current automated coverage is deliberately reported in `LAUNCH_READINESS.md`; do not infer that planned integration/E2E tests have run.
