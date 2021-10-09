import React from 'react';
import {Link} from 'gatsby';

export default function Nav() {
     return <nav>
            <ul>
                <li>
                    <Link to="/">Hot Now & Then</Link>
                </li>
                <li>
                    <Link to="/pizzas">Pizza Menu</Link>
                </li>
                <li>
                    <Link to="/">LOGO</Link>
                </li>
                <li>
                    <Link to="/slicemasters">SlicePirates</Link>
                </li>
                <li>
                    <Link to="/orders">Order In Time</Link>
                </li>

            </ul>
        </nav>

}