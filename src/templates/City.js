import { graphql } from 'gatsby'
import React from 'react'
import Img from "gatsby-image"
import SEO from '../components/seo'

export default function SingleCityPage(data) {
  return (
    <>
      <SEO title={data.data.contentfulCity.name} />
        <div>
          <h1>Goood Mooorning {data.data.contentfulCity.name}!</h1>
          <Img fluid={data.data.contentfulCity.image.fluid} />
        </div>

    </>
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
          ...GatsbyContentfulFluid
        }
      }
    }
  }




`;


