import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import { rateLimiter } from "./config/middlewares/rateLimiter";
import { blockBannedIps } from "./config/middlewares/blockBannedIps";
import { errorHandler } from "./config/middlewares/errorHandler";
import { requireAdmin } from "./config/middlewares/adminAuth";

import healthRoute from "./routes/health.route";
import authRoutes from "./routes/auth.route";
import redisRoutes from "./routes/redis.route";
import adminDashboard from "./routes/admin.dashboard";

const app = express();

/* SECURITY */
app.use(helmet());
app.use(cors());
app.use(express.json());

/* ✅ PUBLIC ROUTES FIRST */
app.use("/", healthRoute);
app.use("/auth", authRoutes);

/* 🔒 PROTECTION AFTER LOGIN */
app.use(blockBannedIps);
app.use(rateLimiter);

/* ADMIN (JWT PROTECTED) */
app.use("/admin", requireAdmin);
app.use("/admin/redis", redisRoutes);
app.use("/admin/dashboard", adminDashboard);

/* SWAGGER */
const swaggerDoc = YAML.load(
  path.join(__dirname, "../docs/openapi.yaml")
);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

/* ERRORS */
app.use(errorHandler);

export default app;
