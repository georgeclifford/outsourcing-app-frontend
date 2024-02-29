import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/CommonComponents/NavBar";
import Footer from "../../components/CommonComponents/Footer";
import SidebarThirdPartyOnboarding from "../../components/ThirdPartyOnboardingComponents/SidebarThirdPartyOnboarding";
import RequestDetails from "../../components/ThirdPartyOnboardingComponents/RequestDetails";

const ThirdPartyOnboardingBCPage = () => {
	const [isLargeWindow, setisLargeWindow] = useState(true); // Initially open for larger screens

	useEffect(() => {
		const handleResize = () => {
			// Close sidebar on smaller screens
			if (window.innerWidth < 992) {
				setisLargeWindow(false);
			} else {
				setisLargeWindow(true);
			}
		};

		// Add event listener for window resize
		window.addEventListener("resize", handleResize);

		// Call handleResize once on initial render
		handleResize();

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="d-flex flex-column min-vh-100">
			<NavBar isLogin={true} isSidebar={true} />

			<div className="container-fluid flex-fill">
				<div className="row">
					<div className="col-lg-2 col-xl-2 col-xxl-2 p-0 shadow">
						{window.innerWidth < 992 ? (
							// Render offcanvas sidebar for smaller screens
							<SidebarThirdPartyOnboarding
								isLarge={false}
								isTab={"Request Details"}
								toggleSidebar={() => setisLargeWindow(!isLargeWindow)}
							/>
						) : (
							// Render sidebar as part of body for larger screens
							<SidebarThirdPartyOnboarding isLarge={true} isTab={"Request Details"} />
						)}
					</div>
					<div className="col-lg-10 col-xl-10 col-xxl-10">
						<div className="container">
							<div className="row my-3">
								<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
									<Link
										className="btn btn-outline-fed btn-circle"
										title="Go To Previous Page"
										to={"/business-controller/home"}>
										<i className="bi bi-arrow-left"></i>
									</Link>
									<h4 className="text-center">Request Details</h4>
								</div>
							</div>

                            <RequestDetails />
							
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default ThirdPartyOnboardingBCPage;
