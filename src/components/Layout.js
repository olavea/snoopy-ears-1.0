import React from 'react'
import Nav from '../components/Nav'

import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>

            <p>{children}</p>
            <Nav />
            <Footer />
        </>
    );
}