import React from 'react'
import { Link } from 'react-router-dom';

const AddVendorSidebar = ({ isLarge }) => {

    if (isLarge) {
		return (
			<div className="sidebar bg-fed">
				<div className="text-light px-3 pt-3">
					<h4 className="m-0">Vendor Management</h4>
                    <hr />
				</div>
				<ul className="nav flex-column">
					<li className="nav-item ">
						<Link className="nav-link" to="/addvendor">
							Add Vendor
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/vendoraudit">
							Vendor Audit
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
						Vendor Management
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
							<Link className="nav-link" to="/addvendor">
								Add Vendor
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/vendoraudit">
                            Vendor Audit
							</Link>
						</li>
						
					</ul>
				</div>
			</div>
		);
	}
}

export default AddVendorSidebar