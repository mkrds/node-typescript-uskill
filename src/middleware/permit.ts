import { Response, NextFunction } from "express";

import { AppRole, AuthorizedRequest } from "../../types";

const permit = (
  ...allowed: [AppRole]
): ((req: AuthorizedRequest, res: Response, next: NextFunction) => void) => {
  const isAllowed = (role: AppRole): boolean => allowed.indexOf(role) > -1;

  return (req: AuthorizedRequest, res: Response, next: NextFunction): void => {
    if (req.user && isAllowed(req.user.role)) {
      next();
    } else {
      res.status(403).json({ message: "Forbidden" });
    }
  };
};

export default permit;
