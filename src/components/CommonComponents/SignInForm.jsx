import React from "react";
import { Link } from "react-router-dom";

const SignInForm = () => {
	return (
		<div className="container-fluid p-5">
			<div className="row justify-content-end">
				<div className="card col col-12 col-sm-12 col-md-7 col-lg-6 col-xl-5 col-xxl-4 shadow-lg rounded p-5">
					<h4 className="text-center">Sign In</h4>

					<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-4">
						<div className="form-floating mb-4">
							<input
								type="text"
								className="form-control shadow-sm"
								id="floatingInput"
								placeholder="name@example.com"
							/>
							<label htmlFor="floatingInput">Username</label>
						</div>

						<div className="form-floating mb-4">
							<input
								type="password"
								className="form-control shadow-sm"
								id="floatingPassword"
								placeholder="Password"
							/>
							<label htmlFor="floatingPassword">Password</label>
						</div>

						<div className="d-grid py-3">
							<button type="submit" className="btn btn-fed shadow-sm">
								Sign in
							</button>
						</div>

						<div className="text-end">
							<Link
								className="link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
								to="/reset-password">
								Forgot Password?
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignInForm;
