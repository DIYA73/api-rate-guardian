# API Rate Guardian 🛡️

Production-ready API rate limiting and abuse detection service built with **Node.js**, **TypeScript**, **Redis**, **Docker**, and **OpenAPI**.

Designed to protect APIs from abuse by enforcing request limits, temporarily banning abusive IPs, and providing admin-level bypass routes.

---

## ✨ Features

- 🚦 IP-based rate limiting (Redis backed)
- 🚫 Automatic temporary IP banning
- 🛡️ Security middleware (Helmet, CORS)
- 🔓 Admin route bypass
- 📄 OpenAPI (Swagger) documentation
- 🐳 Docker & Docker Compose support
- 🧪 Jest + Supertest integration tests
- ⚡ Production-ready architecture

---

## 🧱 Tech Stack

- **Backend:** Node.js, Express, TypeScript  
- **Cache / Store:** Redis  
- **Security:** Helmet, CORS  
- **Docs:** OpenAPI (Swagger UI)  
- **Testing:** Jest, Supertest  
- **DevOps:** Docker, Docker Compose  

---

## 📂 Project Structure

src/
├─ config/
│ ├─ middlewares/
│ │ ├─ rateLimiter.ts
│ │ ├─ blockBannedIps.ts
│ │ └─ errorHandler.ts
│ └─ redis.ts
├─ routes/
│ ├─ health.route.ts
│ └─ admin.route.ts
├─ utils/
│ └─ logger.ts
├─ app.ts
└─ server.ts

tests/
└─ rateLimit.test.ts

docs/
└─ openapi.yaml  

---
