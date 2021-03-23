require("dotenv").config({
  path: `.env.dev`,
})



module.exports = {
  siteMetadata: {
    title: "Snoopy Ears 1.0",
    titleTemplate: "%s · The The Play-Fu Practicing Dev",
    description: "Prototype of a Personal Dev Blog for Ola Vea",
    siteUrl: `https://snoopy-ears.netlify.app`,
    url: `https://snoopy-ears.netlify.app`,
    image: "/images/icon.png", // Get my OlaVea iconPath to your image you placed in the 'static' folder
    twitterUsername: "@olaholstvea",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/posts`,
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    `gatsby-plugin-preact`,
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#fffaf0`,
        theme_color: `ff1616`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
            globPatterns: ['**/icon-path*']
        }
      }
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://app.olavea.com/graphql`,
      },
    },
  ],
};
