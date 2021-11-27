module.exports = {
  siteMetadata: {
    siteUrl: "https://demo.raae.codes",
    title: "@raae demo starter",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "@raae/gatsby-plugin-new-css",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: path.join(__dirname, `src`, `images`),
    //   },
    // },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`
  ],
};
