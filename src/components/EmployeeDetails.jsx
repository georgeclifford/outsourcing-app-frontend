import React from "react";
import { Link } from "react-router-dom";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import ChangeEmpPassword from "./ChangeEmpPassword";
import NavBar from "./NavBar";
import Footer from "./Footer";

const EmployeeDetails = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
			<NavBar isLogin={true} />
			<div className="container flex-fill">
				<div className="row my-3">
					<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
						<Link
							className="btn btn-outline-fed btn-circle"
							title="Go To Previous Page"
							to="/adminhome">
							<i className="bi bi-arrow-left"></i>
						</Link>
						<h4 className="text-center">Employee Details</h4>
					</div>
				</div>

				<div className="row mb-3">
					<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
						<button
							type="button"
							className="btn btn-outline-fed shadow-sm"
							title="Add New Employee"
							data-bs-toggle="modal"
							data-bs-target="#addEmployee">
							Add Employee
						</button>
						<AddEmployee />
					</div>
				</div>

				<div className="row g-3 mb-4 justify-content-between">
					<div className="col col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
						<div className="input-group shadow-sm rounded">
							<input type="text" className="form-control" placeholder="Search" />
							<button type="button" className="btn btn-outline-fed" title="Search">
								<i className="bi bi-search"></i>
							</button>
						</div>
					</div>

					<div className="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
						<div className="input-group shadow-sm rounded">
							<label className="input-group-text" htmlFor="inputGroupSelect01">
								Designation :
							</label>
							<select className="form-select" id="inputGroupSelect01">
								<option defaultValue={"all"}>All</option>
								<option value="1">Risk Profiling</option>
								<option value="2">Feasibiliy</option>
								<option value="3">Compliance</option>
								<option value="4">Legal</option>
								<option value="5">Access Management</option>
							</select>

							<label className="input-group-text" htmlFor="inputGroupSelect02">
								Role :
							</label>
							<select className="form-select" id="inputGroupSelect02">
								<option defaultValue={"all"}>All</option>
								<option value="1">Reviewer</option>
								<option value="2">Approver</option>
							</select>

							<button
								type="button"
								className="btn btn-outline-fed"
								title="Apply Filters">
								<i className="bi bi-arrow-return-right"></i>
							</button>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 table-responsive">
						<table className="table table-striped table-hover align-middle text-nowrap shadow mb-4">
							<thead>
								<tr>
									<th scope="col">ID</th>
									<th scope="col">Name</th>
									<th scope="col">Email</th>
									<th scope="col">Designation</th>
									<th scope="col">Role</th>
									<th scope="col">Actions</th>
								</tr>
							</thead>
							<tbody className="table-group-divider">
								<tr>
									<th scope="row">1001</th>
									<td>James Paul McCartney</td>
									<td>paulmccartney@gmail.com</td>
									<td>Risk Profiling</td>
									<td>Reviewer</td>
									<td>
										<button
											type="button"
											className="btn btn-primary m-1"
											title="Edit Employee Details"
											data-bs-toggle="modal"
											data-bs-target="#editEmployee">
											<i className="bi bi-pencil"></i>
										</button>

										<EditEmployee />

										<button
											type="button"
											className="btn btn-warning m-1"
											title="Change Employee Password"
											data-bs-toggle="modal"
											data-bs-target="#changePassword">
											<i className="bi bi-shield-lock"></i>
										</button>

										<ChangeEmpPassword />

										<button
											type="button"
											className="btn btn-danger m-1"
											title="Deactivate Employee">
											<i className="bi bi-x-circle"></i>
										</button>
									</td>
								</tr>

								<tr>
									<th scope="row">1002</th>
									<td>James Paul McCartney</td>
									<td>paulmccartney@gmail.com</td>
									<td>Risk Profiling</td>
									<td>Reviewer</td>
									<td>
										<button
											type="button"
											className="btn btn-primary m-1"
											title="Edit Employee Details"
											data-bs-toggle="modal"
											data-bs-target="#editEmployee">
											<i className="bi bi-pencil"></i>
										</button>

										<EditEmployee />

										<button
											type="button"
											className="btn btn-warning m-1"
											title="Change Employee Password"
											data-bs-toggle="modal"
											data-bs-target="#changePassword">
											<i className="bi bi-shield-lock"></i>
										</button>

										<ChangeEmpPassword />

										<button
											type="button"
											className="btn btn-danger m-1"
											title="Deactivate Employee">
											<i className="bi bi-x-circle"></i>
										</button>
									</td>
								</tr>

								<tr>
									<th scope="row">1003</th>
									<td>James Paul McCartney</td>
									<td>paulmccartney@gmail.com</td>
									<td>Risk Profiling</td>
									<td>Reviewer</td>
									<td>
										<button
											type="button"
											className="btn btn-primary m-1"
											title="Edit Employee Details"
											data-bs-toggle="modal"
											data-bs-target="#editEmployee">
											<i className="bi bi-pencil"></i>
										</button>

										<EditEmployee />

										<button
											type="button"
											className="btn btn-warning m-1"
											title="Change Employee Password"
											data-bs-toggle="modal"
											data-bs-target="#changePassword">
											<i className="bi bi-shield-lock"></i>
										</button>

										<ChangeEmpPassword />

										<button
											type="button"
											className="btn btn-success m-1"
											title="Activate Employee">
											<i className="bi bi-check-circle"></i>
										</button>
									</td>
								</tr>

								<tr>
									<th scope="row">1004</th>
									<td>James Paul McCartney</td>
									<td>paulmccartney@gmail.com</td>
									<td>Risk Profiling</td>
									<td>Reviewer</td>
									<td>
										<button
											type="button"
											className="btn btn-primary m-1"
											title="Edit Employee Details"
											data-bs-toggle="modal"
											data-bs-target="#editEmployee">
											<i className="bi bi-pencil"></i>
										</button>

										<EditEmployee />

										<button
											type="button"
											className="btn btn-warning m-1"
											title="Change Employee Password"
											data-bs-toggle="modal"
											data-bs-target="#changePassword">
											<i className="bi bi-shield-lock"></i>
										</button>

										<ChangeEmpPassword />

										<button
											type="button"
											className="btn btn-success m-1"
											title="Activate Employee">
											<i className="bi bi-check-circle"></i>
										</button>
									</td>
								</tr>

								<tr>
									<th scope="row">1005</th>
									<td>James Paul McCartney</td>
									<td>paulmccartney@gmail.com</td>
									<td>Risk Profiling</td>
									<td>Reviewer</td>
									<td>
										<button
											type="button"
											className="btn btn-primary m-1"
											title="Edit Employee Details"
											data-bs-toggle="modal"
											data-bs-target="#editEmployee">
											<i className="bi bi-pencil"></i>
										</button>

										<EditEmployee />

										<button
											type="button"
											className="btn btn-warning m-1"
											title="Change Employee Password"
											data-bs-toggle="modal"
											data-bs-target="#changePassword">
											<i className="bi bi-shield-lock"></i>
										</button>

										<ChangeEmpPassword />

										<button
											type="button"
											className="btn btn-danger m-1"
											title="Deactivate Employee">
											<i className="bi bi-x-circle"></i>
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div className="row mt-2 mb-5">
					<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
						<nav aria-label="Page navigation">
							<ul className="pagination justify-content-end">
								<li className="page-item">
									<Link
										className="page-link  text-fed"
										to="#"
										aria-label="Previous">
										<span aria-hidden="true">&laquo;</span>
									</Link>
								</li>
								<li className="page-item">
									<Link className="page-link btn-fed" aria-current="page" to="#">
										1
									</Link>
								</li>
								<li className="page-item">
									<Link className="page-link text-fed" to="#">
										2
									</Link>
								</li>
								<li className="page-item">
									<Link className="page-link text-fed" to="#">
										3
									</Link>
								</li>
								<li className="page-item">
									<Link className="page-link text-fed" to="#">
										4
									</Link>
								</li>
								<li className="page-item">
									<Link className="page-link text-fed" to="#">
										5
									</Link>
								</li>
								<li className="page-item">
									<Link className="page-link text-fed" to="#" aria-label="Next">
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

export default EmployeeDetails;
