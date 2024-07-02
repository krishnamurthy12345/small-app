import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        axios.post('http://localhost:3008/create', { name, email })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => {
                console.error(err);
            });
    }

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
            <div className='bg-white p-3 rounded w-50'>
                <form onSubmit={handleSubmit}>
                    <h2>Add User</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            placeholder="Enter the name"
                            className='form-control'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            placeholder="Enter the Email"
                            className='form-control'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Create;
