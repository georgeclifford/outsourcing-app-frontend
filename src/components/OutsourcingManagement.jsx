import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import finance_img from "../assets/images/finance.jpeg";
import computer_img from "../assets/images/computer.jpeg";
import housekeeping_img from "../assets/images/housekeeping.jpeg";
import security_img from "../assets/images/security.jpeg";

const OutsourcingManagement = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
			<NavBar />
			<div className="container g-5 flex-fill">
				<div className="row mt-3 mb-5 ">
					<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
						<Link
							className="btn btn-outline-fed"
							title="Go To Previous Page"
							to={"/adminhome"}>
							<i className="bi bi-arrow-left"></i>
						</Link>
						<h4 className="text-center">Outsourcing Management</h4>
					</div>
				</div>

				<div className="row g-5 pb-5">
					<div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
						<Link
							className="link-offset-2 link-underline link-underline-opacity-0"
							to={"/financialoutsrc"}>
							<div className="card shadow h-100">
								<img
									src={finance_img}
									className="card-img-top"
									alt="Financial Outsourcing"
								/>
								<div className="card-body">
									<h5 className="card-title text-center">
										Financial Outsourcing
									</h5>
								</div>
							</div>
						</Link>
					</div>

					<div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
						<Link
							className="link-offset-2 link-underline link-underline-opacity-0"
							to={"/itoutsrc"}>
							<div className="card shadow h-100">
								<img
									src={computer_img}
									className="card-img-top"
									alt="IT Outsourcing"
								/>
								<div className="card-body">
									<h5 className="card-title text-center">IT Outsourcing</h5>
								</div>
							</div>
						</Link>
					</div>

					<div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
						<Link
							className="link-offset-2 link-underline link-underline-opacity-0"
							to={"/housekeepoutsrc"}>
							<div className="card shadow h-100">
								<img
									src={housekeeping_img}
									className="card-img-top"
									alt="Housekeeping Outsourcing"
								/>
								<div className="card-body">
									<h5 className="card-title text-center">
										Housekeeping Outsourcing
									</h5>
								</div>
							</div>
						</Link>
					</div>

					<div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
						<Link
							className="link-offset-2 link-underline link-underline-opacity-0"
							to={"/securityoutsrc"}>
							<div className="card shadow h-100">
								<img
									src={security_img}
									className="card-img-top"
									alt="Security Outsourcing"
								/>
								<div className="card-body">
									<h5 className="card-title text-center">Security Outsourcing</h5>
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

export default OutsourcingManagement;
