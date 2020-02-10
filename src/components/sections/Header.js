import React, {Component} from 'react'
import {Container, Icon, Input, Menu} from 'semantic-ui-react'
import {connect} from "react-redux";
import {push} from 'connected-react-router';
import {routes} from "../../config/routes";
import {Link} from "react-router-dom";
import PSearch from "../search/Search";

class Header extends Component {
    render() {
        const {loggedIn} = this.props;
        return (
            <Menu fixed='top' inverted fluid={true}>
                <Container>
                    <Menu.Item as={Link} to={loggedIn ? routes.FEED : routes.POSTS_HOT}><Icon name={"reddit alien"}
                                                                                              size={"big"}/> Reddit
                    </Menu.Item>
                    <Menu.Item style={{flexGrow: 1}}>
                        {/*<Input className='icon' fluid={true} icon='search' inverted size={"small"}*/}
                        {/*       placeholder='Search...'/>*/}
                        <PSearch/>
                    </Menu.Item>
                    {!loggedIn ? <>
                            <Menu.Item as={Link} to={routes.USER_LOGIN}>Login</Menu.Item>
                            <Menu.Item as={Link} to={routes.USER_SIGN_UP}>Signup</Menu.Item></> :
                        <>
                            <Menu.Item as={Link} to={routes.FEED} title={'Following'}><Icon name={"feed"}
                                                                                            size={"large"}/></Menu.Item>
                            <Menu.Item as={Link} to={routes.POSTS_HOT} title={'Popular'}><Icon name={"chart line"}
                                                                                               size={"large"}/></Menu.Item>
                            <Menu.Item as={Link} to={routes.POSTS_LATEST} title={'Latest Posts'}><Icon
                                name={"newspaper"}
                                size={"large"}/></Menu.Item>
                            <Menu.Item as='a' title={'Notifications'}>
                                <Icon name={"envelope"} size={"large"}/>
                            </Menu.Item>
                            <Menu.Item as={Link} to={routes.PROFILE_VIEW} title={'Profile'}><Icon name={"user"}
                                                                                                  size={"large"}/></Menu.Item>
                        </>
                    }
                </Container>
            </Menu>
        )
    }
}

export default connect(
    (state) => ({
        loggedIn: state.user.loggedIn,
    })
)(Header);