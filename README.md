# 🚦 API Rate Guardian

**Production-ready rate limiting microservice — Redis-backed, JWT auth, IP ban system, real-time monitoring. Live on Render.**

![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat-square&logo=node.js)
![Redis](https://img.shields.io/badge/Redis-7+-red?style=flat-square&logo=redis)
![Docker](https://img.shields.io/badge/Docker-Ready-blue?style=flat-square&logo=docker)
![Live](https://img.shields.io/badge/Live-Render-success?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)

## 🌐 Live Demo

**API**: [https://api-rate-guardian-1.onrender.com](https://api-rate-guardian-1.onrender.com)

> Free Render instances sleep when inactive — first request may take ~30s.

**Admin UI**: Run locally or deploy to Vercel.

---

## 🎯 Features

- **Redis-backed rate limiting** — sliding window algorithm, accurate across multiple instances
- **IP ban system** — permanent or timed bans, auto-expiry, ban list export
- **JWT admin auth** — stateless, secure admin routes
- **Real-time dashboard** — live stats, rate limit violations, Redis health
- **Docker ready** — full docker-compose with Redis included
- **High performance** — 1000+ req/s, less than 50ms average latency

---

## 🛠 Tech Stack

| Layer | Tech |
|---|---|
| Runtime | Node.js 18+ · TypeScript 5+ |
| Framework | Express.js |
| Rate limiting store | Redis 7+ via ioredis |
| Auth | JWT (jsonwebtoken) |
| Security | Helmet.js · CORS |
| Admin UI | React 18 · Tailwind · Chart.js |
| DevOps | Docker · docker-compose · Render |

---

## 🚀 Quick Start

### Option 1: Docker Compose (recommended)

```bash
git clone https://github.com/DIYA73/api-rate-guardian.git
cd api-rate-guardian
cp .env.example .env
docker-compose up -d
```

### Option 2: Local

```bash
npm install
docker run -d -p 6379:6379 redis:7-alpine
npm run dev
```

### Environment variables

```env
NODE_ENV=development
PORT=5000
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-secret-min-32-chars
JWT_EXPIRES_IN=24h
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=changeme123
DEFAULT_RATE_LIMIT_WINDOW_MS=900000
DEFAULT_RATE_LIMIT_MAX=100
ALLOWED_ORIGINS=http://localhost:3000
```

---

## 🔌 API Reference

### Public

```http
GET /api/v1/health
GET /api/v1/public/test
```

### Auth

```http
POST /api/v1/auth/login
{ "email": "...", "password": "..." }
```

### Admin (Bearer token required)

```http
GET    /api/v1/admin/stats
POST   /api/v1/admin/ban
DELETE /api/v1/admin/ban/:ip
GET    /api/v1/admin/bans
GET    /api/v1/admin/redis-stats
```

---

## 🔒 Security

- JWT authentication on all admin routes
- Helmet.js security headers
- CORS allowlist
- Input validation
- Redis password auth (production)
- HTTPS enforced on Render

---

## 🗺 Roadmap

### Phase 1 — Complete
- Redis-backed rate limiting
- IP ban system
- JWT admin API
- Real-time dashboard
- Docker deployment
- Live production on Render

### Phase 2 — Planned
- Custom rate limit rules per endpoint
- Email notifications for abuse
- API key-based limiting
- Geographic IP tracking
- Advanced analytics

---

## 📄 License

MIT — see [LICENSE](LICENSE).

---

## 👩‍💻 Author

**Diya Taib Ismahil**
- GitHub: [@DIYA73](https://github.com/DIYA73)
- LinkedIn: [didi-86b00329a](https://linkedin.com/in/didi-86b00329a)
- Dev.to: [diya730](https://dev.to/diya730)
- X: [@Diya_555696](https://x.com/Diya_555696)
- Live: [api-rate-guardian-1.onrender.com](https://api-rate-guardian-1.onrender.com)

---

**🚦 Protecting APIs, one request at a time.**
