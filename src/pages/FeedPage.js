import React from "react";
import SidedContent from "../components/containers/SidedContent";
import Posts from "../components/posts/Posts";
import {Button, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {routes} from "../config/routes";
import PostModal from "../components/postModal/PostModal";

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

export default class FeedPage extends React.PureComponent {
    render() {
        const postButton = (
            <PostModal trigger={<Button icon size={"tiny"}><Icon name={"compose"}/></Button>}/>
            );
        return (
            <SidedContent title='Feed' actions={postButton}>
                <Posts posts={examplePosts}/>
            </SidedContent>
        )
    }
}