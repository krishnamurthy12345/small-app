import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';
// import { API_URL } from '../Constants/URL';
import { useNavigate } from 'react-router-dom';

function Update() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [id, setId] = useState('');
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const updateUser = async () => {
    try {
      await axios.put(`'http://localhost:3003/update/'/${id}`, {
        firstName,
        lastName,
        checked,
      });
      navigate('/read');
    } catch (error) {
      console.error('Error updating user', error);
    }
  };

  useEffect(() => {
    setId(localStorage.getItem('id'));
    setFirstName(localStorage.getItem('firstName'));
    setLastName(localStorage.getItem('lastName'));
    setChecked(JSON.parse(localStorage.getItem('checked')));
  }, []);

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
          <Checkbox
            checked={checked}
            onChange={() => setChecked(!checked)}
            label='Agree to the terms & conditions'
          />
        </Form.Field>
        <br />
        <Button onClick={updateUser}>Update</Button>
      </Form>
    </>
  );
}

export default Update;
