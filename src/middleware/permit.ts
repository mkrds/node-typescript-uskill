import { Request, Response, NextFunction } from "express";

const permit = (
  ...allowed: [string]
): ((req: Request, res: Response, next: NextFunction) => void) => {
  const isAllowed = (role: string): boolean => allowed.indexOf(role) > -1;

  return (req: Request, res: Response, next: NextFunction): void => {
    if (req.user && isAllowed(req.user.role)) {
      next();
    } else {
      res.status(403).json({ message: "Forbidden" });
    }
  };
};

export default permit;
