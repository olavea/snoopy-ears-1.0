// pages / pizzas.js
import { graphql } from "gatsby";
import React from "react";
import PizzaList from "../components/PizzaList";

export default function PizzasPage({data}) {
  console.log(data.pizzas)
  const pizzaTreasure = data.pizzas.nodes;
  return (
    <>
      <PizzaList pizzaTreasure={pizzaTreasure} />
    </>
  );
}

export const query = graphql`
  query PizzaQuery {
    pizzas:   allFile(sort: {fields: name, order: ASC}) {
      nodes {
        name
        id
        childImageSharp {
          gatsbyImageData(width: 1333, placeholder: BLURRED, formats: AUTO)
        }
      }
    }
  }
`;


