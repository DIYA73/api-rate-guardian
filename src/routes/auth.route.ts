import { Router } from "express";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const router = Router();

/* LOGIN */
router.post("/login", (req: Request, res: Response) => {

  const { email, password } = req.body;

  if (
    email !== process.env.ADMIN_USER ||
    password !== process.env.ADMIN_PASS
  ) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign(
    { role: "admin" },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" }
  );

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false, // true in production HTTPS
  });

  res.json({ success: true });
});

/* LOGOUT */
router.post("/logout", (req: Request, res: Response) => 
{
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });

  res.json({ success: true });
});

export default router;
