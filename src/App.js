import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import PasswordReset from "./components/PasswordReset";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<><NavBar/> <SignIn/></>} />
          <Route path="/passwordreset" element={<><NavBar/> <PasswordReset/></>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
