import React from "react";
import { useLocation } from "react-router";
import { Link, NavLink } from "react-router-dom";
import NavBar from "../CommonComponents/NavBar";
import Footer from "../CommonComponents/Footer";

const ArrangementDetails = () => {
	const location = useLocation();
	const isActive = (path) => location.pathname === path;
	return (
		<div className="d-flex flex-column min-vh-100">
			<NavBar isLogin={true} />
			<div class="container">
				<br />
				<nav class="custom-breadcrumb" aria-label="breadcrumb">
					<ol class="breadcrumb" id="breadcrumb">
						<Link
							className="btn btn-outline-fed"
							title="Go To Previous Page"
							to={"/materiality"}>
							<i className="bi bi-arrow-left"></i>
						</Link>
						<li class="breadcrumb-item">
							<span class="breadcrumb-number" style={{ marginLeft: "20px" }}>
								1
							</span>
							<Link to="#">Communication Details</Link>
						</li>
						<li class="breadcrumb-item">
							<span class="breadcrumb-number">2</span>
							<Link to="#">Service Provider Details</Link>
						</li>
						<li class="breadcrumb-item">
							<span class="breadcrumb-number">3</span>
							<Link to="#">Risk/Materiality Assessment</Link>
						</li>
						<li class="breadcrumb-item">
							<span class="breadcrumb-number">4</span>
							<NavLink
								to="/arrangementdetails"
								isActive={() => isActive("/arrangementdetails")}
								activeClassName="active">
								Arrangement Details
							</NavLink>
							<Link to="#"></Link>
						</li>
						<li class="breadcrumb-item">
							<span class="breadcrumb-number">5</span>
							<Link to="#">Document Details</Link>
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
								<label htmlFor="" className="form label">
									Nature of proposed Arrangement
								</label>
								<select className="form-control" name="">
									<option value="">--Select--</option>
									<option value="Applicable">Applicable</option>
									<option value="Not Applicable">Not Applicable</option>
								</select>
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									Brief description about the arrangement
								</label>
								<textarea className="form-control" rows="3"></textarea>
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									Whether the Information Systems of the service provider is
									compatible with the bank's systems?
								</label>
								<select className="form-control" name="">
									<option value="">--Select--</option>
									<option value="Yes">Yes</option>
									<option value="No">No</option>
								</select>
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									Nature of connectivity between Bank's system and the Service
									Provider
								</label>
								<select className="form-control" name="">
									<option value="">--Select--</option>
									<option value="Yes">Yes</option>
									<option value="No">No</option>
								</select>
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									Whether the proposed arrangement is Core Business Activity
								</label>
								<div id="radioOptions" className="d-flex flex-row">
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="auditOption"
											id="yesOption"
											value="yes"
										/>
										<label className="form-check-label" htmlFor="yesOption">
											Yes
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="auditOption"
											id="noOption"
											value="no"
										/>
										<label className="form-check-label" htmlFor="noOption">
											No
										</label>
									</div>
								</div>
							</div>

							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									Whether the proposed activity is related to any critical process
								</label>
								<div id="radioOptions" className="d-flex flex-row">
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="auditOption"
											id="yesOption"
											value="yes"
										/>
										<label className="form-check-label" htmlFor="yesOption">
											Yes
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="auditOption"
											id="noOption"
											value="no"
										/>
										<label className="form-check-label" htmlFor="noOption">
											No
										</label>
									</div>
								</div>
							</div>

							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									Whether the service provider sub-contracts completely or any
									part of the outsourced activity
								</label>
								<div id="radioOptions" className="d-flex flex-row">
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="auditOption"
											id="yesOption"
											value="yes"
										/>
										<label className="form-check-label" htmlFor="yesOption">
											Yes
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="auditOption"
											id="noOption"
											value="no"
										/>
										<label className="form-check-label" htmlFor="noOption">
											No
										</label>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									Whether the Service Provider provides the same services to any
									other Banks/Financial Institutions
								</label>
								<div id="radioOptions" className="d-flex flex-row">
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="auditOption"
											id="yesOption"
											value="yes"
										/>
										<label className="form-check-label" htmlFor="yesOption">
											Yes
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="auditOption"
											id="noOption"
											value="no"
										/>
										<label className="form-check-label" htmlFor="noOption">
											No
										</label>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									Whether the proposed arrangement is IT Outsourcing
								</label>
								<div id="radioOptions" className="d-flex flex-row">
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="auditOption"
											id="yesOption"
											value="yes"
										/>
										<label className="form-check-label" htmlFor="yesOption">
											Yes
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="auditOption"
											id="noOption"
											value="no"
										/>
										<label className="form-check-label" htmlFor="noOption">
											No
										</label>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									Customer details/any critical or sensitive data are shared with
									the Service Provider as part of this arrangement
								</label>
								<div id="radioOptions" className="d-flex flex-row">
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="auditOption"
											id="yesOption"
											value="yes"
										/>
										<label className="form-check-label" htmlFor="yesOption">
											Yes
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="auditOption"
											id="noOption"
											value="no"
										/>
										<label className="form-check-label" htmlFor="noOption">
											No
										</label>
									</div>
								</div>
							</div>

							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									Whether this arrangement involves any engagement of resources at
									Banks premises
								</label>
								<div id="radioOptions" className="d-flex flex-row">
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="auditOption"
											id="yesOption"
											value="yes"
										/>
										<label className="form-check-label" htmlFor="yesOption">
											Yes
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="auditOption"
											id="noOption"
											value="no"
										/>
										<label className="form-check-label" htmlFor="noOption">
											No
										</label>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									Type of access for the ServiceProvider to critical data/info
								</label>
								<select className="form-control" name="">
									<option value="">--Select--</option>
									<option value="L0">L0</option>
									<option value="L1">L1</option>
									<option value="L2">L2</option>
									<option value="L3">L3</option>
								</select>
							</div>

							<br />
							<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-end gap-2">
								<button className="btn btn-danger">Clear</button>
								<Link to="/docdetails" className="btn btn-success">
									Save and Next
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ArrangementDetails;
