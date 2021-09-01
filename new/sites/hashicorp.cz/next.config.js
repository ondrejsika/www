module.exports = {
  trailingSlash: true
};

const withTM = require("next-transpile-modules")(["@themes/meetup"]);
module.exports = withTM(module.exports);
