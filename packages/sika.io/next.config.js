module.exports = {
  trailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" }
    };
  },
  transpileModules: ["@app"]
};

const withTM = require("next-transpile-modules");
module.exports = withTM(module.exports);

const withImages = require("next-images");
module.exports = withImages(module.exports);

const withYAML = require("next-images");
module.exports = withYAML(module.exports);
