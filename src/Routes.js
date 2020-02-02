import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PHeader from "./components/header/PHeader";
import HomePage from "./pages/homePage/homePage";
import {Container} from "semantic-ui-react";
import SignUp from "./pages/signUp/SignUp";
import Profile from "./pages/profile/Profile";
import Post from "./pages/post/Post";
import ProfileSettings from "./pages/profileSettings/profileSettings";
import Footer from "./components/footer/Footer";

const routes = {
    homePage: '/',
    signUp: '/signUp',
    profile: '/' +
        '',
    post: '/post',
    profileSettings: "/profile/settings",
    postById: '/post/:postId',
    profileById: '/profile/:userId',
};

export default function Routes() {
    return (
        <div>
            <PHeader/>
            <Container style={{marginTop: '7em'}}>
                <Switch>
                    <Route exact path={routes.homePage}>
                        <HomePage/>
                    </Route>
                    <Route exact path={routes.signUp}>
                        <SignUp/>
                    </Route>
                    <Route exact path={routes.profile}>
                        <Profile/>
                    </Route>
                    <Route exact path={routes.post}>
                        <Post/>
                    </Route>
                    <Route exact path={routes.profileSettings}>
                        <ProfileSettings/>
                    </Route>
                </Switch>
            </Container>
            <Footer/>
        </div>
    );
}
