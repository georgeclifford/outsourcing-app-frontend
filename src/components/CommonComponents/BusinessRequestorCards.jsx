import React from "react";
import { Link } from "react-router-dom";
import employee_img from "../../assets/images/employee.jpeg";

const BusinessRequestorCards = () => {
	return (
		<div className="row g-5 pb-5">
			<div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
				<Link
					className="link-offset-2 link-underline link-underline-opacity-0"
					to={"/business-requestor/third-party-onboarding"}>
					<div className="card shadow h-100">
						<img
							src={employee_img}
							className="card-img-top"
							alt="Third Party Onboarding"
						/>
						<div className="card-body">
							<h5 className="card-title text-center">Third Party Onboarding</h5>
						</div>
					</div>
				</Link>
			</div>

			<div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
				<Link
					className="link-offset-2 link-underline link-underline-opacity-0"
					to={"/business-requestor/service-level-agreement"}>
					<div className="card shadow h-100">
						<img
							src={employee_img}
							className="card-img-top"
							alt="Service Level Agreement"
						/>
						<div className="card-body">
							<h5 className="card-title text-center">Service Level Agreement</h5>
						</div>
					</div>
				</Link>
			</div>

			<div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
            <Link
				className="link-offset-2 link-underline link-underline-opacity-0"
				to={"/business-requestor/third-party-management"}>
				<div className="card shadow h-100">
					<img src={employee_img} className="card-img-top" alt="Third Party Management" />
					<div className="card-body">
						<h5 className="card-title text-center">Third Party Management</h5>
					</div>
				</div>
			</Link>
			</div>

			<div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
				<Link
					className="link-offset-2 link-underline link-underline-opacity-0"
					to={"/business-requestor/regulatory-reporting"}>
					<div className="card shadow h-100">
						<img
							src={employee_img}
							className="card-img-top"
							alt="Regulatory Reporting"
						/>
						<div className="card-body">
							<h5 className="card-title text-center">Regulatory Reporting</h5>
						</div>
					</div>
				</Link>
			</div>

			<div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
				<Link
					className="link-offset-2 link-underline link-underline-opacity-0"
					to={"/business-requestor/periodic-risk-assessment"}>
					<div className="card shadow h-100">
						<img
							src={employee_img}
							className="card-img-top"
							alt="Periodic Risk Assessment"
						/>
						<div className="card-body">
							<h5 className="card-title text-center">Periodic Risk Assessment</h5>
						</div>
					</div>
				</Link>
			</div>

			<div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
				<Link
					className="link-offset-2 link-underline link-underline-opacity-0"
					to={"/business-requestor/access-management"}>
					<div className="card shadow h-100">
						<img src={employee_img} className="card-img-top" alt="Access Management" />
						<div className="card-body">
							<h5 className="card-title text-center">Access Management</h5>
						</div>
					</div>
				</Link>
			</div>

			<div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
				<Link
					className="link-offset-2 link-underline link-underline-opacity-0"
					to={"/business-requestor/performance-management"}>
					<div className="card shadow h-100">
						<img
							src={employee_img}
							className="card-img-top"
							alt="Performance Management"
						/>
						<div className="card-body">
							<h5 className="card-title text-center">Performance Management</h5>
						</div>
					</div>
				</Link>
			</div>

			<div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
				<Link
					className="link-offset-2 link-underline link-underline-opacity-0"
					to={"/business-requestor/task-management"}>
					<div className="card shadow h-100">
						<img
							src={employee_img}
							className="card-img-top"
							alt="Task Management"
						/>
						<div className="card-body">
							<h5 className="card-title text-center">Task Management</h5>
						</div>
					</div>
				</Link>
			</div>

			<div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
				<Link
					className="link-offset-2 link-underline link-underline-opacity-0"
					to={"/business-requestor/help"}>
					<div className="card shadow h-100">
						<img
							src={employee_img}
							className="card-img-top"
							alt="Help"
						/>
						<div className="card-body">
							<h5 className="card-title text-center">Help</h5>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default BusinessRequestorCards;
