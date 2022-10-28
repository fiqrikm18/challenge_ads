import { IRouterAds } from "../handlers/router.handler";
import AdsController from "../controllers/ads.controller";

const adsController = new AdsController();

export const adsRouter: IRouterAds[] = [
  {
    name: "create_ads",
    path: "/ads/create",
    method: "POST",
    handler: adsController.createAds
  },
  {
    name: "get_ads_insights",
    path: "/ads/insight/:ad_id",
    method: "GET",
    handler: adsController.getAdsInsight
  },
];