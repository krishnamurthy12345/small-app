import React from 'react';
import './main.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
    return (
        <>
            <h2>Support</h2>
            <div class="row row-cols-1 row-cols-md-4 g-4 container">
                <div class="col">
                    <div class="card h-100 first">
                        <img src="https://www.shutterstock.com/image-vector/crowd-people-silhouette-icon-vector-260nw-2337747647.jpg" className="image1" alt="..." />
                        <div class="card-body ">
                            <h5 class="card-title">Total Users</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 second">
                        <img src="https://img.freepik.com/free-photo/blue-user-icon-symbol-website-admin-social-login-element-concept-white-background-3d-rendering_56104-1217.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" className="image2" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Active</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 third">
                        <img src="https://m.media-amazon.com/images/I/61vBJ41AO5L._AC_UF894,1000_QL80_.jpg" className="image3" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">No Longer User</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 fourth">
                        <img src="https://en.pimg.jp/054/819/036/1/54819036.jpg" className="image4" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Pending</h5>
                        </div>
                    </div>
                </div>
            </div><br />
            <>
                <form>
                    <h6>Show
                        <select >
                            <option>10</option>
                            <option>20</option>
                            <option>25</option>
                            <option>30</option>
                        </select>
                        Entries</h6>
                    <table border={2}>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>User_Name</th>
                                <th>Password</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>MobileNo</th>
                                <th>OTP</th>
                                <th>OTP_EXp</th>
                                <th>Is_AcceptTerms</th>
                                <th>Profile_Image</th>
                                <th>Wallet_Amount</th>
                                <th>Gender</th>
                                <th>Emergency_No</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Krishna</td>
                                <td>******</td>
                                <td>krishna</td>
                                <td>k</td>
                                <td>7708367085</td>
                                <td>8754</td>
                                <td>----</td>
                                <td><input type="checkbox" name="true" /></td>
                                <td><input type="checkbox" name="true" /></td>
                                <td>100</td>
                                <td>male</td>
                                <td>8940648232</td>
                                <div>
                                    <td className='icon1'><FontAwesomeIcon icon={faPenToSquare} /></td>
                                    <td className='icon2'><FontAwesomeIcon icon={faTrashCan} /></td>
                                </div>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </>
        </>
    )
}

export default Main