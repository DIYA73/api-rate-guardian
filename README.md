## 🛡️ API Rate Guardian

**Production-ready API rate limiting and abuse detection service** built with **Node.js, TypeScript, Redis, Docker, and OpenAPI**.

API Rate Guardian protects backend services from abuse by enforcing request limits, automatically banning abusive IPs, and allowing admin-level bypass routes for trusted access.

---

## ✨ Features

* 🚦 **IP-based rate limiting** (Redis-backed)
* 🚫 **Automatic temporary IP banning** with TTL
* 🛡️ **Security middleware** (Helmet, CORS)
* 🔓 **Admin route bypass**
* 📄 **OpenAPI (Swagger UI) documentation**
* 🐳 **Docker & Docker Compose support**
* 🧪 **Integration tests** with Jest + Supertest
* ⚡ **Production-ready architecture**

---

## 🧱 Tech Stack

* **Backend:** Node.js, Express, TypeScript
* **Cache / Store:** Redis
* **Security:** Helmet, CORS
* **API Docs:** OpenAPI (Swagger UI)
* **Testing:** Jest, Supertest
* **DevOps:** Docker, Docker Compose

---

## 📂 Project Structure

```
src/
├─ config/
│  ├─ middlewares/
│  │  ├─ rateLimiter.ts
│  │  ├─ blockBannedIps.ts
│  │  └─ errorHandler.ts
│  └─ redis.ts
├─ routes/
│  ├─ health.route.ts
│  └─ admin.route.ts
├─ utils/
│  └─ logger.ts
├─ app.ts
└─ server.ts

tests/
└─ rateLimit.test.ts

docs/
└─ openapi.yaml
```

---

## 🚀 Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Start Redis (local)

```bash
redis-server
```

Or with Docker:

```bash
docker compose up
```

---

### 3️⃣ Run the app (dev)

```bash
npm run dev
```

Server runs on:

```
http://localhost:4000
```

---

## 📄 API Documentation

Swagger UI available at:

```
http://localhost:4000/docs
```

---

## 🧪 Run Tests

```bash
npm test
```

---

## 🐳 Docker

Build & run with Docker Compose:

```bash
docker compose up --build
```

---
