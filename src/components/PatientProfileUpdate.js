import React, { useState, useEffect } from "react";
import logo from "../assets/med-logo_prev_ui.png";
import { Link, useParams } from "react-router-dom";
import "../pages/PatientProfileUpdate.css";
function PatientProfileUpdate() {
  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [ProfilePicture, setProfilePicture] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState("");

  const [getUserDetails, setGetUserDetails] = useState([]);
  // const [password, setPassword] = useState("");

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const userId = 123;
  //       const response = await fetch(`https://example.com/api/users/${userId}`);
  //       const data = await response.json();
  //       setFirstName(data.firstName);
  //       setLastName(data.lastName);
  //       setEmail(data.email);
  //     } catch (error) {
  //       console.error('Error fetching user data:', error.message);
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  const { id } = useParams();
  //   console.log("profile id ", id);

  //   const token = sessionStorage.getItem("accessToken");
  //   console.log(token);

  const fetchProfilePicture = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/patient/${id}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        const res = response?.json();
        const data = res?.data;
        console.log(data);
        setGetUserDetails(data);
        const imageData = await response.blob();
        const imageUrl = URL.createObjectURL(imageData);
        setProfilePicture(imageUrl);
      } else {
        // Handle error response
      }
    } catch (error) {
      // Handle network or other errors
    }
  };

  useEffect(() => {
    fetchProfilePicture();
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
  function handleSubmit(event) {
    event.preventDefault();
    if (
      !dateOfBirth ||
      !gender ||
      !contactInfo ||
      !address ||
      !ProfilePicture
    ) {
      setError("Please fill in all fields.");
      return;
    } else {
      console.error("Profile updated Successfully:", error.message);
    }
    const updatedProfile = {
      gender,
      contactInfo,
      dateOfBirth,
      address,
      ProfilePicture,
    };

    const updateProfile = (updatedProfile) => {
      const apiUrl = "";

      return fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
  }
  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
  };
   
  return (
    <div>
      <Link to="/PatientDashboard">
        <button type="submit" className="back-button">
          Back to Dashboard
        </button>
      </Link>
      <img src={logo} alt="Logo" className="authentication-logo"/>
      {getUserDetails.map((test) => {
        return (
            <div>
          <form onSubmit={handleSubmit} className="update-form" key={test?.id}>
            <div className="form-group">
              <label>
                <p className="update-label">First Name:</p>
                <input
                  type="text"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  className="update-input"
                  placeholder="First Name"
                  defaultValue={test?.firstName}
                  readOnly={!editMode}
                />
              </label>
            </div>

            <div className="form-group">
              <label>
                <p className="update-label">Last Name:</p>
                <input
                  type="text"
                  value={lastName}
                  onChange={handleLastNameChange}
                  className="update-input"
                  placeholder="Last Name"
                  defaultValue={test?.lastName}
                  readOnly={!editMode}
                />
              </label>
            </div>

            <div className="form-group">
              <label>
                <p className="update-label">Email:</p>
                <input
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                  className="update-input"
                  placeholder="Email"
                  defaultValue={test?.email}
                  readOnly={!editMode}
                />
              </label>
            </div>
            
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
                  readOnly={!editMode}
                  className="update-input"
                  placeholder="Select gender"
                />
                {genderOptions.map((option) => (
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
                  readOnly={!editMode}
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
                  readOnly={!editMode}
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
                  readOnly={!editMode}
                />
              </label>
            </div>
            
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
                  />
                </div>
              )}
            </div>
            <div className="error">{error && <p>{error}</p>}</div>
            <div className="update-buttons">
              {editMode ? (
                <button
                  onClick={handleSaveClick}
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
        );
      })}
    </div>
  );
}
export default PatientProfileUpdate;
