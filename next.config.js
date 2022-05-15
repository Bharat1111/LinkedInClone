/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["rb.gy", "avatars.githubusercontent.com"],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
