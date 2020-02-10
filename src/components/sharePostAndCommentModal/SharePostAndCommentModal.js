import React from 'react'
import {Button, Header, Icon, Modal} from 'semantic-ui-react'


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

