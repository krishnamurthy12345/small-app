import React from 'react';
import './farepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Farepage = () => {
    return (
        <>
            <h4>Fare Page Details</h4><br />
            <div className='main d-flex'>
                <div className='part1 col-lg-6' >
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Cab Type</th>
                                <th>Price/Km</th>
                                <th>Price/Minute</th>
                                <th>Base Fare</th>
                                <th>Commission</th>
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
                                <div>
                                    <td className='icon1'><FontAwesomeIcon icon={faPenToSquare} /></td>
                                    <td className='icon2'><FontAwesomeIcon icon={faTrashCan} /></td>
                                </div>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h4>user</h4>
                    <div className='part2 col-lg-6' >

                      <h6>User datails</h6>

                    </div>
                </div>
            </div >
        </>
    )
}

export default Farepage