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
