import React from 'react'
import { useLocation } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const ServiceProviderDetails = () => {
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
                            to={"/addvendor"}>
                            <i className="bi bi-arrow-left" ></i>
                        </Link>
                        <li class="breadcrumb-item">
                            <span class="breadcrumb-number" style={{ marginLeft: '20px' }}>1</span>
                            <a href="#">Communication Details</a>
                        </li>
                        <li class="breadcrumb-item">
                            <span class="breadcrumb-number">2</span>
                            <NavLink
                                to="/serviceprovider"
                                isActive={() => isActive("/serviceprovider")}
                                activeClassName="active"
                            >
                              Service Provider Details
                            </NavLink>

                          
                        </li>
                        <li class="breadcrumb-item">
                            <span class="breadcrumb-number">3</span>
                            <a href="#">Risk/Materiality Assessment</a>
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
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-5">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Where isthe headquaters Service Provider</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">How many employees does service provider have</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Where are the local offices of service provider</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Promoters/Promoter group of service provider</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Who are the typical clients of service provider</label>
                                <input type="email" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">How many clients does the service provider currently serve</label>
                                <input type="email" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Type of engagement</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">How many years has the service provider been in business</label>
                                <input type="email" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Comfirm the KYC compliance of external service provider</label>
                                <select className="form-control" name="">
                                    <option value="">--Select--</option>
                                    <option value="KYC complied">KYC complied</option>
                                    <option value="KYC not complied">KYC not complied</option>
                                </select>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Does the service provider have any framework in place to conduct due diligence on its sub service provider </label>
                                <select className="form-control" name="">

                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>

                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Incase the service provider operates outside India whether the Bank/regulatory authorities have the right to perform periodic
                                    Audit/Inspection/Assessment on vendor</label>
                                <select className="form-control" name="">
                                    <option value="">--Select--</option>
                                    <option value="Applicable">Applicable</option>
                                    <option value="Not Applicable">Not Applicable</option>
                                </select>
                            </div>

                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Whether the service provider performs the background checks of employees
                                    working and handling confidential data before staffing</label>
                                <div id="radioOptions" className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="yesOption" value="yes" />
                                        <label className="form-check-label" htmlFor="yesOption">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="noOption" value="no" />
                                        <label className="form-check-label" htmlFor="noOption">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Whether the service provider executes NDA/ Code of conduct with its employees at the time of joining</label>
                                <div id="radioOptions" className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="yesOption" value="yes" />
                                        <label className="form-check-label" htmlFor="yesOption">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="noOption" value="no" />
                                        <label className="form-check-label" htmlFor="noOption">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Confirm that service provider is capable of resumption of service by contingency planning and testing. Whether business continuity planning is tested/ reviewed annually</label>
                                <div id="radioOptions" className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="yesOption" value="yes" />
                                        <label className="form-check-label" htmlFor="yesOption">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="noOption" value="no" />
                                        <label className="form-check-label" htmlFor="noOption">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Confirm that business operations of the service provider are legal and they are not involved in any illegal activities (including key management personnel)</label>
                                <div id="radioOptions" className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="yesOption" value="yes" />
                                        <label className="form-check-label" htmlFor="yesOption">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="noOption" value="no" />
                                        <label className="form-check-label" htmlFor="noOption">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Whether the service provider follows applicable laws/rules and regulations Compliance to Income/Goods & Service tax laws and permission from local bodies/competent authorities to carry out the activity</label>
                                <div id="radioOptions" className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="yesOption" value="yes" />
                                        <label className="form-check-label" htmlFor="yesOption">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="noOption" value="no" />
                                        <label className="form-check-label" htmlFor="noOption">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Whether the Service Provider is in the caution list maintained by IBA</label>
                                <div id="radioOptions" className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="yesOption" value="yes" />
                                        <label className="form-check-label" htmlFor="yesOption">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="noOption" value="no" />
                                        <label className="form-check-label" htmlFor="noOption">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Whether all the applicable licenses have been obtained and are valid (Such as PF, ESIC, Shop Establishment, Goods & Services Tax etc.)</label>
                                <div id="radioOptions" className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="yesOption" value="yes" />
                                        <label className="form-check-label" htmlFor="yesOption">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="noOption" value="no" />
                                        <label className="form-check-label" htmlFor="noOption">
                                            No
                                        </label>
                                    </div>
                                </div>

                            </div>

                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Whether any fraud/bribery/corruption related issues been reported against the service provider/key-management personnel?</label>
                                <div id="radioOptions" className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="yesOption" value="yes" />
                                        <label className="form-check-label" htmlFor="yesOption">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="noOption" value="no" />
                                        <label className="form-check-label" htmlFor="noOption">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Confirm that the service provider is having sound financial condition</label>
                                <div id="radioOptions" className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="yesOption" value="yes" />
                                        <label className="form-check-label" htmlFor="yesOption">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="noOption" value="no" />
                                        <label className="form-check-label" htmlFor="noOption">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Whether the name of the service provider/ promoters/directors matches with the sanctions screening database maintained by Bank for AML checks?</label>
                                <div id="radioOptions" className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="yesOption" value="yes" />
                                        <label className="form-check-label" htmlFor="yesOption">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="noOption" value="no" />
                                        <label className="form-check-label" htmlFor="noOption">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Whether the service provider is based out of/ provides the outsourced services from a country (outside India) which is unstable from political/legal/economic/social issues</label>
                                <div id="radioOptions" className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="yesOption" value="yes" />
                                        <label className="form-check-label" htmlFor="yesOption">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="noOption" value="no" />
                                        <label className="form-check-label" htmlFor="noOption">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Whether migration from the service provider, for the particular activity under consideration, to a new service provider is possible in a short period of time</label>
                                <div id="radioOptions" className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="yesOption" value="yes" />
                                        <label className="form-check-label" htmlFor="yesOption">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="noOption" value="no" />
                                        <label className="form-check-label" htmlFor="noOption">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Does the service provider have necessary insurance policies in place with adequate coverage Professional Indemnity/Cybercrime/Fire and Perills/Employee Fidelity and Professional Indemnity/CGL or Personal Accident</label>
                                <div id="radioOptions" className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="yesOption" value="yes" />
                                        <label className="form-check-label" htmlFor="yesOption">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="noOption" value="no" />
                                        <label className="form-check-label" htmlFor="noOption">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Does the service provider have more than 50% market share across the banking industry for the particular activity to be outsourced</label>
                                <div id="radioOptions" className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="yesOption" value="yes" />
                                        <label className="form-check-label" htmlFor="yesOption">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="noOption" value="no" />
                                        <label className="form-check-label" htmlFor="noOption">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Is the service provider the sole service provider in the banking industry for the particular activity to be outsourced</label>
                                <div id="radioOptions" className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="yesOption" value="yes" />
                                        <label className="form-check-label" htmlFor="yesOption">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="noOption" value="no" />
                                        <label className="form-check-label" htmlFor="noOption">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Are there any reported instances of information security breaches/ data privacy violations at the service providers end?</label>
                                <div id="radioOptions" className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="yesOption" value="yes" />
                                        <label className="form-check-label" htmlFor="yesOption">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="noOption" value="no" />
                                        <label className="form-check-label" htmlFor="noOption">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div> <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Any litigation history against the service provider/key personnel of the service provider?</label>
                                <div id="radioOptions" className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="yesOption" value="yes" />
                                        <label className="form-check-label" htmlFor="yesOption">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="noOption" value="no" />
                                        <label className="form-check-label" htmlFor="noOption">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Whether extemal factors like political, economic, social and legal environment of the jurisdiction and other events that may impact the service delivery are evaluated</label>
                                <div id="radioOptions" className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="yesOption" value="yes" />
                                        <label className="form-check-label" htmlFor="yesOption">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="noOption" value="no" />
                                        <label className="form-check-label" htmlFor="noOption">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Whether service provider requires registration with any regulator (RBI, SEBI, TRAI etc.)?</label>
                                <div id="radioOptions" className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="yesOption" value="yes" />
                                        <label className="form-check-label" htmlFor="yesOption">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="noOption" value="no" />
                                        <label className="form-check-label" htmlFor="noOption">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Whether any Regulatory Audit/ Internal Audit has been carried at service provider location</label>
                                <div id="radioOptions" className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="yesOption" value="yes" />
                                        <label className="form-check-label" htmlFor="yesOption">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="noOption" value="no" />
                                        <label className="form-check-label" htmlFor="noOption">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Any affiliation/relationship between the service provider and the Bank or any Director/Officer/ Employee of the Bank?</label>
                                <div id="radioOptions" className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="yesOption" value="yes" />
                                        <label className="form-check-label" htmlFor="yesOption">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="auditOption" id="noOption" value="no" />
                                        <label className="form-check-label" htmlFor="noOption">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-end gap-2" >

                                <button className="btn btn-danger">Clear</button>
                                <Link to="/risk" className="btn btn-success">Save and Next</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default ServiceProviderDetails