"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const rateLimiter_1 = require("./config/middlewares/rateLimiter");
const blockBannedIps_1 = require("./config/middlewares/blockBannedIps");
const errorHandler_1 = require("./config/middlewares/errorHandler");
const admin_route_1 = __importDefault(require("./routes/admin.route"));
const health_route_1 = __importDefault(require("./routes/health.route"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// 🔒 SECURITY FIRST
app.use(blockBannedIps_1.blockBannedIps);
app.use(rateLimiter_1.rateLimiter);
// 🛣 Routes
app.use("/", health_route_1.default);
app.use("/admin", admin_route_1.default);
// ❗ Error handler LAST
app.use(errorHandler_1.errorHandler);
exports.default = app;
