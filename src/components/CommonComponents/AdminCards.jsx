import React from "react";
import { Link } from "react-router-dom";
import third_party_onboarding_img from "../../assets/images/third-party-onboard.jpeg";
import access_management_img from "../../assets/images/access-manage.jpeg";

const AdminCards = () => {
	return (
		<div className="row g-5 pb-5">
			<div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
				<Link
					className="link-offset-2 link-underline link-underline-opacity-0"
					to={"/admin/third-party-onboarding"}>
					<div className="card shadow h-100">
						<img
							src={third_party_onboarding_img}
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
					to={"/admin/access-management"}>
					<div className="card shadow h-100">
						<img src={access_management_img} className="card-img-top" alt="Access Management" />
						<div className="card-body">
							<h5 className="card-title text-center">Access Management</h5>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default AdminCards;
