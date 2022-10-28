import axios from "axios";
import { baseUrl, adAccountId, accessToken } from "./index";

export interface Campaign {
  name: string;
  objective: string;
  status: string;
  adCategory: []
}

export const createCampaign = async (data: Campaign) => {
  const response = await axios.post(`${baseUrl}/${adAccountId}/campaigns?access_token=${accessToken}`, {
    "name": data.name,
    "objective": data.objective,
    "status": data.status,
    "special_ad_categories": data.adCategory,
  });
  return response;
};

export const getCampaign = async () => {
  const response = await axios.get(`${baseUrl}/${adAccountId}/campaigns?access_token=${accessToken}&fields=['name', 'objective']`);
  return response;
};

export const getInsight = async (campaignId: string) => {
  const response = await axios.get(`${baseUrl}/${campaignId}/insights?access_token=${accessToken}`);
  return response;
};