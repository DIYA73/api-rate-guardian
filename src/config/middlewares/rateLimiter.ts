
import { Request, Response, NextFunction } from "express";
import { redis } from "../redis";

const WINDOW_SECONDS = 60;
const MAX_REQUESTS = 10;
const BAN_SECONDS = 15 * 60;

export async function rateLimiter(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // 🚀 FIX: admin routes bypass limiter
    if (req.originalUrl.startsWith("/admin")) {
      return next();
    }

    const ip = req.ip ?? "unknown";
    const rateKey = `rate:${ip}`;
    const banKey = `ban:${ip}`;

    const isBanned = await redis.get(banKey);
    if (isBanned) {
      return res.status(403).json({
        message: "Your IP is temporarily banned",
      });
    }

    const count = await redis.incr(rateKey);

    if (count === 1) {
      await redis.expire(rateKey, WINDOW_SECONDS);
    }

    if (count > MAX_REQUESTS) {
      await redis.set(banKey, "1", "EX", BAN_SECONDS);
      return res.status(429).json({
        message: "Too many requests. You are temporarily banned.",
      });
    }

    next();
  } catch (err) {
    next(err);
  }
}
