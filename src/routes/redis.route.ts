import { Router } from "express";
import { requireAdmin } from "../config/middlewares/requireAdmin";
import { getRedisStats } from "../modules/admin/admin.controller";

const router = Router();

/**
 * GET /admin/redis/stats
 */
router.get("/stats", requireAdmin, getRedisStats);

export default router;
