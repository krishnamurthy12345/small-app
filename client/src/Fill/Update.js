import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
     const {id}=useParams();
    const navigate=useNavigate

    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.put('http://localhost:3008/update/'+id,{name,email})
        .then(res =>{
            navigate('/')

        }).catsh(err => console.log(err));
    }
    return (
        <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
            <div className='bg-white p-3 rounded w-50'>
                <form onSubmit={handleSubmit}>
                <h2>Update User</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter the name" className='form-control'
                    onChange={e => setEmail(e.target.value)}/>
                </div>
        
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Enter the Email" className='form-control'
                    onChange={e => setName(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Update</button>
                </form>
                
            </div>
        </div>
    )
}

export default Update