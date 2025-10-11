// Next.js config is same for all course landing pages, so we can import it ;)
const path = require("path");
module.exports = require("@app/course-landing/next-config/next.config");
module.exports.outputFileTracingRoot = path.join(__dirname, '../../');
