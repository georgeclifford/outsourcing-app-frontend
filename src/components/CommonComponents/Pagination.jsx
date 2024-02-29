import React from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
	return (
		<div className="row mt-2 mb-5">
			<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
				<nav aria-label="Page navigation">
					<ul className="pagination justify-content-end">
						<li className="page-item">
							<Link className="page-link  text-fed" to="#" aria-label="Previous">
								<span aria-hidden="true">&laquo;</span>
							</Link>
						</li>
						<li className="page-item">
							<Link className="page-link btn-fed" aria-current="page" to="#">
								1
							</Link>
						</li>
						<li className="page-item">
							<Link className="page-link text-fed" to="#">
								2
							</Link>
						</li>
						<li className="page-item">
							<Link className="page-link text-fed" to="#">
								3
							</Link>
						</li>
						<li className="page-item">
							<Link className="page-link text-fed" to="#">
								4
							</Link>
						</li>
						<li className="page-item">
							<Link className="page-link text-fed" to="#">
								5
							</Link>
						</li>
						<li className="page-item">
							<Link className="page-link text-fed" to="#" aria-label="Next">
								<span aria-hidden="true">&raquo;</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Pagination;
