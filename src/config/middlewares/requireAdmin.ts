import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: any;
}

export function requireAdmin(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const auth = req.headers.authorization;

  if (!auth || !auth.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Missing token" });
  }

  try {
    const token = auth.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;

    if ((decoded as any).role !== "admin") {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
}
