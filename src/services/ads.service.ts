import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const baseUrl = process.env.FACEBOOKADS_GRAPH_BASE_URL;
const accessToken = process.env.FACEBOOKADS_ACCESS_TOKEN;
const adAccountId = process.env.FACEBOOKADS_AD_ACCOUNT_ID;

export interface ApiError {
  error: AdsError
}

interface AdsError {
  message?: string;
  type?: string;
  code?: number;
  error_data?: object;
  error_subcode?: number;
  is_transient?: boolean;
  error_user_title?: string;
  error_user_msg?: string;
  fbtrace_id?: string;
}

export const createCampaign = async (name: string, objective: string, status: string, adCategory: []) => {
  const response = await axios.post(`${baseUrl}/${adAccountId}/campaigns?access_token=${accessToken}`, {
    "name": name,
    "objective": objective,
    "status": status,
    "special_ad_categories": adCategory,
  });
  return response;
};

export const getCampaignInsigt = async (ad_id: string) => {
  const response = await axios.get(`${baseUrl}/${ad_id}/insights?access_token=${accessToken}`);
  return response;
};