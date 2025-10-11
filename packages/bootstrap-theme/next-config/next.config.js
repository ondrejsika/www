const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  trailingSlash: true,
  webpack: function (config) {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
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
        ]
      })
    );
    return config;
  }
};

// Transpile packages using Next.js 15 built-in support
module.exports.transpilePackages = [
  "@app/common",
  "@app/bootstrap-theme"
];

const withYAML = require("next-yaml");
module.exports = withYAML(module.exports);
