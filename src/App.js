import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import PasswordReset from "./components/PasswordReset";
import AdminHome from "./components/AdminHome";
import EmployeeDetails from "./components/EmployeeDetails";
import VendorHome from "./components/VendorHome";
import AddVendor from "./components/AddVendor";
import ServiceProviderDetails from "./components/ServiceProviderDetails";
import Footer from "./components/Footer";
import OutsourcingManagement from "./components/OutsourcingManagement";
import RiskAssessment from "./components/RiskAssessment";
import MaterialityAssess from "./components/MaterialityAssess";
import ArrangementDetails from "./components/ArrangementDetails";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SignIn />} />
					<Route path="/passwordreset" element={<PasswordReset />} />
					<Route path="/adminhome" element={<AdminHome />} />
					<Route path="/employeedetails" element={<EmployeeDetails />} />
					<Route path="/vendorhome" element={<VendorHome />} />
          <Route path="/outsrcmanage" element={<OutsourcingManagement />} />
					<Route path="/addvendor" element={<><NavBar /> <AddVendor /> <Footer/></>} />
					<Route path="/serviceprovider" element={<><NavBar /> <ServiceProviderDetails /> <Footer/></>} />
					<Route path="/risk" element={<><NavBar /> <RiskAssessment /> <Footer/></>} />
					<Route path="/materiality" element={<><NavBar /> <MaterialityAssess /> <Footer/></>} />
					<Route path="/arrangementdetails" element={<><NavBar /> <ArrangementDetails /> <Footer/></>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
