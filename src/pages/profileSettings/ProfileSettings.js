import React from "react";

export default class ProfileSettings extends React.Component {


    render() {
        return (
            <div className="profile-settings-container">
                <p className="prof-settings-title">Profile Settings</p>

                <label htmlFor="prof-settings-email">Email</label>
                <input type="email" id="prof-settings-email"/>

                <label htmlFor="prof-settings-pass">Password</label>
                <input type="pass" id="prof-settings-pass"/>

                <label htmlFor="prof-settings-name">Name</label>
                <input type="text" id="prof-settings-name"/>

                <label htmlFor="prof-settings-avatar">Avatar</label>
                <input type="image" id="prof-settings-avatar"/>

            </div>
        );
    }
}