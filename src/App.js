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
import ClinicalTrialFinderPatient from "./pages/clinicalTrialFinder/ClinicalTrialFinderPatient";
import ClinicalTrialFinderHealthCare from "./pages/clinicalTrialFinder/ClinicalTrialFinderHealthCare";
import ClinicalTrialFinderPharmaResearcher from "./pages/clinicalTrialFinder/ClinicalTrialFinderPharmaResearcher";
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
import AddTeam from "./pages/addTeam/AddTeam";
import SavedTreatmentPlan from "./pages/savedTreatmentPlan/SavedTreatmentPlan";
import SavedTrials from "./pages/savedTrials/SavedTrials";
import About from "./pages/about/About";
import CancerCenterConsultingCards from "./pages/cancerCenterConsulting/CancerCenterConsultingCards";
import UserVerification from "./pages/userVerification/userVerification";
import UploadPicture from "./pages/uploadPicture/UploadPicture";
import ClinicalQuestion2 from './pages/clinicalQuestions/ClinicalQuestion2'
import ClinicalQuestion3 from './pages/clinicalQuestions/ClinicalQuestion3'
import ClinicalQuestion4 from './pages/clinicalQuestions/ClinicalQuestion4'
import ClinicalQuestion5 from './pages/clinicalQuestions/ClinicalQuestion5'
import ClinicalQuestion6 from './pages/clinicalQuestions/ClinicalQuestion6'
import ClinicalQuestion7 from './pages/clinicalQuestions/ClinicalQuestion7'
import ClinicalQuestion8 from './pages/clinicalQuestions/ClinicalQuestion8'
import ClinicalQuestion9 from './pages/clinicalQuestions/ClinicalQuestion9'
import TrialMenuPR from "./pages/trailMenuThree/trialMenuPR";
import ClinicalOptions from "./pages/clinicalQuestions/ClinicalOptions";
import TrialMenuPatient from "./pages/trailMenuThree/trialMenuPatient";
function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/" element={<Welcome />}> </Route>
        <Route path="/services" element={<Services />}>
        </Route>
        <Route path="/cancerCenterConsulting" element={<CancerCenterConsulting />}>
        </Route>
        <Route path="/clinicalTrialFinder" element={<ClinicalTrialFinder />}>
        </Route>
        <Route path="/ClinicalTrialFinderPatient" element={<ClinicalTrialFinderPatient />}>
        </Route>
        <Route path="/ClinicalTrialFinderHealthCare" element={<ClinicalTrialFinderHealthCare />}>
        </Route>
        <Route path="/ClinicalTrialFinderPharmaResearcher" element={<ClinicalTrialFinderPharmaResearcher />}>
        </Route>

        <Route path="/pharmaConsulting" element={<PharmaConsulting />}>
        </Route>
        <Route path="/treatmentGuide" element={<TreatmentGuide />}>
        </Route>
        <Route path="/contactus" element={<ContactUs />}>
        </Route>

        {/* *************** */}
        <Route path="/profile" element={<Profile />}>
        </Route>
        <Route path="/stats-drugs" element={<StatsDrugs />}>
        </Route>

        <Route path="/trial-criteria" element={<TrialCriteria />}>
        </Route>
        <Route path="/clinical-questions" element={<ClinicalQuestions />}>
        </Route>
        <Route path="/clinical-question2" element={<ClinicalQuestion2 />}>
        </Route>
        <Route path="/clinical-question3" element={<ClinicalQuestion3 />}>
        </Route>
        <Route path="/clinical-question4" element={<ClinicalQuestion4 />}>
        </Route>
        <Route path="/clinical-question5" element={<ClinicalQuestion5 />}>
        </Route>
        <Route path="/clinical-question6" element={<ClinicalQuestion6 />}>
        </Route>

        <Route path="/clinical-question7" element={<ClinicalQuestion7 />}>
        </Route>
        <Route path="/clinical-question8" element={<ClinicalQuestion8 />}>
        </Route>

        <Route path="/clinical-question9" element={<ClinicalQuestion9 />}>
        </Route>

        <Route path="/my-team" element={<AddTeam />}>
        </Route>
        <Route path="/saved-treatment-plans" element={<SavedTreatmentPlan />}>
        </Route>
        <Route path="/saved-trials" element={<SavedTrials />}>
        </Route>
        <Route path="/settings-accounts" element={<SettingAccounts />}>
        </Route>

        <Route path="/about-us" element={<About />}>
        </Route>

        <Route path="/cancer-consulting-cards" element={<CancerCenterConsultingCards />}>
        </Route>
        <Route path="/clinicalTrialFinderMenu" element={<ClinicalTrialFinderMenu />}>
        </Route>
        <Route element={<ProtectedRoute />} >
        
        <Route path="/upload-picture" element={<UploadPicture />}>
          </Route>
          <Route path="/services-Packages" element={<ServicesPackages />}>
          </Route>
          <Route path="/pharma-Packages" element={<PharmaPackages />}>
          </Route>
          <Route path="/trial-menu-patient" element={<TrialMenuPatient />}>
          </Route>
          <Route path="/trial-menu" element={<TrialMenuThree />}>
          </Route>
          <Route path="/trial-menu-PR" element={<TrialMenuPR/>}>
          </Route>
          <Route path="/clinical-questions-options" element={<ClinicalOptions/>}>
          </Route>
          <Route path="/accounts" element={<MyAccount />}>
          </Route>

          <Route path="/security-settings" element={<SecuritySettings />}>
          </Route>
          <Route path="/accounts-settings" element={<AccountsSetting />}>
          </Route>
        </Route>

        <Route path="/user-verification/:id" exact element={<UserVerification />} />

      </Routes>
    </>
  );
}

export default App;
