"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unbanIp = exports.getBannedIps = void 0;
const redis_1 = require("../../config/redis");
const getBannedIps = async (_req, res) => {
    const keys = await redis_1.redis.keys("ban:*");
    const ips = keys.map((k) => k.replace("ban:", ""));
    res.json({ bannedIps: ips });
};
exports.getBannedIps = getBannedIps;
const unbanIp = async (req, res) => {
    const { ip } = req.body;
    if (!ip) {
        return res.status(400).json({ message: "IP is required" });
    }
    await redis_1.redis.del(`ban:${ip}`);
    res.json({ message: `IP ${ip} unbanned` });
};
exports.unbanIp = unbanIp;
