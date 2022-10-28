import { IRouterAds } from "../handlers/router.handler";
import CampaignController from "../controllers/campaign.controller";

const campaignController = new CampaignController();

export const campaignRoute: IRouterAds[] = [
  {
    name: "create_campaign",
    path: "/campaign/create",
    method: "POST",
    handler: campaignController.createCampaign
  },
  {
    name: "get_campaign",
    path: "/campaign",
    method: "GET",
    handler: campaignController.getCampaign
  },
];