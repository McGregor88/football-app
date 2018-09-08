import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/layout';
import Home from './components/Home/home';
import NewsArticle from './components/Articles/News/Post';
import VideoArticle from './components/Articles/Videos/Video';
import NewsMain from './components/Articles/News/Main';
import VideosMain from './components/Articles/Videos/Main';
import SignIn from './components/signin/signin';

class Routes extends Component {
    render() {
        console.log(this.props)
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/articles/:id" exact component={NewsArticle} />
                    <Route path="/videos/:id" exact component={VideoArticle} />
                    <Route path="/news" exact component={NewsMain} />
                    <Route path="/videos" exact component={VideosMain} />
                    <Route path="/sign-in" exact component={SignIn} />
                </Switch>
            </Layout>
        )
    }
}

export default Routes;