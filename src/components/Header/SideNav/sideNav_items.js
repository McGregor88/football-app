import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { firebase } from '../../../firebase';
import FontAwesome from 'react-fontawesome';

import './sideNav.css';

const SideNavItems = (props) => {
    const items = [
        {
            link: '/',
            icon: 'home',
            text: "Home",
            login: ''
        },
        {
            link: '/news',
            icon: 'file-text-o',
            text: "News",
            login: ''
        },
        {
            link: '/videos',
            icon: 'play',
            text: "Videos",
            login: ''
        },
        {
            link: '/dashboard',
            icon: 'clipboard',
            text: "Dashboard",
            login: false
        },
        {
            link: '/sign-in',
            icon: 'sign-in',
            text: "Sign in",
            login: true
        },
        {
            link: '/sign-out',
            icon: 'sign-out',
            text: "Sign out",
            login: false
        }
    ]

    const element = (item, i) => (
        <div key={i} className="option">
            <Link to={item.link}>
                <FontAwesome name={item.icon} />
                {item.text}
            </Link>
        </div>
    )

    const restricted = (item, i) => {
        let template = null;

        if(props.user === null && item.login) {
            template = element(item, i)
        }

        if(props.user !== null && !item.login) {
            if(item.link === '/sign-out') {
                template = (
                    <div
                        key={i} 
                        className="option"
                        onClick={() => {
                            firebase.auth().signOut()
                            .then(() => {
                                props.history.push('/')
                            })
                        }}
                    >
                        <FontAwesome name={item.icon} />
                        {item.text}
                    </div>                    
                )
            } else {
                template = element(item, i)
            }
        }

        return template;
    }

    const showItems = () => {
        return items.map((item,i) => {
            return item.login !== '' ?
                restricted(item, i)
            : 
                element(item, i)
        })
    }

    return (    
        <div>
            {showItems()}
        </div>
    )
}

export default withRouter(SideNavItems);