/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["assets.vercel.com", "dl.airtable.com"],
  },
  swcMinify: true,
};
