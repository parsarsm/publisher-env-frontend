import React from 'react'
import {Button, Divider, Header, Icon, Image, Modal, Segment} from 'semantic-ui-react'
import MarkdownEditor from "../markdownEditor/MarkdownEditor";
import {Tab} from 'semantic-ui-react'
import ImageUploader from "../imageUploader/ImageUploader";


export default class SharePostAndCommentModal extends React.PureComponent {
    state = {modalOpen: false};

    handleOpen = () => this.setState({modalOpen: true});

    handleClose = () => this.setState({modalOpen: false});

    render() {
        const {trigger, link} = this.props;
        return (
            <Modal trigger={trigger}
                   onClose={this.handleClose}
                   basic
                   size='small'
            >
                <Header icon='browser' content='Post Link'/>
                <Modal.Content>
                    <h3>{link}</h3>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' onClick={this.handleClose} inverted>
                        <Icon name='checkmark'/> To Exit Press ESC
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

