import { IRouterAds } from "../handlers/router.handler";
import CampaignController from "../controllers/campaign.controller";
import { validateCreateCampaign } from "../middlewares/validators/ads.validator";

const campaignController = new CampaignController();

export const campaignRoute: IRouterAds[] = [
  {
    name: "create_campaign",
    path: "/campaign/create",
    method: "POST",
    middleware: validateCreateCampaign,
    handler: campaignController.createCampaign
  },
  {
    name: "get_campaign",
    path: "/campaign",
    method: "GET",
    middleware: null,
    handler: campaignController.getCampaign
  },
];