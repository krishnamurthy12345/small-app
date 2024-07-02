import React, { useState } from 'react';
import '../Admin/Mainbar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Mainbar() {
    const[navCollapse,setNavCollapse]=useState(false);
    return (
        <div className='container-fluid'>
            <nav className='nav'>
                <div className='logo'>
                <h2>Navv</h2>
                <i className='bi bi-justify largeDeviceIcon' onClick={e => setNavCollapse(!navCollapse)}></i>
                </div>
                <ul>
                    <li>Home</li>
                    <li>New Blog</li>
                </ul>
            </nav>
            <div className='sidebar_content'>
                <div className={`sidebar-container ${navCollapse ? " navCollaps " : ""}`}>
                    <div className='nav-option option1'>
                        <i className='bi bi-speedometer2'></i>
                        <h3>DashBoard</h3>
                    </div>
                    <div className='nav-option option1'>
                        <i className='bi bi-table'></i>
                        <h3>Bookings</h3>
                    </div>
                    <div className='nav-option option1'>
                        <i className='bi bi-people'></i>
                        <h3>User List</h3>
                    </div>
                    <div className='nav-option option1'>
                        <i className='bi bi-fan'></i>
                        <h3>Trips</h3>
                    </div>
                    <div className='nav-option option1'>
                        <i className='bi bi-grid'></i>
                        <h3>Drivers</h3>
                    </div>
                    <div className='nav-option option1'>
                        <i className='bi bi-person'></i>
                        <h3>Fare-Manage</h3>
                    </div>
                    <div className='nav-option option1'>
                        <i className='bi bi-collection'></i>
                        <h3>Coupons</h3>
                    </div>
                    <div className='nav-option option1'>
                        <i className='bi bi-inbox'></i>
                        <h3>Email</h3>
                    </div>
                    <div className='nav-option option1'>
                        <i className='bi bi-grid'></i>
                        <h3>Logout</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mainbar;