import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const NotFoundPage = () => {
  return (
    <>
    <Layout>
      <SEO title={`🎩 Slash is Home, but you are NOT.`} />
      <div>
      <h1>Welcome to Valhalla!
      </h1>
      <p>Well you need to cross the bridge. But first two quick questions.</p>
      <ol>
      <li>Did you die honorably in coding combat?</li>
      <li>Did you die gripping your pasSword in your hand like a claw?</li>
      <li>No? Go home to Slash 🎩</li>
      </ol>
      <Link to="/"> 🎩 is Home</Link>
      </div>
    </Layout>
    </>
  )
}

export default NotFoundPage
