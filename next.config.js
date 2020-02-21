const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: 'babel-loader'
        },
        {
          loader: 'react-svg-loader',
          options: {
            jsx: true // true outputs JSX tags
          }
        }
      ]
    })
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    config.plugins = config.plugins || []

    config.plugins = [...config.plugins]

    return config
  }
})
