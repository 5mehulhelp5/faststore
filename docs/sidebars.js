/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

 module.exports = {
  tutorialSidebar: [
    'tutorials/overview',
    {
      type: 'category',
      label: 'Fundamentals',
      collapsed: false,
      items: [
        'tutorials/fundamentals/0',
        'tutorials/fundamentals/1',
        'tutorials/fundamentals/2',
      ],
    },
    {
      type: 'category',
      label: 'Creating storefronts with Gatsby',
      collapsed: false,
      link: { type: 'doc', id: 'tutorials/gatsby-overview' },
      items: [
        'tutorials/gatsby/1',
        'tutorials/gatsby/2',
        'tutorials/gatsby/3',
        'tutorials/gatsby/4',
        'tutorials/gatsby/5',
        'tutorials/gatsby/6',
      ],
    },
    {
      type: 'category',
      label: 'Integrating your storefront with VTEX Headless CMS',
      collapsed: false,
      link: { type: 'doc', id: 'tutorials/cms-overview' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'tutorials/cms',
        },
      ],
    },
  ],
  cmsStoreComponents: [
    {
      type: 'category',
      label: 'Integrating your storefront with VTEX Headless CMS',
      collapsed: false,
      link: { type: 'doc', id: 'tutorials/cms-storecomponents/overview' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'tutorials/cms-storecomponents',
        },
      ],
    },
  ],
  howToGuidesSidebar: [
    'how-to-guides/overview',
    {
      type: 'category',
      label: 'Platform Integration',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Platform Integration',
        slug: '/how-to-guides/platform-integration',
      },
      items: [
        {
          type: 'category',
          label: 'VTEX',
          collapsed: false,
          link: { type:'doc', id: 'how-to-guides/platform-integration/vtex-integration'},
          items: [
            {
              type: 'autogenerated',
              dirName: 'how-to-guides/platform-integration/vtex',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'CMS Integration',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'VTEX Headless CMS',
        slug: '/how-to-guides/cms/vtex-headless-cms',
      },
      items: [
        {
          type: 'category',
          label: 'VTEX Headless CMS',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'VTEX',
            slug: '/how-to-guides/cms/vtex',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'how-to-guides/cms/vtex-headless-cms',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Deployment',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Deployment',
        slug: '/how-to-guides/deployment',
      },
      items: [
        {
          type: 'category',
          label: 'VTEX IO WebOps',
          collapsed: true,
          link: {
            type: 'generated-index',
            title: 'VTEX IO WebOps',
            slug: '/how-to-guides/webops',
          },
          items: [
            {
              type: 'category',
              label: 'Security',
              collapsed: false,
              link: { type: 'doc', id: 'how-to-guides/webops/security' },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'how-to-guides/webops/security',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'how-to-guides/contributing',
        },
      ],
    },
  ],
  conceptsSidebar: ['conceptual-guides/overview'],
  referenceSidebar: [
    'reference/faststore',
    {
      type: 'category',
      label: 'FastStore UI',
      collapsed: false,
      link: { type: 'doc', id: 'reference/ui/faststore-ui' },
      items: [
        'reference/ui/get-started-faststore-ui',
        {
          type: 'category',
          label: 'Atoms',
          collapsed: true,
          link: {
            type: 'generated-index',
            title: 'Atoms',
            description: `Check out all FastStore UI atoms. Atoms are the smallest possible components, such as buttons, labels, icons, and badges.`,
            slug: '/reference/ui/atoms',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'reference/ui/atoms',
            },
          ],
        },
        {
          type: 'category',
          label: 'Molecules',
          collapsed: true,
          link: {
            type: 'generated-index',
            title: 'Molecules',
            description: `Check out all FastStore UI molecules. Molecules are simple groups of two or more atoms functioning together as a unit. `,
            slug: '/reference/ui/molecules',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'reference/ui/molecules',
            },
          ],
        },
        {
          type: 'category',
          label: 'Organisms',
          link: {
            type: 'generated-index',
            title: 'Organisms',
            description: `Check out all FastStore UI organisms. Organisms are relatively complex components that form distinct sections of an interface.`,
            slug: '/reference/ui/organisms',
          },
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'reference/ui/organisms',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'FastStore SDK',
      collapsed: false,
      link: { type: 'doc', id: 'reference/sdk/faststore-sdk' },
      items: [
        'reference/sdk/Analytics',
        {
          type: 'category',
          label: 'Cart',
          link: { type: 'doc', id: 'reference/sdk/cart' },
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'reference/sdk/cart',
            },
          ],
        },
        {
          type: 'category',
          label: 'Search',
          collapsed: true,
          link: { type: 'doc', id: 'reference/sdk/search' },

          items: [
            {
              type: 'autogenerated',
              dirName: 'reference/sdk/search',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'FastStore API',
      collapsed: false,
      link: { type: 'doc', id: 'reference/api/faststore-api' },
      items: ['reference/api/faststore-api'],
    },
  ],
}