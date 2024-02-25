import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isLarge }) => {
	if (isLarge) {
		return (
			<div className="sidebar bg-fed">
				<div className="text-light px-3 pt-3">
					<h4 className="m-0">Financial Outsourcing</h4>
                    <hr />
				</div>
				<ul className="nav flex-column">
					<li className="nav-item ">
						<Link className="nav-link" href="#">
							Request Submission
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" href="#">
							Agreement Status
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" href="#">
							SLA Upload
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" href="#">
							Sanction Order
						</Link>
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
				<div className="offcanvas-header">
					<h4 className="offcanvas-title pt-3" id="sidebarLabel">
						Financial Outsourcing
					</h4>
					<button
						type="button"
						className="btn-close text-reset d-lg-none"
						data-bs-dismiss="offcanvas"
						aria-label="Close"></button>
				</div>
				<hr />
				<div className="sidebar offcanvas-body">
					<ul className="nav flex-column">
						<li className="nav-item ">
							<Link className="nav-link" href="#">
								Request Submission
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="#">
								Agreement Status
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="#">
								SLA Upload
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="#">
								Sanction Order
							</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
};

export default Sidebar;
