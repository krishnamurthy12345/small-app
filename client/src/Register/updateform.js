import React, { useState } from 'react';
import axios from 'axios';
import "./Register.css";
import FormInput from "./components/FormInput";

const Updateform = ({ Id }) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = values;

    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill in all the fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Make the PUT request to update the data
    axios
      .put(`http://localhost:3008/updatedata/${Id}`, {
        username,
        email,
        password,
        confirmPassword
      })
      .then((response) => {
        alert("Update successful!");
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        setError("An error occurred. Please try again.");
      });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      required: true,
    },
  ];

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Update form</h1>
        {error && <p className="error">{error}</p>}
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit" className="button1">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Updateform;
