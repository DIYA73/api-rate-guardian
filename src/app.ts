import express from "express";
import cors from "cors";
import helmet from "helmet";

import { rateLimiter } from "./config/middlewares/rateLimiter";
import { errorHandler } from "./config/middlewares/errorHandler";
import { blockBannedIps } from "./config/middlewares/blockBannedIps";



import adminRoutes from "./routes/admin.route";
import healthRoute from "./routes/health.route";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(rateLimiter);

app.use("/", healthRoute);
app.use("/admin", adminRoutes);

app.use(errorHandler);
app.use(blockBannedIps);
export default app;


