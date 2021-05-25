require("dotenv").config({
  path: `.env.dev`,
})



module.exports = {
  siteMetadata: {
    title: "TimeShip",
    titleTemplate: "%s ·For The UnderWater Dev Practicing  Play-Foo",
    description: "Prototype of a Personal Dev Blog for Ola Vea (43 🦇😺) and Lillian (6 🦄)",
    siteUrl: `https://olavea.gtsb.io/`,
    url: `https://snoopy-ears.netlify.app`,
    image: "/images/icon.png", // Get my OlaVea iconPath to your image you placed in the 'static' folder
    twitter: "@olaholstvea",
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

    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 100,
          formats: ["auto", "webp", "avif"],
          placeholder: "blurred",
        },
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-preact",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
        // name: "images",
        // path: "./src/images/",
      },
      __key: "images",
    },

    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: `@theme-ui/preset-funk`,
        prismPreset: `prism-okaidia`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `olavea`,
        short_name: `olavea`,
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
      // options: {
      //   workboxConfig: {
      //       globPatterns: ['**/icon-path*']
      //   }
      // }
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://app.olavea.com/graphql`,
      },
    },
  ],
};
