# Product Requirements Document

## Problem and outcome
Micro and small businesses often record cash, mobile-money and credit activity across notebooks, messages and memory. BizAI Africa makes one action—recording a sale, expense or payment—immediately useful through organized records and understandable business signals.

## MVP users
An owner/manager of a retail, food, service, agriculture or informal business; initially Kenya-configured but country-neutral at the core.

## Must-have journeys
Create a business; add a product; record cash/mobile-money/credit sale; stock decreases; record expense; view revenue/profit estimate; record debt repayment; export records; ask a scoped data question. Money uses base currency and decimals. The UI is mobile-first and has no accounting vocabulary requirement.

## Explicit MVP limits
The browser MVP has no user account, server, live payment, OCR, upload, email, tax compliance, legal invoice claim, exchange conversion, or hosted AI. Those require the production services defined in architecture documentation.

## Acceptance criteria
For every saved sale, quantity decreases once, total equals `quantity × price − discount`, historical cost is retained, and a credit sale contributes to the selected customer balance. A payment cannot take the balance below zero. Dashboard figures derive only from saved records.
