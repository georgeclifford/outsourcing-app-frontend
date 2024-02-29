import React from "react";

const RequestDetails = () => {
	return (
		<div className="row pb-3">
			<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-between">
				<button
					type="button"
					className="btn btn-outline-fed shadow-sm"
					title="New Request For Engagement"
					data-bs-toggle="modal"
					data-bs-target="#">
					New Request For Engagement
				</button>

				<button
					type="button"
					className="btn btn-outline-fed shadow-sm"
					title="Renewal Of Engagement"
					data-bs-toggle="modal"
					data-bs-target="#">
					Renewal Of Engagement
				</button>
			</div>
		</div>
	);
};

export default RequestDetails;
