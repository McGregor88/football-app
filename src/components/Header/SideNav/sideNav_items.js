import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import './sideNav.css';

//<div className="option">
//<Link to="/">
//    <FontAwesome name="home" />
//    Home
//</Link>
//</div>

const SideNavItems = () => {

    const items = [
        {
            link: '/',
            icon: 'home',
            text: "Home"
        },
        {
            link: '/news',
            icon: 'file-text-o',
            text: "News"
        },
        {
            link: '/videos',
            icon: 'play',
            text: "Videos"
        },
        {
            link: '/sign-in',
            icon: 'sign-in',
            text: "Sign in"
        },
        {
            link: '/sign-out',
            icon: 'sign-out',
            text: "Sign out"
        }
    ]

    const showItems = () => {
        return items.map((item,i) => {
            return (
                <div key={i} className="option">
                    <Link to={item.link}>
                        <FontAwesome name={item.icon} />
                        {item.text}
                    </Link>
                </div>
            )
        })
    }

    return (    
        <div>
            {showItems()}
        </div>
    )
}

export default SideNavItems;