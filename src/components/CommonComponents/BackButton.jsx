import React from "react";
import { Link } from "react-router-dom";

const BackButton = (props) => {
	return (
		<div>
			<Link
				className="btn btn-outline-fed btn-circle"
				title="Go To Previous Page"
				to={props.isPath}>
				<i className="bi bi-arrow-left"></i>
			</Link>
		</div>
	);
};

export default BackButton;
