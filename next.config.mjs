/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "n84j51mp-3001.inc1.devtunnels.ms",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.facebook.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "timeskrane.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "timeskraneapi.bwdemo.in",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
