import { Request, Response } from "express";

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  // ✅ validate user (example)
  if (email !== "admin@test.com" || password !== "123456") {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // ✅ generate token (example)
  const token = "FAKE_JWT_TOKEN_FOR_NOW";

  // 🔥 THIS IS THE IMPORTANT PART
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false, // true only in production (HTTPS)
  });

  return res.json({ success: true });
}
