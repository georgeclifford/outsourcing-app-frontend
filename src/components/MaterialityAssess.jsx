import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
const MaterialityAssess = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    return (
        <div className="d-flex flex-column min-vh-100" >
            <NavBar isLogin={true} />
            <div class="container">

                <br />
                <nav class="custom-breadcrumb" aria-label="breadcrumb">

                    <ol class="breadcrumb" id="breadcrumb">
                        <Link
                            className="btn btn-outline-fed"
                            title="Go To Previous Page"
                            to={"/risk"}>
                            <i className="bi bi-arrow-left" ></i>
                        </Link>
                        <li class="breadcrumb-item">
                            <span class="breadcrumb-number" style={{ marginLeft: '20px' }}>1</span>
                            <a href="#">Communication Details</a>
                        </li>
                        <li class="breadcrumb-item">
                            <span class="breadcrumb-number">2</span>
                            <a href="#">Service Provider Details</a>
                        </li>
                        <li class="breadcrumb-item">
                            <span class="breadcrumb-number">3</span>
                            <NavLink
                                to="/materiality"
                                isActive={() => isActive("/materiality")}
                                activeClassName="active"
                            >
                                Risk/Materiality Assessment
                            </NavLink>
                        </li>
                        <li class="breadcrumb-item">
                            <span class="breadcrumb-number">4</span>
                            <a href="#">Arrangement Details</a>
                        </li>
                        <li class="breadcrumb-item">
                            <span class="breadcrumb-number">5</span>
                            <a href="#">Document Details</a>
                        </li>
                    </ol>
                </nav>
            </div>
            <br /> <br />

            <div className="container mb-5">
                <h5><b>Materiality Assessment</b></h5><br />
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table className="table" style={{ borderSpacing: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', border: '1px solid rgba(0, 0, 0, 0.1)' }}>
                            <thead>
                                <tr style={{ textAlign: 'justified' }}>
                                    <th scope="col" style={{ width: '20%' }}>Assessment Type</th>
                                    <th scope="col" style={{ width: '30%' }}>Questionaire</th>
                                    <th scope="col" style={{ width: '20%' }}>Department Response</th>
                                    <th scope="col" style={{ width: '20%' }}>Department Remarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >

                                    <td style={{ paddingTop: '20px' }} >Impact on Data sharing and confidentaility</td>
                                    <td style={{ paddingTop: '20px' }}>Whether the city beting sanal information of customers, non employees etc or confidentiatial/sensitive information of bank to the Service Provider</td>
                                    <td>
                                        <select className="form-control" name="" style={{ width: '100px', marginLeft: '30px', marginTop: '30px' }}>
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
                                    <td style={{ paddingTop: '20px' }}>Impact on Share Legal Compliance Generation</td>
                                    <td style={{ paddingTop: '20px' }}>Whether the arrangement with the service provider poses any regulatory risk to the Bank.</td>
                                    <td>
                                        <select className="form-control" name="" style={{ width: '100px', marginLeft: '30px', marginTop: '30px' }}>
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
                                        <select className="form-control" name="" style={{ width: '100px', marginLeft: '30px', marginTop: '30px' }}>
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
                                        <select className="form-control" name="" style={{ width: '100px', marginLeft: '30px', marginTop: '30px' }}>
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
                                        <select className="form-control" name="" style={{ width: '100px', marginLeft: '30px', marginTop: '30px' }}>
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
                                        <select className="form-control" name="" style={{ width: '100px', marginLeft: '30px', marginTop: '30px' }}>
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
                                        <select className="form-control" name="" style={{ width: '100px', marginLeft: '30px', marginTop: '30px' }}>
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
                                        <select className="form-control" name="" style={{ width: '100px', marginLeft: '30px', marginTop: '30px' }}>
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
                    <Link to="/arrangementdetails" className="btn btn-success">Save and Next</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MaterialityAssess