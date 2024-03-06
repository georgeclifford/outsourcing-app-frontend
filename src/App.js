import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import SignInPage from "./pages/CommonPages/SignInPage";
import ResetPasswordPage from "./pages/CommonPages/ResetPasswordPage";

import HomeAdminPage from "./pages/AdminPages/HomeAdminPage";
import AccessManagementAdminPage from "./pages/AdminPages/AccessManagementAdminPage";
import ThirdPartyOnboardingAdminPage from "./pages/AdminPages/ThirdPartyOnboardingAdminPage";

import HomeBusinessRequestorPage from "./pages/BusinessRequestorPages/HomeBusinessRequestorPage";
import ThirdPartyOnboardingBRPage from "./pages/BusinessRequestorPages/ThirdPartyOnboardingBRPage";
import AccessManagementBRPage from "./pages/BusinessRequestorPages/AccessManagementBRPage";

import HomeBusinessControllerPage from "./pages/BusinessControllerPages/HomeBusinessControllerPage";

import VendorHome from "./components/ThirdPartyManagementComponents/VendorHome";
import AddVendor from "./components/ThirdPartyManagementComponents/AddVendor";
import ServiceProviderDetails from "./components/ThirdPartyManagementComponents/ServiceProviderDetails";
import RiskAssessment from "./components/ThirdPartyManagementComponents/RiskAssessment";
import MaterialityAssess from "./components/ThirdPartyManagementComponents/MaterialityAssess";
import ArrangementDetails from "./components/ThirdPartyManagementComponents/ArrangementDetails";
import ThirdPartyOnboardingBCPage from "./pages/BusinessControllerPages/ThirdPartyOnboardingBCPage";
import DocumentDetails from "./components/ThirdPartyManagementComponents/DocumentDetails";


function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SignInPage />} />
					<Route path="/reset-password" element={<ResetPasswordPage />} />

					{/* Admin Pages */}
					<Route path="/admin/home" element={<HomeAdminPage />} />
					<Route path="/admin/access-management" element={<AccessManagementAdminPage />} />
					<Route path="/admin/third-party-onboarding" element={<ThirdPartyOnboardingAdminPage />} />

					{/* Business Requestor Pages */}
					<Route path="/business-requestor/home" element={<HomeBusinessRequestorPage />} />
					<Route path="/business-requestor/third-party-onboarding" element={<ThirdPartyOnboardingBRPage />} />
					<Route path="/business-requestor/access-management" element={<AccessManagementBRPage />} />

					<Route path="/business-requestor/third-party-management" element={<VendorHome />} />
					<Route path="/addvendor" element={ <AddVendor /> } />
					<Route path="/serviceprovider" element={ <ServiceProviderDetails /> } />
					<Route path="/risk" element={ <RiskAssessment /> } />
					<Route path="/materiality" element={ <MaterialityAssess />} />
					<Route path="/arrangementdetails" element={<ArrangementDetails />} />
					<Route path="/docdetails" element={<DocumentDetails />} />

					{/* Business Controller Pages */}
					<Route path="/business-controller/home" element={<HomeBusinessControllerPage />} />
					<Route path="/business-controller/third-party-onboarding" element={<ThirdPartyOnboardingBCPage />} />

				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
