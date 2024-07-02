import React, { useState } from 'react';
import '../Admin/Form.css';

function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = () => {
        
        if (!firstName || !lastName || !email || !phoneNumber) {
            alert('Please fill in all fields before submitting.');
            return;
        }
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Phone Number:', phoneNumber);
        
        alert('Form submitted successfully!');

        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
    };

    return (
        <div className='main1'>
            <label htmlFor='firstName'>First Name : </label>
            <input
                type='text'
                id='firstName'
                placeholder='Enter your First name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            /><br />

            <label htmlFor='lastName'>Last Name: </label>
            <input
                type='text'
                id='lastName'
                placeholder='Enter your Last name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            /><br />

            <label htmlFor='email'>Email : </label>
            <input
                type='text'
                id='email'
                placeholder='Enter your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            /><br />

            <label htmlFor='phoneNumber'>Phone Number : </label>
            <input
                type='text'
                id='phoneNumber'
                placeholder='Enter your Number'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            /><br />

            <button onClick={handleSubmit}>Submit</button>
            <form>

            </form>
        </div>
    );
}

export default Form;
