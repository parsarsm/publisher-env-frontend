import React from "react";
import "./editPost.css"

export default class EditPost extends React.Component {

    render() {
        return (
            <main className="edit-post-container">
                <div>
                    <div className="post-title">Create a post</div>
                    <div className="post-choose-community">
                        <input list="communities-list" name="sadf" placeholder="Choose a community"/>
                        <datalist id="communities-list">
                            <option value="choose a community" disabled selected/>
                            <option value="parsa rsm"/>
                            <option value="my community 1"/>
                            <option value="my community two"/>
                        </datalist>
                    </div>
                    <div className="post-container">
                        <input placeholder="Title" type="text" name id="post-title"/>
                        <div id="summernote"/>
                        <div className="post-bottom"><a href id="submit-post">post</a></div>
                    </div>
                </div>
            </main>
        );
    }
}