import React from 'react';
import { Link } from 'react-router-dom';
import Slick from 'react-slick';

import './slider.css';

const SliderTemplates = (props) => {

    let template = null;

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    }

    switch(props.type) {
        case ('featured'):
            template = props.data.map((item,i) => {
                return (
                    <div key={i}>
                        <div className="featured-item">
                            <div className="featured-item__img"
                                style={{
                                    background:`url(../images/articles/${item.image})`
                                }}>
                            </div>
                            <Link to={`/articles/${item.id}`}>
                                <div className="featured-item__title">
                                    {item.title}
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            })
            break;
        default:
            template = null;
    }

    return (
        <Slick {...settings}>
            {template}
        </Slick>
    )
}

export default SliderTemplates;