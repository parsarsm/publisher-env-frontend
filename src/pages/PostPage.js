import React from "react";
import {connect} from "react-redux";
import FormComponent from "../components/general/FormComponent";
import {withRouter} from "react-router";
import {loadPostAction} from "../actions/postActions";
import {Segment} from "semantic-ui-react";
import Post from "../components/posts/Post";

class PostPage extends FormComponent {
    state = {
        lastId: 0,
    };

    componentDidMount() {
        this.init();
    }

    init() {
        const {id} = this.props.match.params;
        if (this.state.lastId === id) {
            return;
        }

        this.setState({lastId: id});

        this.props.loadPost(id);
    }

    render() {
        this.init();
        const {id} = this.props.match.params;
        const post = this._buildPostTree(id);

        return (
            <div>
                <Segment>
                    {post.id && <Post post={post} Element={Post}/>}
                </Segment>
            </div>
        )
    }

    _buildPostTree(id) {
        const children = {};
        for (const postId of Object.keys(this.props.posts)) {
            const post = this.props.posts[postId];
            if (!Array.isArray(children[post.parent])) {
                children[post.parent] = [];
            }

            children[post.parent].push(post);
        }

        return this._getWithChildren(id, children);
    }

    _getWithChildren(id, children) {
        return {...this.props.posts[id], children: (children[id] || []).map(c => this._getWithChildren(c.id, children))}
    }
}

export default withRouter(connect(
    (state) => ({
        posts: state.posts || [],
    }),
    (dispatch) => ({
        loadPost: (id) => dispatch(loadPostAction(id))
    })
)(PostPage));