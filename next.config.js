const Dotenv = require("dotenv-webpack");
const debug = process.env.NODE_ENV !== "production";
module.exports = { 
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(new Dotenv({ silent: true }));
        return config;
    },
    assetPrefix: !debug ? '/personalPage/' : '',
}