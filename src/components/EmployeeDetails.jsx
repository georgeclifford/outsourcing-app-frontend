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
			<NavBar />
			<div className="container flex-fill">
				<div className="row my-5">
					<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center">
						<h4>Employee Details</h4>
					</div>
				</div>

				<div className="row pb-3">
					<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
						<button
							type="button"
							className="btn btn-outline-dark shadow-sm"
							title="Add New Employee"
							data-bs-toggle="modal"
							data-bs-target="#addEmployee">
							Add Employee
						</button>
						<AddEmployee />
					</div>
				</div>

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

							<button type="button" className="btn btn-outline-dark" title="Search">
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
									<option value="1">Risk Profiling</option>
									<option value="2">Feasibiliy</option>
									<option value="3">Compliance</option>
									<option value="4">Legal</option>
									<option value="5">Access Management</option>
								</select>
								<label htmlFor="floatingSelect1">Designation</label>
							</div>

							<div className="form-floating">
								<select
									className="form-select"
									id="floatingSelect2"
									aria-label="Floating label select example">
									<option defaultValue={"all"}>All</option>
									<option value="1">Reviewer</option>
									<option value="2">Approver</option>
								</select>
								<label htmlFor="floatingSelect2">Role</label>
							</div>

							<button
								type="button"
								className="btn btn-outline-dark"
								title="Apply Filters">
								<i className="bi bi-arrow-return-right"></i>
							</button>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 table-responsive">
						<table className="table table-striped table-hover text-nowrap shadow mb-4">
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
									<Link className="page-link" to="#" aria-label="Previous">
										<span aria-hidden="true">&laquo;</span>
									</Link>
								</li>
								<li className="page-item">
									<Link className="page-link active" aria-current="page" to="#">
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
									<Link className="page-link" to="#">
										4
									</Link>
								</li>
								<li className="page-item">
									<Link className="page-link" to="#">
										5
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

export default EmployeeDetails;
