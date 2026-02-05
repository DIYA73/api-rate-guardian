import express from "express";
import cors from "cors";
import helmet from "helmet";

import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import { rateLimiter } from "./config/middlewares/rateLimiter";
import { blockBannedIps } from "./config/middlewares/blockBannedIps";
import { errorHandler } from "./config/middlewares/errorHandler";

import adminRoutes from "./routes/admin.route";
import healthRoute from "./routes/health.route";

const app = express();

// 🛡 Core security
app.use(helmet());
app.use(cors());
app.use(express.json());

// 🔒 GLOBAL PROTECTION (ORDER MATTERS)
app.use(blockBannedIps);
app.use(rateLimiter);

// 🛣 Routes
app.use("/", healthRoute);
app.use("/admin", adminRoutes);

// 📄 Swagger docs
const swaggerDoc = YAML.load("./docs/openapi.yaml");
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// ❗ Error handler LAST
app.use(errorHandler);

export default app;
