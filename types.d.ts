import { Request } from "express";

type AppRole = "manager" | "supplier";

interface UserInterface {
  name: string;
  role: AppRole;
}

type AuthorizedRequest = Request & { user?: UserInterface };

export { AppRole, UserInterface, AuthorizedRequest };
