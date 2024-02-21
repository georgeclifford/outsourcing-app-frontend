import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import PasswordReset from "./components/PasswordReset";
import AdminHome from "./components/AdminHome";
import EmployeeDetails from "./components/EmployeeDetails";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<><NavBar/> <SignIn/></>} />
          <Route path="/passwordreset" element={<><NavBar/> <PasswordReset/></>} />
          <Route path="/adminhome" element={<><NavBar/> <AdminHome/></>} />
          <Route path="/employeedetails" element={<><NavBar/> <EmployeeDetails/></>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
