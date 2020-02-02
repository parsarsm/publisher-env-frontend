import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import SignUp from "./pages/signUp/SignUp";
import Profile from "./pages/profile/Profile";
import Post from "./pages/post/Post";
import ProfileSettings from "./pages/profileSettings/profileSettings";
import Page from "./components/containers/Page";
import FeedPage from "./pages/FeedPage";
import HotPostsPage from "./pages/HotPostsPage";
import LoginPage from "./pages/Login";

const routes = {
    FEED: '/feed',
    HOT_POSTS: '/hot',
    LATEST_POSTS: '/latest',
    LOGIN: '/login',
    SIGN_UP: '/signup',
};

export default function Routes() {
    return (
        <Page>
            <Switch>
                <Route exact path={routes.FEED}>
                    <FeedPage/>
                </Route>
                <Route exact path={routes.HOT_POSTS}>
                    <HotPostsPage/>
                </Route>
                <Route exact path={routes.LOGIN}>
                    <LoginPage/>
                </Route>
                <Redirect to={routes.HOT_POSTS}/>
            </Switch>
        </Page>
    );
}
