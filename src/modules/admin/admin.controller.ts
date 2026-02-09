import { Request, Response } from "express";
import { redis } from "../../config/redis";

/**
 * GET banned IPs
 */
export const getBannedIps = async (_req: Request, res: Response) => {
  const keys = await redis.keys("banned:*");
  const ips = keys.map((k) => k.replace("banned:", ""));

  res.json({
    status: "ok",
    bannedIps: ips,
  });
};

/**
 * POST unban IP
 */
export const unbanIp = async (req: Request, res: Response) => {
  const { ip } = req.body;

  if (!ip) {
    return res.status(400).json({ message: "IP required" });
  }

  await redis.del(`banned:${ip}`);

  res.json({
    status: "ok",
    unbanned: ip,
  });
};

/**
 * GET redis stats
 */
export const getRedisStats = async (_req: Request, res: Response) => {
  const info = await redis.info();

  res.json({
    status: "ok",
    redis: {
      connected: true,
      info,
    },
  });
};
