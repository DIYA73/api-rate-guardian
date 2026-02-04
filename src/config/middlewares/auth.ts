import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../env";


export function adminAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Missing token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    jwt.verify(token, env.JWT_SECRET);
    next();
  } catch {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
}
