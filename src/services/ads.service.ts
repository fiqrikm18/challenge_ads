import axios from "axios";
import { baseUrl, adAccountId, accessToken } from "./index";
import moment from "moment";

export interface AdsSet {
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

export interface Ads {
  name?: string;
  adset_id?: string;
  status?: string;
  creative?: object
}


export async function getAdsCreative() {
  const response = await axios.get(`${baseUrl}/${adAccountId}/adcreatives?access_token=${accessToken}&fields=['name']`);
  return response;
}

export async function createAdsSet(data: AdsSet) {
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

export async function createAds(data: Ads) {
  const response = await axios.post(`${baseUrl}/${adAccountId}/ads?access_token=${accessToken}`, {
    "name": data.name,
    "adset_id": data.adset_id,
    "status": data.status,
    "creative": data.creative
  });
  return response;
}

export async function getAds(data: Ads) {
  const response = await axios.get(`${baseUrl}/${data.adset_id}/ads?access_token=${accessToken}&fields=["name","configured_status","effective_status","creative"]`);
  return response;
}
