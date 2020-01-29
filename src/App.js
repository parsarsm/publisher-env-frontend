import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import "./fonts.css"

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                {/*<Route path="/about">*/}
                {/*    <About/>*/}
                {/*</Route>*/}
                {/*<Route path="/dashboard">*/}
                {/*    <Dashboard/>*/}
                {/*</Route>*/}
            </Switch>
        </Router>
    );
}
