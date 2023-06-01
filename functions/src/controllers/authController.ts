import { Request, Response } from "express";
import { UsersService } from "../services/users.service";

export class AuthController {
  public static async login(req: Request, res: Response) {
    try {
      const params = req.body;
      const service = new UsersService();
      const user = await service.login(params);
      return res.status(200).send(user);
    } catch (error) {
      return res.send(error);
    }
  }

  public static async register(req: Request, res: Response) {
    try {
      const params = req.body;
      const service = new UsersService();
      const user = await service.register(params);
      return res.status(200).send(user);
    } catch (error) {
      return res.send(error);
    }
  }

  public static async getStocks(req: Request, res: Response) {
    try {
      const params = req.body;
      const service = new UsersService();
      const stocks = await service.getStocks(params);
      return res.status(200).send(stocks);
    } catch (error) {
      return res.send(error);
    }
  }

  public static async updateStocks(req: Request, res: Response) {
    try {
      const params = req.body;
      const service = new UsersService();
      const stocks = await service.updateStocks(params);
      return res.status(200).send(stocks);
    } catch (error) {
      return res.send(error);
    }
  }
}
