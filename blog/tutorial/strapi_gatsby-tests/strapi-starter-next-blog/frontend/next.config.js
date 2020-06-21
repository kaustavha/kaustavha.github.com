const isProd = process.env.NODE_ENV === 'production'

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  env: {

    API_URL: './',
    assetPrefix: './', // fix assets on gh pages ; ref: https://github.com/vercel/next.js/issues/2581
    // API_URL: isDev ? process.env.API_URL : process.env.NEXT_PROD_API_URL,
    // assetPrefix: isDev ? '' : './' // fix assets on gh pages ; ref: https://github.com/vercel/next.js/issues/2581
  },
}
