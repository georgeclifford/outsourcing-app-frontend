import React from "react";
import NavBar from "../../components/CommonComponents/NavBar";
import Footer from "../../components/CommonComponents/Footer";
import BusinessControllerCards from "../../components/CommonComponents/BusinessControllerCards";

const HomeBusinessControllerPage = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
			<NavBar isLogin={true} />
			<div className="container g-5 flex-fill">
				<div className="row my-5">
					<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center">
						<h4>Business Controller Dashboard</h4>
					</div>
				</div>
				
        <BusinessControllerCards />

			</div>
			<Footer />
		</div>
	);
};

export default HomeBusinessControllerPage;
