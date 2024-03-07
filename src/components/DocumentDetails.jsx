import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';

const DocumentDetails = () => {
    const location = useLocation();
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        // Get the selected file
        const file = event.target.files[0];
        // Update state with the selected file
        setSelectedFile(file);
    };
    const isActive = (path) => location.pathname === path;
    return (
        <div className="d-flex flex-column min-vh-100">
            <NavBar isLogin={true} />
            <div class="container flex-grow-1">

                <br />
                <nav class="custom-breadcrumb" aria-label="breadcrumb">

                    <ol class="breadcrumb" id="breadcrumb">
                        <Link
                            className="btn btn-outline-fed"
                            title="Go To Previous Page"
                            to={"/arrangementdetails"}>
                            <i className="bi bi-arrow-left" ></i>
                        </Link>
                        <li class="breadcrumb-item">
                            <span class="breadcrumb-number" style={{ marginLeft: '20px' }}>1</span>
                            <a href="#">Communication Details</a>
                        </li>
                        <li class="breadcrumb-item">
                            <span class="breadcrumb-number">2</span>
                            <a href="#">Service Provider Details</a>

                        </li>
                        <li class="breadcrumb-item">
                            <span class="breadcrumb-number">3</span>
                            <a href="#">Risk/Materiality Assessment</a>
                        </li>
                        <li class="breadcrumb-item">
                            <span class="breadcrumb-number">4</span>
                            <a href="#">Arrangement Details</a>
                        </li>
                        <li class="breadcrumb-item">
                            <span class="breadcrumb-number">5</span>
                            <NavLink
                                to="/docdetails"
                                isActive={() => isActive("/docdetails")}
                                activeClassName="active"
                            >
                                Document Details
                            </NavLink>

                        </li>
                    </ol>
                </nav>
                <br /><br />
                <div className="container mb-5 flex-grow-1">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-5">
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">File type</label>
                                <select className="form-control" name="">
                                    <option value="">--Select--</option>
                                    <option value="File">File</option>
                                    <option value="Image">Image</option>
                                </select>
                                
                                </div>
                                
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            
                                <label htmlFor="fileInput" className="form-label">Choose a file</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="fileInput"
                                        onChange={handleFileChange}
                                    />
                                    {selectedFile && (
                                        <p>Selected file: {selectedFile.name}</p>
                                    )}
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-end gap-2">
                                    <button className="btn btn-success">Upload</button>
                                    <Link to="/vendorhome" className="btn btn-primary">Finish</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer className="mt-auto"/>
        </div>
    )
}

export default DocumentDetails