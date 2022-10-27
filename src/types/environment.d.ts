declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT?: string;
      FACEBOOKADS_ACCESS_TOKEN: string;
      FACEBOOKADS_APP_ID: string;
      FACEBOOKADS_APP_SECRET: string;
      FACEBOOKADS_AD_ACCOUNT_ID: string;
      FACEBOOKADS_SHOW_DEBUG_INFO: string;
      FACEBOOKADS_GRAPH_BASE_URL: string;
    }
  }
}

export { };