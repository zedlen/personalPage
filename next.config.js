const Dotenv = require("dotenv-webpack");
module.exports = { 
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
    }
}