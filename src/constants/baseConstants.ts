import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
export const API_KEY = process.env.AIRTABLE_APIKEY;
export const AIRTABLE_BASE = process.env.AIRTABLE_BASE;
export const CHECK_YOUR_CONNECTION_MESSAGE =
  "Gagal load data, cek koneksi internet anda atau matikan adblock anda!";
export const UMAMI_WEB_ID = publicRuntimeConfig.UMAMI_WEB_ID;
export const UMAMI_WEB_SRC = publicRuntimeConfig.UMAMI_SRC;
