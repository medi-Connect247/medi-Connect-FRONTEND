import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home.js";
import PatientSignUpForm from "./components/PatientSignUpForm";
import PatientProfileUpdate from "./components/PatientProfileUpdate.js";
import PractitionerProfileUpdate from "./components/PractitionerProfileUpdate.js";
import PatientLoginForm from "./components/PatientLoginForm.js";
import About from "./pages/About.js";
import PractitionerSignUpForm from "./components/PractitionerSignUpForm";
import PractitionerLoginForm from "./components/PractitionerLoginForm.js";
import AccountSuccess from "./pages/AccountSuccess.js";
import PractitionerHomePage from "./pages/PractitionerHomePage.js";
import PractitionerDashboard from "./pages/PractitionerDashboard.js";
import Contact from "./pages/Contact.js";
import Accordion from "./components/Faq.js";
import PatientDashboard from "./pages/PatientDashboard.js";
import PatientHomePage from "./pages/PatientHomePage.js";
import Appointments from "./pages/Appointment.js";
import PractitionerList from "./components/AvailablePractitionerList.js";
import AppointmentForm from "./pages/AppointmentForm.js";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PatientSignUp" element={<PatientSignUpForm />} />
        <Route path="/PatientLogin" element={<PatientLoginForm />} />
        <Route
          path="/PatientProfileUpdate/:id"
          element={<PatientProfileUpdate />}
        />
        <Route
          path="/PractitionerProfileUpdate/:id"
          element={<PractitionerProfileUpdate />}
        />
        <Route path="/About" element={<About />} />
        <Route
          path="/PractitionerSignUp"
          element={<PractitionerSignUpForm />}
        />
        <Route path="/PractitionerLogin" element={<PractitionerLoginForm />} />
        <Route path="/AccountSuccess" element={<AccountSuccess />} />
        <Route
          path="/PractitionerHomePage"
          element={<PractitionerHomePage />}
        />
        <Route
          path="/PractitionerDashboard"
          element={<PractitionerDashboard />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Accordion" element={<Accordion />} />
        <Route path="/PatientDashboard" element={<PatientDashboard />} />
        <Route path="/PatientHomePage" element={<PatientHomePage />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/availablePractitioners" element={<PractitionerList />} />
        <Route path="/appointmentForm" element={<AppointmentForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
