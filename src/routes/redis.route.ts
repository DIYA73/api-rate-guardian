import { Router } from "express";
import { redis } from "../config/redis";

const router = Router();

router.get("/redis/stats", async (_req, res) => {
  const info = await redis.info();
  res.type("text/plain").send(info);
});

export default router;
