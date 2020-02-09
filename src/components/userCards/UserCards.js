import React from 'react';
import UserCard from "./UserCard";
import {Card} from 'semantic-ui-react'

export default class UserCards extends React.PureComponent {

    render() {
        const {cards} = this.props;
        console.log(cards);
        return (
            <Card.Group>
                {
                    cards.map((user) => <UserCard key={user.id} card={user}/>)
                }
            </Card.Group>)
    }


}