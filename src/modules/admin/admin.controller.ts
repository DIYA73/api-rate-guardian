import { Request, Response } from "express";
import { redis } from "../../config/redis";

export const getBannedIps = async (_req: Request, res: Response) => {
  const keys = await redis.keys("ban:*");
  const ips = keys.map((k) => k.replace("ban:", ""));
  res.json({ bannedIps: ips });
};

export const unbanIp = async (req: Request, res: Response) => {
  const { ip } = req.body;

  if (!ip) {
    return res.status(400).json({ message: "IP is required" });
  }

  await redis.del(`ban:${ip}`);
  res.json({ message: `IP ${ip} unbanned` });
};
