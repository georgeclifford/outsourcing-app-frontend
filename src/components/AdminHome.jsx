import React from "react";
import { Link } from "react-router-dom";
import employee_img from "../assets/images/employee.jpeg";
import vendor_img from "../assets/images/vendor.jpeg";
import outsource_img from "../assets/images/outsource.jpeg";
import incident_img from "../assets/images/incident.jpeg";
import NavBar from "./NavBar";
import Footer from "./Footer";

const AdminHome = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
			<NavBar isLogin={true} />
			<div className="container g-5 flex-fill">
				<div className="row my-5">
					<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center">
						<h4>Admin Dashboard</h4>
					</div>
				</div>

				<div className="row g-5 pb-5">
					<div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
						<Link
							className="link-offset-2 link-underline link-underline-opacity-0"
							to={"/employeedetails"}>
							<div className="card shadow h-100">
								<img
									src={employee_img}
									className="card-img-top"
									alt="Employee Management"
								/>
								<div className="card-body">
									<h5 className="card-title text-center">Employee Management</h5>
								</div>
							</div>
						</Link>
					</div>

					<div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
						<Link
							className="link-offset-2 link-underline link-underline-opacity-0"
							to={"/vendorhome"}>
							<div className="card shadow h-100">
								<img
									src={vendor_img}
									className="card-img-top"
									alt="Vendor Management"
								/>
								<div className="card-body">
									<h5 className="card-title text-center">Vendor Management</h5>
								</div>
							</div>
						</Link>
					</div>

					<div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
						<Link
							className="link-offset-2 link-underline link-underline-opacity-0"
							to={"/outsrcmanage"}>
							<div className="card shadow h-100">
								<img
									src={outsource_img}
									className="card-img-top"
									alt="Outsource Management"
								/>
								<div className="card-body">
									<h5 className="card-title text-center">Outsource Management</h5>
								</div>
							</div>
						</Link>
					</div>

					<div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
						<Link
							className="link-offset-2 link-underline link-underline-opacity-0"
							to={"/incidentmanage"}>
							<div className="card shadow h-100">
								<img
									src={incident_img}
									className="card-img-top"
									alt="Incident Management"
								/>
								<div className="card-body">
									<h5 className="card-title text-center">Incident Management</h5>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default AdminHome;
