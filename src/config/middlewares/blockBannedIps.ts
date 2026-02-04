import { Request, Response, NextFunction } from "express";
import { redis } from "../redis";

export async function blockBannedIps(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const ip =
      (req.headers["x-forwarded-for"] as string)?.split(",")[0] ||
      req.socket.remoteAddress ||
      "unknown";

    const banned = await redis.exists(`ban:${ip}`);
    if (banned) {
      return res.status(403).json({ message: "IP banned" });
    }

    next();
  } catch (err) {
    next(err);
  }
}
