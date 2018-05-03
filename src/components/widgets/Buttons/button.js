import React from 'react';

import './buttons.css';

const Button = (props) => {
    let template = null;
    switch(props.type) {
        case 'loadmore':
            template = (
                <div className="btn btn--blue"
                    onClick={props.loadMore}
                >
                    {props.cta}
                </div>
            );
            break;
        default:
            template = null;
    }
    return template;
}

export default Button;