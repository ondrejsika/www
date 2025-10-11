const CopyPlugin = require("copy-webpack-plugin");
const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");

module.exports = {
  outputFileTracingRoot: path.join(__dirname, "../../"),
  trailingSlash: true,
  exportPathMap: function (defaultPathMap) {
    // remove default lecturer render (without post)
    delete defaultPathMap["/lektor/[id]"];

    // export lecturers
    try {
      var lecturers = yaml.safeLoad(
        fs.readFileSync("../data/skoleni.io/lecturers.yml", "utf8")
      );
      lecturers.forEach(function (obj) {
        defaultPathMap[`/lektor/${obj.id}`] = {
          page: "/lektor/[id]",
          query: { id: obj.id },
        };
      });
    } catch (e) {
      console.log(e);
    }

    // remove default course render (without post)
    delete defaultPathMap["/skoleni/[id]"];

    // export course
    try {
      var courses = yaml.safeLoad(
        fs.readFileSync("../data/skoleni.io/courses.yml", "utf8")
      );
      courses.forEach(function (obj) {
        defaultPathMap[`/skoleni/${obj.id}`] = {
          page: "/skoleni/[id]",
          query: { id: obj.id },
        };
      });
    } catch (e) {
      console.log(e);
    }

    // remove default technology render (without post)
    delete defaultPathMap["/seznam-skoleni/[id]"];

    // export technology
    try {
      var technologies = yaml.safeLoad(
        fs.readFileSync("../data/skoleni.io/technologies.yml", "utf8")
      );
      technologies.forEach(function (obj) {
        defaultPathMap[`/seznam-skoleni/${obj.id}`] = {
          page: "/seznam-skoleni/[id]",
          query: { id: obj.id },
        };
      });
    } catch (e) {
      console.log(e);
    }

    return defaultPathMap;
  },
  webpack: function (config) {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: "../../node_modules/bootstrap/dist/js/bootstrap.js",
            to: "./static/bootstrap.js",
          },
          {
            from: "../../node_modules/jquery/dist/jquery.js",
            to: "./static/jquery.js",
          },
          {
            from: "../../node_modules/popper.js/dist/umd/popper.js",
            to: "./static/popper.js",
          },
        ],
      })
    );
    return config;
  },
};

// Transpile packages using Next.js 15 built-in support
module.exports.transpilePackages = [
  "@app/ondrejsika-theme",
  "@app/ondrejsika-singlepage",
  "@app/common",
  "@app/course-landing",
  "@app/data",
];

const withYAML = require("next-yaml");
module.exports = withYAML(module.exports);
