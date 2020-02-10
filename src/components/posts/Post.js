import React from "react";
import {Feed, Icon} from "semantic-ui-react";
import timeAgo from "node-time-ago";
import {routes} from "../../config/routes";
import {Link} from "react-router-dom";
import {routeParams} from "../../helpers/url";
import {serverUrl} from "../../api";
import {connect} from "react-redux";
import {dislikePostAction, likePostAction} from "../../actions/postActions";

class Post extends React.Component {

    render() {
        const {post, user} = this.props;
        post.permissions = {
            like: !!user,
            dislike: !!user,
            reply: !!user,
            edit: user.id === post.created_by,
            delete: user.id === post.created_by,
        };
        return (
            <Feed>
                <Feed.Event>
                    <Feed.Label>
                        <img
                            src={post.user.avatar_file && serverUrl(post.user.avatar_file) || 'https://react.semantic-ui.com/images/avatar/large/steve.jpg'}/>
                    </Feed.Label>
                    <Feed.Content>
                        <Feed.Summary>
                            <Feed.User>{post.user.username}</Feed.User>
                            <Link
                                to={routeParams(routes.POST_VIEW, {id: post.id})}>{post.title}</Link>
                            <Feed.Date>{timeAgo(post.created_at)}</Feed.Date>
                        </Feed.Summary>
                        <Feed.Extra images>

                        </Feed.Extra>
                        <Feed.Extra text>
                            {post.text}
                        </Feed.Extra>
                        <Feed.Meta style={{marginTop: '1em'}}>
                            {post.permissions.like && <Feed.Like onClick={() => this.props.like(post.id, post.liked)}>
                                <Icon color={post.liked > 0 ? "red" : "grey"}
                                      name={"thumbs up outline"}/>{post.likes_count} Likes
                            </Feed.Like>}
                            {post.permissions.dislike &&
                            <Feed.Like onClick={() => this.props.dislike(post.id, post.disliked)}>
                                <Icon color={post.disliked > 0 ? "brown" : "grey"}
                                      name={"thumbs down outline"}/>{post.dislikes_count} Dislikes
                            </Feed.Like>}
                            {post.permissions.reply && <Feed.Like>
                                <Icon color={"grey"} name={"reply"}/>Reply
                            </Feed.Like>}
                            {post.permissions.edit && <Feed.Like>
                                <Icon color={"grey"} name={"edit"}/>Edit
                            </Feed.Like>}
                            {post.permissions.delete && <Feed.Like>
                                <Icon color={"grey"} name={"trash alternate outline"}/>Delete
                            </Feed.Like>}
                        </Feed.Meta>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
        );
    }
}

export default connect(
    (state) => ({
        user: state.user.user
    }),
    (dispatch) => ({
        like: (id, active) => dispatch(likePostAction(id, active)),
        dislike: (id, active) => dispatch(dislikePostAction(id, active))
    })
)(Post);