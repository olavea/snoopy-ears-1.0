


const path = require('path')



async function turnCitiesIntoPages({ graphql, actions, reporter }) {
  // 1. Get a template for this page
  const pizzaTemplate =path.resolve('./src/templates/City.js');
  // 2. query all cities
  const { data } = await graphql(`
    query {
        allContentfulCity {
                  nodes {
                    name
                    slug

                  }
                }
              }
  `);
  console.log(data);
  // 3. Loop over each city and create a page for that city
  data.allContentfulCity.nodes.forEach((city) =>{
      actions.createPage({
        path: `location/${city.slug}`,

        component: pizzaTemplate,
        context: {
            ola: 'is practicing playfuller 🔨😺⛵',
            slug: city.slug,
        }
      })
  });
}

exports.createPages = async (params) => {

    // Add allContentfulCity inside exports.createPages #4
    await
    // Create pages dynamically
    // cities
    await turnCitiesIntoPages(params);
    // const { createPage } = actions
    console.log('BUIIILDNG BEEEETTER CITIIIIES!');
    console.log('BUIIILDNG BEEEETTER CITIIIIES!');
    console.log('BUIIILDNG BEEEETTER CITIIIIES!');
    console.log('BUIIILDNG BEEEETTER CITIIIIES!');
}

// Over is Wes Bos style Code
const chunk = require(`lodash/chunk`)

// OlaVeaQuestion: Did I install this lodash/chunk?
// OlaVeaAnswer: No

// This is a simple debugging tool
// dd() will prettily dump to the terminal and kill the process
// const { dd } = require(`dumper.js`)

/**
 * exports.createPages is a built-in Gatsby Node API.
 * It's purpose is to allow you to create pages for your site! 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query content for WordPress posts
  const {
    data: {
      allWpPost: { nodes: allPosts },
    },
  } = await graphql(`
    query {
      allWpPost {
        nodes {
          id
          uri
        }
      }
    }
  `)
  const postTemplate = path.resolve(`./src/templates/blog-post.js`)
  allPosts.forEach(post => {
    createPage({
      // will be the url for the page
      path: `blog${post.uri}`,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.id,
      },
    })
  })
}