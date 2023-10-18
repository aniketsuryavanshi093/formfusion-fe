/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverActionsBodySizeLimit: "2mb",
  },
  reactStrictMode: false,
  images: {
    domains: [
      "images.typeform.com",
      "firebasestorage.googleapis.com",
      "jira.solulab.com",
      "trello.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
