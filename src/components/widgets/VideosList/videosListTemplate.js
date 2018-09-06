import React from 'react';
import { Link } from 'react-router-dom';

import CardInfo from '../CardInfo/cardInfo';
import './videosList.css';

const VideosTemplate = (props) => {
    return props.data.map((item,i) => (
        <Link
            to={`/videos/${item.id}`}
            key={i}
        >
            <div className="videolist-item__wrapper">
                <div className="left"
                    style={{
                        background: `url(/images/videos/${item.image})`
                    }}
                >
                    <div></div>
                </div>
                <div className="right">
                    <CardInfo
                        teams={props.teams}
                        team={item.teamId}
                        date={item.date}
                    />
                    <h2>{item.title}</h2>
                </div>
            </div>
        </Link>
    ))
}

export default VideosTemplate;