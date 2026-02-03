module.exports = {
  output: "export",
  trailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
};

// Transpile packages using Next.js 15 built-in support
module.exports.transpilePackages = [
  "@app/ondrejsika-theme",
  "@app/common",
  "@app/course-landing",
  "@app/data",
];

module.exports.webpack = (config) => {
  config.module.rules.push({
    test: /\.(svg|png|jpe?g|gif|ico|webp)$/i,
    type: "asset/resource",
  });
  return config;
};

const withYAML = require("next-yaml");
module.exports = withYAML(module.exports);
