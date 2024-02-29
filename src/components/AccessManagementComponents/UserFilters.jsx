import React from "react";

const UserFilters = () => {
	return (
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

					<button type="button" className="btn btn-outline-fed" title="Apply Filters">
						<i className="bi bi-arrow-return-right"></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default UserFilters;
