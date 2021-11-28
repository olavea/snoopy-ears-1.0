import { graphql } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import Img from "gatsby-image"

export default function SinglePizzaPage({data}) {
  console.log(data)
//  console.log(data)
    return (
      <div>
        <div
          className="blog-post-content"

        />

        <img
          src= {data.file.publicURL}
          alt= 'shark'
        />
        <p> 🦈: {data.file.name}  🔽 GatsbyImage 🔽 / 🔼 img 🔼</p>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt= 'shark' />
      </div>
    )
};
//          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
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