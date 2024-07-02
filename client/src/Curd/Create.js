import React, { useState } from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

    const postData = async () => {
        try {
            await axios.post('http://localhost:3003/create', {
                firstName,
                lastName,
                checked
            });
            navigate('/read');
        } catch (error) {
            console.error('Error during data submission:', error);
            // Handle the error, show an error message, or perform other actions as needed
        }
    };

    return (
        <>
            <Form className='form'>
                <Form.Field>
                    <label>First name</label>
                    <input
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        placeholder='Enter First Name'
                    />
                </Form.Field>
                <br />
                <Form.Field>
                    <label>Last name</label>
                    <input
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        placeholder='Enter Last Name'
                    />
                </Form.Field>
                <br />
                <Form.Field>
                    <Checkbox checked={checked} onChange={() => setChecked(!checked)} label='Agree to the terms & conditions' />
                </Form.Field>
                <br />
                <Button onClick={postData}>Submit</Button>
            </Form>
        </>
    );
}

export default Create;
