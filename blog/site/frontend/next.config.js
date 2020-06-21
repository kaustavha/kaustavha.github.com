const isProd = process.env.NODE_ENV === 'production'

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  assetPrefix: isDev ? '' : './', // fix assets on gh pages ; ref: https://github.com/vercel/next.js/issues/2581
  env: {
    API_URL: isDev ? process.env.API_URL : './',
  },
}
