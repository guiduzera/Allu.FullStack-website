/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
}

const dotenv = require('dotenv');

dotenv.config();

module.exports = nextConfig
