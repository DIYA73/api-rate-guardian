# 🚀 API Rate Guardian

A **production-ready backend API** built with **Node.js + TypeScript** for securing services using authentication, rate limiting, and Redis-powered controls.

This project demonstrates **real-world backend engineering**, security patterns, and admin tooling.

---

## ✨ Features

- 🔐 JWT-based Admin Authentication
- 🚦 Redis-backed Rate Limiting
- 🛑 IP Ban / Unban System
- 📊 Redis Monitoring & Stats API
- 🧭 Admin Dashboard Endpoint
- 🐳 Docker & Docker Compose support
- 🧪 Ready for testing & production hardening

---

## 🛠 Tech Stack

- **Node.js**
- **Express**
- **TypeScript**
- **Redis (ioredis)**
- **JWT (jsonwebtoken)**
- **Docker**
- **Thunder Client / REST**

---

## 🧱 Architecture

Client → Express API  
→ JWT Auth Middleware  
→ Rate Limiter (Redis)  
→ Admin Routes (JWT protected)  
→ Redis (stats, bans, counters)

Redis is used as a centralized store to ensure
accurate rate limiting across instances.

---

## 📸 Screenshots

### 🔑 Admin Login
![Login](screenshots/login.png)

### 📊 Redis Stats
![Redis Stats](screenshots/redis-stats.png)

### 🧭 Admin Dashboard
![Admin Dashboard](screenshots/admin-dashboard.png)

---

## 🚀 Live Demo

https://api-rate-guardian-1.onrender.com

> Note: Free Render instances may sleep when inactive.

## 📦 Installation (Local)

---

```bash
git clone https://github.com/DIYA73/api-rate-guardian.git
cd api-rate-guardian
npm install
