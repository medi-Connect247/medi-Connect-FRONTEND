import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/med-logo_prev_ui.png";
import "../pages/PractitionerLogin.css";
import validator from "email-validator";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PractitionerLoginForm() {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    function handleEmailChange(event) {
        const value = event.target.value.trim();
        setEmail(value);
        setError("");
        if (value === "") setError("Email is required.");
        else if (!isValidEmail(value) && !validator.validate(value))
            setError("Please enter a valid email address.");
    }

    function handlePasswordChange(event, password) {
        isValidPassword(password);
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

    // setEmail("");
    // setPassword("");

    const isValidDetails = Boolean(email) && Boolean(password);

    const login = async () => {
        try {
            setLoading(true);
            console.log("login api");
            const res = await axios.post(
                "http://localhost:8080/api/v1/user/doctor/authenticate",
                { email, password }
            );
            if (res.status === 200) {
                const { access_token, refresh_token } = res.data;
                console.log("access", access_token);
                sessionStorage.setItem("accessToken", access_token);
                sessionStorage.setItem("refreshToken", refresh_token);
                navigate("/PractitionerDashboard");
            } else {
                setError("Invalid email or password");
            }
        } catch (error) {
            console.error("Error during login:", error);

            setError("An error occurred during login");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        login();

        // if (email.trim() === "" || password.trim() === "") {
        //     setError("Please fill in all the fields.");
        //     return;
        // }

        // if (!validator.validate(email)) {
        //     setError("Please enter a valid email address.");
        //     return;
        // }

        // if (!isValidPassword(password)) {
        //     setError("Please enter a valid password.");
        //     return;
        // }
    };

    return (
        <div>
            <Link to="/">
                <button type="submit" className="prac-back-button">
                    Back to Homepage
                </button>
            </Link>
            <img src={logo} alt="Logo" className="authentication-logo" />
            <div className="login-section">
                <div className="login-image"></div>
                <div className="login-right">
                    <h2 className="login-header">Welcome Back</h2>
                    <p className="login-sub-text">
                        Continue from where you stopped
                    </p>
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
                        <div className="error">{error && <p>{error}</p>}</div>

                        <button
                            type="submit"
                            className="login-btn"
                            disabled={!isValidDetails}
                            >
                       
                            {isLoading ? "Loading..." : "Login"}
                        </button>

                        <div className="container">
                            <p className="last-text">Don't have an account?</p>
                            <Link to="/PractitionerSignUp">
                                <a href="" className="a-tag">
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

export default PractitionerLoginForm;
