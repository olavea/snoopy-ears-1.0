import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
// line 14
// <p>{pizza.toppings.map((topping) => topping.name).join(', ')}</p>

function SinglePizza({ pizza }) {
  return (
    <div>
      <Link to={`/${pizza.name}`}>
        <h2>
          <span className="mark">{pizza.name}</span>
        </h2>
        <GatsbyImage image={pizza.childImageSharp.gatsbyImageData} alt= {pizza.name} />
      </Link>
    </div>
  );
}

export default function PizzaList({ pizzaTreasure }) {
  return (
    <div>
      {pizzaTreasure.map((pizza) => (
        <SinglePizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
}