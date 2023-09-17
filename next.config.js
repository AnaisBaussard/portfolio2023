const { i18n } = require('./next-i18next.config')
const withMDX = require('@next/mdx')()

module.exports = withMDX()
module.exports = {
  i18n,
  webpack(c) {
    c.module.rules.push({
      test: /\.mdx?$/,
      use: ['babel-loader', '@mdx-js/loader'],
    })
    return c
  },
}
