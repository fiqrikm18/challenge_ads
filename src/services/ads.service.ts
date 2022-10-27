import axios from "axios";
import dotenv from "dotenv";


dotenv.config();

const baseUrl = process.env.FACEBOOKADS_GRAPH_BASE_URL;
const accessToken = process.env.FACEBOOKADS_ACCESS_TOKEN;
const adAccountId = process.env.FACEBOOKADS_AD_ACCOUNT_ID;

export const createCampaign = async (name: string, objective: string, status: string, adCategory: []) => {
  const response = await axios.post(`${baseUrl}/${adAccountId}/campaigns?access_token=${accessToken}`, {
    "name": name,
    "objective": objective,
    "status": status,
    "special_ad_categories": adCategory,
  });
  return response;
};
