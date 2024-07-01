import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of props.history

const Login = props => {
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate(); // Use the useNavigate hook for navigation

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeId = e => {
        setId(e.target.value);
    };

    const login = () => {
        props.login({ name: name, id: id });
        navigate('/'); // Navigate to the home page
    };

    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={name}
                        onChange={onChangeName}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter id"
                        value={id}
                        onChange={onChangeId}
                    />
                </Form.Group>
                <Button variant="primary" onClick={login}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;
