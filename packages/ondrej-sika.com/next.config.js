const CopyPlugin = require("copy-webpack-plugin");
const yaml = require("js-yaml");
const fs = require("fs");

module.exports = {
  trailingSlash: true,
  exportPathMap: function(defaultPathMap) {
    // remove default blog page render (without post)
    delete defaultPathMap["/blog/[id]"];

    // export blog post
    try {
      var posts = yaml.safeLoad(
        fs.readFileSync("data/blog-posts.yaml", "utf8")
      );
      posts.forEach(function(post) {
        if (post.nostatic) return;
        defaultPathMap[`/blog/${post.id}`] = {
          page: "/blog/[id]",
          query: { id: post.id }
        };
      });

      // remove default session page render (without session)
      delete defaultPathMap["/upcoming-sessions/[id]"];

      var sessions = yaml.safeLoad(
        fs.readFileSync("../data/training/sessions.yml", "utf8")
      );
      sessions.forEach(function(session) {
        defaultPathMap[`/upcoming-sessions/${session.id}`] = {
          page: "/upcoming-sessions/[id]",
          query: { id: session.id }
        };
      });
    } catch (e) {
      console.log(e);
    }

    return defaultPathMap;
  },
  webpack: function(config) {
    config.plugins.push(
      new CopyPlugin([
        {
          from: "../../node_modules/bootstrap/dist/js/bootstrap.js",
          to: "./static/bootstrap.js"
        },
        {
          from: "../../node_modules/jquery/dist/jquery.js",
          to: "./static/jquery.js"
        },
        {
          from: "../../node_modules/popper.js/dist/umd/popper.js",
          to: "./static/popper.js"
        }
      ])
    );
    return config;
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
