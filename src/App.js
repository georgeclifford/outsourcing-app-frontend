import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import PasswordReset from "./components/PasswordReset";
import AdminHome from "./components/AdminHome";
import VendorHome from "./components/VendorHome";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<><NavBar/> <SignIn/></>} />
          <Route path="/passwordreset" element={<><NavBar/> <PasswordReset/></>} />
          <Route path="/adminhome" element={<><NavBar/> <AdminHome/></>} />
		  <Route path="/vendorhome" element={<><NavBar/> <VendorHome/></>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
