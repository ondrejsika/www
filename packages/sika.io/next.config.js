module.exports = {
  trailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" }
    };
  }
};

const withTM = require("next-transpile-modules")([
  "@app/ondrejsika-theme",
  "@app/ondrejsika-singlepage",
  "@app/simple-theme",
  "@app/common",
  "@app/course-landing",
  "@app/data"
]);
module.exports = withTM(module.exports);
