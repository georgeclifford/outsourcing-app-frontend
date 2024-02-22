import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/federal_logo.jpg";

const NavBar = () => {
	return (
		<div>
			<nav className="navbar bg-fed" data-bs-theme="dark">
				<div className="container-fluid py-1">
					<Link className="navbar-brand fst-italic" to="/">
						<img
							src={logo}
							alt="Logo"
							width="30"
							height="30"
							className="d-inline-block align-text-top mx-3"
						/>
						FEDERAL BANK
					</Link>
				</div>
			</nav>
			<div className="container-fluid pt-1" style={{ backgroundColor: "#f7a600" }} />
		</div>
	);
};

export default NavBar;
