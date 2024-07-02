import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Admin/Driver.css';


function Driver() {
    return (
        <>
            <div className="container">
                <form action="#">
                    <h3>Basic Information</h3>
                    <div className="content">
                        <div className="input-box">
                            <label for='name' className="placeholder1">FirstName</label>
                            <input type="text" placeholder="Enter the Firstname" name="Firstname" required />
                        </div>
                        <div className="input-box">
                            <label for='name'>LastName</label>
                            <input type="text" placeholder="Enter the Lastname" name="Lastname" required />
                        </div>
                        <div className="input-box">
                            <label for='name'>Street Adress1</label>
                            <input type="text" placeholder="Enter the Address1" name="Addname" required />
                        </div>
                        <div className="input-box">
                            <label for='name'>Street Address2</label>
                            <input type="text" placeholder="Enter the Address2" name="Add1name" required />
                        </div>
                        <div className="input-box">
                            <label for='name'>City</label>
                            <input type="text" placeholder="Enter CityName" name="cname" required />
                        </div>
                        <div className="input-box">
                            <label for='name'>Country</label>
                            <input type="text" placeholder="Enter Country" name="coname" required />
                        </div>
                        <div className="input-box">
                            <label for='name'>Zip Code</label>
                            <input type="number" placeholder="Enter ZipCode" name="code" required />
                        </div>
                        <div className="input-box">
                            <label for='name'>Email</label>
                            <input type="email" placeholder="Enter Mail" name="email" required />
                        </div>
                        <div className="input-box">
                            <label for='name'>Mobile Number</label>
                            <input type="number" placeholder="Enter the Number" name="number" required />
                        </div>
                        <span className="gender-title">Gender</span>
                        <div className="gender-category">
                            <input type="radio" name="gender" id='male' />
                            <label for='gender'>Male</label>
                            <input type="radio" name="gender" id='female' />
                            <label for='gender'>female</label>
                        </div>
                        <div className="input-box">
                            <label for='name'></label>
                            <input type="file" placeholder="Upload Profile Photo" name="cname" required />
                        </div>
                    </div>
                    <div className="container1">
                        <h3>Vehicle Information</h3>
                        <div className="content">
                            <div className="input-box">
                                <label for='name'>Vehicle Number</label>
                                <input type="text" placeholder="Vehicle Number" name="vehicle" required />
                            </div>
                            <div className="input-box">
                                <label for='name'>Vehicle type</label>
                                <input type="text" placeholder="Vehicle type" name="" required />
                                <select>
                                    <option>Bike</option>
                                    <option>Auto</option>
                                    <option>Car</option>
                                    <option>Premium Car</option>
                                    <option>Electic Vehicle</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <label for='name'>Vehicle Model</label>
                                <input type="text" placeholder="Vehicle Model" name="name" required />
                            </div>
                            <div className="input-box">
                                <label for='name'>Seating capacity</label>
                                <input type="number" placeholder="Seating capacity" name="Add1name" required />
                            </div>
                            <div className="input-box">
                                <label for='name'>Tax Renewal Date</label>
                                <input type="date" placeholder="Tax Renewal Date" name="tname" required />
                            </div>
                            <div className="input-box">
                                <label for='name'>Insurance Renewal Date</label>
                                <input type="date" placeholder="Insurance Renewal Date" name="rename" required />
                            </div>

                            <div className="input-box">
                                <label for='name'></label>
                                <input type="file" placeholder="Upload Profile Photo" name="cname" required />
                            </div>
                        </div>
                    </div>
                    <button>Submit</button>
                    <button>Cancel</button>
                </form>
            </div>
        </>
    );
}
export default Driver;