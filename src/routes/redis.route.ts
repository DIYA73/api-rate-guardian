import { Router } from "express";
import { redis } from "../config/redis";

const router = Router();

router.get("/stats", async (_req, res) => {
  const info = await redis.info();

  res.json({
    status: "ok",
    redis: {
      connected: redis.status === "ready",
      memory: info.match(/used_memory_human:(.*)/)?.[1],
      clients: info.match(/connected_clients:(.*)/)?.[1],
      uptime: info.match(/uptime_in_seconds:(.*)/)?.[1],
    },
  });
});

export default router;

