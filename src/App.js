import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home.js";
import PatientSignUpForm from "./components/PatientSignUpForm";
import UserDetailsForm from "./components/UserDetailsForm";
import PatientLoginForm from "./components/PatientLoginForm.js";
import About from "./pages/About.js";
import PractitionerSignUpForm from "./components/PractitionerSignUpForm.js";
import PractitionerLoginForm from "./components/PractitionerLoginForm.js";

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

      </Routes>
    </Router>
  );
}

export default App;
