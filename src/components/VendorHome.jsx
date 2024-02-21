import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faClipboard } from '@fortawesome/free-solid-svg-icons'; // Import the icon
import { faEdit, faBoxArchive } from '@fortawesome/free-solid-svg-icons';
const VendorHome = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                {/* Sidebar */}
                <div className='bg-white col-auto col-md-2 min-vh-100' style={{ padding: '20px 0', width: '200px', borderRight: '1px solid #ccc', boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)' }}>
                    <a className='text-decoration-none text-blue d-flex align-items-center'>
                        <i className='fs-bi bi-speedometer'></i>
                        <span className='ms-3 fs-5 text-center'><b>DASHBOARD</b></span>
                    </a>
                    <br />
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item fs-4">
                            <a href="/addvendor" className="nav-link fs-5 text-blue" aria-current="page">
                                <FontAwesomeIcon icon={faHome} style={{ color: "#f7a600" }} /> {/* Use the correct icon here */}
                                <span className='ms-2'>Home</span>
                            </a>
                        </li>
                        <li className="nav-item fs-4">
                            <a href="/addvendor" className="nav-link fs-5 text-blue" aria-current="page">
                                <i className='fs-bi bi-house'></i>
                                <FontAwesomeIcon icon={faBook} style={{ color: "#f7a600" }} />
                                <span className='ms-2'>Add Vendor</span>
                            </a>
                        </li>
                        <li className="nav-item fs-4">
                            <a href="/vendoraudit" className="nav-link fs-5 text-blue" aria-current="page">
                                <i className='fs-bi bi-house'></i>
                                <FontAwesomeIcon icon={faClipboard} style={{ color: "#f7a600" }} />
                                <span className='ms-2'>Vendor Audit</span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Main Content */}
                <main className="col-md-10">
                    <div className="container">
                        <br />
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center">
                                <h2 style={{ color: "#01468e" }}><b>VENDOR MANAGEMENT</b></h2><br /><br />
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <h5 style={{ textAlign: 'left' }}>List of vendors onboard</h5><br />
                                        <table className="table table-bordered">

                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Service Provider</th>
                                                    <th scope="col">Type of Service Provider</th>
                                                    <th scope="col">Vendor ID</th>
                                                    <th scope="col">Department</th>
                                                    <th scope="col">Access to critical data</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Accel IT Services</td>
                                                    <td>Private</td>
                                                    <td>V123</td>
                                                    <td>IT</td>
                                                    <td>L2</td>
                                                    <td>Draft</td>
                                                    <td>

                                                        <span className="icon-text">
                                                            <FontAwesomeIcon icon={faEdit} style={{ color: "#6495ED" }} className="me-2" />
                                                            <span className="text">Edit</span>
                                                        </span>
                                                        <span className="icon-text">
                                                            <FontAwesomeIcon icon={faBoxArchive} style={{ color: "red" }} />
                                                            <span className="text">Delete</span>
                                                        </span>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Accel IT Services</td>
                                                    <td>Private</td>
                                                    <td>V123</td>
                                                    <td>IT</td>
                                                    <td>L2</td>
                                                    <td>Draft</td>
                                                    <td>
                                                        <span className="icon-text">
                                                            <FontAwesomeIcon icon={faEdit} style={{ color: "#6495ED" }} className="me-2" />
                                                            <span className="text">Edit</span>
                                                        </span>
                                                        <span className="icon-text">
                                                            <FontAwesomeIcon icon={faBoxArchive} style={{ color: "red" }} />
                                                            <span className="text">Delete</span>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Accel IT Services</td>
                                                    <td>Private</td>
                                                    <td>V123</td>
                                                    <td>IT</td>
                                                    <td>L2</td>
                                                    <td>Draft</td>
                                                    <td>
                                                        <span className="icon-text">
                                                            <FontAwesomeIcon icon={faEdit} style={{ color: "#6495ED" }} className="me-2" />
                                                            <span className="text">Edit</span>
                                                        </span>
                                                        <span className="icon-text">
                                                            <FontAwesomeIcon icon={faBoxArchive} style={{ color: "red" }} />
                                                            <span className="text">Delete</span>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td>Accel IT Services</td>
                                                    <td>Private</td>
                                                    <td>V123</td>
                                                    <td>IT</td>
                                                    <td>L2</td>
                                                    <td>Draft</td>
                                                    <td>
                                                        <span className="icon-text">
                                                            <FontAwesomeIcon icon={faEdit} style={{ color: "#6495ED" }} className="me-2" />
                                                            <span className="text">Edit</span>
                                                        </span>
                                                        <span className="icon-text">
                                                            <FontAwesomeIcon icon={faBoxArchive} style={{ color: "red" }} />
                                                            <span className="text">Delete</span>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">5</th>
                                                    <td>Accel IT Services</td>
                                                    <td>Private</td>
                                                    <td>V123</td>
                                                    <td>IT</td>
                                                    <td>L2</td>
                                                    <td>Draft</td>
                                                    <td>
                                                        <span className="icon-text">
                                                            <FontAwesomeIcon icon={faEdit} style={{ color: "#6495ED" }} className="me-2" />
                                                            <span className="text">Edit</span>
                                                        </span>
                                                        <span className="icon-text">
                                                            <FontAwesomeIcon icon={faBoxArchive} style={{ color: "red" }} />
                                                            <span className="text">Delete</span>
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <div className="col-md-10 mx-auto mt-3 d-flex justify-content-end">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default VendorHome;
