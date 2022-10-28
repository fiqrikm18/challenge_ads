import axios from "axios";
import { baseUrl, adAccountId, accessToken } from "./index";
import moment from "moment";

export interface Ads {
  name?: string;
  lifetime_budget?: number;
  start_time?: Date;
  end_time?: Date;
  campaign_id?: string;
  bid_amount?: number;
  billing_event?: string;
  optimization_goal?: string;
  targeting?: object;
}

export async function createAdsSet(data: Ads) {
  const response = await axios.post(`${baseUrl}/${adAccountId}/adsets?access_token=${accessToken}`, {
    "name": data.name,
    "lifetime_budget": data.lifetime_budget,
    "start_time": data.start_time,
    "end_time": data.end_time ? data.end_time : moment().add(1, "days"),
    "campaign_id": data.campaign_id,
    "bid_amount": data.bid_amount,
    "billing_event": data.billing_event,
    "optimization_goal": data.optimization_goal,
    "targeting": data.targeting,
  });
  return response;
}

export async function getAdsSet() {
  const response = await axios.get(`${baseUrl}/${adAccountId}/adsets?access_token=${accessToken}&fields=['name',"start_time","end_time","daily_budget","lifetime_budget"]`);
  return response;
}
