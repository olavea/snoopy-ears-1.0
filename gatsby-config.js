module.exports = {
  siteMetadata: {
    title: "Snoopy Ears 1.0",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "fBGXaGo6reTNJ_bXkGvlcVyejWMkbAsX-kIt2vsbGw8",
        spaceId: "4zhx15eo3eqn",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
