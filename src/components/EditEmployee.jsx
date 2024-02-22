import React from "react";

const EditEmployee = () => {
	return (
		<div className="d-inline">
			<div
				className="modal fade modal-lg"
				id="editEmployee"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabIndex="-1"
				aria-labelledby="staticBackdropLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="staticBackdropLabel">
								Edit Employee Details
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>

						<div className="modal-body">
							<div className="container">
								<div className="row g-3">
									<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
										<div className="form-floating">
											<input
												type="text"
												className="form-control shadow-sm"
												id="floatingInput4"
												placeholder="Employee Name"
											/>
											<label htmlFor="floatingInput4">Employee Name</label>
										</div>
									</div>

									<div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
										<div className="form-floating">
											<select
												className="form-select"
												id="floatingSelect5"
												aria-label="Floating label select example">
												<option defaultValue={"all"}>All</option>
												<option value="1">Risk Profiling</option>
												<option value="2">Feasibiliy</option>
												<option value="3">Compliance</option>
												<option value="4">Legal</option>
												<option value="5">Access Management</option>
											</select>
											<label htmlFor="floatingSelect5">Designation</label>
										</div>
									</div>

									<div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
										<div className="form-floating">
											<select
												className="form-select"
												id="floatingSelect6"
												aria-label="Floating label select example">
												<option defaultValue={"all"}>All</option>
												<option value="1">Reviewer</option>
												<option value="2">Approver</option>
											</select>
											<label htmlFor="floatingSelect6">Role</label>
										</div>
									</div>

									<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
										<div className="form-floating">
											<input
												type="text"
												className="form-control shadow-sm"
												id="floatingInput5"
												placeholder="name@example.com"
											/>
											<label htmlFor="floatingInput5">Email</label>
										</div>
									</div>
                                    
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-danger"
								data-bs-dismiss="modal">
								Cancel
							</button>
							<button type="button" className="btn btn-success">
								Add
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditEmployee;
