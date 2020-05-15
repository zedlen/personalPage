const Dotenv = require("dotenv-webpack");
const withManifest = require('next-manifest');
const withOffline = require('next-offline');

const defaults = {
    // next-manifest options
    output: './static/', // The folder where the manifest will be generated.
    // manifest options
    name: 'Zedlen',
    standalone: "standalone",
    icons: [
        {
            "src": "/static/pwa/manifest-icon-192.jpg",
            "sizes": "192x192",
            "type": "image/jpg"
        },
        {
            "src": "/static/pwa/manifest-icon-512.jpg",
            "sizes": "512x512",
            "type": "image/jpg"
        }
    ]
}

module.exports = withOffline(withManifest({ 
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(new Dotenv({ silent: true }));
        return config;
    },
    env: {
        BLOGGER_API_KEY: process.env.BLOGGER_API_KEY,
        BLOG_ID: process.env.BLOG_ID,
        SPACE_ID:process.env.SPACE_ID,
        DELIVERY_TOKEN:process.env.DELIVERY_TOKEN,
        MANAGEMENT_TOKEN:process.env.MANAGEMENT_TOKEN
    },
    manifest: {
        ...defaults
    }
}));
