/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "http://localhost:4000/v1/users/list",
    MONGO_IMG: "http://localhost:4000/",

    // MONGO_URI: "https://api-nodejs-server.vercel.app/v1/users/list",
    // MONGO_IMG: "https://api-nodejs-server.vercel.app/",
  },
};

module.exports = nextConfig;
