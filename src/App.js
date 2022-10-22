import React from "react";
import { Route, Switch } from "react-router-dom";
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
import CancerCenterConsultingCards from "./pages/cancerCenterConsulting/CancerCenterConsultingCards";
import CustomModal from "./components/Modal/CustomModal";
import About from "./pages/about/About";
import UploadPicture from "./pages/uploadPicture/UploadPicture";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/cancerCenterConsulting">
          <CancerCenterConsulting />
        </Route>
        <Route exact path="/clinicalTrialFinder">
          <ClinicalTrialFinder />
        </Route>
        <Route exact path="/pharmaConsulting">
          <PharmaConsulting />
        </Route>
        <Route exact path="/treatmentGuide">
          <TreatmentGuide/>
        </Route>

        <Route exact path="/services">
          <Services/>
        </Route>

        <Route exact path="/clinicalTrialFinderMenu">
          <ClinicalTrialFinderMenu/>
        </Route>
        <Route exact path="/contactus">
          <ContactUs/>
        </Route>

        <Route exact path="/profile">
          <Profile/>
        </Route>
        
        <Route exact path="/services-Packages">
          <ServicesPackages/>
        </Route>

        <Route exact path="/pharma-Packages">
          <PharmaPackages/>
        </Route>

        <Route exact path="/clinical-questions">
          <ClinicalQuestions/>
        </Route>

        <Route exact path="/trial-criteria">
          <TrialCriteria/>
        </Route>
        <Route exact path="/trial-menu">
          <TrialMenuThree/>
        </Route>
        <Route exact path="/accounts">
          <MyAccount/>
        </Route>
        <Route exact path="/stats-drugs">
          <StatsDrugs/>
        </Route>

        <Route exact path="/security-settings">
          <SecuritySettings/>
        </Route>

        <Route exact path="/accounts-settings">
          <AccountsSetting/>
        </Route>

        <Route exact path="/settings-accounts">
          <SettingAccounts/>
        </Route>
        <Route exact path="/CancerCenterConsultingCards">
          <CancerCenterConsultingCards/>
        </Route>

        <Route exact path="/modal">
          <CustomModal/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/UploadPicture">
          <UploadPicture/>
        </Route>

        

      </Switch>
    </>
  );
}

export default App;
