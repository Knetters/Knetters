/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    // Your site metadata here
  },
  plugins: [
    // ... other plugins
    'gatsby-plugin-react-helmet',

    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GRAPHCMS`,
        fieldName: `graphCmsData`,
        url: `https://eu-west-2.cdn.hygraph.com/content/clo4b0uqa6wwz01un3a95a937/master`,
      }
    }
  ],
};
