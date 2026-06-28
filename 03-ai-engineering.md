# 📅 20-Step AI Engineering Roadmap & Checklist

> This section tracks my steply progress and project milestones for AI Engineering.

<details open>
<summary>🔴 Phase 1 — AI Engineering Core &nbsp;|&nbsp; Steps 1–12</summary>

<br>

> This is where you separate yourself from "just another backend dev."

---

**📐 Math Pre-Requisite (do alongside Step 1-2):**

| Topic | Why | Resource | Time |
|-------|-----|----------|------|
| Linear Algebra basics | Embeddings, vectors, similarity | [3Blue1Brown — Essence of Linear Algebra](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab) | 5-6 hr |
| Probability basics | Token sampling, model confidence | [StatQuest — Probability](https://www.youtube.com/watch?v=uzkc-qNVoOk) | 2-3 hr |
| Softmax, Cross-entropy | Understanding model output | [StatQuest — Neural Networks](https://www.youtube.com/watch?v=IN2XmBhILt4) | 2 hr |
| Attention (intuition) | Transformer understanding | [3Blue1Brown — Attention](https://www.youtube.com/watch?v=eMlx5fFNoYc) | 1 hr |

> You don't need to do research-level math. You're an AI Engineer, not a researcher. Visual intuition > formula memorization.

---

<details>
<summary>Steps 1–2 · LLM Fundamentals</summary>

<br>

> Understand the engine before you drive it. Every cost and latency decision starts here.

- [ ] Tokens, tokenization, context windows — how they map to cost
- [ ] Model families: Claude, GPT, Gemini, Llama, Mistral, Qwen, DeepSeek
- [ ] Closed vs open-weight — when each makes sense
- [ ] Sampling parameters: temperature, top_p, top_k, frequency/presence penalty
- [ ] Streaming vs non-streaming responses
- [ ] Structured outputs — JSON mode, schema-constrained generation
- [ ] Multimodal inputs overview (vision, audio, PDFs)
- [ ] Reasoning models vs standard models
- [ ] OpenAI API — chat completions, basic setup
- [ ] Anthropic API — Messages API, system prompts
- [ ] Token counting — reduce usage before you build
- [ ] API key secure storage (never hardcode, never commit)
- [ ] **Project:** AI chatbot — terminal interface + API endpoint

**Resource:** [Andrej Karpathy — "Intro to LLMs"](https://www.youtube.com/watch?v=zjkBMFhNj_g) (free, 1hr)
**Resource:** [OpenAI API Docs](https://platform.openai.com/docs) · [Anthropic API Docs](https://docs.anthropic.com/)

</details>

<details>
<summary>Steps 3–4 · Prompt Engineering + Context Engineering</summary>

<br>

> Prompts are code. Version them, test them, improve them. Your English Literature background is a massive advantage here.

- [ ] System/user/assistant message design
- [ ] Few-shot examples, role prompting, persona design
- [ ] Chain-of-thought prompting — step-by-step reasoning
- [ ] ReAct pattern — reasoning + acting combined
- [ ] Reflection patterns — self-critique loops
- [ ] XML/Markdown structuring for parseable output
- [ ] Prompt templating and variable injection
- [ ] Prompt versioning — treat prompts like code
- [ ] Prompt injection defense at the prompt layer
- [ ] Context window budgeting — system prompt, history, tools, retrieval
- [ ] Conversation summarization and rolling memory
- [ ] Prompt caching strategies (Anthropic prefix caching, OpenAI caching)
- [ ] "Lost in the middle" problem
- [ ] **Project:** AI email assistant — reads email → drafts professional reply

**Resource:** [Anthropic Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering) (free, best)
**Resource:** [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) (free)

</details>

<details>
<summary>Steps 5–6 · Tool Use + Function Calling + MCP</summary>

<br>

> The AI decides when to call your code. Design tools it can use reliably.

- [ ] Tool/function schema design — clear names, descriptions, typed params
- [ ] OpenAI function calling — mechanics + error handling
- [ ] Anthropic tool use — mechanics + error handling
- [ ] Parallel tool calling — multiple tools in one turn
- [ ] Model Context Protocol (MCP) — servers, clients, resources, prompts
- [ ] API wrappers as tools — wrap any REST API for LLM use
- [ ] Tool result formatting for LLM consumption
- [ ] Error handling when a tool fails — retry, fallback, inform
- [ ] **Project:** AI assistant — searches your PostgreSQL DB + answers natural language questions

**Resource:** [Anthropic Tool Use Docs](https://docs.anthropic.com/en/docs/build-with-claude/tool-use) (free)
**Resource:** [MCP Specification](https://modelcontextprotocol.io/) (free)

</details>

<details>
<summary>Steps 7–8 · Embedding Models + Semantic Search</summary>

<br>

> The foundation of all RAG, semantic search, and recommendation systems.

- [ ] What embeddings are — geometric intuition (cosine similarity)
- [ ] Local embeddings: Sentence-Transformers (`all-MiniLM-L6-v2`) — no API, no cost
- [ ] Paid APIs: OpenAI `text-embedding-3-small`, Voyage AI — when worth it
- [ ] Reranker models (Cohere, BGE) — retrieval + reranking > retrieval alone
- [ ] Vector databases: pgvector (PostgreSQL), Chroma (local)
- [ ] Hybrid search — BM25 keyword + vector similarity + RRF
- [ ] Metadata filtering and structured retrieval
- [ ] **Project:** Semantic document search engine — fully local, no API key

**Resource:** [Sentence-Transformers Docs](https://www.sbert.net/) (free)
**Cloud:** Google Colab free T4 GPU for embedding models

</details>

<details>
<summary>Steps 9–10 · RAG (Retrieval-Augmented Generation)</summary>

<br>

> RAG is how you give an LLM access to your data without fine-tuning.

**Architecture & Chunking**
- [ ] RAG architecture — Embed → Store → Retrieve → Generate
- [ ] Chunking strategies: fixed-size, semantic, structural
- [ ] Document parsing — Unstructured, LlamaParse, Docling

**Retrieval Quality**
- [ ] Query rewriting and expansion
- [ ] HyDE (Hypothetical Document Embeddings)
- [ ] Multi-hop retrieval — chain multiple steps for complex questions
- [ ] Reranking — always rerank after retrieval

**Security & Evaluation**
- [ ] RAG security — retrieved content injection attack
- [ ] RAG metrics: faithfulness, answer relevance, context precision/recall
- [ ] Ragas framework — automated RAG evaluation

**Projects**
- [ ] **Project 1:** "Chat with your PDF" — Colab-hosted LLM + local embeddings
- [ ] **Project 2:** Company knowledge base Q&A bot

**Resource:** [LangChain RAG Tutorial](https://python.langchain.com/docs/tutorials/rag/) (free)
**Cloud:** Google Colab for Llama 3 inference · Supabase for pgvector (free tier)

</details>

<details>
<summary>Steps 11–12 · Agents + LangChain + LangGraph</summary>

<br>

> Agents are the future of automation. Learn to build them reliably.

**LangChain**
- [ ] Chains and Runnables — LCEL pattern
- [ ] Memory — conversation history, buffer, summary
- [ ] Document loaders and text splitters
- [ ] Retrieval chains — combine with your RAG pipeline

**LangGraph**
- [ ] Why graphs over linear chains — branching, loops, state
- [ ] Nodes, edges, conditional edges
- [ ] State machines and workflow graphs
- [ ] Human-in-the-loop checkpoints — pause and wait for approval

**Agent Patterns**
- [ ] ReAct (Reasoning + Acting) — the core loop
- [ ] Plan-Execute — plan first, then execute
- [ ] Reflexion — reflect on failure, retry
- [ ] Single-agent vs multi-agent orchestration
- [ ] Agent security — tool misuse prevention

- [ ] **Project:** Research agent — web search + summarize findings

**Resource:** [LangGraph Course — LangChain Academy](https://academy.langchain.com/) (free)
**Resource:** [DeepLearning.AI — AI Agents in LangGraph](https://www.deeplearning.ai/short-courses/) (free)

</details>

</details>

---

<details open>
<summary>⚫ Phase 2 — Advanced AI + Production &nbsp;|&nbsp; Steps 13–20</summary>

<br>

> Production-grade AI systems with security, cost optimization, and evaluation.
>
> **💰 Parallel Freelance Track:** During this sprint, spend weekends (3-4 hr/step) learning n8n automation. This is your fastest path to freelance income — n8n gigs on Upwork are plentiful and less competitive.

<details>
<summary>Steps 13–14 · AI Security + Guardrails + AI-Powered API</summary>

<br>

> Every AI feature is an attack surface. Build defenses from the start.

**Prompt Injection**
- [ ] Direct prompt injection — user overwrites system prompt
- [ ] Indirect prompt injection — injected content from documents/tools
- [ ] Instruction hierarchy — system > user > tool results
- [ ] Guardrails in system prompt
- [ ] Input sanitization before model

**Data & Content Safety**
- [ ] Never store sensitive data in system prompt
- [ ] Output filtering, PII scrubbing
- [ ] Content moderation — OpenAI Moderation API, Llama Guard
- [ ] NeMo Guardrails, Guardrails AI — output validation

**API Integration**
- [ ] Wrap LLM calls in Express/FastAPI endpoints
- [ ] Per-user rate limiting for AI calls
- [ ] Redis — response caching to reduce token cost
- [ ] Cost tracking per user/session
- [ ] Per-user token quota + anomaly detection

- [ ] **Project:** AI API — auth + usage tracking + full security layer + deployed

</details>

<details>
<summary>Steps 15–16 · Cost Optimization + LLMOps</summary>

<br>

> The engineer who controls cost controls the business case for AI.

**Cost Optimization**
- [ ] Model cascading — route cheap → expensive based on complexity
- [ ] Semantic caching — cache by meaning, not exact text
- [ ] Batch APIs for async tasks — 50% cost reduction
- [ ] Model gateways: LiteLLM, OpenRouter — one interface, many models
- [ ] Token budgeting per feature

**LLMOps & Observability**
- [ ] Langfuse — open-source LLM tracing (input, output, latency, cost)
- [ ] Token/cost/latency tracking per request and per user
- [ ] Prompt and agent versioning in production
- [ ] Offline evals — golden datasets and regression tests
- [ ] LLM-as-judge — score model output with another model
- [ ] Feedback loops — user feedback → eval datasets

- [ ] **Exercise:** Optimize Step 13-14 API — reduce cost by 40% without quality loss

</details>

<details>
<summary>Steps 17–18 · Evaluation Engineering + Multimodal</summary>

<br>

> Evals prove your system works. Ship nothing without them.

**Evaluation**
- [ ] Golden datasets — 50-100 labeled pairs per feature
- [ ] Regression tests for prompts
- [ ] Promptfoo — prompt regression testing in CI
- [ ] RAG evals: faithfulness, relevance, precision, recall (Ragas)
- [ ] Agent evals: task success, trajectory, tool-call accuracy
- [ ] Red teaming — attack your own system

**Multimodal**
- [ ] Vision models — image understanding (GPT-4o, Claude, Gemini)
- [ ] OCR-via-LLM — structured data from document images
- [ ] Document AI — invoices, receipts, forms
- [ ] STT overview — Whisper (local), Deepgram

- [ ] **Project:** Multimodal document processor — invoice image → structured data → DB

</details>

<details>
<summary>Steps 19–20 · Capstone Agent Project + Portfolio</summary>

<br>

- [ ] Business workflow agent — receives task → plans → executes with tools
- [ ] Long-running agent patterns + durable execution
- [ ] Error recovery, retries, self-correction loops
- [ ] Human-in-the-loop gates
- [ ] **Capstone Project:** End-to-end AI-powered business tool
- [ ] Portfolio update — 9 pinned projects, case studies
- [ ] LinkedIn rebrand → "Backend & AI Engineer"

</details>

<details>
<summary>💰 Parallel Track · n8n Automation for Freelance Income (Weekends, Steps 13–20)</summary>

<br>

> This runs on weekends (3-4 hr/step) alongside Phase 2. Goal: land your first freelance gig.

**Step 13-14 Weekends · n8n Basics**
- [ ] Self-host n8n (Docker — you already know Docker by now)
- [ ] Nodes, Triggers, Webhooks
- [ ] HTTP Request node — calling your own API
- [ ] Credential management
- [ ] **Workflow 1:** Email → AI summary → Slack notification

**Step 15-16 Weekends · Business Automation Projects**
- [ ] **Workflow 2:** Google Sheet → AI process → Email report
- [ ] **Project:** Invoice PDF → AI extract data → DB store
- [ ] **Project:** Customer support bot (FAQ → AI → escalate)

**Step 17-18 Weekends · Freelance Launch**
- [ ] Upwork gig: "I will build smart automation workflows with n8n + AI"
- [ ] Fiverr gig: "AI-powered business automation — no monthly cost"
- [ ] Build 2-3 demo workflows to showcase
- [ ] Pricing strategy — per project ($200-500 for small automations)
- [ ] Proposal templates: "Your data stays private, runs on your server, zero recurring cost"

> **Why n8n is fast income:** Businesses need automation NOW. They don't care about your degree — they care about results. One invoice-processing automation can earn $300-500.

</details>

</details>

---
