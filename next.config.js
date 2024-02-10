/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname:'www.assets.tickete.co'
            }
        ]
    }
};

module.exports = nextConfig
