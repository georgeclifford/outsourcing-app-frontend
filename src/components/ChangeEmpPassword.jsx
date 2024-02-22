import React from "react";

const ChangeEmpPassword = () => {
	return (
		<div className="d-inline">
			<div
				className="modal fade"
				id="changePassword"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabIndex="-1"
				aria-labelledby="staticBackdropLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="staticBackdropLabel">
								Change Employee Password
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
												type="password"
												className="form-control shadow-sm"
												id="floatingPassword3"
												placeholder="Password"
											/>
											<label htmlFor="floatingPassword3">New Password</label>
										</div>
									</div>

									<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
										<div className="form-floating">
											<input
												type="password"
												className="form-control shadow-sm"
												id="floatingPassword4"
												placeholder="Password"
											/>
											<label htmlFor="floatingPassword4">
												Confirm Password
											</label>
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
								Change
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChangeEmpPassword;
