/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "i.pinimg.com"
        },
        {
          protocol: "https",
          hostname: "plus.unsplash.com"
        },
        {
          protocol: "https",
          hostname: "miro.medium.com"
        }
      ]
    }
  };
  
  export default nextConfig;
  