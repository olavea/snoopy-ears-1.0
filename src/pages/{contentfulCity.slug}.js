import React from "react"
import { graphql } from "gatsby"

const BlogPostPage = ({ data }) => <h1>Good Morning! {data.contentfulCity.name}</h1>

export const query = graphql`
  query($id: String!) {
    contentfulCity(id: {eq: $id}) {
      name
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }




`


export default BlogPostPage