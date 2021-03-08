import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <>
    <div>
     <h1>Welcome to Valhalla!
     </h1>
     <p>Well you need to cross the bridge. But first two quick questions.</p>
     <ol>
     <li>Did you die honorably in coding combat?</li>
     <li>Did you die still holding your pasSword in your hand?</li>
     <li></li>
     </ol>
     <Link to="/">No? Go home to Slash 🎩</Link>
    </div>

    </>
  )
}

export default NotFoundPage
