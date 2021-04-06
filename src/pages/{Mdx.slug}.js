import {graphql} from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import {MDXRenderer} from "gatsby-plugin-mdx"
import {GatsbyImage, getImage} from "gatsby-plugin-image"

const showTale = ({data}) => {
  const treasure = data.mdx
  const image = getImage(treasure.frontmatter.image)
  return (
    <>
      <Layout>
        <article>
          <GatsbyImage image={image} alt={treasure.frontmatter.imageAlt} />

      <h1>{treasure.frontmatter.title}</h1>
      <MDXRenderer>
       {treasure.body}
      </MDXRenderer>
        </article>
      </Layout>
    </>
  )
};

export const query =graphql`
    query askWerlinToTellATale(
        $id: String
    ){
        mdx(id: {eq: $id}){
            frontmatter {
                title
                image {
                  childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                  }
                }
                imageAlt
            }
            body
        }
    }

`;

export default showTale