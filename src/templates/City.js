import { graphql } from 'gatsby'
import React from 'react'
import Img from "gatsby-image"

export default function SingleCityPage(data) {
  return (
      <div>
        <h1>Hello gatsby-image</h1>
        <Img fluid={data.data.contentfulCity.image.fluid} />
      </div>
    )
}
// This needs to be dynamic
// based on the slug
// passed in via context in
// gatsby-node.js

export const query = graphql`
  query($slug: String!) {
    contentfulCity(slug: {eq: $slug}) {
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }




`;


