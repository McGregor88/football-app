import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/layout';
import Home from './components/Home/home';
import NewsArticle from './components/Articles/News/Post';
import VideoArticle from './components/Articles/Videos/Video';
import NewsMain from './components/Articles/News/Main';
import VideosMain from './components/Articles/Videos/Main';
import SignIn from './components/signin/signin';
import Dashboard from './components/Dashboard/dashboard';

const Routes = (props) => {
    return (
        <Layout user={props.user}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/articles/:id" exact component={NewsArticle} />
                <Route path="/videos/:id" exact component={VideoArticle} />
                <Route path="/news" exact component={NewsMain} />
                <Route path="/videos" exact component={VideosMain} />
                <Route path="/sign-in" exact component={SignIn} />
                <Route path="/dashboard" exact component={Dashboard} />
            </Switch>
        </Layout>
    )
}

export default Routes;