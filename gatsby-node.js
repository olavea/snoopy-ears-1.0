// gatsby-node.js
//              0. ↪️ Captain createPages hook ↩️
exports.createPages = async ({ graphql, actions }) => {
//              1. bakingSong = Lilly the Bunny require the bakingSong from granny Shark's gingerbread Recipe
  const bakingSong = require.resolve('./src/templates/Recipe.js')

  console.log('Madness? MADNESS?! This. Is. PAAAageees! 💪😺👢');
//              2. bakingSupplies: image files in folders
  const { data } = await graphql(`{
      bakingSupplies: allFile(sort: {fields: name, order: DESC}) {
        edges {
          node {
            id
            name
          }
        }
      }
  }`)
//              3. Loop over the image nodes and for each create a page
//              console.log(data.bakingSupplies.edges);
  data.bakingSupplies.edges.forEach((ahoyCookie, index) => {
             console.log(ahoyCookie.node);
    actions.createPage({
//              A. «Ahoy! Cookie?!»
//              Cap'n Fox shouts and embarks. 🦊
      path: `${ahoyCookie.node.name}`,
//              B. Bunny sings badly
//              and bakes baby sharks. 🐰
      component: bakingSong,
//              C. Catsby looks tasty
//              Fox gets hungry for kitten. 🐯
      context: {
        fox: 'is hungry for kitten',
        id: ahoyCookie.node.id,
      },
//              D. Don't Show Goodies to Fox
//              and maybe get bitten. 🎩
      defer: index + 1 > 4,
//              A. 🦊
//              B. 🐰
//              C. 🐯
//              D. 🎩 DSG
    })
  });
};
