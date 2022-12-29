/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ["src"],
  },
  env: {
    UMAMI_WEB_ID: process.env.UMAMI_WEB_ID,
    UMAMI_SRC: process.env.UMAMI_SRC,
    SANITY_DATASET: process.env.SANITY_DATASET,
    SANITY_PROJECTID: process.env.SANITY_PROJECTID,
  },
};
