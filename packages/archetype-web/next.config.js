module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    }
  },
  transpileModules: ['archetype-theme']
}

const withCSS = require('@zeit/next-css')
module.exports = withCSS(module.exports)
const withSass = require('@zeit/next-sass')
module.exports = withSass(module.exports)
const withTM = require('next-transpile-modules')
module.exports = withTM(module.exports)
const withImages = require('next-images')
module.exports = withImages(module.exports)
