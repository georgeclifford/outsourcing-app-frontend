import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../CommonComponents/NavBar";
import Footer from "../CommonComponents/Footer";
import AddVendorSidebar from "./AddVendorSidebar";


const VendorHome = () => {
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
			<NavBar isLogin={true} isSidebar={true}/>
			<div className="container-fluid flex-fill">
				<div className="row">
				<div className="col-lg-2 col-xl-2 col-xxl-2 p-0 shadow">
						{window.innerWidth < 992 ? (
							// Render offcanvas sidebar for smaller screens
							<AddVendorSidebar
								isLarge={false}
								toggleSidebar={() => setisLargeWindow(!isLargeWindow)}
							/>
						) : (
							// Render sidebar as part of body for larger screens
							<AddVendorSidebar isLarge={true} />
						)}
					</div>
					{/* Main Content */}
					<main className="col-md-10">
						<div className="container">
						<div className="row my-3">
								<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
									<Link
										className="btn btn-outline-fed"
										title="Go To Previous Page"
										to={"/adminhome"}>
										<i className="bi bi-arrow-left"></i>
									</Link>
									<h2 className="text-center"style={{ color: "#01468e" }}><b>VENDOR MANAGEMENT</b></h2>
								</div>
							</div>
							<br />
							<div className="row">
								<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center">
									
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
										<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 table-responsive">
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
						<div className="col-md-10 mx-auto mt-3 d-flex justify-content-end">
						<nav aria-label="Page navigation example">
							<ul className="pagination">
								<li className="page-item">
									<Link className="page-link text-fed" 
									to="#" aria-label="Previous">
										<span aria-hidden="true">&laquo;</span>
									</Link>
								</li>
								<li className="page-item">
									<Link className="page-link btn-fed" to="#">
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
									<Link className="page-link text-fed" to="#" aria-label="Next">
										<span aria-hidden="true">&raquo;</span>
									</Link>
								</li>
							</ul>
						</nav>
					</div>
					</main>
					
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default VendorHome;
