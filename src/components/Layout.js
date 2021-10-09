import React from "react";
import Nav from '../components/Nav'



import {Link} from "gatsby"
import Footer from './Footer'
//<Link to="/">Go home to Slash 🎩 </Link>
// <p>Ruby-Ruby-Ruby-Ruuuuuby! Oooh Oooh Oooh Oooh Oooooh</p>


export default function Layout({ children }) {
    return (
        <div >
            <Nav />
            {children}
            <Footer />
        </div>
    );
}