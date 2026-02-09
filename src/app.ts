import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";


/* ROUTES */
import authRoutes from "./routes/auth.route";
import healthRoute from "./routes/health.route";
import adminRoutes from "./routes/admin.route";
import redisRoutes from "./routes/redis.route";
import adminDashboard from "./routes/admin.dashboard";

/* MIDDLEWARE */
import { requireAdmin } from "./config/middlewares/requireAdmin";

const app = express();

/* ───────────── GLOBAL MIDDLEWARE ───────────── */
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3001", // frontend
    credentials: true,               // 🔥 REQUIRED for cookies
  })
);

/* ───────────── PUBLIC ROUTES ───────────── */
app.use("/", healthRoute);
app.use("/auth", authRoutes);

/* ───────────── 🔒 ADMIN ROUTES (COOKIE JWT) ───────────── */
app.use("/admin", requireAdmin);      // runs ONCE
app.use("/admin", adminRoutes);
app.use("/admin/redis", redisRoutes);
app.use("/admin/dashboard", adminDashboard);

export default app;
