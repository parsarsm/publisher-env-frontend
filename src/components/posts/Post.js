import React from "react";
import {Feed, Icon} from "semantic-ui-react";
import timeAgo from "node-time-ago";
import {getPostLink, routes} from "../../config/routes";
import {Link} from "react-router-dom";
import {routeParams} from "../../helpers/url";
import {serverUrl} from "../../api";
import {connect} from "react-redux";
import {deletePostAction, dislikePostAction, likePostAction} from "../../actions/postActions";
import ShareLink from 'react-twitter-share-link'
import SharePostAndCommentModal from "../sharePostAndCommentModal/SharePostAndCommentModal";

class Post extends React.Component {

    render() {
        const {post, user} = this.props;
        const {Element} = this.props;
        post.permissions = {
            like: !!user,
            dislike: !!user,
            reply: !!user,
            edit: user.id === post.created_by,
            delete: user.id === post.created_by,
        };
        return (
            <div>
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
                                {post.permissions.like &&
                                <Feed.Like onClick={() => this.props.like(post.id, post.liked)}>
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
                                {post.permissions.delete && <Feed.Like onClick={() => this.props.delete(post.id)}>
                                    <Icon color={"grey"} name={"trash alternate outline"}/>Delete
                                </Feed.Like>}
                                <ShareLink link={getPostLink(post.id)}>
                                    {link => (
                                        <Feed.Like as={'a'} href={link} target='_blank'>
                                            <Icon color={"grey"} name={"twitter"}/>Share on twitter
                                        </Feed.Like>
                                        // <a href={link} target='_blank'>Share this on Twitter</a>
                                    )}
                                </ShareLink>
                                <SharePostAndCommentModal trigger={
                                    <Feed.Like>
                                        <Icon color={"grey"} name={"share alternate"}/>Share
                                    </Feed.Like>}
                                                          link={getPostLink(post.id)}
                                />
                            </Feed.Meta>
                        </Feed.Content>
                    </Feed.Event>
                </Feed>
                <div style={{paddingLeft: '48px'}}>
                    {post.children && post.children.map(c => <Element post={c} key={c.id}/>)}
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        user: state.user.user || {}
    }),
    (dispatch) => ({
        like: (id, active) => dispatch(likePostAction(id, active)),
        dislike: (id, active) => dispatch(dislikePostAction(id, active)),
        delete: (id) => dispatch(deletePostAction(id))
    })
)(Post);