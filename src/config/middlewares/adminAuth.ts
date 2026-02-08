import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function requireAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const auth = req.headers.authorization;

  if (!auth || !auth.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Missing token" });
  }

  try {
    jwt.verify(
      auth.split(" ")[1],
      process.env.JWT_SECRET as string
    );
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
}
