"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockBannedIps = blockBannedIps;
const redis_1 = require("../redis");
async function blockBannedIps(req, res, next) {
    try {
        const ip = req.headers["x-forwarded-for"]?.split(",")[0] ||
            req.socket.remoteAddress ||
            "unknown";
        const banned = await redis_1.redis.exists(`ban:${ip}`);
        if (banned) {
            return res.status(403).json({ message: "IP banned" });
        }
        next();
    }
    catch (err) {
        next(err);
    }
}
