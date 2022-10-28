import { IRouterAds } from "../handlers/router.handler";
import AdsController from "../controllers/ads.controller";
import { validateCreateAds, validateCreateAdsSet } from "../middlewares/validators/ads.validator";

const adsController = new AdsController();

export const adsRouter: IRouterAds[] = [
  {
    name: "create_ads_set",
    path: "/ads/sets/create",
    middleware: validateCreateAdsSet,
    method: "POST",
    handler: adsController.createAdsSet
  },
  {
    name: "get_ads_set",
    path: "/ads/sets/",
    method: "GET",
    middleware: null,
    handler: adsController.getAdsSet
  },
  {
    name: "crete_ads",
    path: "/ads/creative",
    method: "GET",
    middleware: null,
    handler: adsController.getCreativeAds
  },
  {
    name: "crete_ads",
    path: "/ads/",
    method: "POST",
    middleware: validateCreateAds,
    handler: adsController.createAds
  },
  {
    name: "get_ads",
    path: "/ads/:adset_id",
    method: "GET",
    middleware: null,
    handler: adsController.getAds
  },
];