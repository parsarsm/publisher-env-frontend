import React from "react";
import SidedContent from "../components/containers/SidedContent";
import Posts from "../components/posts/Posts";


export default class FeedPage extends React.PureComponent {
    render() {
        return (
            <SidedContent title={"Feed"}>
                <Posts posts={examplePosts}/>
            </SidedContent>
        )
    }
}