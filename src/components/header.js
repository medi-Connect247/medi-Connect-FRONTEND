import React from "react";
import logo from "../assets/med-logo_prev_ui.png";
import "../pages/Header.css"

function header(){
    return(
        <div className="header">
        <div className="logo-header">
        <img src={logo} alt="Logo" className="logo"/>
        <div className="app-name">MediConnect247</div>
        </div>
            

      <div className="navbar">
      <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/">Patients</a></li>
                  <li><a href="/">About</a></li>
                  <li><a href="/">Practitioners</a></li>
                  <li><a href="/">Contact</a></li>
                </ul>
      </div>
        </div>
    );
}
export default header;