module.exports = {
  pathPrefix: '/', // Change to `/running_page` when running on github pages
  siteMetadata: {
    siteTitle: 'Ergou can run!',
    siteUrl: 'https://running-page-psi-plum.vercel.app/',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
    description: 'Personal site and blog',
    navLinks: [
      {
        name: 'About',
        url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
      },
    ],
  },
  plugins: [
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/static/',
      },
    },
    {
      resolve: "gatsby-plugin-vercel",
      options: {
        // (optional) Prints metrics in the console when true
        debug: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-alias-imports',
      options: {
        rootFolder: './',
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#e1e1e1',
        theme_color: '#e1e1e1',
        display: 'standalone',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        runtimeCaching: [
          {
            urlPattern: /^https?:.*\/icons\/.*\.png/,
            handler: `CacheFirst`,
          },
          {
            urlPattern:
              /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `StaleWhileRevalidate`,
          },
          {
            urlPattern: /^https?:\/\/api\.mapbox\.com\//,
            handler: `StaleWhileRevalidate`,
          },
          {
            urlPattern: /^https?:.*\/page-data\/.*\.json/,
            handler: `StaleWhileRevalidate`,
          },
        ],
        skipWaiting: true,
        clientsClaim: true,
      },
    },
  ],
};
