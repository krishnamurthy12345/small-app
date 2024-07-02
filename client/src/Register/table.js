// Table.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3008/getdata');
      setData(response.data);
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3008/student/${id}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Network response was not ok');
        }
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  };

  return (
    <>
      <div className="App">
        <h1>Data from the Database</h1>
        <center>
          <table className="bor">
            <thead className="bor">
              <tr>
                <th>S.No</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Confirm Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="bor">
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.confirmPassword}</td>
                  <td>
                    <Link to='/reg'>
                      <button type="button" className="btn btn-info">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(item.id)}
                      type="button"
                      className="btn btn-danger mar"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
      </div>
    </>
  );
}

export default Table;
