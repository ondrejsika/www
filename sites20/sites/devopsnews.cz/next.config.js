const path = require("path");
const withYAML = require("next-yaml");
module.exports = withYAML();
module.exports.outputFileTracingRoot = path.join(__dirname, '../../../');
