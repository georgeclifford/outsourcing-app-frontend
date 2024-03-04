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
import FinancialOutsourcing from "./components/FinancialOutsourcing";
import SLAUpload from "./components/SLAUpload";
import DocumentDetails from "./components/DocumentDetails";

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
					<Route path="/addvendor" element={ <AddVendor /> } />
					<Route path="/serviceprovider" element={ <ServiceProviderDetails /> } />
					<Route path="/risk" element={ <RiskAssessment /> } />
					<Route path="/materiality" element={ <MaterialityAssess />} />
					<Route path="/arrangementdetails" element={<ArrangementDetails />} />
					<Route path="/financialoutsrc" element={<FinancialOutsourcing />} />
					<Route path="/slaupload" element={<SLAUpload />} />
					<Route path="/docdetails" element={<DocumentDetails />} />
					
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
