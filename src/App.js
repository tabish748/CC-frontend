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
        
      </Switch>
    </>
  );
}

export default App;
