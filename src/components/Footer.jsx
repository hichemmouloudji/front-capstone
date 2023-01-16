import * as React from 'react';

import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="frontend capstone" />
            <p class="copyright">
                All rights reserved - powered by H.M
            </p>
        </footer>
    );
};

export default Footer;