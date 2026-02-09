import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route";
import healthRoute from "./routes/health.route";
import adminRoutes from "./routes/admin.route";
import redisRoutes from "./routes/redis.route";
import adminDashboard from "./routes/admin.dashboard";
import { requireAdmin } from "./config/middlewares/requireAdmin";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);
app.use(helmet());

// public
app.use("/", healthRoute);
app.use("/auth", authRoutes);

// protected
app.use("/admin", requireAdmin);
app.use("/admin", adminRoutes);
app.use("/admin/redis", redisRoutes);
app.use("/admin/dashboard", adminDashboard);

export default app;
