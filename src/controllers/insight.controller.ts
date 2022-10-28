import { AxiosError } from "axios";
import { Request, Response } from "express";
import { getInsight } from "../services/campaign.service";
import { ApiError } from "../services";

export default class InsightController {
  async getInsight(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await (await getInsight(id)).data;
      return res.json({
        "code": 200,
        "msg": "",
        "data": data.data
      });
    } catch (_e) {
      const error = _e as AxiosError;
      return res.json({
        "code": error.response?.status,
        "msg": (error.response?.data as ApiError).error.error_user_msg ? (error.response?.data as ApiError).error.error_user_msg : (error.response?.data as ApiError).error.message,
        "data": {}
      });
    }
  }
}