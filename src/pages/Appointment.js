import React from "react";
import "../pages/appointment.css"
import AvailablePractitionerList from "../components/AvailablePractitionerList";
function DoctorList(){
    return(
        <div>
            <h1>List of Available Doctors</h1>
            <div>
                <AvailablePractitionerList/>
            </div>
        </div>
    )
}
export default DoctorList;