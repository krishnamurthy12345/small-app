import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

function Read() {
  const [apiData, setAPIData] = useState([]);
  const navigate = useNavigate();

  const updateUser = ({ firstName, lastName, checked, id }) => {
    localStorage.setItem('id', id);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('checked', checked);
    navigate('/update');
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3003/mydata/${id}`);
      callGetAPI();
    } catch (error) {
      console.error('Error deleting data', error);
    }
  };

  const callGetAPI = async () => {
    try {
      const res = await axios.get('http://localhost:3003/getdata');
      setAPIData(res.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  useEffect(() => {
    callGetAPI();
  }, []);

  return (
    <>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>firstName</Table.HeaderCell>
            <Table.HeaderCell>lastName</Table.HeaderCell>
            <Table.HeaderCell>checked</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {apiData.map((data) => (
            <Table.Row key={data.id}>
              <Table.Cell>{data.firstName}</Table.Cell>
              <Table.Cell>{data.lastName}</Table.Cell>
              <Table.Cell>{data.checked ? 'checked' : 'not checked'}</Table.Cell>
              <Table.Cell>
                <Button onClick={() => deleteUser(data.id)}>Delete</Button>
              </Table.Cell>
              <Table.Cell>
                <Button onClick={() => updateUser(data)}>Update</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
}

export default Read;
