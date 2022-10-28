import { AxiosError } from "axios";
import { Request, Response } from "express";
import { ApiError, createCampaign } from "../services/ads.service";

export default class AdsController {
  async createAds(req: Request, res: Response) {
    const { campaign_name, campaign_objective, campaign_type, campaign_options } = req.body;

    try {
      const data = await (await createCampaign(campaign_name, campaign_objective, campaign_type, campaign_options)).data;
      return res.json({
        "code": 201,
        "msg": "Campaign created",
        "data": {
          "campaign_id": data.id
        }
      });
    } catch (_e) {
      const error = _e as AxiosError;
      return res.json({
        "code": error.response?.status,
        "msg": (error.response?.data as ApiError).error.error_user_msg ? (error.response?.data as ApiError).error.error_user_msg : error.message,
        "data": {}
      });
    }
  }
}