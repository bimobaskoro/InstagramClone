import { sign } from "jsonwebtoken";
import { SECRET_KEY } from "../config/config";

export const createToken = (payload: any, expiresIn: string) => {
  console.log("====================================");
  console.log(payload);
  console.log("====================================");
  return sign(payload, SECRET_KEY, { expiresIn });
};
