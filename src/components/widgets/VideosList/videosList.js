import React, { Component } from 'react';
import axios from 'axios';

import { URL } from '../../../config';
import VideosTemplate from './videosListTemplate';
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

    componentDidMount() {
        this.request(this.state.start, this.state.end)
    }

    request = (start,end) => {
        if(this.state.teams.length < 1) {
            axios.get(`${URL}/teams`)
            .then(response => {
                this.setState({
                    teams: response.data
                })
            })
        }
        axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
        .then(response => {
            this.setState({
                videos: [...this.state.videos, ...response.data]
            })
        })
    }

    renderVideos = () => {
        let template = null;

        switch(this.props.type) {
            case('card'):
                template = <VideosTemplate data={this.state.videos} teams={this.state.teams}/>
                break;
            default:
                template = null
        }
        return template;
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
                { this.renderVideos() }
                { this.renderButton() }
            </div>
        )
    }
}

export default VideosList;