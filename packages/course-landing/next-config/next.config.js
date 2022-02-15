module.exports = {
  trailingSlash: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  },
};

const withTM = require("next-transpile-modules")([
  "@app/ondrejsika-theme",
  "@app/common",
  "@app/course-landing",
  "@app/data",
]);
module.exports = withTM(module.exports);

const withYAML = require("next-yaml");
module.exports = withYAML(module.exports);
