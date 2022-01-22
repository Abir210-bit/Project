import React, {useState,useEffect} from 'react'
import { Form, Button } from 'react-bootstrap'
import { authProfile, logout } from '../redux/actions/authActions';

import { updateUser } from '../redux/actions/userActions'
import {useDispatch, useSelector} from "react-redux"

const Modify = ({history}) => {
    const [newUser, setNewUser] = useState({})
    const dispatch = useDispatch()
    
    const handleInput = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }
 
    const user = useSelector(state => state.authReducer.user)

    const valide = () => {
        dispatch(updateUser(user._id,newUser,history))
    }
    return (
        <div className="Modify">
            <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label> {/* label */}
                <Form.Control name="name"  defaultValue={user.name} onChange={(e) => handleInput(e)} /> {/* input */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAge">
                <Form.Label>Age</Form.Label> {/* label */}
                <Form.Control name="age"  defaultValue={user.age} onChange={e => handleInput(e)} /> {/* input */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicBio">
                <Form.Label>Bio</Form.Label> {/* label */}
                <Form.Control name="bio"  defaultValue={user.bio} onChange={(e) => handleInput(e)} /> {/* input */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label> {/* label */}
                <Form.Control name="email"  defaultValue={user.email} onChange={(e) => handleInput(e)} /> {/* input */}
            </Form.Group>

        

            <Button onClick={() => valide()}>
                Valider
            </Button>
            </Form>
        </div>
    )
}

export default Modify
