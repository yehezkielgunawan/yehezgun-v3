import getConfig from "next/config";

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();
export const API_KEY = serverRuntimeConfig.AIRTABLE_APIKEY;
export const AIRTABLE_BASE = serverRuntimeConfig.AIRTABLE_BASE;
export const CHECK_YOUR_CONNECTION_MESSAGE =
  "Gagal load data, cek koneksi internet anda atau matikan adblock anda!";
export const UMAMI_WEB_ID = publicRuntimeConfig.UMAMI_WEB_ID;
export const UMAMI_WEB_SRC = publicRuntimeConfig.UMAMI_SRC;
