// @ts-check
const path = require('path')
const storeConfig = require('./faststore.config')

/**
 * @type {import('next').NextConfig}
 * */
const nextConfig = {
  /* config options here */
  /* Replaces terser by swc for minifying. It's the default in NextJS 13 */
  swcMinify: true,
  images: {
    domains: [`${storeConfig.api.storeId}.vtexassets.com`],
    deviceSizes: [360, 412, 540, 768, 1280, 1440],
    imageSizes: [34, 68, 154, 320],
  },
  i18n: {
    locales: [storeConfig.session.locale],
    defaultLocale: storeConfig.session.locale,
  },
  sassOptions: {
    additionalData: `@import "src/customizations/src/styles/custom-mixins.scss";`,
  },
  // TODO: We won't need to enable this experimental feature when migrating to Next.js 13
  experimental: {
    scrollRestoration: true,
    // Trace user's `node_modules` dir
    outputFileTracingRoot: path.join(__dirname, '../'),
  },
  webpack: (config, { isServer, dev }) => {
    // https://github.com/vercel/next.js/discussions/11267#discussioncomment-2479112
    // camel-case style names from css modules
    config.module.rules
      .find(({ oneOf }) => !!oneOf)
      .oneOf.filter(({ use }) => JSON.stringify(use)?.includes('css-loader'))
      .reduce((acc, { use }) => acc.concat(use), [])
      .forEach(({ options }) => {
        if (options.modules) {
          options.modules.exportLocalsConvention = 'camelCase'
        }
      })

    // Reduce the number of chunks so we ship a smaller first bundle.
    // This should help reducing TBT
    if (!isServer && !dev && config.optimization?.splitChunks) {
      config.optimization.splitChunks.maxInitialRequests = 1
    }

    // Replace React with Preact only in client production build
    if (!isServer && !dev) {
      Object.assign(config.resolve.alias, {
        // 'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  },
  redirects: storeConfig.redirects,
  rewrites: storeConfig.rewrites,
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  enabled: process.env.ANALYZE === 'true',
})

// @ts-ignore
module.exports = withBundleAnalyzer(nextConfig)
