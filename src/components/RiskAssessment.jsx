import React from 'react'
import { useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
const RiskAssessment = () => {
    const location = useLocation();
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand >

                        <div className="d-flex align-items-center">
                            <Link to="/vendorhome" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <FontAwesomeIcon icon={faHome} style={{ color: "#f7a600", marginRight: '20px' }} title='Home' /></Link>
                            <span style={{ color: "#01468e", marginRight: '50px' }}><h4><b>ADD VENDOR</b></h4></span>
                        </div>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/addvendor"><b>Communication Details</b></Nav.Link>
                            <Nav.Link href="/serviceprovider"><b>Service Provider Details</b></Nav.Link>
                            <Nav.Link href="/risk" className={location.pathname === "/risk" ? "active" : ""} style={{ color: location.pathname === "/risk" ? "green" : "" }}><b>Risk/Materiality Assessment</b></Nav.Link>
                            <Nav.Link href="/arrangementdetails"><b>Arrangement Details</b></Nav.Link>
                            <Nav.Link href="/esg"><b>ESG</b></Nav.Link>
                            <Nav.Link href="/documentdetails"><b>Document Details</b></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br /> <br />

            <div className="container mb-5">
                <h5><b>Risk Assessment</b></h5><br />
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table" style={{ borderSpacing: '20px',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', border: '1px solid rgba(0, 0, 0, 0.1)' }}>
                            <thead>
                                <tr style={{ textAlign: 'justified' }}>
                                    <th scope="col" style={{ width: '20%' }}>Type of Risk</th>
                                    <th scope="col" style={{ width: '30%' }}>Questionaire</th>
                                    <th scope="col"style={{ width: '20%' }}>Department Risk Rating</th>
                                    <th scope="col" style={{ width: '20%' }}>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >

                                    <td style={{ paddingTop: '20px' }} >Strategic Risk</td>
                                    <td style={{ paddingTop: '20px' }}>Whether the service provider conducts any business on its own behalf or provides services to other financial institutions similar to the business outsourced by the Bank</td>
                                    <td>
                                        <select className="form-control" name="" style={{ width: '100px',marginLeft: '30px',marginTop:'30px'}}>
                                            <option value="">--Select--</option>
                                            <option value="L1">L1</option>
                                            <option value="L2">L2</option>
                                            <option value="L3">L3</option>
                                            <option value="L4">L4</option>
                                            <option value="L5">L5</option>
                                        </select>
                                        
                                    </td>
                                    <td style={{ paddingTop: '20px' }}>
                                    <textarea className="form-control" rows="3"></textarea>
                                    </td>
                                </tr>
                                <tr>
                                <td style={{ paddingTop: '20px' }}>Compliance Risk</td>
                                    <td style={{ paddingTop: '20px' }}>Whether the arrangement with the service provider poses any regulatory risk to the Bank.</td>
                                    <td>
                                        <select className="form-control" name="" style={{ width: '100px',marginLeft: '30px',marginTop:'30px'}}>
                                            <option value="">--Select--</option>
                                            <option value="L1">L1</option>
                                            <option value="L2">L2</option>
                                            <option value="L3">L3</option>
                                            <option value="L4">L4</option>
                                            <option value="L5">L5</option>
                                        </select>
                                        
                                    </td>
                                    <td style={{ paddingTop: '20px' }}>
                                    <textarea className="form-control" rows="3"></textarea>
                                    </td>
                                </tr>
                                <tr>
                                <td style={{ paddingTop: '20px' }}>Reputation  Risk</td>
                                    <td style={{ paddingTop: '20px' }}>Whether the Service Provider has any negative public/social image.</td>
                                    <td>
                                        <select className="form-control" name="" style={{ width: '100px',marginLeft: '30px',marginTop:'30px'}}>
                                            <option value="">--Select--</option>
                                            <option value="L1">L1</option>
                                            <option value="L2">L2</option>
                                            <option value="L3">L3</option>
                                            <option value="L4">L4</option>
                                            <option value="L5">L5</option>
                                        </select>
                                        
                                    </td>
                                    <td style={{ paddingTop: '20px' }}>
                                    <textarea className="form-control" rows="3"></textarea>
                                    </td>
                                </tr>
                                <tr>
                                <td style={{ paddingTop: '20px' }}>Operational  Risk</td>
                                    <td style={{ paddingTop: '20px' }}>Whether the arrangement with the service provider can result in risk from failure or ineffectiveness of Internal processes, people, systems or from external events</td>
                                    <td>
                                        <select className="form-control" name="" style={{ width: '100px',marginLeft: '30px',marginTop:'30px'}}>
                                            <option value="">--Select--</option>
                                            <option value="L1">L1</option>
                                            <option value="L2">L2</option>
                                            <option value="L3">L3</option>
                                            <option value="L4">L4</option>
                                            <option value="L5">L5</option>
                                        </select>
                                        
                                    </td>
                                    <td style={{ paddingTop: '20px' }}>
                                    <textarea className="form-control" rows="3"></textarea>
                                    </td>
                                </tr>
                                <tr>
                                <td style={{ paddingTop: '20px' }}>Counterparty Risk</td>
                                    <td style={{ paddingTop: '20px' }}>Whether the Service Provider is financially sound and has the ability to service commitments oven under adverse conditions</td>
                                    <td>
                                        <select className="form-control" name="" style={{ width: '100px',marginLeft: '30px',marginTop:'30px'}}>
                                            <option value="">--Select--</option>
                                            <option value="L1">L1</option>
                                            <option value="L2">L2</option>
                                            <option value="L3">L3</option>
                                            <option value="L4">L4</option>
                                            <option value="L5">L5</option>
                                        </select>
                                        
                                    </td>
                                    <td style={{ paddingTop: '20px' }}>
                                    <textarea className="form-control" rows="3"></textarea>
                                    </td>
                                </tr>
                                <tr>
                                <td style={{ paddingTop: '20px' }}>Country Risk</td>
                                    <td style={{ paddingTop: '20px' }}>If there are any external factors which may impect the aperations of the Sarvice Providar</td>
                                    <td>
                                        <select className="form-control" name="" style={{ width: '100px',marginLeft: '30px',marginTop:'30px'}}>
                                            <option value="">--Select--</option>
                                            <option value="L1">L1</option>
                                            <option value="L2">L2</option>
                                            <option value="L3">L3</option>
                                            <option value="L4">L4</option>
                                            <option value="L5">L5</option>
                                        </select>
                                        
                                    </td>
                                    <td style={{ paddingTop: '20px' }}>
                                    <textarea className="form-control" rows="3"></textarea>
                                    </td>
                                </tr>
                                <tr>
                                <td style={{ paddingTop: '20px' }}>Concentration and Systemic Risk</td>
                                    <td style={{ paddingTop: '20px' }}>Whether there is an over rafiance on the servica provider at the Bank levat or at the industry lovel</td>
                                    <td>
                                        <select className="form-control" name="" style={{ width: '100px',marginLeft: '30px',marginTop:'30px'}}>
                                            <option value="">--Select--</option>
                                            <option value="L1">L1</option>
                                            <option value="L2">L2</option>
                                            <option value="L3">L3</option>
                                            <option value="L4">L4</option>
                                            <option value="L5">L5</option>
                                        </select>
                                        
                                    </td>
                                    <td style={{ paddingTop: '20px' }}>
                                    <textarea className="form-control" rows="3"></textarea>
                                    </td>
                                </tr>
                                <tr>
                                <td style={{ paddingTop: '20px' }}>ESG Risk</td>
                                    <td style={{ paddingTop: '20px' }}>Approach/mectantum/practices of the Service Provider with regard to climate change impacts mitigation & adaptation, environmental management, working & safety conditions of employees, respecting human rights, anti-bribory & anti corruption, compilance to nouane Unu & regulations etc.</td>
                                    <td>
                                        <select className="form-control" name="" style={{ width: '100px',marginLeft: '30px',marginTop:'30px'}}>
                                            <option value="">--Select--</option>
                                            <option value="L1">L1</option>
                                            <option value="L2">L2</option>
                                            <option value="L3">L3</option>
                                            <option value="L4">L4</option>
                                            <option value="L5">L5</option>
                                        </select>
                                        
                                    </td>
                                    <td style={{ paddingTop: '20px' }}>
                                    <textarea className="form-control" rows="3"></textarea>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    
                </div>
                <br />
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-end gap-2" >
                                
                                <button className="btn btn-danger">Clear</button>
                                <Link to="/materiality" className="btn btn-success">Save</Link>
                            </div>
            </div>
        </div>
    )
}

export default RiskAssessment