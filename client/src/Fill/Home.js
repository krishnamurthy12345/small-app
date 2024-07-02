import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Home() {
    const [student, setStudent] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3008/actions')
            .then(res => setStudent(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3008/actions/${id}`);
            setStudent(student.filter(data => data.ID !== id));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
            <div className='bg-white rounded w-50 p-3'>
                <h2>My CRUD App</h2>
                <Link to='/create' className='btn btn-success mb-3'>Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {student.map((data) => (
                            <tr key={data.id}>
                                <td>{data.Name}</td>
                                <td>{data.Email}</td>
                                <td>
                                    <Link to={`/update/${data.ID}`} className='btn btn-sm btn-primary me-2'>
                                        Update
                                    </Link>
                                    <button className='btn btn-sm btn-danger' onClick={() => handleDelete(data.ID)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;
