# AI behavior

The production service uses an `AIProvider` interface so models can be swapped. The AI can only call tenant-scoped read tools. A policy layer labels arithmetic as **calculated from records** and narrative as **interpretation**. Missing records produce an insufficiency response. Natural-language entry produces a draft and always requires user confirmation before a write.

This MVP implements the same boundary without a model: a small parser and deterministic summaries for sales, expenses, debt, and stock questions.
