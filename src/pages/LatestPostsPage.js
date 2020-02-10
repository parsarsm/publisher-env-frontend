import React from "react";
import SidedContent from "../components/containers/SidedContent";
import Posts from "../components/posts/Posts";
import {connect} from "react-redux";
import {latestPostsAction} from "../actions/latestPostsActions";

class LatestPostsPage extends React.PureComponent {

    getLatestPosts() {
        const lastId = this.props.latestPostIds && this.props.latestPostIds.length
            ? this.props.latestPostIds[this.props.latestPostIds.length - 1] : null;
        this.props.getLatestPosts(lastId);
    }


    componentDidMount() {
        this.getLatestPosts();
    }

    render() {
        return (
            <SidedContent title={"Latest Posts"}>
                <Posts posts={this.props.latestPostIds.map(id => this.props.posts[id]) || []}
                       loading={this.props.loading} end={this.props.end}/>
            </SidedContent>
        )
    }
}

export default connect(
    (state) => ({
        loading: state.latestPosts.loading,
        latestPostIds: state.latestPosts.posts,
        posts: state.posts,
        end: state.latestPosts.end,
    }),
    (dispatch) => ({
        getLatestPosts: (lastId) => dispatch(latestPostsAction(lastId))
    })
)(LatestPostsPage);