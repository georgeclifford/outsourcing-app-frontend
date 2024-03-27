import React from "react";
import { Link } from "react-router-dom";

const SidebarThirdPartyOnboarding = (props) => {
	if (props.isLarge) {
		return (
			<div className="sidebar bg-fed">
				<div className="text-light px-3 pt-3 h4">
					<Link
						className="nav-link"
						to="#"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Financial Outsourcing <i class="bi bi-caret-down-fill h6"></i>
					</Link>
					<ul className="dropdown-menu dropdown-menu-dark">
						<li>
							<Link className="dropdown-item" to="#">
								Financial Outsourcing
							</Link>
						</li>
						<li>
							<Link className="dropdown-item" to="#">
								IT Outsourcing
							</Link>
						</li>
						<li>
							<Link className="dropdown-item" to="#">
								Security Outsourcing
							</Link>
						</li>
						<li>
							<Link className="dropdown-item" to="#">
								Housekeeping Outsourcing
							</Link>
						</li>
					</ul>
					<hr />
				</div>

				<ul className="nav flex-column">
					<li className="nav-item">
						{props.isTab === "Request Details" ? (
							<Link className="nav-link active" to="#">
								Request Details
							</Link>
						) : (
							<Link className="nav-link" to="#">
								Request Details
							</Link>
						)}
					</li>

					<li className="nav-item">
						{props.isTab === "Service Onboarding Approvals" ? (
							<Link className="nav-link active" to="#">
								Service Approvals
							</Link>
						) : (
							<Link className="nav-link" to="#">
								Service Approvals
							</Link>
						)}
					</li>

					<li className="nav-item">
						{props.isTab === "Query Management" ? (
							<Link className="nav-link active" to="#">
								Query Management
							</Link>
						) : (
							<Link className="nav-link" to="#">
								Query Management
							</Link>
						)}
					</li>
				</ul>
			</div>
		);
	} else {
		return (
			<div
				className="offcanvas offcanvas-start bg-fed"
				data-bs-theme="dark"
				tabIndex="-1"
				id="sidebar"
				aria-labelledby="sidebarLabel">
				<div className="offcanvas-header h4">
					<Link
						className="nav-link"
						to="#"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Financial Outsourcing <i class="bi bi-caret-down-fill h6"></i>
					</Link>
					<ul className="dropdown-menu">
						<li>
							<Link className="dropdown-item" to="#">
								Financial Outsourcing
							</Link>
						</li>
						<li>
							<Link className="dropdown-item" to="#">
								IT Outsourcing
							</Link>
						</li>
						<li>
							<Link className="dropdown-item" to="#">
								Security Outsourcing
							</Link>
						</li>
						<li>
							<Link className="dropdown-item" to="#">
								Housekeeping Outsourcing
							</Link>
						</li>
					</ul>
					<button
						type="button"
						className="btn-close text-reset d-lg-none h6"
						data-bs-dismiss="offcanvas"
						aria-label="Close"></button>
				</div>
				<hr />

				<div className="sidebar offcanvas-body">
					<ul className="nav flex-column">
						<li className="nav-item">
							{props.isTab === "Request Details" ? (
								<Link className="nav-link active" to="#">
									Request Details
								</Link>
							) : (
								<Link className="nav-link" to="#">
									Request Details
								</Link>
							)}
						</li>

						<li className="nav-item">
							{props.isTab === "Service Onboarding Approvals" ? (
								<Link className="nav-link active" to="#">
									Service Approvals
								</Link>
							) : (
								<Link className="nav-link" to="#">
									Service Approvals
								</Link>
							)}
						</li>

						<li className="nav-item">
							{props.isTab === "Query Management" ? (
								<Link className="nav-link active" to="#">
									Query Management
								</Link>
							) : (
								<Link className="nav-link" to="#">
									Query Management
								</Link>
							)}
						</li>
					</ul>
				</div>
			</div>
		);
	}
};

export default SidebarThirdPartyOnboarding;
