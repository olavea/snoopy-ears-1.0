import React from 'react';
import {Link} from 'gatsby';

export default function Nav() {
    return (
        <>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Play-fu/">Play-fu </Link></li>
          </ul>
        </>
    )
}