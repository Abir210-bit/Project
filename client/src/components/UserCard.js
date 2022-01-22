import React from 'react'
import {Card, Button} from "react-bootstrap"
import { deleteUser } from '../redux/actions/userActions'
import {useDispatch} from "react-redux"


const UserCard = ({user,key}) => {
    const dispatch = useDispatch()
    const remove = (user) => {
        console.log(user)
        dispatch(deleteUser(user))
        
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png" alt="avatar" />
            <Card.Body>
                <Card.Title>Name: {user.name} </Card.Title>
                <Card.Text>
                Age: {user.age}
                </Card.Text>
                <Card.Text>
                Bio: {user.bio}
                </Card.Text>
                <Button variant="danger" onClick={() => remove(user._id)}> delete </Button>
            </Card.Body>

        </Card>
    )
}

export default UserCard
