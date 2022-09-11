/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = nextConfig

const path = require('path');

const withImages = require('next-images');
module.exports = withImages({
    exclude: path.resolve(__dirname, 'src/assets/'),
    webpack(config, options) {
        return config
    }
});