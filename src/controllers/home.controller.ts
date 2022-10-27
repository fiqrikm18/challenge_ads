import { Request, Response } from "express";

export default class HomeController {
  index(req: Request, res: Response) {
    return res.json({
      "msg": "Index Page"
    });
  }
}