import React from "react";
import './footer.css';
import { Link } from 'react-router-dom';

import { CURRENT_YEAR } from '../../config';

const Footer = () => (
    <div className="footer">
        <Link to="/" className="logo">
            <img alt="football logo" src="/images/logo.png"/>
        </Link>
        <div className="right">
            @FOOTBALL {CURRENT_YEAR} All rights reserved.
        </div>
    </div>
)

export default Footer;