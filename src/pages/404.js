import * as React from "react"
import { Link } from "gatsby"

import {StaticImage} from "gatsby-plugin-image"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  return (
    <>
    <Layout>
      <SEO title={`🎩 Slash is Home, but you are NOT.`} />
      <StaticImage src="../images/Joker_pink_1.jpg" alt="LEGO Joker BANG!" />


      <p>Jump in my old school batmobile and I'll give you a ride to my beauuuuutiful mansion for some good old fashioned fun.</p>
      <Link to="/">Or go Home to Slash <span role="img" alt="tophat emoji">🎩</span></Link>
      <div></div>

      <a href="https://www.lego.com/en-no/product/batman-classic-tv-series-batmobile-76188">Old school LEGO Batmobile™ $29.99, will ship in 60 days</a>
      <div></div>
      <a href="https://www.lego.com/en-no/product/batman-classic-tv-series-batmobile-76188">The Joker™ Manor, Retired Product</a>
      <div></div>


    </Layout>
    </>
  )
}

export default NotFoundPage
