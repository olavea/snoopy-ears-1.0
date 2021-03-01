import React from 'react'
import Nav from '../components/Nav'

export default function Footer( ) {
    return (
        <footer>
            <Nav />
            <p>&copy; Ola "Play-fu" Vea {new Date().getFullYear()} </p>
        </footer>
    );
}