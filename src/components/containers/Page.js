import {Card, Container, Grid, Header as UIHeader, List, Segment} from "semantic-ui-react";
import Header from "../sections/Header";
import React from "react";
import Posts from "../posts/Posts";
import {connect} from "react-redux";
import {getMyProfileAction} from "../../actions/userActions";

const exampleProfile = {
    avatar: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
};
class Page extends React.PureComponent {
    componentDidMount() {
        this.props.load();
    }

    render() {
        const {ready} = this.props;
        return (
            ready ?
                <><Container>
                    <Header/>
                </Container>
                    <Container style={{paddingTop: '7em'}}>
                        {this.props.children}
                    </Container>
                </> : <div>loading</div>
        );
    }
}

export default connect(
    (state) => ({
        ready: state.user.ready,
    }),
    (dispatch) => ({
        load: () => dispatch(getMyProfileAction())
    })
)(Page);