const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  trailingSlash: true,
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
  "@app/knuth-theme",
  "@app/computer-modern-typewriter-light",
  "@app/common",
  "@app/course-landing",
  "@app/data"
];

const withYAML = require("next-yaml");
module.exports = withYAML(module.exports);

const withFonts = require("next-fonts");
module.exports = withFonts(module.exports);
