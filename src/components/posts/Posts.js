import {Button, Segment} from "semantic-ui-react";
import React from "react";
import Post from "./Post";


export default class Posts extends React.PureComponent {
    render() {
        const {posts} = this.props;
        return (
            <>
                {posts.map(post => (
                    <Segment key={post.id}>
                        <Post post={post}/>
                    </Segment>
                ))}

                <Button basic attached='bottom'>Load More</Button>
            </>
        );
    }
}


