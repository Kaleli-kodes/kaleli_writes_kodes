# Data model / ERD

```text
users --< business_members >-- businesses --< products --< inventory_movements
                                  |             |
                                  |             `--< sale_items >-- sales --< payments
                                  |                                  |
                                  |                                  `-- customers
                                  |--< expenses >-- suppliers
                                  |--< invoices --< invoice_items
                                  `--< audit_logs, notifications, ai_conversations
```

All tenant-owned tables have a non-null `business_id`, UUID primary key, `created_at`, and indexes beginning with `business_id`. Money uses PostgreSQL `numeric(18,2)`, never float. `sales.total >= 0`, `sale_items.quantity > 0`, and foreign keys prevent orphaned records. Enable RLS policies based on an authenticated `app.business_id` setting; application authorization remains mandatory.
