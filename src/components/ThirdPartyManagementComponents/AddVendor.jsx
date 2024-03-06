import React from "react";
import { useLocation } from "react-router";
import { Link, NavLink } from "react-router-dom";
import NavBar from "../CommonComponents/NavBar";
import Footer from "../CommonComponents/Footer";

const AddVendor = () => {
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
							to={"/vendorhome"}>
							<i className="bi bi-arrow-left"></i>
						</Link>
						<li class="breadcrumb-item">
							<span class="breadcrumb-number" style={{ marginLeft: "20px" }}>
								1
							</span>
							<NavLink
								to="/addvendor"
								isActive={() => isActive("/addvendor")}
								activeClassName="active">
								Communication Details
							</NavLink>
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
							<Link to="#">Arrangement Details</Link>
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
						<div className="row g-3">
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									Name of Service Provider
								</label>
								<input type="text" className="form-control" />
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									Office Type
								</label>
								<input type="text" className="form-control" />
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									Name of Department Office
								</label>
								<input type="text" className="form-control" />
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									Business Department SPOC Contact No/SPOC Name
								</label>
								<input type="text" className="form-control" />
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									Business Department SPOC Contact Email ID
								</label>
								<input type="email" className="form-control" />
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									Type of Service Provider
								</label>
								<select className="form-control" name="">
									<option value="">--Select--</option>
									<option value="IT">IT</option>
									<option value="HR">HR</option>
									<option value="Finance">Finance</option>
								</select>
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									Service Provider SPOC Contact No/SPOC Name
								</label>
								<input type="text" className="form-control" />
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									Service Provider SPOC Email ID
								</label>
								<input type="email" className="form-control" />
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									GST/PAN OF Service Provider
								</label>
								<select className="form-control" name="">
									<option value="">--Select--</option>
									<option value="GST">GST</option>
									<option value="PAN">PAN</option>
								</select>
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									GST Number
								</label>
								<input type="text" className="form-control" />
							</div>
							<br />
							<h5>Address Details</h5>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									Address of Service Provider
								</label>
								<input type="text" className="form-control" />
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									Address Line 1
								</label>
								<input type="text" className="form-control" />
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									Street
								</label>
								<input type="text" className="form-control" />
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									District
								</label>
								<input type="text" className="form-control" />
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									PIN
								</label>
								<input type="text" className="form-control" />
							</div>

							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="" className="form label">
									State
								</label>
								<select className="form-control" name="">
									<option value="">--Select--</option>
									<option value="IT">Kerala</option>
									<option value="HR">Tamilnadu</option>
									<option value="Finance">Karnataka</option>
									<option value="Finance">Andhra Pradesh</option>
								</select>
							</div>
							<br />
							<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-end gap-2">
								<button className="btn btn-danger">Clear</button>
								<Link to="/serviceprovider" className="btn btn-success">
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

export default AddVendor;
