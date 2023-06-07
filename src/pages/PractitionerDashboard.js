import React from "react";
import "../pages/PractitionerDashboard.css";
import logo from "../assets/med-logo_prev_ui.png";
import { Link, useParams } from "react-router-dom";
function PractitionerDashboard() {
  const { id } = useParams();
  console.log("id ", id);

  //   const fetchUserDetails
  return (
    <div>
      <div className="dashboard-header">
        <h1 className="welcome-message">Welcome Back</h1>
        <input className="search" type="search" name="" placeholder="Search" />
        <i className="dashboard-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M13 3a1 1 0 1 0-2 0v.75h-.557A4.214 4.214 0 0 0 6.237 7.7l-.221 3.534a7.377 7.377 0 0 1-1.308 3.754a1.617 1.617 0 0 0 1.135 2.529l3.407.408V19a2.75 2.75 0 1 0 5.5 0v-1.075l3.407-.409a1.617 1.617 0 0 0 1.135-2.528a7.376 7.376 0 0 1-1.308-3.754l-.221-3.533a4.214 4.214 0 0 0-4.206-3.951H13V3Zm-2.25 16a1.25 1.25 0 1 0 2.5 0v-.75h-2.5V19Z"
              clip-rule="evenodd"
            />
          </svg>
        </i>
        <p className="notification">Notifications</p>
      </div>
      <div className="dashboard-right-side">
        <div className="dashboard-mini-box">
          <div className="dashboard-mini-pic"></div>
          <div className="dashboard-top-bottom">
            <h5 className="dashboard-text">
              Have any appoinments<br></br> this week Doc?
            </h5>
            <button type="submit" className="dashboard-btn">
              Check Appointments
            </button>
          </div>
        </div>

        <div className="dashboard-bottom">
          <div className="dashboard-box">
            <div className="db-container">
              <div className="db-item">
                <i className="db-icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g fill="currentColor">
                      <path d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013V2.5Z" />
                      <path
                        fill-rule="evenodd"
                        d="M2 12c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12v2c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2Zm15 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-4-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
                        clip-rule="evenodd"
                      />
                    </g>
                  </svg>
                </i>
                <span className="db-text">
                  <a href="">0</a>
                </span>
              </div>
               <p className="db-text2">Total Appointments</p> 
            </div>
          </div>
          <div className="dashboard-box">
            <div className="db-container">
              <div className="db-item">
                <i className="db-icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="-2 -2.5 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M3.656 17.979A1 1 0 0 1 2 17.243V15a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8.003l-4.347 2.979zM16 10.017a7.136 7.136 0 0 0 0 .369v-.37c.005-.107.006-1.447.004-4.019a3 3 0 0 0-3-2.997H5V2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2v2.243a1 1 0 0 1-1.656.736L16 13.743v-3.726z"
                    />
                  </svg>
                </i>
                <span className="db-text">
                  <a href="">0</a>
                </span>
              </div>
              <p className="db-text2">Total Messages</p> 
            </div>
          </div>
          <div className="dashboard-box">
            <div className="db-container">
              <div className="db-item">
                <i className="db-icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5H8Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </i>
                <span className="db-text">
                  <a href="">0</a>
                </span>
              </div>
              <p className="db-text2">Total Appointments</p> 
            </div>
          </div>
        </div>
        <div className="prac-appointments-part">
          {/* <h2 className='appointment-header'>Upcoming Appointments</h2>
        <hr className='vector'></hr> */}
        </div>
      </div>
      <div className="request-and-message">
        <div className="prac-request-div">
          {/* <h2 className='request-header'>Appointment Request</h2>
            <hr className='vector2'></hr> */}
        </div>

        <div className="prac-message-div">
          {/* <h2 className='message-header'>Recent Messages</h2>
            <hr className='vector3'></hr> */}
        </div>
      </div>

      <div className="dashboard-left-side">
        <img src={logo} alt="Logo" className="pd-logo" />

        <div className="pd-container">
          <div className="pd-item">
            <i className="pd-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M2.5 5.5v-3h3v3h-3ZM1 2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2Zm8 .25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 9 2.25ZM9.75 5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM2.5 10.5v3h3v-3h-3ZM2 9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H2Zm7.75.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Zm0 3.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </i>
            <span className="pd-text">
              <a href="">Overview</a>
            </span>
          </div>
        </div>

        <div className="pd-container">
          <div className="pd-item">
            <i className="pd-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="currentColor">
                  <path d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013V2.5Z" />
                  <path
                    fill-rule="evenodd"
                    d="M2 12c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12v2c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2Zm15 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-4-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
                    clip-rule="evenodd"
                  />
                </g>
              </svg>
            </i>
            <span className="pd-text">
              <a href="">Appointments</a>
            </span>
          </div>
        </div>

        <div className="pd-container">
          <div className="pd-item">
            <i className="pd-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M22 14a7.94 7.94 0 0 0-4 1.083V9A7 7 0 0 0 4 9v14a6.986 6.986 0 0 0 12.276 4.577A7.997 7.997 0 1 0 22 14ZM11 4a5.006 5.006 0 0 1 5 5v6H6V9a5.006 5.006 0 0 1 5-5Zm0 24a5.006 5.006 0 0 1-5-5v-6h9.765a7.956 7.956 0 0 0-.724 8.932A5.015 5.015 0 0 1 11 28Zm11 0a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6Z"
                />
                <path fill="currentColor" d="M19 21h6v2h-6z" />
              </svg>
            </i>
            <span className="pd-text">
              <a href="">Prescriptions</a>
            </span>
          </div>
        </div>

        <div className="pd-container">
          <div className="pd-item">
            <i className="pd-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="-2 -2.5 24 24"
              >
                <path
                  fill="currentColor"
                  d="M3.656 17.979A1 1 0 0 1 2 17.243V15a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8.003l-4.347 2.979zM16 10.017a7.136 7.136 0 0 0 0 .369v-.37c.005-.107.006-1.447.004-4.019a3 3 0 0 0-3-2.997H5V2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2v2.243a1 1 0 0 1-1.656.736L16 13.743v-3.726z"
                />
              </svg>
            </i>
            <span className="pd-text">
              <a href="">Messages</a>
            </span>
          </div>
        </div>

        <div className="pd-container">
          <div className="pd-item">
            <i className="pd-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5H8Z"
                  clip-rule="evenodd"
                />
              </svg>
            </i>
            <span className="pd-text">
              <a href="">Profile</a>
            </span>
          </div>
        </div>

        <div className="pd-container">
          <div className="pd-item">
            <i className="pd-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065z" />
                  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0" />
                </g>
              </svg>
            </i>
            <span className="pd-text">
              <a href="">Settings</a>
            </span>
          </div>
        </div>

        <div className="pd-container">
          <div className="pd-item">
            <i className="pd-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
              >
                <path
                  fill="currentColor"
                  d="M23 4H7a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6h-9.37a1 1 0 0 1-1-1a1 1 0 0 1 1-1H25V6a2 2 0 0 0-2-2Z"
                  class="clr-i-solid clr-i-solid-path-1"
                />
                <path
                  fill="currentColor"
                  d="M28.16 17.28a1 1 0 0 0-1.41 1.41L30.13 22H25v2h5.13l-3.38 3.46a1 1 0 1 0 1.41 1.41l5.84-5.8Z"
                  class="clr-i-solid clr-i-solid-path-2"
                />
                <path fill="none" d="M0 0h36v36H0z" />
              </svg>
            </i>
            <span className="pd-text">
              <Link to="/">
                <a href="">Logout</a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PractitionerDashboard;
