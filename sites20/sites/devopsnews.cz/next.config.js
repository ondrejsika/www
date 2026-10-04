const path = require("path");
const withYAML = require("next-yaml");

module.exports = withYAML({
  output: "export",
  outputFileTracingRoot: path.join(__dirname, "../.."),
  eslint: { ignoreDuringBuilds: true },
});
