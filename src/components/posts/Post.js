import React from "react";
import {Feed, Icon} from "semantic-ui-react";
import timeAgo from "node-time-ago";
import {routes} from "../../config/routes";
import {Link} from "react-router-dom";
import {routeParams} from "../../helpers/url";

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
                            <Feed.User>{post.userName}</Feed.User>
                            <Link
                                to={routeParams(routes.POST_VIEW, {id: post.id})}>{post.title}</Link>
                            <Feed.Date>{timeAgo(post.createdAt)}</Feed.Date>
                        </Feed.Summary>
                        <Feed.Extra images>

                        </Feed.Extra>
                        <Feed.Extra text>
                            {post.text}
                        </Feed.Extra>
                        <Feed.Meta style={{marginTop: '1em'}}>
                            {
                                // post.permissions.like &&
                            <Feed.Like>
                                <Icon color={post.liked ? "red" : "grey"} name={"thumbs up outline"}/>{post.liked} Likes
                            </Feed.Like>}
                            {
                                // post.permissions.dislike &&
                                <Feed.Like>
                                <Icon color={post.disliked ? "brown" : "grey"}
                                      name={"thumbs down outline"}/>{post.dislikes} Dislikes
                            </Feed.Like>}
                            {
                                // post.permissions.reply&&
                                <Feed.Like>
                                <Icon color={"grey"} name={"reply"}/> Reply
                            </Feed.Like>}
                            {
                                // post.permissions.edit &&
                                <Feed.Like>
                                <Icon color={"grey"} name={"edit"}/>Edit
                            </Feed.Like>}
                            {
                                // post.permissions.delete &&
                                <Feed.Like>
                                <Icon color={"grey"} name={"trash alternate outline"}/>Delete
                            </Feed.Like>}
                        </Feed.Meta>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
        );
    }
}