// import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

declare module "express" {
  interface Request {
    user: {
      role: string;
    };
  }
}

export const auth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.headers.authorization;
    // const decodedToken = jwt.verify(token, "fake-256-bit-secret");

    // TODO: Find user in db using auth token
    const user = { name: "John Doe", role: "manager" };
    req.user = user;
    next();
  } catch {
    res.status(401).json({
      error: new Error("Invalid request!")
    });
  }
};

export default auth;
