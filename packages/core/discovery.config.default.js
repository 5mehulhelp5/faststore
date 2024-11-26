module.exports = {
  seo: {
    title: 'FastStore Starter',
    description: 'Fast Demo Store',
    titleTemplate: '%s | FastStore',
    author: 'Store Framework',
  },

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: 'storeframework',
    workspace: 'master',
    subDomainPrefix: ['www'],
    environment: 'vtexcommercestable',
    hideUnavailableItems: false,
    showSponsored: false,
    incrementAddress: true,
  },

  // Default session
  session: {
    currency: {
      code: 'USD',
      symbol: '$',
    },
    locale: 'en-US',
    channel:
      '{"salesChannel":"1","regionId":"","hasOnlyDefaultSalesChannel":"true"}',
    country: 'USA',
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    b2b: null,
    person: null,
  },

  // Default cart
  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: 'https://vtexfaststore.com',
  secureSubdomain: 'https://secure.vtexfaststore.com',
  checkoutUrl: 'https://secure.vtexfaststore.com/checkout',
  loginUrl: 'https://secure.vtexfaststore.com/api/io/login',
  accountUrl: 'https://secure.vtexfaststore.com/api/io/account',

  // Preview redirects
  previewRedirects: {
    home: '/',
    plp: '/office',
    search: '/s?q=headphone',
    pdp: '/apple-magic-mouse/p',
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: '/4k-philips-monitor-99988213/p',
      collection: '/office',
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: '/4k-philips-monitor-99988213/p',
      collection: '/office',
      collection_2: '/technology',
      collection_filtered:
        '/office/?category-1=office&marca=acer&facets=category-1%2Cmarca',
      search: '/s?q=orange',
    },
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: 'GTM-PGHZ95N',
  },

  cms: {
    data: process.env.CMS_DATA,
  },

  experimental: {
    cypressVersion: 12,
    enableCypressExtension: false,
    noRobots: false,
    preact: false,
    revalidate: 300, // Revalidate every 5 minutes
  },
}
