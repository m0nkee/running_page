module.exports = {
  pathPrefix: '/running', // Change to `/running_page` when running on github pages
  siteMetadata: {
    siteTitle: 'Running Page',
    siteUrl: 'http://running.zlei.cf',
    logo: 'https://lh3.googleusercontent.com/a-/AAuE7mDe04qHRzRtN4_sgKH--mIWB4yRPJl7hg05mnEJ=s100',
    description: 'Personal site and blog',
    navLinks: [
      {
        name: 'Blog',
        url: 'https://m0nkee.github.io',
      },
      {
        name: 'Home',
        url: 'http://zlei.cf',
      },
      {
        name: 'About',
        url: 'https://github.com/m0nkee/running_page/blob/master/README-CN.md',
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
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    }
  ],
};
