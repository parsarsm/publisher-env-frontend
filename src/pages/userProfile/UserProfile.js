import React from 'react'
import './userProfile.css'

import upArrow from "../../static/pics/up-arrow-colored.svg"
import downArrow from "../../static/pics/down-arrow-colored.svg"
import text from "../../static/pics/text.svg"
import open from "../../static/pics/open.svg"
import comment from "../../static/pics/comment.svg"
import edit from "../../static/pics/edit.svg"
import deletep from "../../static/pics/delete.svg"
import post from "../../static/pics/post.svg"
import normal from "../../static/pics/normal.svg"
import bday from "../../static/pics/birthday.svg"
import numeric from "../../static/pics/numeric.svg"
import tempAvatar from "../../static/usersProfilePics/test.jpg"
import tempAvatar2 from "../../static/usersProfilePics/test2.png"
import routes from "../../api/routes";

export default class UserProfile extends React.Component {
    state = {
        tab: 'posts',
        info: {
            avatar: tempAvatar,
            username: 'parsa_rsm',
            name: 'Parsa Rostami',
            birthday: 'March 13, 1999',
            postNum: 14,
            commentNum: 124,
            followerNum: 45,
            followingNum: 34
        },
        posts: [
            {
                id: 13,
                title: 'post title',
                createdAt: '2 hours ago',
                score: 4,
            },
            {
                id: 14,
                title: 'post title',
                createdAt: '2 hours ago',
                score: 4,
            },
            {
                id: 3,
                title: 'post title',
                createdAt: '2 hours ago',
                score: 4,
            },
        ],
        followers: [
            {
                id: 1,
                avatar: tempAvatar2,
                name: 'Bahman',
                username: 'bahmw23',
                followerNum: 12,
                followingNum: 14,
                postNum: 123,
                joinYear: '2015'
            },
            {
                id: 2,
                avatar: tempAvatar2,
                name: 'Cahman',
                username: 'bahmw23',
                followerNum: 12,
                followingNum: 14,
                postNum: 123,
                joinYear: '2015'
            }, {
                id: 3,
                avatar: tempAvatar2,
                name: 'Cahman',
                username: 'bahmw23',
                followerNum: 12,
                followingNum: 14,
                postNum: 123,
                joinYear: '2015'
            }, {
                id: 6,
                avatar: tempAvatar2,
                name: 'Cahman',
                username: 'bahmw23',
                followerNum: 12,
                followingNum: 14,
                postNum: 123,
                joinYear: '2015'
            }, {
                id: 5,
                avatar: tempAvatar2,
                name: 'Cahman',
                username: 'bahmw23',
                followerNum: 12,
                followingNum: 14,
                postNum: 123,
                joinYear: '2015'
            }, {
                id: 4,
                avatar: tempAvatar2,
                name: 'Cahman',
                username: 'bahmw23',
                followerNum: 12,
                followingNum: 14,
                postNum: 123,
                joinYear: '2015'
            }
        ],
        followings: [
            {
                id: 1,
                avatar: tempAvatar2,
                name: 'Bahman',
                username: 'bahmw23',
                followerNum: 12,
                followingNum: 14,
                postNum: 123,
                joinYear: '2015'
            },
            {
                id: 2,
                avatar: tempAvatar2,
                name: 'Bahman',
                username: 'bahmw23',
                followerNum: 12,
                followingNum: 14,
                postNum: 123,
                joinYear: '2015'
            }, {
                id: 3,
                avatar: tempAvatar2,
                name: 'Cahman',
                username: 'bahmw23',
                followerNum: 12,
                followingNum: 14,
                postNum: 123,
                joinYear: '2015'
            },

        ]
    };


    render() {
        return (
            <div>
                <div id="profile-header">
                    <a href="" className={this.state.tab === 'posts' ? "cur-prof-tab" : ''} onClick={(e) => {
                        e.preventDefault();
                        this.setState({tab: 'posts'})
                    }}>my posts</a>
                    <a href="" className={this.state.tab === 'followers' ? "cur-prof-tab" : ''} onClick={(e) => {
                        e.preventDefault();
                        this.setState({tab: 'followers'})
                    }}>followers</a>
                    <a href="" className={this.state.tab === 'followings' ? "cur-prof-tab" : ''} onClick={(e) => {
                        e.preventDefault();
                        this.setState({tab: 'followings'});
                    }}>followings</a>
                </div>
                <div className="main-container">
                    <main>
                        {this.state.tab === 'posts' ? (
                            <div className="my-posts">
                                {this.state.posts.map(post => {
                                    return (
                                        <div className="profile-post">
                                            <div className="profile-post-score">
                                                <img src={upArrow} alt="" className="score-up"/>
                                                <p className="positive-score">{post.score}</p>
                                                <img src={downArrow} alt="" className="score-down"/>
                                            </div>
                                            <div className="profile-post-img"><img src={text} alt=""/></div>
                                            <div className="profile-post-info">
                                                <p className="profile-post-info-title">{post.title}</p>
                                                <p className="profile-post-info-datetime">{post.createdAt}</p>
                                                <div className="profile-post-info-options">
                                                    <a href={routes.post(post.id)} className="profile-post-open"><img
                                                        src={open}
                                                        alt=""/>open</a>
                                                    {/*<a href className="profile-post-comment"><img src={comment} alt=""/>comment</a>*/}
                                                    <a href={routes.editPost(post.id)}
                                                       className="profile-post-edit"><img src={edit} alt=""/>edit
                                                        posts</a>
                                                    <a href={routes.deletePost(post.id)}
                                                       className="profile-post-delete"><img src={deletep}
                                                                                            alt=""/>delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}


                            </div>) : (this.state.tab === 'followers' ? (<div className="followers">
                            {this.state.followers.map(follower => {
                                return (
                                    <a className="card" href={routes.profile(follower.id)}>
                                        <img className="card-image" alt=""
                                             src={follower.avatar}/>
                                        <div className="card-middle">
                                            <div className="card-title">{follower.name}</div>
                                            <div className="card-user">{follower.username}</div>
                                            <div
                                                className="card-desc">{follower.name} has {follower.followerNum} followers
                                                and {follower.followingNum} followings!
                                            </div>
                                        </div>
                                        <div className="card-bottom">
                                            <div className="card-post-num">
                                                <img className="card-post-num-img" alt="" src={post}/>
                                                <div className="card-post-num-text">{follower.postNum} posts</div>
                                            </div>
                                            <div className="card-join-date">Joined At {follower.joinYear}</div>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>) : (
                            <div className="followings">
                                {this.state.followings.map(following => {
                                    return (
                                        <a className="card" href={routes.profile(following.id)}>
                                            <img className="card-image" alt=""
                                                 src={following.avatar}/>
                                            <div className="card-middle">
                                                <div className="card-title">{following.name}</div>
                                                <div className="card-user">{following.username}</div>
                                                <div
                                                    className="card-desc">{following.name} has {following.followerNum} followers
                                                    and {following.followingNum} followings!
                                                </div>
                                            </div>
                                            <div className="card-bottom">
                                                <div className="card-post-num">
                                                    <img className="card-post-num-img" alt="" src={post}/>
                                                    <div className="card-post-num-text">{following.postNum} posts</div>
                                                </div>
                                                <div className="card-join-date">Joined At {following.joinYear}</div>
                                            </div>
                                        </a>
                                    )
                                })}
                            </div>
                        ))}
                        {/*<div className="empty"><p>sorry! there's nothing here!</p></div>*/}

                    </main>
                    <aside>
                        <div id="user-info">
                            <div id="user-info-top"><img id="user-info-avatar"
                                                         src={tempAvatar}
                                                         alt=""/>
                            </div>
                            <div id="user-info-bottom">
                                <p>{this.state.info.username}</p>
                                <div id="user-info-details">
                                    <div className="user-info-details-single"><p>name</p><img src={normal}
                                                                                              alt="pic"/>
                                        <p>{this.state.info.name}</p></div>
                                    <div className="user-info-details-single"><p>birth day</p><img
                                        src={bday} alt="pic"/>
                                        <p>{this.state.info.birthday}</p></div>
                                    <div className="user-info-details-single"><p>posts</p><img src={numeric}
                                                                                               alt="pic"/>
                                        <p>{this.state.info.postNum}</p></div>
                                    <div className="user-info-details-single"><p>comments</p><img
                                        src={numeric} alt="pic"/>
                                        <p>{this.state.info.commentNum}</p></div>
                                    <div className="user-info-details-single"><p>followers</p><img
                                        src={numeric} alt="pic"/>
                                        <p>{this.state.info.followerNum}</p></div>
                                    <div className="user-info-details-single"><p>followings</p><img
                                        src={numeric} alt="pic"/>
                                        <p>{this.state.info.followingNum}</p></div>
                                </div>
                            </div>
                        </div>
                        <div id="more-options">
                            <a href={routes.newPost}>new post</a>
                            <a href={routes.profSettings}>profile settings</a>
                        </div>
                    </aside>
                </div>
            </div>
        );
    }


}