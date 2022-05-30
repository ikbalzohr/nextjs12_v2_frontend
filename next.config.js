/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // MONGO_URI: "https://backend-nodejs-lilac.vercel.app/users",
    MONGO_URI: "http://localhost:4000/v1/users/list",
    MONGO_IMG: "http://localhost:4000/",
  },
};

module.exports = nextConfig;
