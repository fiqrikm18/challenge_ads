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
  {
    name: "crete_ads",
    path: "/ads/creative",
    method: "GET",
    handler: adsController.getCreativeAds
  },
  {
    name: "crete_ads",
    path: "/ads/",
    method: "POST",
    handler: adsController.createAds
  },
  {
    name: "get_ads",
    path: "/ads/:adset_id",
    method: "GET",
    handler: adsController.getAds
  },
];