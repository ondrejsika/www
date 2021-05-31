module.exports = {
  transpileModules: ["@themes", "@sites"],
  exportTrailingSlash: true
};

const withTM = require("next-transpile-modules");
module.exports = withTM(module.exports);
