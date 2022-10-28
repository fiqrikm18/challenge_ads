import { AxiosError } from "axios";
import { Request, Response } from "express";
import { createCampaign, getCampaign } from "../services/campaign.service";
import { ApiError } from "../services";

export default class CampaignController {
  async createCampaign(req: Request, res: Response) {
    const { campaign_name, campaign_objective, campaign_type, campaign_options } = req.body;

    try {
      const data = await (await createCampaign({
        name: campaign_name,
        objective: campaign_objective,
        status: campaign_type,
        adCategory: campaign_options
      })).data;

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
        "msg": (error.response?.data as ApiError).error.error_user_msg ? (error.response?.data as ApiError).error.error_user_msg : (error.response?.data as ApiError).error.message,
        "data": {}
      });
    }
  }

  async getCampaign(req: Request, res: Response) {
    try {
      const data = await (await getCampaign()).data;
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