import React, {useState} from "react";
import logo from "../assets/med-logo_prev_ui.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../pages/Header.css"

function Header(){

    const [viewPatientsDropDown, setDropDown] = useState(false);
    const [viewPractitionersDropDown, setPractitionersDropDown] = useState(false);

    const patientsDropDown = () => {
        setDropDown(!viewPatientsDropDown);
    };
    const practitionersDropDown = () => {
        setPractitionersDropDown(!viewPractitionersDropDown);
    };
    return(
      <nav>
      <div className="nav-logo">
          <img src={logo} alt="Logo" className="logo" />
          <h2 className="app-name">MediConnect247</h2>
      </div>
      <div className="nav-links">
          <nav className="nav">
              <ul>
                  <li>
                      <a href="/">Home</a>
                  </li>
                  <li className="Dropdown">
                      <a onClick={patientsDropDown}>
                          Patients{" "}
                          <RiArrowDropDownLine className="icon" />
                          {viewPatientsDropDown && (
                            <div className="dropdowncontainer">
                            <div className="details">
                              
                                      <Link to="/PatientLogin"> 
                                          Login
                                       </Link>
                                
                                      <Link to="/PatientSignUp">
                                          Sign Up
                                      </Link>
                                      </div>
                            </div>
                          )}
                      </a>
                  </li>
                  <li>
                      <a href="/About">About</a>
                  </li>
                  <li className="Dropdown">
                      <a onClick={practitionersDropDown}>
                          Practitioners{" "}
                          <RiArrowDropDownLine className="icon" />
                          {viewPractitionersDropDown && (
                            <div className="dropdowncontainer">
                            <div className="details">
                                      <Link to="/PractitionerLogin">
                                          Login
                                      </Link>
                                  
                                      <Link to="/PractitionerSignUp">
                                          Sign Up
                                      </Link>
                                </div>
                              </div>   
                          )}
                      </a>
                  </li>
                  <li>
                      <a href="/contact">Contact</a>
                  </li>
              </ul>
          </nav>
      </div>
  </nav>
    );
}
export default Header;