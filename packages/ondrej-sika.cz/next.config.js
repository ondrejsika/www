const CopyPlugin = require("copy-webpack-plugin");
const yaml = require("js-yaml");
const fs = require("fs");

module.exports = {
  env: {
    TRAININGCRM_URL: process.env.TRAININGCRM_URL
  },
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

      // export blog tags
      var tags = new Set();
      posts.forEach(function(post) {
        if (post.tags)
          post.tags.forEach(function(tag) {
            tags.add(tag);
          });
      });

      tags.forEach(function(tag) {
        defaultPathMap[`/blog/tag/${tag}`] = {
          page: "/blog/tag/[id]",
          query: { id: tag }
        };
      });

      // remove default session page render (without session)
      delete defaultPathMap["/verejne-terminy/[id]"];

      var sessions = yaml.safeLoad(
        fs.readFileSync("../data/training/sessions.yml", "utf8")
      );
      sessions.forEach(function(session) {
        defaultPathMap[`/verejne-terminy/${session.id}`] = {
          page: "/verejne-terminy/[id]",
          query: { id: session.id }
        };
      });

      // remove default session page render (without session)
      delete defaultPathMap["/private/pro-partnery/[id]"];

      var courses = yaml.safeLoad(
        fs.readFileSync("../data/training/courses.yml", "utf8")
      );
      courses.forEach(function(course) {
        if (course.ignore_for_partners) return;
        defaultPathMap[`/private/pro-partnery/${course.id}`] = {
          page: "/private/pro-partnery/[id]",
          query: { id: course.id }
        };
      });

      // remove default news page render (without session)
      delete defaultPathMap["/news/[id]"];

      var news_list = yaml.safeLoad(fs.readFileSync("data/news.yml", "utf8"));
      news_list.forEach(function(news) {
        defaultPathMap[`/news/${news.id}`] = {
          page: "/news/[id]",
          query: { id: news.id }
        };
      });

      // remove default news page render (without session)
      delete defaultPathMap["/devops-faq/[id]"];

      var faq_list = yaml.safeLoad(
        fs.readFileSync("../data/faq-cs.yml", "utf8")
      );
      faq_list.forEach(function(faq) {
        defaultPathMap[`/devops-faq/${faq.id}`] = {
          page: "/devops-faq/[id]",
          query: { id: faq.id }
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
