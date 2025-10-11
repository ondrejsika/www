const path = require("path");

module.exports = {
  outputFileTracingRoot: path.join(__dirname, '../../../'),
  trailingSlash: true
};

// Transpile packages using Next.js 15 built-in support
module.exports.transpilePackages = ["@themes/meetup"];
