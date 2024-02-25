import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const SLAUpload = () => {
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
			<NavBar isLogin={true} isSidebar={true} />

			<div className="container-fluid flex-fill">
				<div className="row">
					<div className="col-lg-2 col-xl-2 col-xxl-2 p-0 shadow">
						{window.innerWidth < 992 ? (
							// Render offcanvas sidebar for smaller screens
							<Sidebar
								isLarge={false}
								isTab={"SLA"}
								toggleSidebar={() => setisLargeWindow(!isLargeWindow)}
							/>
						) : (
							// Render sidebar as part of body for larger screens
							<Sidebar isLarge={true} isTab={"SLA"} />
						)}
					</div>
					<div className="col-lg-10 col-xl-10 col-xxl-10">
						<div className="container">
							<div className="row my-3">
								<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
									<Link
										className="btn btn-outline-fed btn-circle"
										title="Go To Previous Page"
										to={"/outsrcmanage"}>
										<i className="bi bi-arrow-left"></i>
									</Link>
									<h4 className="text-center">SLA Upload</h4>
								</div>
							</div>

							<div className="row pb-3">
								<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
									<button
										type="button"
										className="btn btn-outline-fed shadow-sm"
										title="Add New SLA"
										data-bs-toggle="modal"
										data-bs-target="#addEmployee">
										New SLA
									</button>
									{/* <AddEmployee /> */}
								</div>
							</div>

							<div className="row g-3 mb-4 justify-content-between">
								<div className="col col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
									<div className="input-group shadow-sm rounded">
										<input
											type="text"
											className="form-control"
											placeholder="Search"
										/>
										<button
											type="button"
											className="btn btn-outline-fed"
											title="Search">
											<i className="bi bi-search"></i>
										</button>
									</div>
								</div>

								<div className="col col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
									<div className="input-group shadow-sm rounded">
										<label
											className="input-group-text"
											htmlFor="inputGroupSelect01">
											Status :
										</label>
										<select className="form-select" id="inputGroupSelect01">
											<option defaultValue={"all"}>All</option>
											<option value="1">Pending</option>
											<option value="2">...</option>
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
									<table className="table table-striped table-hover align-middle shadow mb-4">
										<thead>
											<tr>
												<th scope="col">Sl. No.</th>
												<th scope="col">RQST_ID</th>
												<th scope="col">Agency</th>
												<th scope="col">Type Of Work</th>
												<th scope="col">From Date</th>
												<th scope="col">To Date</th>
												<th scope="col">Status</th>
												<th scope="col">Approver Comment</th>
												<th scope="col">Action</th>
											</tr>
										</thead>
										<tbody className="table-group-divider">
											<tr>
												<th scope="row">1</th>
												<td>372</td>
												<td>Mass Consultancies And Services</td>
												<td>Data Entry/Scanning/Other Support Works</td>
												<td>01/10/2023</td>
												<td>30/09/2024</td>
												<td>Pending</td>
												<td></td>
												<td>
													<div className="input-group">
														<input
															className="form-control form-control-sm"
															type="file"
														/>
														<button
															className="btn btn-outline-fed btn-sm"
															type="button"
															title="Submit"
															id="inputGroupFileAddon04">
															Submit
														</button>
													</div>
												</td>
											</tr>

                                            <tr>
												<th scope="row">1</th>
												<td>372</td>
												<td>Mass Consultancies And Services</td>
												<td>Data Entry/Scanning/Other Support Works</td>
												<td>01/10/2023</td>
												<td>30/09/2024</td>
												<td>Pending</td>
												<td></td>
												<td>
													<div className="input-group">
														<input
															className="form-control form-control-sm"
															type="file"
														/>
														<button
															className="btn btn-outline-fed btn-sm"
															type="button"
															title="Submit"
															id="inputGroupFileAddon04">
															Submit
														</button>
													</div>
												</td>
											</tr>

                                            <tr>
												<th scope="row">1</th>
												<td>372</td>
												<td>Mass Consultancies And Services</td>
												<td>Data Entry/Scanning/Other Support Works</td>
												<td>01/10/2023</td>
												<td>30/09/2024</td>
												<td>Pending</td>
												<td></td>
												<td>
													<div className="input-group">
														<input
															className="form-control form-control-sm"
															type="file"
														/>
														<button
															className="btn btn-outline-fed btn-sm"
															type="button"
															title="Submit"
															id="inputGroupFileAddon04">
															Submit
														</button>
													</div>
												</td>
											</tr>

                                            <tr>
												<th scope="row">1</th>
												<td>372</td>
												<td>Mass Consultancies And Services</td>
												<td>Data Entry/Scanning/Other Support Works</td>
												<td>01/10/2023</td>
												<td>30/09/2024</td>
												<td>Pending</td>
												<td></td>
												<td>
													<div className="input-group">
														<input
															className="form-control form-control-sm"
															type="file"
														/>
														<button
															className="btn btn-outline-fed btn-sm"
															type="button"
															title="Submit"
															id="inputGroupFileAddon04">
															Submit
														</button>
													</div>
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

export default SLAUpload;
