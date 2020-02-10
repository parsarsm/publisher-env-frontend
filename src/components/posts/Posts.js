import {Button, Segment} from "semantic-ui-react";
import React from "react";
import Post from "./Post";


export default class Posts extends React.PureComponent {
    render() {
        const {posts, end, loading} = this.props;
        return (
            <>
                {posts ? posts.map(post => (
                    <Segment key={post.id}>
                        <Post post={post}/>
                    </Segment>
                )) : ''}
                {end ? '' : (
                    <Button basic loading={loading} attached='bottom'>Load More</Button>
                )}
            </>
        );
    }
}


