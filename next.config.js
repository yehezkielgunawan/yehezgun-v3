/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["assets.vercel.com", "dl.airtable.com", "image.flaticon.com"],
  },
  swcMinify: true,
};
