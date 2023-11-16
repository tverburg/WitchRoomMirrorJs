/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    trailingSlash: true,
    assetPrefix: '.',
    publicRuntimeConfig: {
        contextPath: '.',
        uploadPath: '/api/upload'
    },
    webpack(config, options) {
        config.module.rules.push({
            test: /\.mp3$/,
            use: {
                loader: 'file-loader',
            },
        });
        return config;
    },
};

module.exports = nextConfig;
