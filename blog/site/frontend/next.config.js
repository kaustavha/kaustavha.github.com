const isProd = process.env.NODE_ENV === 'production'

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  assetPrefix: isDev ? '' : 'http://kaustavha.github.io/blog/site/frontend/out', // fix assets on gh pages ; ref: https://github.com/vercel/next.js/issues/2581
  env: {
    API_URL: isDev ? process.env.API_URL : '../',
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
}
