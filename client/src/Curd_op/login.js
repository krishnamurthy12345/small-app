import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Curd_op/style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const logindata = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData(event.target);
            const response = await axios.post('http://localhost:3008/Login_data', formData);
            if (response.data.status === 'error') {
                alert('Query error');
            } else if (response.data.status === 'success') {
                const id = response.data.id;
                localStorage.setItem('id', id);
                alert('Logged in');
                window.location.href = "./dashboard";
            } else if (response.data.status === 'Invalid') {
                alert('Invalid username and password');
            } else {
                alert('Contact Admin');
            }
        } catch (error) {
            alert('Error occurred while processing the request');
            console.error('Error:', error);
        }
    };
 

    return (
        <>
            <div className="container img1 ">
                <div className="row">
                    <div className="col-lg-7  mt-3 align-items-center">
                        <h5 className="fw-bold text-monospace mt-3">Login into your account</h5>
                        <form onSubmit={logindata}>
                            <div className="mb-4">
                                <label>Username</label>
                                <input type="text" id="username" name="username" placeholder="Enter your name" className="form-control col-sm-7" />
                            </div>
                            <div className="mb-4">
                                <label>Password</label>
                                <input type="password" id="password" name="password" placeholder="Enter a valid password" className="form-control col-sm-7" />
                            </div>
                            <div className="pt-1 mb-4">
                                <button className="btn btn-dark btn-lg col-sm-7" type="submit">
                                    Login
                                </button>
                            </div>
                            <a className="text-muted" href="#!">
                                Forgot password?
                            </a>
                            <p className="mb-5 pb-lg-2 text-center">
                                Don't have an account?
                                <Link to="/Reg">
                                    <a href="#!" className="text-primary">
                                        Register
                                    </a>
                                </Link>
                            </p>
                        </form>
                    </div>
                    <div className="col-lg-5 mb-3">
                        {/* <img src={back1} alt="no image" className="h-100 w-100" /> */}
                    </div>
                </div>
            </div>
        </>
    );
}
