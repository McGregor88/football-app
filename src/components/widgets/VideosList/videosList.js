import React, { Component } from 'react';
import axios from 'axios';

import { URL } from '../../../config';
import Button from '../Buttons/button';
import './videosList.css';

class VideosList extends Component {
    state = {
        teams: [],
        videos: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    renderTitle = () => {
        return this.props.title ?
            <h3><strong className="text-upper">Football</strong> Videos</h3> 
        : null
    }

    loadMore = () => {

    }

    renderButton = () => {
        return this.props.loadmore ?
            <Button
                type="loadmore"
                loadMore={() => this.loadMore()}
                cta="Load More Videos"
            />
            :
            <Button
                type="LinkTo"
                cta="More videos"
                linkTo="/videos"
            />
    }

    render() {        
        return (
            <div className="videolist-wrapper">
                { this.renderTitle() }
                { this.renderButton() }
            </div>
        )
    }
}

export default VideosList;