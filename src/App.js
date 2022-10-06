import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import "./App.css";
import Login from "./pages/login/Login";
import Welcome from "./pages/welcome/Welcome";
import CancerCenterConsulting from "./pages/cancerCenterConsulting/CancerCenterConsulting";
import ClinicalTrialFinder from "./pages/clinicalTrialFinder/ClinicalTrialFinder";
import PharmaConsulting from "./pages/pharmaConsulting/PharmaConsulting";
import TreatmentGuide from "./pages/treatmentGuide/TreatmentGuide";
import Services from "./pages/services/Services";
import ClinicalTrialFinderMenu from "./pages/clinicalTrialFinderMenu/ClinicalTrialFinderMenu";
import ContactUs from "./pages/contactUs/ContactUs";
import Profile from "./pages/profile/Profile";
import ServicesPackages from "./pages/servicesPackages/ServicesPackages";
import PharmaPackages from "./pages/pharmaPackages/PharmaPackages";
import ClinicalQuestions from "./pages/clinicalQuestions/ClinicalQuestions";
import TrialCriteria from "./pages/trailCriteria/trialCriteria";
import TrialMenuThree from "./pages/trailMenuThree/trialMenuThree";
import MyAccount from "./pages/myAccount/MyAccount";
import StatsDrugs from "./pages/statsDrugs/StatsDrugs";
import SecuritySettings from "./pages/securitySettings/securitySettings";
import AccountsSetting from "./pages/accountsSetting/AccountsSetting";
import SettingAccounts from "./pages/accountsSetting/SettingAccounts";
import ProtectedRoute from "./components/ProtectedRoute/protectedRoute";
function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/" element={<Welcome />}> </Route>
        <Route element={<ProtectedRoute />} >
          <Route path="/cancerCenterConsulting" element={<CancerCenterConsulting />}>
          </Route>
          <Route path="/clinicalTrialFinder" element={<ClinicalTrialFinder />}>
          </Route>
          <Route path="/pharmaConsulting" element={<PharmaConsulting />}>
          </Route>
          <Route path="/treatmentGuide" element={<TreatmentGuide />}>
          </Route>
          <Route path="/services" element={<Services />}>
          </Route>
          <Route path="/clinicalTrialFinderMenu" element={<ClinicalTrialFinderMenu />}>
          </Route>
          <Route path="/contactus" element={<ContactUs />}>
          </Route>
          <Route path="/profile" element={<Profile />}>
          </Route>
          <Route path="/services-Packages" element={<ServicesPackages />}>
          </Route>
          <Route path="/pharma-Packages" element={<PharmaPackages />}>
          </Route>
          <Route path="/clinical-questions" element={<ClinicalQuestions />}>
          </Route>
          <Route path="/trial-criteria" element={<TrialCriteria />}>
          </Route>
          <Route path="/trial-menu" element={<TrialMenuThree />}>
          </Route>
          <Route path="/accounts" element={<MyAccount />}>
          </Route>
          <Route path="/stats-drugs" element={<StatsDrugs />}>
          </Route>
          <Route path="/security-settings" element={<SecuritySettings />}>
          </Route>
          <Route path="/accounts-settings" element={<AccountsSetting />}>
          </Route>
          <Route path="/settings-accounts" element={<SettingAccounts />}>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
