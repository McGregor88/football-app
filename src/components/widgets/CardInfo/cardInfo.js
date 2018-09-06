import React from 'react';
import FontAwesome from 'react-fontawesome';
//import moment from 'moment';

import './cardInfo.css';

const CardInfo = (props) => {

    const teamName = (teams,team) => {
        let data = teams.find((item) => {
            return +item.id === team
        });
        if(data) {
            return data.name
        }
    }

    /*const formatDate = (date) => {
        return moment(date).format(' DD-MM-YYYY');
    }*/

    return (
        <div className="card-info">
            <span className="team-name">
                {teamName(props.teams,props.team)}
            </span>
            <span className="date">
                <FontAwesome name="clock-o"/>
                {props.date}
                {/*formatDate(props.date)*/}
            </span>
        </div>
    )
}

export default CardInfo;