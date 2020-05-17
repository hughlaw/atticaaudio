module.exports = {
  siteMetadata: {
    title: 'Attica audio recording',
    description:
      'State of the art recording studio loacted in the beautiful Co Donegal countryside',
    author: '@hughlaw',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#252525',
        theme_color: '#252525',
        display: 'minimal-ui',
        icon: 'src/images/favicon.svg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        watchMode: true,
        projectId: 'xgirpvqb',
        dataset: 'production',
        token: process.env.SANITY_TOKEN,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
