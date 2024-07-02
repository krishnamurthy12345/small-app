import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './country.css';

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [showCountries, setShowCountries] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.countrystatecity.in/v1/countries', {
          headers: {
            'X-CSCAPI-KEY': 'UWowS1B5TkZDbDQ5QlI2UjlXQTFNN09hYkEwZmJqdGptZjVZN09yZQ==',
          },
        });
        setCountries(response.data.map((country) => ({ id: country.id, name: country.name, code: country.iso2 })));
      } catch (error) {
        console.error('Error fetching data: ', error);
        setError('Error fetching data. Please try again later.');
      }
    };
    fetchData();
  }, []);

  const handleShowCountries = () => {
    setShowCountries(true);
  };
   
  const storeDB =async () =>{

   try{
    const res =await axios.post('http://localhost:3004/countries',{data:countries});
    console.log(res)
    alert("Data store successfully")

   }
   catch (error) {
    alert('Data is not store.')

   }
  }

  return (
    <div className='container p-3'>
      <center><h1><strong>Country Data</strong></h1>

      {error && <div className="alert">{error}</div>}

      <button onClick={handleShowCountries}><b>Sync Countries</b></button><br/>
      <button className='btn mt-2' onClick={storeDB}><b>Save Database</b></button></center>


      {showCountries && (
        <center><table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Code</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => (
              <tr key={country.id}>
                <td>{country.id}</td>
                <td>{country.name}</td>
                <td>{country.code}</td>
              </tr>
            ))}
          </tbody>
        </table></center>
      )}
    </div>
  );
};

export default Country;

// ---------------backend link-- backend.js--------------
