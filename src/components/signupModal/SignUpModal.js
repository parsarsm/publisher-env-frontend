import React from "react";
import "./signupModal.css"
import close from "../../static/pics/close.svg"
import leftPic from "../../static/pics/login_signup_left_pic.png"
import routes from "../../api/routes";

export default class SignUpModal extends React.Component {
    state = {
        email: '',
        username: '',
        pass: '',
        errorText: ''
    }


    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    };

    handleUsernameChange = (e) => {
        this.setState({username: e.target.value});
    };

    handlePassChange = (e) => {
        this.setState({pass: e.target.value});
    };


    sendRegistrationData = () => {
        fetch(routes.signUp, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                pass: this.state.pass,
                email: this.state.email
            }),
        })
    //    if ok set header state to logged in , get jwt codes and etc.
    }

    render() {

        return (
            <div className="sign-up-module">
                <img id="close" src={close} alt="" onClick={this.props.hideFunc}/>
                <img className="sign-up-module-pic"
                     src={leftPic} alt=""/>
                <form className="sign-up-module-form">
                    <div className="sign-up-module-title">
                        <p>By having a Publisher account, you can join, vote, and comment on all your favorite Publisher
                            content.</p>
                    </div>
                    <div className="sign-up-module-email">
                        <input name="email" id="eml" type="text" value={this.state.email}
                               onChange={this.handleEmailChange}/>
                        <label htmlFor="eml">
                            email
                        </label>
                    </div>
                    <div className="sign-up-module-username">
                        <input name="email" id="usr" type="text" value={this.state.username}
                               onChange={this.handleUsernameChange}/>
                        <label htmlFor="usr">
                            username
                        </label>
                    </div>
                    <div className="sign-up-module-password">
                        <input name="email" type="text" id="pass" value={this.state.pass}
                               onChange={this.handlePassChange}/>
                        <label htmlFor="pass">
                            password
                        </label>
                    </div>
                    <div><p>{this.state.errorText}</p></div>
                    <div className="sign-up-module-button">
                        <button onClick={this.sendRegistrationData}>sign up</button>
                    </div>
                    <div className="sign-up-module-additional">
                        <p>Already a Publisher? <a href>LOG IN</a></p>
                    </div>
                </form>
            </div>
        );
    }
}
