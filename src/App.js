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

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<><NavBar /> <SignIn /></>} />
					<Route path="/passwordreset" element={<><NavBar /> <PasswordReset /></>} />
					<Route path="/adminhome" element={<><NavBar /> <AdminHome /></>} />
					<Route path="/employeedetails" element={<><NavBar /> <EmployeeDetails /></>} />
					<Route path="/vendorhome" element={<><NavBar /> <VendorHome /></>} />
					<Route path="/addvendor" element={<><NavBar /> <AddVendor /></>} />
					<Route path="/serviceprovider" element={<><NavBar /> <ServiceProviderDetails /></>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
