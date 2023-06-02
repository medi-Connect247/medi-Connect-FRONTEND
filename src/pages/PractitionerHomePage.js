import React from 'react';
import "../pages/PractitionerHomePage.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
function PractitionerHomePage(){
    return(
        <div>
         <div>
            <Header/>
            </div>
            <div className='prac-homepage-image'>
                <h5 className='p-header'>Practitioners</h5>
                </div> 
                {/* <div className='second-part'></div> */}
                <div className='dashboard-part'>
                    <div className='dashboard-left'></div>
                    <div className='dashboard-right'>
                        <h1>Book Appointments with healthcare practitioners today at ease</h1>
                        <p className='little-text'>Book Appointments with our Practitioners</p>
                        <Link to="/PractitionerDashboard"><button type='submit' className='pd-btn'>View Dashboard</button></Link>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
        </div>
    );
}
export default PractitionerHomePage;