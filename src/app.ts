import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";

import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

/* ----------- MIDDLEWARES ----------- */
import { rateLimiter } from "./config/middlewares/rateLimiter";
import { blockBannedIps } from "./config/middlewares/blockBannedIps";
import { errorHandler } from "./config/middlewares/errorHandler";

/* -------------- ROUTES ------------- */
import healthRoute from "./routes/health.route";
import adminRoutes from "./routes/admin.route";
import redisRoutes from "./routes/redis.route";
import adminDashboard from "./routes/admin.dashboard";

const app = express();

/* ---------------- SECURITY ---------------- */
app.use(helmet());
app.use(cors());
app.use(express.json());

/* -------- GLOBAL PROTECTION (ORDER!) ------ */
app.use(blockBannedIps);
app.use(rateLimiter);

/* ---------------- ROUTES ------------------ */
app.use("/", healthRoute);
app.use("/admin", adminRoutes);
app.use("/admin/redis", redisRoutes);
app.use("/admin/dashboard", adminDashboard);

/* ---------------- SWAGGER ----------------- */
const swaggerDoc = YAML.load(
  path.join(__dirname, "../docs/openapi.yaml")
);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

/* ------------- ERROR HANDLER -------------- */
app.use(errorHandler);

export default app;
