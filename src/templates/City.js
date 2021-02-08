import { graphql } from 'gatsby'
import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
//{data.contentfulCity.name}<
//<p>{data.contentfulCity.description}</p>
export default function SingleCityPage(data) {
    const image = getImage(data.imageSharp)
    return (
      <section>
        <h2>Yo</h2>
        <GatsbyImage image={image} alt="Yo" />
        console.log({data.contentfulCity.image})
      </section>
    )
}
// This needs to be dynamic
// based on the slug
// passed in via context in
// gatsby-node.js

export const query = graphql`
  query($slug: String!) {

    contentfulCity(slug: {eq: $slug}) {
      name
      image {
        fluid {
          src
        }
      }
    }
    imageSharp {
      gatsbyImageData(width: 333, placeholder: DOMINANT_COLOR)
    }
  }
`;

