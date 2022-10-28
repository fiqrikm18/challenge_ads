import { indexRouter } from "./home.route";
import { adsRouter } from "./ads.route";
import { campaignRoute } from "./campaign.route";
import { insightRoute } from "./insight.route";

export const routers = [
  indexRouter,
  adsRouter,
  campaignRoute,
  insightRoute
];