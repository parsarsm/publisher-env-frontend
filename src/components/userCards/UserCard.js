import React from 'react'
import {Button, Card, Image} from "semantic-ui-react";


export default class UserCard extends React.PureComponent {

    render() {
        const {card} = this.props;
        return (
            <Card>
                <Card.Content max-width={100}>
                    <Image
                        floated='right'
                        size='mini'
                        src={card.image}
                    />
                    <Card.Header>{card.name}</Card.Header>
                    <Card.Meta>{card.username}</Card.Meta>
                    <Card.Description>
                        {card.description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='red'>
                            Remove
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        );
    }
}