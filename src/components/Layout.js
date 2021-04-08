
/** @jsx jsx */
import {jsx} from "theme-ui"
// import Nav from '../components/Nav'
import {Link} from "gatsby"
import Footer from './Footer'


const bodyStyles = {
  mx: `2rem`,
  padding: `1rem`
}

export default function Layout({ children }) {
    return (
        <div sx={bodyStyles}>

          <header>
            <nav>
              <Link to="/">Go home to Slash 🎩 </Link>
            </nav>
          </header>


          <main>{children}</main>
          <Footer />
        </div>
    );
}