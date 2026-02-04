import express from "express";
import cors from "cors";
import helmet from "helmet";

import { rateLimiter } from "./config/middlewares/rateLimiter";
import { blockBannedIps } from "./config/middlewares/blockBannedIps";
import { errorHandler } from "./config/middlewares/errorHandler";

import adminRoutes from "./routes/admin.route";
import healthRoute from "./routes/health.route";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// 🔒 SECURITY FIRST
app.use(blockBannedIps);
app.use(rateLimiter);

// 🛣 Routes
app.use("/", healthRoute);
app.use("/admin", adminRoutes);

// ❗ Error handler LAST
app.use(errorHandler);

export default app;
