import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ message: "API Rate Guardian is running 🚀" });
});

export default router;
