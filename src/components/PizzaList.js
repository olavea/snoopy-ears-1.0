import { Link } from 'gatsby';
import React from 'react';
import Img from "gatsby-image"

function SingleYear({ pizza }) {
  console.log(pizza.name);
  return (
    <div>
      <Link to={`/year/${pizza.url}`}>
        <h2>
          <span className="mark">{pizza.originalFilename}</span>
        </h2>

        <Img fluid={pizza.fluid} alt={pizza.originalFilename}/>
      </Link>

    </div>
  );
}

export default function Yearslist({ pizzaTreasure }) {
  return (
    <div>
      {pizzaTreasure.map((pizza) => (
        <SingleYear key={pizza.assetId} pizza={pizza} />
      ))}
    </div>
  );
}