import React from 'react';
import SidedContent from "../components/containers/SidedContent";
import Posts from "../components/posts/Posts";
import {connect} from "react-redux";
import {latestPostsAction} from "../actions/latestPostsActions";
import {hotPostsAction} from "../actions/hotPostsActions";

const examplePosts = [
    {
        id: 1,
        title: 'Post Title Three',
        user: {
            id: 1,
            name: 'Elliot Fu',
            avatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
        },
        createdAt: Date.now() - parseInt(Math.random() * 3 * 3600 * 1000),
        likes: 4,
        dislikes: 2,
        liked: true,
        disliked: false,
        permissions: {like: true, dislike: true, edit: true, delete: true, reply: true},
        text: 'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
        fullText:
            'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
        comments: [],
        commentsCount: 6,
    },
    {
        id: 2,
        title: 'Post Title Three',
        user: {
            id: 1,
            name: 'Elliot Fu',
            avatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
        },
        createdAt: Date.now() - parseInt(Math.random() * 3 * 3600 * 1000),
        likes: 4,
        dislikes: 2,
        liked: false,
        disliked: true,
        permissions: {like: true, dislike: true, edit: false, delete: false, reply: false},
        text: 'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
        fullText:
            'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
        comments: [],
        commentsCount: 6,
    },
];


class HotPostsPage extends React.PureComponent {
    getHotPosts() {
        const lastId = this.props.posts ? this.props.posts[this.props.posts.length - 1].id : null;
        this.props.getHotPosts(lastId);
    }


    componentDidMount() {
        this.getHotPosts();
    }


    render() {
        const {posts, loading, end} = this.props;
        return (
            <SidedContent title={"Hot Posts"}>
                <Posts posts={posts} end={end} loading={loading}/>
            </SidedContent>
        )
    }
}

export default connect(
    (state) => ({
        loading: state.hotPosts.loading,
        posts: state.hotPosts.posts,
        end: state.hotPosts.end,
    }),
    (dispatch) => ({
        getHotPosts: (lastId) => dispatch(hotPostsAction(lastId))
    })
)(HotPostsPage);