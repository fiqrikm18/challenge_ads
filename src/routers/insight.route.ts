import { IRouterAds } from "../handlers/router.handler";
import InsightController from "../controllers/insight.controller";

const insightController = new InsightController();

export const insightRoute: IRouterAds[] = [
  {
    name: "get_insight",
    path: "/insight/:id",
    method: "GET",
    middleware: null,
    handler: insightController.getInsight
  }
];