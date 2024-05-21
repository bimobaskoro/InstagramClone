import { Request, Response, NextFunction } from "express";

export class EntityController {
  public service: any;
  constructor(service: any) {
    this.service = service;
  }
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.service.getAll(req);
      res.send({
        message: "fetching data",
        data,
      });
    } catch (error) {}
  }
}
