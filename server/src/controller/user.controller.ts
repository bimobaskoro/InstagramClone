import { Request, Response, NextFunction } from "express";
import { EntityController } from "./entity.controller";
import UserService from "../service/user.service";
import { verify } from "jsonwebtoken";
import { SECRET_KEY } from "../config/config";
export class UserController extends EntityController {
  constructor() {
    super(UserService);
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      await this.service.register(req);
      res.status(201).send({
        message: "User registered",
      });
    } catch (error) {
      next(error);
    }
  }
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await this.service.login(req);
      // console.log(verify(token, SECRET_KEY));

      res.status(200).cookie("auth", token).send({
        message: "Success Login",
        token,
      });
    } catch (error) {
      next(error);
    }
  }

  async getByUserName(req: Request, res: Response, next: NextFunction) {
    try {
      if (this.service.getByUserName) {
        const data = await this.service?.getByUserName(req);
        res.send({
          message: "fetching data with username",
          data,
        });
      }
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
