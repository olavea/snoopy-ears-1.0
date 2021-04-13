import * as React from "react"
import MrPragma from "../components/MrPragma"
import Layout from "../components/Layout"
import {graphql, Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import SEO from "../components/seo"

export const pageQuery = graphql`
{
  allMdx(sort: {
    fields: [frontmatter___title],
    order: ASC
  }){
    nodes {
      slug
      frontmatter {
        title
      }
    }
  }
}
`;


const IndexPage = ({data}) => {
  const treasures = data.allMdx.nodes
  return (
    <>
    <Layout>
      <SEO title={`🎩 Slash is Home`} />
      <Link to="/shop/playfuller"><h2>Not Sure How Your Coding Practice Can Get Better?</h2></Link>
      <Link to="/showyourcodepodcast/04/"><h2>Show Your Code Podcast</h2></Link>
      {
        treasures.map((treasure) => {

          return (
            <Link to={treasure.slug} key={treasure.slug}>
              <h2>{treasure.frontmatter.title}</h2>
            </Link>
          )
        })
      }
      <StaticImage
        src="https://pbs.twimg.com/media/EjO5-6dX0AAmE9r?format=jpg&name=small"
        alt="Ruby's TimeShip Goes Deeper"
        layout="fullWidth"

      />


      <title>ITM<span role="img" aria-label="TimeShip emoji">
      ⛵
      </span></title>
      <h1>
        In The Morning Self!
        <br />
        <span >— Let's Test This TimeShip Prototype!</span>
        <br></br>
        <span role="img" aria-label="Cat face emojis">
        ⛵😺👍
        </span>
        <br></br>
        <span > With WordPress and
        <br></br>Gatsby and <br></br>Contentful and <br></br>Sanity and </span>
        <MrPragma />
        <span role="img" aria-label="Party face emojis">
        🥳🥳🥳
        </span>

      </h1>
      <a href="https://ko-fi.com/s/0f97764ddf">Ready to Start Practicing Coding Playfuller?</a>

      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
      </Layout>
    </>
  )
}

export default IndexPage
