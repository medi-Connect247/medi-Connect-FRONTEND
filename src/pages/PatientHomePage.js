import React from 'react';
import "../pages/PatientHomePage.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
function PatientHomePage(){
    return(
        <div>
         <div>
            <Header/>
            </div>
            <div className='p-homepage-image'>
                <h5 className='p-header'>Patient</h5>
                </div> 
                {/* <div className='second-part'></div> */}
                <div className='patient-dashboard-part'>
                    <div className='dashboard-left'></div>
                    <div className='dashboard-right'>
                        <h1>Consult with our Healthcare<br></br> 
                         Practitioners today at ease</h1>
                        <p className='little-text'>Using our dedicated system of remote applications you can<br></br> easily book appointments with doctors online</p>
                        <Link to="/PatientDashboard"><button type='submit' className='pd-btn'>View Dashboard</button></Link>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
        </div>
    );
}
export default PatientHomePage;