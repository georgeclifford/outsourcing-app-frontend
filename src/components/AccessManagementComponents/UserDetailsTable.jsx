import React from "react";
import EditUserRole from "./EditUserRole";

const UserDetailsTable = () => {
	return (
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
								<EditUserRole />

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
								<EditUserRole />

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
								<EditUserRole />

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
								<EditUserRole />

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
								<EditUserRole />

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
	);
};

export default UserDetailsTable;
