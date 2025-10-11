// Next.js config is same for all course landing pages, so we can import it ;)
const path = require("path");
module.exports = require("../bootstrap-theme/next-config/next.config.js");
module.exports.outputFileTracingRoot = path.join(__dirname, '../../');
