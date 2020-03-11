// import jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";
import { AuthorizedRequest } from "../../types";

export const auth = async (
  req: AuthorizedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // const token = req.headers.authorization;
    // const decodedToken = jwt.verify(token, "fake-256-bit-secret");

    // TODO: Find user in db using auth token
    const user = { name: "John Doe", role: "manager" as const };
    req.user = user;
    next();
  } catch {
    res.status(401).json({
      error: new Error("Invalid request!")
    });
  }
};

export default auth;
