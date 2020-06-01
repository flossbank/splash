const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: true,
  webpack: (config) => {
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
  },
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    RECAPTCHA_SITE_KEY:
      process.env.NODE_ENV === 'production'
        ? '6LfhKr0UAAAAADAT97B4cfqmhpYNd4xgq0LyXLZC'
        : '6Lfzir0UAAAAAO_GnwyXOTLpzLaHvZvF30oAJzI_',
    API_HOST:
      process.env.NODE_ENV === 'production'
        ? 'https://api.flossbank.com'
        : 'https://api.flossbank.io'
  }
})
