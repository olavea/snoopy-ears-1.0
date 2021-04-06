import {graphql} from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import {MDXRenderer} from "gatsby-plugin-mdx"
import {GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import SEO from "../components/seo"

const showTale = ({data}) => {
  const treasure = data.mdx
  const image = getImage(treasure.frontmatter.image)
  const underWaterImage = getSrc( treasure.frontmatter.image)
  return (
    <>

      <Layout>
        <article>
        <SEO title={treasure.frontmatter.title}
        description={treasure.frontmatter.description}
        image={underWaterImage}
        imageAlt={treasure.frontmatter.imageAlt} />
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