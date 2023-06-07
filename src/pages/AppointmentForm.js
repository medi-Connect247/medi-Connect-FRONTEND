import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "../pages/appointmentForm.css";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../assets/med-logo_prev_ui.png";
// import { useState } from "react";
function AppointmentForm(){
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    // const [doctorId, setDoctorId] = useState("");
    // const [patientId, setPatientId] = useState("");
    

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/v1/appointments/create", {
              date: selectedDate,
              time: selectedTime,
            });
      
            console.log("Appointment created:", response.data);
            alert("Appointment created successfully!");
          } catch (error) {
            console.error("Error creating appointment:", error);
            alert("Error occurred while creating the appointment. Please try again.");
          }

          setSelectedDate("");
          setSelectedTime("");
        
   
  };
    return(
    <div>
        <Link to="/PatientDashboard">
        <button type="submit" className="back-button">
          Back to Dashboard
        </button>
      </Link>
      <img src={logo} alt="Logo" className="authentication-logo" /> 
     <div className='create-appointment-container'> 
     <form onSubmit={handleFormSubmit} className='appointment-form'>
     <h2 className='appointment-form-header'>Appointment Form</h2>
        <label>
          <p className='update-label'>Date:</p>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className='date-input'
          />
        </label>
        <br />
        <label>
          <p className='update-label'>Time:</p>
          <input
            type="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className='time-input'
          />
        </label>
        <br/>
        <button type="submit" className='create-appointment-btn'>Create Appointment</button>
      </form>
      <div className='appointment-pic'></div>
    </div>
    </div>
  );
}
       
export default AppointmentForm;