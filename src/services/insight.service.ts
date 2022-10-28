import axios from "axios";
import { baseUrl, accessToken } from "./index";

export const getInsight = async (id: string) => {
  const response = await axios.get(`${baseUrl}/${id}/insights?access_token=${accessToken}`);
  return response;
};