import {graphql} from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import {MDXRenderer} from "gatsby-plugin-mdx"


const showTale = ({data}) => {
  const post = data.mdx
  return (
    <>
      <Layout>
        <article>

      <h1>{post.frontmatter.title}</h1>
      <MDXRenderer>
       {post.body}
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
            }
            body
        }
    }

`;

export default showTale