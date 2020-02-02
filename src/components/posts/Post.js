import React from "react";
import {Feed, Icon} from "semantic-ui-react";
import timeAgo from "node-time-ago";

export default class Post extends React.PureComponent {
    render() {
        const {post} = this.props;
        return (
            <Feed>
                <Feed.Event>
                    <Feed.Label>
                        <img src={post.user.avatar}/>
                    </Feed.Label>
                    <Feed.Content>
                        <Feed.Summary>
                            <Feed.User>{post.userName}</Feed.User> {post.title}
                            <Feed.Date>{timeAgo(post.createdAt)}</Feed.Date>
                        </Feed.Summary>
                        <Feed.Extra images>

                        </Feed.Extra>
                        <Feed.Extra text>
                            {post.text}
                        </Feed.Extra>
                        <Feed.Meta style={{marginTop: '1em'}}>
                            {post.permissions.like && <Feed.Like>
                                <Icon color={post.liked ? "red" : "gray"} name={"thumbs up outline"}/>{post.likes} Likes
                            </Feed.Like>}
                            {post.permissions.dislike && <Feed.Like>
                                <Icon color={post.disliked ? "brown" : "gray"}
                                      name={"thumbs down outline"}/>{post.dislikes} Dislikes
                            </Feed.Like>}
                            {post.permissions.reply && <Feed.Like>
                                <Icon color={"grey"} name={"reply"}/> Reply
                            </Feed.Like>}
                            {post.permissions.edit && <Feed.Like>
                                <Icon color={"grey"} name={"edit"}/>Edit
                            </Feed.Like>}
                            {post.permissions.delete && <Feed.Like>
                                <Icon color={"grey"} name={"delete"}/>Delete
                            </Feed.Like>}
                        </Feed.Meta>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
        );
    }
}