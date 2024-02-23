import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const AddVendor = () => {
    const location = useLocation();
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/vendorhome">
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faHome} style={{ color: "#f7a600", marginRight: '20px' }} title='Home' />
                            <span style={{ color: "#01468e", marginRight: '50px' }}><h4><b>ADD VENDOR</b></h4></span>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/addvendor" className={location.pathname === "/addvendor" ? "active" : ""} style={{ color: location.pathname === "/addvendor" ? "green" : "" }} ><b>Communication Details</b></Nav.Link>
                            <Nav.Link href="/serviceprovider"><b>Service Provider</b></Nav.Link>
                            <Nav.Link href="/riskdetails"><b>Risk/Materiality Assessment</b></Nav.Link>
                            <Nav.Link href="/arrangementdetails"><b>Arrangement Details</b></Nav.Link>
                            <Nav.Link href="/esg"><b>ESG</b></Nav.Link>
                            <Nav.Link href="/documentdetails"><b>Document Details</b></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br /> <br />

            <div className="container mb-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Name of Service Provider</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Office Type</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Name of Department Office</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Business Department SPOC Contact No/SPOC Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Business Department SPOC Contact Email ID</label>
                                <input type="email" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Type of Service Provider</label>
                                <select className="form-control" name="">
                                <option value="">--Select--</option>
                                    <option value="IT">IT</option>
                                    <option value="HR">HR</option>
                                    <option value="Finance">Finance</option>
                                </select>


                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Service Provider SPOC Contact No/SPOC Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Service Provider SPOC Email ID</label>
                                <input type="email" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">GST/PAN OF Service Provider</label>
                                <select className="form-control" name="">
                                    <option value="">--Select--</option>
                                    <option value="GST">GST</option>
                                    <option value="PAN">PAN</option>
                                </select>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">GST Number</label>
                                <input type="text" className="form-control" />
                            </div>
                            <br />
                            <h5>Address Details</h5>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Address of Service Provider</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Address Line 1</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Street</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">District</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">PIN</label>
                                <input type="text" className="form-control" />
                            </div>
                       
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form label">State</label>
                            <select className="form-control" name="">
                            <option value="">--Select--</option>
                                    <option value="IT">Kerala</option>
                                    <option value="HR">Tamilnadu</option>
                                    <option value="Finance">Karnataka</option>
                                    <option value="Finance">Andhra Pradesh</option>
                                </select>
                        </div>
                        <br />
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-left gap-2" >
                        <Link to="/serviceprovider" className="btn btn-success">Save</Link>
                            <button className="btn btn-danger">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>   
       
    );
};

export default AddVendor;
