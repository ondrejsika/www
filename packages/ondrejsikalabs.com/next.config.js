const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  trailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" }
    };
  },
  webpack: function (config) {
    config.plugins.push(
      new CopyPlugin([
        {
          from: "../../node_modules/bootstrap/dist/js/bootstrap.js",
          to: "./static/bootstrap.js"
        },
        {
          from: "../../node_modules/jquery/dist/jquery.js",
          to: "./static/jquery.js"
        },
        {
          from: "../../node_modules/popper.js/dist/umd/popper.js",
          to: "./static/popper.js"
        }
      ])
    );
    return config;
  },
  transpileModules: ["@app"]
};

const withTM = require("next-transpile-modules");
module.exports = withTM(module.exports);

const withImages = require("next-images");
module.exports = withImages(module.exports);

const withYAML = require("next-images");
module.exports = withYAML(module.exports);
