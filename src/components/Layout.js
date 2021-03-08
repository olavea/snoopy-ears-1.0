import React from 'react'
// import Nav from '../components/Nav'
import {Link} from "gatsby"

import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div>

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