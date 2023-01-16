import * as React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <li>
                <ul>
                    <Link to="/">Home</Link>
                </ul>
                <ul>
                    <Link to="/booking">Booking</Link>
                </ul>
                <ul>
                    <Link to="/about">About</Link>
                </ul>
            </li>

        </nav>
    );
};

export default Nav;