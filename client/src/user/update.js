import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:3003/update/${id}`);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user: ', error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  const updateUser = async () => {
    try {
      await axios.put(`http://localhost:3003/update/${id}`, user);
      // Handle the successful update here
    } catch (error) {
      console.error('Error updating user: ', error);
    }
  };

  return (
    <div className='App'>
      <h2>Update User</h2>
      <input
        type="text"
        placeholder="Username"
        value={user.username || ''}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <br />
      <input
        type="text"
        placeholder="Email"
        value={user.email || ''}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={user.password || ''}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <br />
      <button onClick={updateUser}>Update User</button>
    </div>
  );
};

export default UpdateUser;
