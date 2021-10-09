import React from "react";
import Yearslist from "../components/PizzaList";
import { graphql } from 'gatsby'
import Nav from "../components/Nav";

export default function PizzasPage({data}) {

    const pizzaTreasure = data.allSanityImageAsset.nodes;
    // const images = data.allSanityImages.nodes;
    return (
        <>
            <Nav />
            <Yearslist pizzaTreasure={pizzaTreasure} />
        </>
    );
    console.log(data);
}

export const query = graphql`
    query YearsQuery {
        allSanityImageAsset {
          nodes {
            originalFilename
            url
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
            assetId
          }
        }
        allSanityPizza {
          nodes {
            name
            id
            slug {
              current
            }
          }
        }
      }
`;