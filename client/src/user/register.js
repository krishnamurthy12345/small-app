import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reg1 = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3008/Getdata');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  const handleCreate = async () => {
    try {
      await axios.post('http://localhost:3008/create_user', { username, email, password });
      fetchData();
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error creating user', error);
    }
  };
  

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:3008/update/${id}`, { username, email, password });
      fetchData();
    } catch (error) {
      console.error('Error updating user', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3008/delete/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting user', error);
    }
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.email}
            <button onClick={() => handleUpdate(user.id)}>Update</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Create User</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} /><br/>
      <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br/>
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br/>
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default Reg1;
