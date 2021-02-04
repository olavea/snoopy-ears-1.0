


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
        path: `city/${city.name}`,

        component: pizzaTemplate,
        context: {
            ola: 'is cool',
            slug: city.slug,
        }
      })
  });
}

exports.createPages = async (params) => {
    // Create pages dynamically
    // cities
    await turnCitiesIntoPages(params);
    // const { createPage } = actions
    console.log('BUIIILDNG BEEEETTER CITIIIIES!');
    console.log('BUIIILDNG BEEEETTER CITIIIIES!');
    console.log('BUIIILDNG BEEEETTER CITIIIIES!');
    console.log('BUIIILDNG BEEEETTER CITIIIIES!');
  }