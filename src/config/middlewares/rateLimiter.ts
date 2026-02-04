import { Request, Response, NextFunction } from "express";
import { redis } from "../redis";
import { logAbuse } from "../../utils/logger";

const WINDOW_SECONDS = 60;
const MAX_REQUESTS = 10;
const BAN_SECONDS = 60 * 60; // 1 hour

export async function rateLimiter(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // ✅ Admin routes bypass limiter
    if (req.originalUrl.startsWith("/admin")) {
      return next();
    }

    const ip =
      (req.headers["x-forwarded-for"] as string)?.split(",")[0] ||
      req.socket.remoteAddress ||
      "unknown";

    const rateKey = `rate:${ip}`;
    const banKey = `ban:${ip}`;

    // 🚫 Block if already banned
    const isBanned = await redis.exists(banKey);
    if (isBanned) {
      return res.status(403).json({
        message: "Your IP is temporarily banned",
      });
    }

    // ⏱ Count requests
    const count = await redis.incr(rateKey);

    if (count === 1) {
      await redis.expire(rateKey, WINDOW_SECONDS);
    }

    // 🚨 Too many requests → BAN
    if (count > MAX_REQUESTS) {
      await redis.set(banKey, "1", "EX", BAN_SECONDS); // ✅ FIXED

      logAbuse(ip, "Rate limit exceeded");

      return res.status(429).json({
        message: "Too many requests. You are temporarily banned.",
      });
    }

    next();
  } catch (err) {
    next(err);
  }
}
