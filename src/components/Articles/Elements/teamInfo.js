import React from 'react';

import '../articles.css';

const teamInfo = (props) => {
    const stat = props.team.stats[0];
    return (
        <div className="article-team-header">
            <div
                className="left"
                style={{
                    background:`url('/images/teams/${props.team.logo}')`
                }}
            >
            </div>
            <div className="right">
                <div>
                    <span>{props.team.city} {props.team.name}</span>
                </div>
                <div>
                    <strong className="text-upper">Wins: {stat.wins}-Draws: {stat.draws}-Defeats: {stat.defeats}</strong>
                </div>
            </div>
        </div>
    )
}

export default teamInfo;