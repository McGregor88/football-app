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

import PrivateRoutes from './components/AuthRoutes/privateRoutes';
import PublicRoutes from './components/AuthRoutes/publicRoutes';


const Routes = (props) => {
    return (
        <Layout user={props.user}>
            <Switch>
                <PublicRoutes {...props} restricted={false} path="/" exact component={Home} />
                <PublicRoutes {...props} restricted={false} path="/articles/:id" exact component={NewsArticle} />
                <PublicRoutes {...props} restricted={false} path="/videos/:id" exact component={VideoArticle} />
                <PublicRoutes {...props} restricted={false} path="/news" exact component={NewsMain} />
                <PublicRoutes {...props} restricted={false} path="/videos" exact component={VideosMain} />
                <PublicRoutes {...props} restricted={true} path="/sign-in" exact component={SignIn} />
                <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard} />
            </Switch>
        </Layout>
    )
}

export default Routes;