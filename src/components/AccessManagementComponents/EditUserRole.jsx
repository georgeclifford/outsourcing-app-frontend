import React from "react";

const EditUserRole = () => {
	return (
		<div className="d-inline">
			<button
				type="button"
				className="btn btn-primary m-1"
				title="Edit Employee Details"
				data-bs-toggle="modal"
				data-bs-target="#editEmployee">
				<i className="bi bi-pencil"></i>
			</button>

			<div
				className="modal fade modal"
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
								Edit User Role
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
								Save
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditUserRole;
