import { Router } from "express";
import { Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {

  res.json({ message: "API Rate Guardian is running 🚀" });
});

export default router;
