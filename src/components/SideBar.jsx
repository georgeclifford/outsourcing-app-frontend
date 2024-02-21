import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-white sidebar shadow">
      <div className="position-sticky">
        <div className="sidebar-header">
          <h3>Vendor Management</h3>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item fs-4">
            <Link to="/vendorhome" className="nav-link text-blue" aria-current="page">
            <i class="fa-solid fa-house"></i>
              Home
            </Link>
          </li>
          <li className="nav-item fs-4">
            <Link to="/addvendor" className="nav-link text-blue" aria-current="page">
              <i className='bi bi-plus-circle me-2'></i>
              Add Vendor
            </Link>
          </li>
          <li className="nav-item fs-4">
            <Link to="#" className="nav-link text-blue" aria-current="page">
              <i className='bi bi-bar-chart-line me-2'></i>
              Vendor Audit
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SideBar;
