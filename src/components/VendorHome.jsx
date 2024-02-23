import React from "react";
import { Link } from "react-router-dom";
//import SideBar from './SideBar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook, faClipboard } from "@fortawesome/free-solid-svg-icons"; // Import the icon
//import { faEdit, faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./NavBar";
import Footer from "./Footer";
const VendorHome = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
			<NavBar />
			<div className="container-fluid flex-fill">
				<div className="row">
					{/* Sidebar */}
					<div
						className="bg-white col-auto col-md-2 min-vh-100"
						style={{
							padding: "20px 0",
							width: "200px",
							borderRight: "1px solid #ccc",
							boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
						}}>
						<Link className="text-decoration-none text-blue d-flex align-items-center">
							<span className="ms-3 fs-5 text-center">
								<b>DASHBOARD</b>
							</span>
						</Link>
						<br />
						<ul className="nav nav-pills flex-column">
							<li className="nav-item fs-4">
								<Link
									to="/addvendor"
									className="nav-link fs-5 text-blue"
									aria-current="page">
									<FontAwesomeIcon icon={faHome} style={{ color: "#f7a600" }} />

									<span className="ms-2">Home</span>
								</Link>
							</li>
							<li className="nav-item fs-4">
								<Link
									to="/addvendor"
									className="nav-link fs-5 text-blue"
									aria-current="page">
									<FontAwesomeIcon icon={faBook} style={{ color: "#f7a600" }} />
									<span className="ms-2">Add Vendor</span>
								</Link>
							</li>
							<li className="nav-item fs-4">
								<Link
									to="/vendoraudit"
									className="nav-link fs-5 text-blue"
									aria-current="page">
									<FontAwesomeIcon
										icon={faClipboard}
										style={{ color: "#f7a600" }}
									/>
									<span className="ms-2">Vendor Audit</span>
								</Link>
							</li>
						</ul>
					</div>
					{/* Main Content */}
					<main className="col-md-10">
						<div className="container">
							<br />
							<div className="row">
								<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center">
									<h2 style={{ color: "#01468e" }}>
										<b>VENDOR MANAGEMENT</b>
									</h2>
									<br />
									<br />

									<div className="row g-3 mb-3 justify-content-between">
										<div className="col col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
											<div className="input-group shadow-sm rounded">
												<div className="form-floating">
													<input
														type="text"
														className="form-control"
														id="floatingInput"
														placeholder="Search"
													/>
													<label htmlFor="floatingInput">Search</label>
												</div>

												<button
													type="button"
													className="btn btn-outline-fed"
													title="Search">
													<i className="bi bi-search"></i>
												</button>
											</div>
										</div>

										<div className="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
											<div className="input-group shadow-sm rounded">
												<div className="form-floating">
													<select
														className="form-select"
														id="floatingSelect1"
														aria-label="Floating label select example">
														<option defaultValue={"all"}>All</option>
														<option value="1">IT</option>
														<option value="2">HR</option>
														<option value="3">Finance</option>
													</select>
													<label htmlFor="floatingSelect1">
														Department
													</label>
												</div>

												<div className="form-floating">
													<select
														className="form-select"
														id="floatingSelect2"
														aria-label="Floating label select example">
														<option defaultValue={"all"}>All</option>
														<option value="1">Active</option>
														<option value="2">Draft</option>
														<option value="3">
															Assigned to Executive
														</option>
													</select>
													<label htmlFor="floatingSelect2">Status</label>
												</div>

												<button
													type="button"
													className="btn btn-outline-fed"
													title="Apply Filters">
													<i className="bi bi-arrow-return-right"></i>
												</button>
											</div>
										</div>
									</div>
									<div className="row g-3">
										<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
											<h5 style={{ textAlign: "left" }}>
												List of vendors onboard
											</h5>
											<br />
											<table className="table table-striped table-hover text-nowrap shadow mb-4">
												<thead>
													<tr>
														<th scope="col">#</th>
														<th scope="col">Service Provider</th>
														<th scope="col">
															Type of Service Provider
														</th>
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
															<button
																type="button"
																className="btn btn-primary m-1"
																title="Edit Vendor Details">
																<i className="bi bi-pencil"></i>
															</button>
															<button
																type="button"
																className="btn btn-danger m-1"
																title="Deactivate Vendor">
																<i className="bi bi-x-circle"></i>
															</button>
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
															<button
																type="button"
																className="btn btn-primary m-1"
																title="Edit Vendor Details">
																<i className="bi bi-pencil"></i>
															</button>
															<button
																type="button"
																className="btn btn-danger m-1"
																title="Deactivate Vendor">
																<i className="bi bi-x-circle"></i>
															</button>
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
															<button
																type="button"
																className="btn btn-primary m-1"
																title="Edit Vendor Details">
																<i className="bi bi-pencil"></i>
															</button>
															<button
																type="button"
																className="btn btn-danger m-1"
																title="Deactivate Vendor">
																<i className="bi bi-x-circle"></i>
															</button>
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
															<button
																type="button"
																className="btn btn-primary m-1"
																title="Edit Vendor Details">
																<i className="bi bi-pencil"></i>
															</button>
															<button
																type="button"
																className="btn btn-danger m-1"
																title="Deactivate Vendor">
																<i className="bi bi-x-circle"></i>
															</button>
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
															<button
																type="button"
																className="btn btn-primary m-1"
																title="Edit Vendor Details">
																<i className="bi bi-pencil"></i>
															</button>
															<button
																type="button"
																className="btn btn-danger m-1"
																title="Deactivate Vendor">
																<i className="bi bi-x-circle"></i>
															</button>
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
							<ul className="pagination">
								<li className="page-item">
									<Link className="page-link" to="#" aria-label="Previous">
										<span aria-hidden="true">&laquo;</span>
									</Link>
								</li>
								<li className="page-item">
									<Link className="page-link" to="#">
										1
									</Link>
								</li>
								<li className="page-item">
									<Link className="page-link" to="#">
										2
									</Link>
								</li>
								<li className="page-item">
									<Link className="page-link" to="#">
										3
									</Link>
								</li>
								<li className="page-item">
									<Link className="page-link" to="#" aria-label="Next">
										<span aria-hidden="true">&raquo;</span>
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default VendorHome;
