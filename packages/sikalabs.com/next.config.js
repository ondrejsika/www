const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  outputFileTracingRoot: path.join(__dirname, '../../'),
  env: {
    TRAININGCRM_URL: process.env.TRAININGCRM_URL
  },
  trailingSlash: true,
  exportPathMap: function (defaultPathMap) {
    return defaultPathMap;
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
  }
};

// Transpile packages using Next.js 15 built-in support
module.exports.transpilePackages = [
  "@app/ondrejsika-theme",
  "@app/ondrejsika-singlepage",
  "@app/common",
  "@app/course-landing",
  "@app/data"
];

const withYAML = require("next-yaml");
module.exports = withYAML(module.exports);
