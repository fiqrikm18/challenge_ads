import dotenv from "dotenv";

dotenv.config();

export const baseUrl = process.env.FACEBOOKADS_GRAPH_BASE_URL;
export const accessToken = process.env.FACEBOOKADS_ACCESS_TOKEN;
export const adAccountId = process.env.FACEBOOKADS_AD_ACCOUNT_ID;

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