import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PHeader from "./componentsV2/header/PHeader";
import HomePage from "./pagesV2/homePage/homePage";
import {Container} from "semantic-ui-react";
import SignUp from "./pagesV2/signUp/SignUp";
import Profile from "./pagesV2/profile/Profile";
import Post from "./pagesV2/post/Post";
import ProfileSettings from "./pagesV2/profileSettings/profileSettings";
import Footer from "./componentsV2/footer/Footer";

const routes = {
    homePage: '/',
    signUp: '/signUp',
    profile: '/profile',
    post: '/post',
    profileSettings: "/profile/settings",
    postById: '/post/:postId',
    profileById: '/profile/:userId',
}

export default function App() {

    return (
        <Router>
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
        </Router>

    );
}
