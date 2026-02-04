import { Router } from "express";
import { adminAuth } from "../config/middlewares/auth";
import { getBannedIps, unbanIp } from "../modules/admin/admin.controller";

const router = Router();

router.use(adminAuth);

router.get("/bans", getBannedIps);
router.post("/unban", unbanIp);

export default router;
