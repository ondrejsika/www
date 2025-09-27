module.exports = {
  trailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" }
    };
  }
};

// Transpile packages using Next.js 15 built-in support
module.exports.transpilePackages = [
  "@app/ondrejsika-theme",
  "@app/ondrejsika-singlepage",
  "@app/simple-theme",
  "@app/common",
  "@app/course-landing",
  "@app/data"
];
