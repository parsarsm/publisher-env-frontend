import React from "react";

import "./loginModal.css"

import leftPic from "../../static/pics/login_signup_left_pic.png"
import logo from "../../static/pics/logo.svg"
import close from "../../static/pics/close.svg"

export default function (props) {
    return (
        <div className="login-module">
            <img id="close" src={close} alt="" onClick={props.hideFunc}/>
            <img className="login-module-pic"
                 src={leftPic} alt=""/>
            <div className="login-module-form">
                <div className="login-module-logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="login-module-title">
                    <p>Sign in</p>
                </div>
                <div className="login-module-username">
                    <input id="usr" type="text"/>
                    <label htmlFor="usr">
                        username
                    </label>
                </div>
                <div className="login-module-password">
                    <input type="text" id="pass"/>
                    <label htmlFor="pass">
                        password
                    </label>
                </div>
                <div className="login-module-button">
                    <button href="">sign in</button>
                </div>
                <div className="login-module-additional">
                    <p>New to Publisher? <a href="">SIGN UP</a></p>
                </div>
            </div>
        </div>
    );
}