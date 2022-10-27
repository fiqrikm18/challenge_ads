import { Request, Response } from "express";
import { createCampaign } from "../services/ads.service";

export default class AdsController {
  async createAds(req: Request, res: Response) {
    try {
      const data = await (await createCampaign("Test Campaign", "PAGE_LIKES", "PAUSED", [])).data;
      return res.json({
        "code": 201,
        "msg": "Campaign created",
        "data": {
          "campaign_id": data.id
        }
      });
    } catch (_e) {
      return res.json({
        "code": 500,
        "msg": (_e as Error).message,
        "data": {}
      });
    }
  }
}