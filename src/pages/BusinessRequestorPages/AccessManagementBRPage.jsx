import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/CommonComponents/NavBar";
import Footer from "../../components/CommonComponents/Footer";
import UserFilters from "../../components/AccessManagementComponents/UserFilters";
import UserDetailsTable from "../../components/AccessManagementComponents/UserDetailsTable";
import Pagination from "../../components/CommonComponents/Pagination";

const AccessManagementBRPage = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
			<NavBar isLogin={true} />
			<div className="container flex-fill">
				<div className="row my-3">
					<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
						<Link
							className="btn btn-outline-fed btn-circle"
							title="Go To Previous Page"
							to="/business-requestor/home">
							<i className="bi bi-arrow-left"></i>
						</Link>
						<h4 className="text-center">User Management</h4>
					</div>
				</div>

				<UserFilters />

				<UserDetailsTable />

				<Pagination />
				
			</div>
			<Footer />
		</div>
	);
};

export default AccessManagementBRPage;
