# 🚦 API Rate Guardian

**Production-ready rate limiting and abuse detection microservice built with Node.js, TypeScript, Redis, and Docker. Protect your APIs from abuse with distributed rate limiting, IP banning, and real-time monitoring.**

![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat-square&logo=node.js)
![Redis](https://img.shields.io/badge/Redis-7+-red?style=flat-square&logo=redis)
![Docker](https://img.shields.io/badge/Docker-Ready-blue?style=flat-square&logo=docker)
![Live](https://img.shields.io/badge/Live-Render-success?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)

---

## 🌐 Live Demo

**Backend API**: [https://api-rate-guardian-1.onrender.com](https://api-rate-guardian-1.onrender.com)

> **Note:** Free Render instances may sleep when inactive.

**Admin UI**: Run locally or deploy to Vercel (see instructions below)

---

## 📖 Overview

API Rate Guardian is a specialized microservice designed to protect your APIs from abuse, DDoS attacks, and excessive traffic. Built with enterprise-grade patterns, it provides distributed rate limiting using Redis, making it perfect for multi-instance deployments.

### 🎯 Key Features

- **🔐 JWT Authentication**: Secure admin access with token-based auth
- **🚦 Redis-Backed Rate Limiting**: Distributed, accurate rate limiting across all instances
- **🛑 IP Ban System**: Block and unblock abusive IPs with API or UI
- **📊 Real-Time Stats**: Monitor requests, rate limits, and banned IPs
- **🧭 Admin Dashboard**: Web-based control panel for system management
- **⚡ High Performance**: Handles 1000+ req/s with minimal latency
- **🐳 Docker Ready**: Complete containerization with docker-compose
- **🧪 Production Tested**: Live deployment on Render with Redis Cloud

---

## 🛠️ Tech Stack

### Backend
🚀  Node.js 18+ (Runtime)

📘  TypeScript 5+ (Type Safety)

🌐  Express.js (Web Framework)

🔴  Redis 7+ (Rate Limiting Store)

📦  ioredis (Redis Client)

🔐  jsonwebtoken (JWT Auth)

🛡️  helmet (Security Headers)

🔄  express-rate-limit (Base Rate Limiting)
### Frontend (Admin UI)
⚛️  React 18 (UI Library)

🎨  Tailwind CSS (Styling)

📊  Chart.js (Data Visualization)

🔄  Axios (API Client)
### DevOps
🐳  Docker + Docker Compose

☁️  Render (Backend Hosting)

🔴  Redis Cloud (Managed Redis)

📊  Winston (Logging)
---

## 🏗️ Architecture
┌─────────────┐

│   Client    │

└──────┬──────┘

│

▼

┌─────────────────────┐

│   Express API       │

│  (Rate Guardian)    │

├─────────────────────┤

│ JWT Auth Middleware │

│ Rate Limiter        │

│ Admin Routes        │

└──────┬──────────────┘

│

▼

┌─────────────┐

│   Redis     │

│  (ioredis)  │

├─────────────┤

│ • Counters  │

│ • Bans      │

│ • Stats     │

└─────────────┘
**Key Design Decisions:**

- **Redis as Single Source of Truth**: Ensures accurate rate limiting across multiple API instances
- **JWT for Admin Auth**: Stateless authentication for scalability
- **Sliding Window Algorithm**: More accurate than fixed window, prevents burst attacks
- **IP-based Tracking**: Simple and effective for most use cases

---

## ✨ Features Breakdown

### 1. Rate Limiting

**Default Limits:**
- 100 requests per 15 minutes per IP
- Customizable per endpoint
- Sliding window algorithm
- Burst protection

**Example:**
```typescript
app.use('/api/v1/public', rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests, please try again later'
}));
```

### 2. IP Ban System

**Features:**
- Ban IPs permanently or temporarily
- Unban with single API call
- Automatic ban expiry
- Ban list export

**API Endpoints:**
```bash
POST /api/v1/admin/ban
Body: { "ip": "192.168.1.100", "reason": "Abuse detected" }

DELETE /api/v1/admin/ban/192.168.1.100

GET /api/v1/admin/bans
```

### 3. Real-Time Monitoring

**Metrics Tracked:**
- Total requests (last 24h, 7d, 30d)
- Rate limit violations
- Banned IPs count
- Top abusive IPs
- Request distribution by endpoint
- Redis memory usage
- API response times

### 4. Admin Dashboard UI

**Capabilities:**
- View system stats
- Monitor rate limit violations
- Ban/unban IPs manually
- Search request logs
- Export data to CSV

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+
- **Redis** 7+ (local or Redis Cloud)
- **Docker** (optional)

### Option 1: Local Development

```bash
git clone https://github.com/DIYA73/api-rate-guardian.git
cd api-rate-guardian
npm install
```

Create `.env` file:
```env
NODE_ENV=development
PORT=5000
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-super-secret-jwt-key-min-32-characters
JWT_EXPIRES_IN=24h
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=changeme123
DEFAULT_RATE_LIMIT_WINDOW_MS=900000
DEFAULT_RATE_LIMIT_MAX=100
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173
```

Start Redis:
```bash
docker run -d -p 6379:6379 redis:7-alpine
```

Run backend:
```bash
npm run dev
```

Run Admin UI (optional):
```bash
cd admin-ui && npm install && npm run dev
```

### Option 2: Docker Compose

```bash
docker-compose up -d
```

---

## 📁 Project Structure
api-rate-guardian/

├── src/

│   ├── controllers/

│   ├── middleware/

│   ├── routes/

│   ├── services/

│   ├── config/

│   ├── types/

│   ├── utils/

│   ├── app.ts

│   └── server.ts

├── admin-ui/

├── tests/

│   ├── unit/

│   ├── integration/

│   └── e2e/

├── docs/

│   ├── API.md

│   ├── DEPLOYMENT.md

│   └── ARCHITECTURE.md

├── .env.example

├── docker-compose.yml

├── Dockerfile

└── README.md
---

## 🔌 API Endpoints

### Public

```http
GET /api/v1/health
GET /api/v1/public/test
```

### Auth

```http
POST /api/v1/auth/login
Body: { "email": "...", "password": "..." }
```

### Admin (JWT required)

```http
GET    /api/v1/admin/stats
POST   /api/v1/admin/ban
DELETE /api/v1/admin/ban/:ip
GET    /api/v1/admin/bans
GET    /api/v1/admin/redis-stats
```

---

## 📸 Screenshots

### Admin Login
![Admin Login](admin-ui/public/screenshots/login.png)

### Dashboard Overview
![Dashboard](admin-ui/public/screenshots/admin-dashboard.png)

### Redis Statistics
![Redis Stats](admin-ui/public/screenshots/redis-stats.png)

### IP Ban Management
![IP Bans](admin-ui/public/screenshots/ip-bans.png)

---

## 🧪 Testing

### Run Tests

```bash
npm test
npm run test:integration
npm run test:e2e
npm run test:coverage
```

### Test Rate Limiting

```bash
for i in {1..150}; do
  curl http://localhost:5000/api/v1/public/test
done
```

---

## 🐳 Docker Deployment

```bash
docker build -t api-rate-guardian .
docker run -p 5000:5000 --env-file .env api-rate-guardian

# Full stack
docker-compose up -d
```

---

## 📊 Performance

- **Throughput**: 1,000+ requests/second
- **Latency**: <50ms average (p99: <100ms)
- **Memory**: ~100MB base

---

## 🔒 Security

- ✅ JWT authentication for admin routes
- ✅ Helmet.js security headers
- ✅ CORS configuration
- ✅ Input validation
- ✅ Rate limiting
- ✅ IP-based access control
- ✅ Redis password authentication
- ✅ HTTPS enforcement (production)

---

## 🗺️ Roadmap

### ✅ Phase 1: Core (Completed)
- [x] Redis-backed rate limiting
- [x] IP ban system
- [x] JWT authentication
- [x] Admin API
- [x] Docker deployment
- [x] Live production deployment

### 📋 Phase 2: Enhanced Features (Planned)
- [ ] Custom rate limit rules per endpoint
- [ ] Geographic IP tracking
- [ ] Email notifications for abuse
- [ ] API key-based rate limiting
- [ ] Advanced analytics dashboard

### 📋 Phase 3: Enterprise Features (Planned)
- [ ] Multi-tenancy support
- [ ] Custom rule engine
- [ ] Webhook integrations
- [ ] Prometheus metrics export
- [ ] Kubernetes deployment manifests

---

## 📄 License

MIT — see [LICENSE](LICENSE) for details.

---

## 👩‍💻 Author

**DIYA73**
- GitHub: [@DIYA73](https://github.com/DIYA73)
- LinkedIn: [linkedin.com/in/didi-86b00329a](https://www.linkedin.com/in/didi-86b00329a/)
- Dev.to: [dev.to/diya730](https://dev.to/diya730)
- Live Demo: [api-rate-guardian-1.onrender.com](https://api-rate-guardian-1.onrender.com)

---

**🚦 Protecting APIs, one request at a time.**
