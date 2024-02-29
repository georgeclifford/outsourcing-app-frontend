import React from "react";
import NavBar from "../../components/CommonComponents/NavBar";
import Footer from "../../components/CommonComponents/Footer";
import SignInForm from "../../components/CommonComponents/SignInForm";
import home_img from "../../assets/images/home.jpeg";

const SignInPage = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
			<NavBar isLogin={false} />
			<div
				className="flex-fill"
				style={{
					backgroundImage: "url(" + home_img + ")",
					backgroundPosition: "1420px 1320px",
				}}>
				<SignInForm />
			</div>
			<Footer />
		</div>
	);
};

export default SignInPage;
