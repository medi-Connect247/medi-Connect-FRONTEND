import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home.js";
import PatientSignUpForm from "./components/PatientSignUpForm";
import UserDetailsForm from "./components/UserDetailsForm";
import PatientLoginForm from "./components/PatientLoginForm.js";
import About from "./pages/About.js";
import PractitionerSignUpForm from "./components/PractitionerSignUpForm.js";
import PractitionerLoginForm from "./components/PractitionerLoginForm.js";
import AccountSuccess from "./pages/AccountSuccess.js";
import PractitionerHomePage from "./pages/PractitionerHomePage.js";
import PractitionerDashboard from "./pages/PractitionerDashboard.js";
import Contact from "./pages/Contact.js";
import Accordion from "./components/Faq.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PatientSignUp" element={<PatientSignUpForm />} />
        <Route path="/PatientLogin" element={<PatientLoginForm/>}/>
        <Route path="/UserDetails" element={<UserDetailsForm />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/PractitionerSignUp" element={<PractitionerSignUpForm/>}/>
        <Route path="/PractitionerLogin" element={<PractitionerLoginForm/>}/>
        <Route path="/AccountSuccess" element={<AccountSuccess/>}/>
        <Route path="/PractitionerHomePage" element={<PractitionerHomePage/>}/>
        <Route path="/PractitionerDashboard" element={<PractitionerDashboard/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Accordion" element={<Accordion/>}/>
      </Routes>
    </Router>
  );
}

export default App;
