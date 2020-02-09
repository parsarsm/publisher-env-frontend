import React from 'react'
import {Form, Input, TextArea, Button, Select, Header, Icon, Segment, Image, Message, Dropdown} from 'semantic-ui-react'
import {InputFile} from 'semantic-ui-react-input-file'
import Posts from "../components/posts/Posts";
import SidedContent from "../components/containers/SidedContent";
import Post from "../components/posts/Post";
import FormComponent from "../components/general/FormComponent";
import {connect} from "react-redux";
import {loginAction} from "../actions/userActions";
import {updateProfileAction} from "../actions/profileActions";

const genderOptions = [
    {key: 'm', text: 'Male', value: 'male'},
    {key: 'f', text: 'Female', value: 'female'},
    {key: 'o', text: 'Other', value: 'other'},
];

const countryOptions = [
    {key: 'af', value: 'af', flag: 'af', text: 'Afghanistan'},
    {key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands'},
    {key: 'al', value: 'al', flag: 'al', text: 'Albania'},
    {key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria'},
    {key: 'as', value: 'as', flag: 'as', text: 'American Samoa'},
    {key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra'},
    {key: 'ao', value: 'ao', flag: 'ao', text: 'Angola'},
    {key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla'},
    {key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua'},
    {key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina'},
    {key: 'am', value: 'am', flag: 'am', text: 'Armenia'},
    {key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba'},
    {key: 'au', value: 'au', flag: 'au', text: 'Australia'},
    {key: 'at', value: 'at', flag: 'at', text: 'Austria'},
    {key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan'},
    {key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas'},
    {key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain'},
    {key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh'},
    {key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados'},
    {key: 'by', value: 'by', flag: 'by', text: 'Belarus'},
    {key: 'be', value: 'be', flag: 'be', text: 'Belgium'},
    {key: 'bz', value: 'bz', flag: 'bz', text: 'Belize'},
    {key: 'bj', value: 'bj', flag: 'bj', text: 'Benin'},
];

class ProfileSettings extends FormComponent {
    handleUpload = () => '';

    updateProfileSettings() {
        const {username, password, email, firstName, lastName, gender, country, description} = this.state.form;
        this.props.updateProfileSettings(username || '', password || '', email || '', firstName || '', lastName || '', gender || '', country || '', description || '');
    }

    render() {
        return (
            <SidedContent title='Profile Settings   '>
                <div>

                    {/*<Segment>*/}
                    <Form>
                        {this.props.successfulUpdate ? (
                            <Message positive>
                                <p> Your information has been successfully changed!</p>
                            </Message>
                        ) : ''}
                        {this.props.failedUpdate ? (
                            <Message negative>
                                <p>{this.props.errMessage}</p>
                            </Message>
                        ) : ''}
                        <Segment>
                            <Form.Group widths={"equal"}>
                                <Form.Field required
                                            id='form-input-control-username'
                                            control={Input}
                                            label='Username'
                                            placeholder='username'
                                            onChange={this.onFormInput('username')}

                                />
                                <Form.Input label='Password' type='password' onChange={this.onFormInput('password')}
                                            required/>
                            </Form.Group>
                            <Form.Field
                                id='form-input-control-email'
                                control={Input}
                                label='Email'
                                placeholder='joe@schmoe.com'
                                onChange={this.onFormInput('email')}
                            />

                        </Segment>
                        <Segment>
                            <Form.Group widths='equal'>
                                <Form.Field required
                                            id='form-input-control-first-name'
                                            control={Input}
                                            label='First name'
                                            placeholder='First name'
                                            onChange={this.onFormInput('firstName')}
                                />
                                <Form.Field required
                                            id='form-input-control-last-name'
                                            control={Input}
                                            label='Last name'
                                            placeholder='Last name'
                                            onChange={this.onFormInput('lastName')}
                                />
                                <Form.Field
                                            control={Select}
                                            options={genderOptions}
                                            label={{children: 'Gender', htmlFor: 'form-select-control-gender'}}
                                            placeholder='Gender'
                                            search
                                            searchInput={{id: 'form-select-control-gender'}}
                                            onChange={this.onFormInput('gender')}
                                />
                            </Form.Group>

                            <Form.Field>
                                <label>Country</label>
                                <Dropdown
                                    placeholder='Select Country'
                                    fluid
                                    search
                                    selection
                                    options={countryOptions}
                                    onChange={this.onFormInput('country')}
                                />
                            </Form.Field>

                        </Segment>

                        <Segment>
                            <Form.Field>
                                <label>Avatar</label>
                                <Image src='https://react.semantic-ui.com/images/wireframe/white-image.png'
                                       size='medium'
                                       bordered/>
                            </Form.Field>
                            <Form.Field>
                                <InputFile
                                    button={{content: 'Upload', icon: 'image', labelPosition: 'left'}}
                                    input={{
                                        id: 'input-control-id',
                                        onChange: this.handleUpload
                                    }}
                                />
                            </Form.Field>

                            <Form.Field
                                id='form-textarea-control-description'
                                control={TextArea}
                                label='Description'
                                placeholder='description'
                                onChange={this.onFormInput('description')}

                            />
                        </Segment>
                        <Form.Group>
                            <Form.Field>
                                <Button fluid loading={this.props.loading} onClick={() => this.updateProfileSettings()}>
                                    Save
                                </Button>
                            </Form.Field>
                            <Form.Field>
                            </Form.Field>
                        </Form.Group>
                    </Form>
                    {/*</Segment>*/}
                </div>

            </SidedContent>


        )

    }
}

export default connect(
    (state) => ({
        loading: state.profile.loading,
        errMessage: state.profile.errMessage,
        failedUpdate: state.profile.failedUpdate,
        successfulUpdate: state.profile.successfulUpdate

    }),
    (dispatch) => ({
        updateProfileSettings: (
            username,
            password,
            email,
            firstName,
            lastName,
            gender,
            country,
            description
        ) => dispatch(updateProfileAction(username, password, email, firstName, lastName, gender, country, description))
    })
)(ProfileSettings);
