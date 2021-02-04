import { graphql } from 'gatsby'
import React from 'react'

export default function SingleCityPage() {
    return (
        <p>Single City</p>
    )
}

export const query = graphql`
  query($slug: String!) {

    contentfulCity(slug: {eq: $slug}) {
      name
    }


  }




`;

