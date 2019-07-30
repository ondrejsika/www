module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  },
  transpileModules: ["@app"]
};

const withCSS = require("@zeit/next-css");
module.exports = withCSS(module.exports);

const withSass = require("@zeit/next-sass");
module.exports = withSass(module.exports);

const withTM = require("next-transpile-modules");
module.exports = withTM(module.exports);

const withImages = require("next-images");
module.exports = withImages(module.exports);

const withYAML = require('next-yaml')
module.exports = withYAML(module.exports)
