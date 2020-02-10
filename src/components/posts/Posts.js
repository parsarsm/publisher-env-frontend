import {Button, Segment} from "semantic-ui-react";
import React from "react";
import Post from "./Post";


export default class Posts extends React.PureComponent {
    render() {
        const {posts, end, loading, getPosts} = this.props;
        return (
            <>
                {posts.map(post => (
                    <Segment key={post.id}>
                        <Post post={post}/>
                    </Segment>
                ))}
                {end ? '' : (
                    <Button basic loading={loading} attached='bottom' onClick={getPosts}>Load More</Button>
                )}
            </>
        );
    }
}


