import React from "react";
import "./signupModal.css"
import close from "../../static/pics/close.svg"
import leftPic from "../../static/pics/login_signup_left_pic.png"

export default function (props) {
    return (
        <div className="sign-up-module">
            <img id="close" src={close} alt="" onClick={props.hideFunc}/>
            <img className="sign-up-module-pic"
                 src={leftPic} alt=""/>
            <div className="sign-up-module-form">
                <div className="sign-up-module-title">
                    <p>By having a Reddit account, you can join, vote, and comment on all your favorite Reddit
                        content.</p>
                </div>
                <div className="sign-up-module-email">
                    <input id="eml" type="text"/>
                    <label htmlFor="eml">
                        email
                    </label>
                </div>
                <div className="sign-up-module-username">
                    <input id="usr" type="text"/>
                    <label htmlFor="usr">
                        username
                    </label>
                </div>
                <div className="sign-up-module-password">
                    <input type="text" id="pass"/>
                    <label htmlFor="pass">
                        password
                    </label>
                </div>
                <div className="sign-up-module-button">
                    <button href>sign up</button>
                </div>
                <div className="sign-up-module-additional">
                    <p>Already a Publisher? <a href>LOG IN</a></p>
                </div>
            </div>
        </div>
    );
}
