import React from 'react';
import { Link } from 'react-router-dom';

import './buttons.css';

const Button = (props) => {
    let template = null;
    switch(props.type) {
        case 'loadmore':
            template = (
                <div className="btn btn-block btn--blue"
                    onClick={props.loadMore}
                >
                    {props.cta}
                </div>
            );
            break;
        case 'LinkTo':
            template = (
                <Link
                    to={props.linkTo}
                    className="btn btn-block btn--blue"
                >
                    {props.cta}
                </Link>
            );
            break;
        default:
            template = null;
    }
    return template;
}

export default Button;