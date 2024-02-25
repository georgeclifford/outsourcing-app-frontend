import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/federal_logo.jpg";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar bg-fed p-0" data-bs-theme="dark">
                <div className="container-fluid p-3">
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar" aria-controls="sidebar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand fst-italic text-light" to="/">
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
				<div className="container-fluid pt-1" style={{ backgroundColor: "#f7a600" }} />
            </nav>
        </div>
    );
};

export default NavBar;
