import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/med-logo_prev_ui.png";
import "../pages/PatientLogin.css";
import validator from "email-validator";
import axios from "axios";

function PatientLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleEmailChange(event) {
    const value = event.target.value.trim();
    setEmail(value);
    setError("");
    if (value === "") setError("Email is required.");
    else if (!isValidEmail(value) && !validator.validate(value))
      setError("Please enter a valid email address.");
  }

  function handlePasswordChange(event) {
    const value = event.target.value.trim();
    setPassword(value);
    setError("");
    if (value === "") setError("Password is required.");
    else if (!isValidPassword(value))
      setError("Please enter a valid password.");
  }

  function isValidEmail(email) {
    const emailRegex = /^\S+@\S+\.\S+.{50}$/;
    return emailRegex.test(email);
  }

  function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,30}$/;
    return passwordRegex.test(password);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitting");

    if (email.trim() === "" || password.trim() === "") {
      setError("Please fill in all the fields.");
      return;
    }

    if (!validator.validate(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!isValidPassword(password)) {
      setError("Please enter a valid password.");
      return;
    }

    setEmail("");
    setPassword("");


    const login = async () => {
      console.log("login api");
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/authenticate",
        { email, password }
      );
      if (res.status === 200) {
        const { access_token, refresh_token } = res.data;
        console.log("access", access_token);
        sessionStorage.setItem("accessToken", access_token);
        sessionStorage.setItem("refreshToken", refresh_token);
      }
    };
    login();

    // sessionStorage.getItem("accessToken")
  }

  return (
    <div>
      <div className="authentication-navbar">
        <Link to="/">
          <button type="submit" className="back-button">
            Back to Homepage
          </button>
        </Link>
        <img src={logo} alt="Logo" className="authentication-logo" />
      </div>
      <div className="patient-login-section">
        <div className="patient-login-image"></div>
        <div className="patient-login-right">
          <h2 className="login-header">Welcome Back</h2>
          <p className="login-sub-text">Continue from where you stopped</p>
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                className="login-input"
              />
            </label>
            <label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className="login-input"
              />
            </label>
            {error && <p>{error}</p>}
            {/* <Link to="/AccountSuccess"> */}
            <button type="submit" className="login-btn">
              Login
            </button>
            {/* </Link> */}
            <div className="container">
              <p className="patient-last-text">Don't have an account?</p>
              <Link to="/PatientSignUp">
                <a href="" className="patient-a-tag">
                  Create an account
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default PatientLoginForm;
