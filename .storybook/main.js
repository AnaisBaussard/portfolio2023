const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  typescript: {
    reactDocgen: 'react-docgen',
  },
  addons: ['@storybook/addon-essentials'],
  webpackFinal: async config => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname, '../public'),
    ]

    return config
  },
}
