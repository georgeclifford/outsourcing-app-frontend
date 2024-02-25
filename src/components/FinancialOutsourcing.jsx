import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const FinancialOutsourcing = () => {
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
							<Sidebar
								isLarge={false}
								isTab={"Request Sub"}
								toggleSidebar={() => setisLargeWindow(!isLargeWindow)}
							/>
						) : (
							// Render sidebar as part of body for larger screens
							<Sidebar isLarge={true} isTab={"Request Sub"} />
						)}
					</div>
					<div className="col-lg-10 col-xl-10 col-xxl-10">
						<div className="container">
							<div className="row my-3">
								<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
									<Link
										className="btn btn-outline-fed btn-circle"
										title="Go To Previous Page"
										to={"/outsrcmanage"}>
										<i className="bi bi-arrow-left"></i>
									</Link>
									<h4 className="text-center">Request Submission</h4>
								</div>
							</div>

							<div className="row pb-3">
								<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
									<button
										type="button"
										className="btn btn-outline-fed shadow-sm"
										title="Add New Employee"
										data-bs-toggle="modal"
										data-bs-target="#addEmployee">
										New Request
									</button>
									{/* <AddEmployee /> */}
								</div>
							</div>

							
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default FinancialOutsourcing;
