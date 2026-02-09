import { Router } from "express";
import { requireAdmin } from "../config/middlewares/requireAdmin";
import { getBannedIps, unbanIp } from "../modules/admin/admin.controller";

const router = Router();

router.use(requireAdmin);

router.get("/bans", getBannedIps);
router.post("/unban", unbanIp);

export default router;
