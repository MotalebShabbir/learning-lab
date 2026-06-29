# 🛠️ DevOps, Cloud & System Design

> Start this track after finishing Backend + AI Engineering.
> As an AI Engineer, knowing these is essential to deploy your apps in production.

---

<details>
<summary>🟢 Phase 1 — Linux & Server Basics &nbsp;|&nbsp; Steps 1–2</summary>

<br>

> When you deploy to the cloud, it's a Linux server. If you don't know this, you'll get stuck in production.

<details>
<summary>Step 1 · Linux Command Line</summary>

<br>

- [ ] File system navigation — ls, cd, pwd, find, tree
- [ ] File operations — cp, mv, rm, chmod, chown
- [ ] Text processing — cat, grep, head, tail, wc, awk (basics)
- [ ] Process management — ps, top, htop, kill
- [ ] Package management — apt (Ubuntu/Debian)
- [ ] Environment variables — export, .bashrc, .env files
- [ ] SSH — key generation, ssh-copy-id, config file
- [ ] **Exercise:** SSH into a remote server, create a user, set up SSH keys

**Resource:** [Linux Journey](https://linuxjourney.com/) (free)
**Resource:** [The Missing Semester — MIT](https://missing.csail.mit.edu/) (free, excellent)

</details>

<details>
<summary>Step 2 · Nginx & Reverse Proxy</summary>

<br>

- [ ] What is a reverse proxy — why you need one in front of Node.js/FastAPI
- [ ] Nginx installation & basic config
- [ ] Reverse proxy setup — proxy_pass to your app
- [ ] SSL/TLS with Let's Encrypt (certbot) — free HTTPS
- [ ] Nginx for static files
- [ ] Basic security headers in Nginx
- [ ] **Exercise:** Deploy an app behind Nginx with SSL on a VPS

**Resource:** [Nginx Crash Course — Traversy Media](https://www.youtube.com/watch?v=7VAI73roXaY) (free)

</details>

</details>

---

<details>
<summary>🟡 Phase 2 — Docker Deep + CI/CD &nbsp;|&nbsp; Steps 3–5</summary>

<br>

> You learned Docker basics in 02-backend-engineering.md. Here you will learn production-level Docker.

<details>
<summary>Step 3 · Docker Production Patterns</summary>

<br>

- [ ] Multi-stage builds — smaller, faster images
- [ ] Docker networking — bridge, host, custom networks
- [ ] Docker volumes — persistent data, bind mounts
- [ ] Docker security — non-root user, read-only filesystem, no latest tag
- [ ] .dockerignore — keep images clean
- [ ] Docker logs — `docker logs`, log drivers
- [ ] **Exercise:** Optimize your Blog API Docker image (reduce size by 50%+)

</details>

<details>
<summary>Step 4 · docker-compose Production</summary>

<br>

- [ ] Multi-service setup — app + DB + Redis + Nginx
- [ ] Health checks in compose
- [ ] Restart policies — always, on-failure, unless-stopped
- [ ] Environment-specific compose files (dev vs production)
- [ ] docker-compose for local development workflow
- [ ] **Project:** Full production docker-compose — app + PostgreSQL + Redis + Nginx + SSL

</details>

<details>
<summary>Step 5 · CI/CD Deep Dive</summary>

<br>

- [ ] GitHub Actions — workflow syntax, triggers, jobs, steps
- [ ] Matrix builds — test across Node.js/Python versions
- [ ] Caching — npm/pip cache for faster builds
- [ ] Secrets management in GitHub Actions
- [ ] Pipeline: lint → test → build → deploy (automated)
- [ ] Branch protection rules — no direct push to main
- [ ] Deploy on push — auto-deploy to staging/production
- [ ] **Project:** Full CI/CD pipeline for your Blog API

**Resource:** [GitHub Actions Docs](https://docs.github.com/en/actions) (free)

</details>

</details>

---

<details>
<summary>🔵 Phase 3 — Cloud Fundamentals &nbsp;|&nbsp; Steps 6–8</summary>

<br>

> Understanding Cloud = higher chances of getting a job. But you don't have to learn everything — just enough to deploy.

<details>
<summary>Step 6 · Cloud Concepts</summary>

<br>

- [ ] IaaS vs PaaS vs SaaS — what they are (EC2 vs Heroku vs Gmail)
- [ ] Regions & Availability Zones
- [ ] Cloud billing — how costs add up, set up billing alerts
- [ ] Free tier options — AWS (12 months), GCP ($300 credit), DigitalOcean ($200 credit)

</details>

<details>
<summary>Step 7 · VPS Deployment (Practical First)</summary>

<br>

> Deploy to a cheap VPS before learning AWS. DigitalOcean/Hetzner cost $4-5 a month.

- [ ] Rent a VPS — DigitalOcean Droplet or Hetzner Cloud
- [ ] Server setup — user, firewall (ufw), SSH hardening
- [ ] Deploy with Docker + Nginx + SSL (All of Step 2 combined)
- [ ] Connect a domain — DNS A record
- [ ] Basic server monitoring — uptime, disk, memory
- [ ] **Project:** Deploy your Blog API + AI project live — real domain, real SSL

**Resource:** [DigitalOcean Tutorials](https://www.digitalocean.com/community/tutorials) (free, excellent)

</details>

<details>
<summary>Step 8 · AWS Essentials (Free Tier)</summary>

<br>

> No need to learn all AWS services. Just the 5-6 most used ones.

- [ ] IAM — users, roles, policies (security first)
- [ ] EC2 — launch instance, security groups, key pairs
- [ ] S3 — file storage, bucket policies, pre-signed URLs
- [ ] RDS — managed PostgreSQL (vs self-hosted)
- [ ] Lambda — serverless functions (AI API endpoint as Lambda — cost-effective)
- [ ] CloudWatch basics — logs and alarms
- [ ] **Exercise:** Deploy a FastAPI app on EC2 with RDS PostgreSQL

**Resource:** [AWS Free Tier](https://aws.amazon.com/free/) (12 months free)
**Resource:** [FreeCodeCamp AWS Course](https://www.youtube.com/watch?v=3hLmDS179YE) (free, 5hr)

> **💡 Alternative:** If AWS seems too complex, stick with DigitalOcean/Hetzner. Many startups use them. You can learn AWS later.

</details>

</details>

---

<details>
<summary>🟠 Phase 4 — Monitoring & Observability &nbsp;|&nbsp; Steps 9–10</summary>

<br>

> How will you know if something breaks in production? Without monitoring, you won't.

<details>
<summary>Step 9 · Application Monitoring</summary>

<br>

- [ ] Health check endpoints — GET /health, GET /ready
- [ ] Structured logging — JSON logs with request ID, user ID, timestamp
- [ ] Log aggregation basics — centralized logs vs scattered files
- [ ] Uptime monitoring — Uptime Kuma (self-hosted, free) or Betterstack
- [ ] Error tracking — Sentry (free tier) — automatic error alerts
- [ ] **Exercise:** Add health checks + Sentry to your deployed project

</details>

<details>
<summary>Step 10 · Metrics & Alerts</summary>

<br>

- [ ] Key metrics — response time (p95/p99), error rate, uptime percentage
- [ ] Application-level metrics — request count, active users, AI token usage
- [ ] Alerting — get notified when things break (Sentry, Uptime Kuma, Discord webhook)
- [ ] Incident response basics — what to do when production is down
- [ ] **Exercise:** Set up alerts for your deployed AI API — downtime + error spike + high token usage

</details>

</details>

---

<details>
<summary>⚫ Phase 5 — System Design &nbsp;|&nbsp; Steps 11–14</summary>

<br>

> System Design will be asked in interviews. And you'll need this to scale your AI products.

<details>
<summary>Steps 11–12 · System Design Fundamentals</summary>

<br>

- [ ] Scalability — vertical vs horizontal
- [ ] Load balancers — what they do, where they sit
- [ ] CAP theorem
- [ ] Caching strategies — CDN, Redis, application-level
- [ ] Message Queues — BullMQ, RabbitMQ (concept + when to use)
- [ ] Database scaling — read replicas, connection pooling
- [ ] WebSockets vs SSE vs Long Polling — when to use which
- [ ] Rate limiting patterns — token bucket, sliding window
- [ ] **Practice:** Design a URL shortener at scale

**Resource:** [System Design Primer — GitHub](https://github.com/donnemartin/system-design-primer) (free)

</details>

<details>
<summary>Steps 13–14 · AI-Specific Architecture</summary>

<br>

> You won't find these in regular system design courses. This is your unique advantage as an AI Engineer.

- [ ] Streaming LLM output (SSE / WebSocket) — user experience
- [ ] Background jobs for agent runs — never run 30s agents in HTTP requests
- [ ] Fallback chains across AI providers — OpenAI down? → Anthropic → Gemini
- [ ] AI response caching — semantic cache vs exact cache
- [ ] Token budget management at scale — per-user, per-feature limits
- [ ] Queue-based AI processing — decouple request from response
- [ ] **Practice:** Design an AI chatbot platform at scale (multi-tenant, cost-optimized)
- [ ] **Practice:** Design a RAG pipeline for 1M+ documents

</details>

</details>

---

<details>
<summary>📎 Resources</summary>

<br>

| Topic | Resource |
|-------|----------|
| Linux | [Linux Journey](https://linuxjourney.com/) |
| Missing CS Skills | [The Missing Semester — MIT](https://missing.csail.mit.edu/) |
| Nginx | [Nginx Docs](https://nginx.org/en/docs/) |
| Docker | [Docker Docs](https://docs.docker.com/) |
| GitHub Actions | [GitHub Actions Docs](https://docs.github.com/en/actions) |
| AWS | [AWS Free Tier](https://aws.amazon.com/free/) |
| VPS Deploy | [DigitalOcean Tutorials](https://www.digitalocean.com/community/tutorials) |
| System Design | [System Design Primer](https://github.com/donnemartin/system-design-primer) |
| Monitoring | [Uptime Kuma](https://github.com/louislam/uptime-kuma) |

</details>

---
