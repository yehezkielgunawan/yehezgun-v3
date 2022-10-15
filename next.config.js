/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    UMAMI_WEB_ID: process.env.UMAMI_WEB_ID,
    UMAMI_SRC: process.env.UMAMI_SRC,
    AIRTABLE_APIKEY: process.env.AIRTABLE_APIKEY,
    AIRTABLE_BASE: process.env.AIRTABLE_BASE,
  },
};
