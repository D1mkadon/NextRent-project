/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "cdn.imagin.studio"],
  },
  // remotePatterns: [
  //   {
  //     protocol: "https",
  //     hostname: "cdn.imagin.studio",
  //     port: "",
  //     pathname: "/**",
  //   },
  // ],
};

export default nextConfig;
