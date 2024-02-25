import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/federal_logo.jpg";

const NavBar = (props) => {
	return (
		<div>
			<nav className="navbar bg-fed p-0" data-bs-theme="dark">
				<div className="container-fluid m-2">
					{props.isSidebar ? (
						<button
							className="navbar-toggler d-lg-none"
							type="button"
							data-bs-toggle="offcanvas"
							data-bs-target="#sidebar"
							aria-controls="sidebar">
							<span className="navbar-toggler-icon"></span>
						</button>
					) : (
						""
					)}
					<Link className="navbar-brand fst-italic text-light" to="/">
						<img
							src={logo}
							alt="Logo"
							width="30"
							height="30"
							className="d-inline-block align-text-top me-3"
						/>
						FEDERAL BANK
					</Link>

					{props.isLogin ? (
						<div className="btn-group" data-bs-theme="light">
							<button
								type="button"
								className="btn text-light rounded"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								<i className="bi bi-person-circle h4"></i>
							</button>
							<ul className="dropdown-menu dropdown-menu-end">
								<li>
									<button className="dropdown-item" type="button">
										Logout
									</button>
								</li>
							</ul>
						</div>
					) : (
						""
					)}
				</div>
				<div className="container-fluid pt-1" style={{ backgroundColor: "#f7a600" }} />
			</nav>
		</div>
	);
};

export default NavBar;
