import { graphql } from 'gatsby'
import React from 'react'

export default function SingleCityPage() {
    return (
        <p>Single City</p>
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
    }


  }




`;

