/** @type {import('next').NextConfig} */

const isLocal = process.env.NODE_ENV === 'development';
const domain = isLocal ? [] : ['rezafatahillah.github.io', '/portofolio/'];

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: domain,
  },
}
 
module.exports = nextConfig