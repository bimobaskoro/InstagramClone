import { EntityRouter } from "./entity.router";
import UserController from "../controller/user.controller";
export class UserRouter extends EntityRouter {
  constructor() {
    super();
    this.initializedRoutes();
  }

  initializedRoutes() {
    this.router.get("/", UserController.getAll.bind(UserController));
    this.router.get(
      "/username",
      UserController.getByUserName.bind(UserController)
    );
    this.router.post("/v1", UserController.register.bind(UserController));
    this.router.get("/v2", UserController.login.bind(UserController));
  }
}

export default new UserRouter();
