import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const FinancialOutsourcing = () => {
	const [isLargeWindow, setisLargeWindow] = useState(true); // Initially open for larger screens

	useEffect(() => {
		const handleResize = () => {
			// Close sidebar on smaller screens
			if (window.innerWidth < 992) {
				setisLargeWindow(false);
			} else {
				setisLargeWindow(true);
			}
		};

		// Add event listener for window resize
		window.addEventListener("resize", handleResize);

		// Call handleResize once on initial render
		handleResize();

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="d-flex flex-column min-vh-100">
			<NavBar />

			<div className="container-fluid flex-fill">
				<div className="row">
					<div className="col-lg-2 col-xl-2 col-xxl-2 p-0 shadow">
						{window.innerWidth < 992 ? (
							// Render offcanvas sidebar for smaller screens
							<Sidebar
								isLarge={false}
								toggleSidebar={() => setisLargeWindow(!isLargeWindow)}
							/>
						) : (
							// Render sidebar as part of body for larger screens
							<Sidebar isLarge={true} />
						)}
					</div>
					<div className="col-lg-10 col-xl-10 col-xxl-10">
						<div className="container">
							<div className="row my-3">
								<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
									<Link
										className="btn btn-outline-fed"
										title="Go To Previous Page"
										to={"/outsrcmanage"}>
										<i className="bi bi-arrow-left"></i>
									</Link>
									<h4 className="text-center">Financial Outsourcing</h4>
								</div>
							</div>

							<div className="row pb-3">
								<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
									<button
										type="button"
										className="btn btn-outline-fed shadow-sm"
										title="Add New Employee"
										data-bs-toggle="modal"
										data-bs-target="#addEmployee">
										New Finance
									</button>
									{/* <AddEmployee /> */}
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
											className="btn btn-outline-fed"
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

													{/* <EditEmployee /> */}

													<button
														type="button"
														className="btn btn-warning m-1"
														title="Change Employee Password"
														data-bs-toggle="modal"
														data-bs-target="#changePassword">
														<i className="bi bi-shield-lock"></i>
													</button>

													{/* <ChangeEmpPassword /> */}

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

													{/* <EditEmployee /> */}

													<button
														type="button"
														className="btn btn-warning m-1"
														title="Change Employee Password"
														data-bs-toggle="modal"
														data-bs-target="#changePassword">
														<i className="bi bi-shield-lock"></i>
													</button>

													{/* <ChangeEmpPassword /> */}

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

													{/* <EditEmployee /> */}

													<button
														type="button"
														className="btn btn-warning m-1"
														title="Change Employee Password"
														data-bs-toggle="modal"
														data-bs-target="#changePassword">
														<i className="bi bi-shield-lock"></i>
													</button>

													{/* <ChangeEmpPassword /> */}

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

													{/* <EditEmployee /> */}

													<button
														type="button"
														className="btn btn-warning m-1"
														title="Change Employee Password"
														data-bs-toggle="modal"
														data-bs-target="#changePassword">
														<i className="bi bi-shield-lock"></i>
													</button>

													{/* <ChangeEmpPassword /> */}

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

													{/* <EditEmployee /> */}

													<button
														type="button"
														className="btn btn-warning m-1"
														title="Change Employee Password"
														data-bs-toggle="modal"
														data-bs-target="#changePassword">
														<i className="bi bi-shield-lock"></i>
													</button>

													{/* <ChangeEmpPassword /> */}

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
												<Link
													className="page-link btn-fed"
													aria-current="page"
													to="#">
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
												<Link
													className="page-link text-fed"
													to="#"
													aria-label="Next">
													<span aria-hidden="true">&raquo;</span>
												</Link>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default FinancialOutsourcing;
