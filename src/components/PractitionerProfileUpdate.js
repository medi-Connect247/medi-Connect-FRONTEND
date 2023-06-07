import React, { useState, useEffect, useRef } from 'react';
import "../pages/PractitionerProfileUpdate.css";
import logo from "../assets/med-logo_prev_ui.png";
import { Link, useParams } from "react-router-dom";
function PractitionerProfileUpdate(){
    const [editMode, setEditMode] = useState(false); 
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [contactInfo, setContactInfo] = useState("");
    const [speciality, setSpeciality]  = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [address, setAddress] = useState("");
    const [ProfileImage, setProfilePicture] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [error, setError] = useState("");

    const [getUserDetails, setGetUserDetails] = useState([]);

    const genderOptions = [
        { value: "MALE", label: "Male" },
        { value: "FEMALE", label: "Female" },
        { value: "other", label: "Other" },
      ];

      const { id } = useParams();
      const ref = useRef();
      
      const fetchUserDetails = async () => {
        try {
          const response = await fetch(`http://localhost:8080/api/patient/${id}`, {
            method: "GET",
            headers: {
              "Content-type": "application/json",
            },
          });
          if (response.ok) {
            const res = await response?.json();
    
            console.log(res);
            setGetUserDetails(res);
            const imageData = await response.blob();
            const imageUrl = URL.createObjectURL(imageData);
            setProfilePicture(imageUrl);
          } else {
            
          }
        } catch (error) {
        
        }
      };

      useEffect(() => {
        fetchUserDetails();
      }, []);
    
      function handleFirstNameChange(event) {
        setFirstName(event.target.value);
        setError("");
      }
      function handleLastNameChange(event) {
        setLastName(event.target.value);
        setError("");
      }
      function handleEmailChange(event) {
        setEmail(event.target.value);
        setError("");
      }
      function handleGenderChange(event) {
        setGender(event.target.value);
        setError("");
      }
      function handleContactInfoChange(event) {
        setContactInfo(event.target.value);
        setError("");
      }
      function handleSpecialityChange(event) {
        setSpeciality(event.target.value);
        setError("");
      }
      function handleDateOfBirth(event) {
        setDateOfBirth(event.target.value);
        setError("");
      }
      function handleAddressChange(event) {
        setAddress(event.target.value);
        setError("");
      }
      const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
        setProfilePicture(file);
      };
      const updatedProfile = {
        gender,
        contactInfo,
        speciality,
        dateOfBirth,
        address,
        ProfileImage,
      };
      const updateProfile = (updatedProfile) => {
        const apiUrl = `http://localhost:8080/api/patient/${id}`;
    
        return fetch(apiUrl, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json-patch+json",
          },
          body: JSON.stringify(updatedProfile),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to update profile");
            }
            console.error("Profile updated Successfully:", error.message);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      function handleSubmit(event) {
        event.preventDefault();
        if (!dateOfBirth && !gender && !contactInfo && !speciality && !address && !ProfileImage) {
          setError("Please fill in all fields.");
          return;
        } else {
          console.error("Profile updated Successfully:", error.message);
        }
    
        updateProfile();
      }
      const handleEditClick = () => {
        setEditMode(true);
      };
    
      const handleSaveClick = () => {
        setEditMode(false);
      };
      console.log("userdetails ", getUserDetails.firstName);

    
    return(
     <div>
        <Link to="/PatientDashboard">
        <button type="submit" className="back-button">
          Back to Dashboard
        </button>
      </Link>
      <img src={logo} alt="Logo" className="authentication-logo" />
     
      <div>
        <form onSubmit={handleSubmit} className="update-form">
          <div className="form-group">
            <label>
              <p className="update-label">First Name:</p>
              <input
                type="text"
                defaultValue={getUserDetails?.firstName}
                // value={firstName}
                onChange={handleFirstNameChange}
                className="update-input"
                placeholder="First Name"
                readOnly
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              <p className="update-label">Last Name:</p>
              <input
                type="text"
                // value={lastName}
                onChange={handleLastNameChange}
                className="update-input"
                placeholder="Last Name"
                defaultValue={getUserDetails?.lastName}
                readOnly
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              <p className="update-label">Email:</p>
              <input
                type="text"
                // value={email}
                onChange={handleEmailChange}
                className="update-input"
                placeholder="Email"
                defaultValue={getUserDetails?.userDetails?.email}
                readOnly
              />
            </label>
          </div>
          {/* <div className='form-group'>
            <label>
               <p className='update-label'> Gender:</p>
                <input type="text" value={gender} onChange={handleGenderChange} className='update-input' placeholder='Gender' readOnly={!editMode}/>
            </label>
            </div> */}
          <label htmlFor="gender">
            <p className="update-label">Gender:</p>
          </label>
          <div className="input-wrapper">
            <select
              id="gender-select"
              value={gender}
              onChange={handleGenderChange}
              className="hidden-select"
            >
              <input
                type="text"
                value={gender}
                onChange={handleGenderChange}
                className="update-input"
                placeholder="Select gender"
              />
              {genderOptions?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>
              <p className="update-label">Contact Info:</p>
              <input
                type="number"
                value={contactInfo}
                onChange={handleContactInfoChange}
                className="update-input"
                placeholder="Contact info"
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              <p className="update-label">Speciality:</p>
              <input
                type="text"
                value={speciality}
                onChange={handleSpecialityChange}
                className="update-input"
                placeholder="Speciality"
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              <p className="update-label">Date Of Birth:</p>
              <input
                type="date"
                value={dateOfBirth}
                onChange={handleDateOfBirth}
                className="update-input"
                placeholder="Date of Birth"
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              <p className="update-label">Address:</p>
              <input
                type="text"
                value={address}
                onChange={handleAddressChange}
                className="update-input"
                placeholder="Address"
              />
            </label>
          </div>
          {/* <label>
          <p className='update-label'>Profile Picture:</p>
          <input type="file" accept="image/*" onChange={(e) => setProfilePicture(e.target.files[0])} />
        </label> */}
          <label
            htmlFor="profile-picture"
            className="profile-picture-label"
            readOnly={!editMode}
          >
            Profile Picture:
          </label>
          <div className="profile-picture-input-container">
            <input
              type="file"
              id="profile-picture"
              accept="image/*"
              onChange={handleFileChange}
              className="profile-picture-input"
            />
            {selectedImage && (
              <div className="selected-image-preview-container">
                <img
                  src={selectedImage}
                  alt="Selected Profile Picture"
                  className="selected-image-preview"
                  ref={ref}
                  onFocus={true}
                  onBlur={true}
                />
              </div>
            )}
          </div>
          <div className="error">{error && <p>{error}</p>}</div>
          <div className="update-buttons">
            {/* <button type="submit" className='update-submit-btn'>Save</button>
            <button type="submit" className='edit-btn'>Edit</button> */}
            {editMode ? (
              <button
                onClick={handleSubmit}
                className="update-submit-btn"
                type="submit"
              >
                Save
              </button>
            ) : (
              <button
                onClick={handleEditClick}
                className="edit-btn"
                type="edit-btn"
              >
                Edit
              </button>
            )}
          </div>
        </form>
      </div>
     </div>
    );
}
export default PractitionerProfileUpdate;