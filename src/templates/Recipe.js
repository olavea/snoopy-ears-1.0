import { graphql } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

//<p> 🦈: {data.file.name}  🔽 GatsbyImage 🔽 / 🔼 img 🔼</p>
//          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}

const PizzaGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

`;

export default function SinglePizzaPage({data}) {
  return (
    <PizzaGrid>
      <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt= {data.file.name} />
      <div>
      <h2 className="mark">🦈: {data.file.name}</h2>
      <img
        src= {data.file.publicURL}
        alt= {data.file.name}
      />
      </div>
    </PizzaGrid>
  )
};

export const query = graphql`
query MyQuery($id: String!) {
  file(id: {eq: $id}) {
    id
    name
    publicURL
    childImageSharp {
      gatsbyImageData(
          width: 1333,
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
    }

  }
}
`;