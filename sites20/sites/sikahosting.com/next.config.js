module.exports = {
  trailingSlash: true
};

const withTM = require("next-transpile-modules")(["@themes/zuzjes"]);
module.exports = withTM(module.exports);
