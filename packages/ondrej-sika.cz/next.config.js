const CopyPlugin = require("copy-webpack-plugin");
yaml = require("js-yaml");
fs = require("fs");
path = require("path");

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function buildExportPathMap(custom_exclude_paths) {
  var out = {};
  var exclude_paths = ["/_document", "/_app"].concat(custom_exclude_paths);
  walkDir("pages/", function(filePath) {
    // remove page/ and .js
    filePath = filePath.substr(5).substr(0, filePath.length - 5 - 3);
    // replace /index with /
    filePath = filePath.replace("/index", "");
    // fix file path for root index
    if (filePath == "") filePath = "/";
    if (!exclude_paths.includes(filePath)) out[filePath] = { page: filePath };
  });
  try {
    var posts = yaml.safeLoad(fs.readFileSync("data/blog-posts.yaml", "utf8"));
    posts.forEach(function(post) {
      var path = post.url;

      out[path] = { page: "/blog-post", query: { post_id: post.id } };
    });
  } catch (e) {
    console.log(e);
  }
  return out;
}

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return buildExportPathMap(["/blog-post"]);
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
  transpileModules: ["@app"]
};

const withCSS = require("@zeit/next-css");
module.exports = withCSS(module.exports);

const withSass = require("@zeit/next-sass");
module.exports = withSass(module.exports);

const withTM = require("next-transpile-modules");
module.exports = withTM(module.exports);

const withImages = require("next-images");
module.exports = withImages(module.exports);

const withYAML = require("next-yaml");
module.exports = withYAML(module.exports);
