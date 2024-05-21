/** @format */

import { Request } from "express";
import { TUser } from "./user.model";
import { UserAccount, UserData } from "@prisma/client";

export interface IService {
  getAll: (req: Request) => Promise<TUser[]>;
  getByUserName?: (req: Request) => Promise<TUser[]>;
}
