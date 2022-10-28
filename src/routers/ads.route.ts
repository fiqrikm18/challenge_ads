import { IRouterAds } from "../handlers/router.handler";
import AdsController from "../controllers/ads.controller";

const adsController = new AdsController();

export const adsRouter: IRouterAds[] = [
  {
    name: "create_ads",
    path: "/ads/sets/create",
    method: "POST",
    handler: adsController.createAdsSet
  },
  {
    name: "get_ads_set",
    path: "/ads/sets/",
    method: "GET",
    handler: adsController.getAdsSet
  },
];