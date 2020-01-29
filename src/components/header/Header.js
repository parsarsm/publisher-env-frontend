import * as React from "react";
import Popup from 'reactjs-popup'

import './header.css'
import logo from "../../static/pics/logo.svg"
import home from "../../static/pics/home.svg"
import dropDownArrow from "../../static/pics/drop-down-arrow11.svg"
import popular from "../../static/pics/popular.svg"
import top from "../../static/pics/top.svg"
import all from "../../static/pics/all.svg"
import com1 from "../../static/pics/temp/com1.png"
import com2 from "../../static/pics/temp/com2.jpg"
import search from "../../static/pics/search.svg"
import message from "../../static/pics/message.svg"
import createPost from "../../static/pics/create-post.svg"
import profTest from "../../static/pics/temp/proftest1.jpg"
import orangeDot from "../../static/pics/orange-dot.png"
import PopUpModal from "../popUpModal/PopUpModal";
import LoginModal from "../loginModal/LoginModal";
import SignUpModal from "../signupModal/SignUpModal";

export default class Header extends React.Component {
    state = {
        isLoggedIn: false,
        showSignUpModal: false,
        showLogInModal: false,
    };

    hideLoginModal = () => {
        this.setState({showLogInModal: false})
    };

    hideSignUpModal = () => {
        this.setState({showSignUpModal: false})
    };

    // you should get these from api later
    navBarItems = [
        {
            link: "",
            image: home,
            alt: "Home",
            title: "Home"
        },
        {
            link: "",
            image: popular,
            alt: "Popular",
            title: "Popular"
        },
        {
            link: "",
            image: top,
            alt: "Top",
            title: "Top"
        },
        {
            link: "",
            image: all,
            alt: "All",
            title: "All"
        }
    ];
    usersCommunities = [
        {
            link: "",
            image: com1,
            alt: "Plants vs. Zombies",
            title: "Plants vs. Zombies"
        }, {
            link: "",
            image: com2,
            alt: "Warriors",
            title: "Warriors"
        }
    ];

    // end


    render() {
        return (
            <header>
                <PopUpModal show={this.state.showLogInModal}>
                    <LoginModal hideFunc={this.hideLoginModal}/>
                </PopUpModal>

                <PopUpModal show={this.state.showSignUpModal}>
                    <SignUpModal hideFunc={this.hideSignUpModal}/>
                </PopUpModal>

                <a id="logo-link" href>
                    <img id="logo" src={logo} alt="logo"/>
                </a>
                <nav>
                    <div id="nav-current">
                        <img id="nav-current-img" src={home} alt=""/>
                        <p>Home</p>
                        <img id="nav-current-dot" src={dropDownArrow} alt="drop-down-arrow"/>
                    </div>
                    <ul id="nav-all">
                        <li>
                            <p>publisher feeds</p>
                            <ul>
                                {this.navBarItems.map(props => {
                                    return <NavBarItem {...props}/>
                                })}
                            </ul>
                        </li>
                        <li>
                            <p>my communities</p>
                            <ul>
                                {this.usersCommunities.map(props => {
                                    return <NavBarItem {...props}/>
                                })}
                            </ul>
                        </li>
                    </ul>
                </nav>
                <form id="header-search-bar" autoComplete="off">
                    <img src={search} alt="search"/>
                    <input type="search" placeholder="Search Publisher"/>
                </form>
                <div id="shortcuts">
                    <a className="shortcut tooltip" id="messages" href><span className="tooltip-text">messages</span>
                        <span id="message-num">
              3
            </span>
                        <img src={message} alt="messages"/></a><a className="shortcut tooltip" href>
                    <span className="tooltip-text">create post</span><img src={createPost}
                                                                          alt="create post"/></a>
                </div>
                {this.state.isLoggedIn ? (
                    <a href id="profile-shortcut">
                        <img id="prof-short-img"
                             src={profTest} alt=""/>
                        <p>parsa_rsm</p>
                        <img id="profile-shortcut-dot" src={orangeDot} alt="online"/>
                    </a>
                ) : (
                    <div className="user-auth">
                        <a href="" className="login" onClick={(e) => {
                            e.preventDefault();
                            this.setState({showLogInModal: true})
                        }}>login</a>
                        <a href="" className="sign-up" onClick={(e) => {
                            e.preventDefault();
                            this.setState({showSignUpModal: true})
                        }}>sign up</a>
                    </div>

                )
                }

            </header>
        );

    }
}

function NavBarItem(props) {
    return (
        <li>
            <a href={props.link}><img src={props.image} alt={props.alt}/><span>{props.title}</span></a>
        </li>
    )
}

