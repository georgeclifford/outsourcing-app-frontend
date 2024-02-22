import React from "react";
import home_img from "../assets/images/home.jpeg";
import NavBar from "./NavBar";
import Footer from "./Footer";

const PasswordReset = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
			<NavBar />
			<div
				className="flex-fill"
				style={{
					backgroundImage: "url(" + home_img + ")",
					backgroundPosition: "1420px 1320px",
				}}>
				<div className="container-fluid p-5">
					<div className="row justify-content-end">
						<div className="card col col-12 col-sm-12 col-md-7 col-lg-6 col-xl-5 col-xxl-4 shadow-lg rounded p-5">
							<h4 className="text-center">Reset Password</h4>

							<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-4">
								<div className="form-floating mb-4">
									<input
										type="text"
										className="form-control shadow-sm"
										id="floatingInput"
										placeholder="name@example.com"
									/>
									<label htmlFor="floatingInput">Email</label>
								</div>

								<div className="form-floating mb-4">
									<input
										type="password"
										className="form-control shadow-sm"
										id="floatingPassword1"
										placeholder="Password"
									/>
									<label htmlFor="floatingPassword1">New Password</label>
								</div>

								<div className="form-floating mb-4">
									<input
										type="password"
										className="form-control shadow-sm"
										id="floatingPassword2"
										placeholder="Password"
									/>
									<label htmlFor="floatingPassword2">Confirm Password</label>
								</div>

								<div className="d-grid pt-3">
									<button type="submit" className="btn btn-fed shadow-sm">
										Request Reset
									</button>
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

export default PasswordReset;
