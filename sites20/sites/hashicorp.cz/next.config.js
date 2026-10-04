const path = require("path");

module.exports = {
  output: "export",
  outputFileTracingRoot: path.join(__dirname, "../.."),
  eslint: { ignoreDuringBuilds: true },
  trailingSlash: true,
  transpilePackages: ["@themes/meetup"],
};
