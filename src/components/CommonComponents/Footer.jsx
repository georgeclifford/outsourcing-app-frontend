import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/federal_logo.jpg";

const Footer = () => {
	return (
		<div>
			<footer className="bg-fed">
				{/* <ul className="nav justify-content-center py-3">
					<li className="nav-item">
						<Link to="/faqs" className="nav-link px-2 text-light">
							FAQs
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/about" className="nav-link px-2 text-light">
							About
						</Link>
					</li>
				</ul> */}
				<div className="container-fluid pt-1" style={{ backgroundColor: "#f7a600" }} />
				<p className="text-center text-light m-0 py-4">
					&copy; 2024
					<Link className="navbar-brand fst-italic ms-2" to="/">
						<img
							src={logo}
							alt="Logo"
							width="30"
							height="30"
							className="mx-2"
						/>
						FEDERAL BANK
					</Link>
				</p>
			</footer>
		</div>
	);
};

export default Footer;
