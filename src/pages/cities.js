import React from 'react'
import { graphql } from 'gatsby'


export default function CitiesPage() {
    return (
        <>
          <p>City</p>
        </>
    );
}

export const query = graphql`
  query CityQuery {
    cities: allContentfulCity {
      nodes {
        name
      }
    }
  }

`