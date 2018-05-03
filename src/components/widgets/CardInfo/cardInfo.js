import React from 'react';
import FontAwesome from 'react-fontawesome';

import './cardInfo.css';

const CardInfo = (props) => {

    const teamName = (teams,team) => {
        let data = teams.find((item) => {
            return item.id === team
        });
        if(data) {
            return data.name
        }
    }

    return (
        <div className="card-info">
            <span className="team-name">
                {teamName(props.teams,props.team)}
            </span>
            <span className="date">
                <FontAwesome name="clock-o"/>
                {props.date}
            </span>
        </div>
    )
}

export default CardInfo;