import { AxiosError } from "axios";
import { ApiError } from "../services";
import { Request, Response } from "express";
import { createAdsSet, getAdsSet } from "../services/ads.service";

export default class AdsController {
  async createAdsSet(req: Request, res: Response) {
    const { name, lifetime_budget, campaign_id, bid_amount } = req.body;
    try {
      const ads = await (await createAdsSet({
        name: name,
        lifetime_budget: lifetime_budget,
        campaign_id: campaign_id,
        bid_amount: bid_amount,
        billing_event: "IMPRESSIONS",
        optimization_goal: "POST_ENGAGEMENT",
        targeting: {
          geo_locations: {
            countries: ["ID"]
          }
        }
      })).data;

      return res.json({
        "code": 201,
        "msg": "Ad Set created",
        "data": {
          "set_id": ads.id
        }
      });
    } catch (e) {
      const error = e as AxiosError;
      return res.json({
        "code": error.response?.status,
        "msg": (error.response?.data as ApiError).error.error_user_msg ? (error.response?.data as ApiError).error.error_user_msg : (error.response?.data as ApiError).error.message,
        "data": {}
      });
    }
  }

  async getAdsSet(req: Request, res: Response) {
    try {
      const ads = await (await getAdsSet()).data;
      return res.json({
        "code": 200,
        "msg": "",
        "data": ads.data
      });
    } catch (e) {
      const error = e as AxiosError;
      return res.json({
        "code": error.response?.status,
        "msg": (error.response?.data as ApiError).error.error_user_msg ? (error.response?.data as ApiError).error.error_user_msg : (error.response?.data as ApiError).error.message,
        "data": {}
      });
    }
  }
}