import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/med-logo_prev_ui.png";
import "../pages/PatientLogin.css";
import validator from 'email-validator';


function PatientLoginForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
   

    function handleEmailChange(event) {
        const value = event.target.value.trim();
        setEmail(value);
        setError('');
        if (value === '') setError('Email is required.');
        else if (!isValidEmail(value) && !validator.validate(value)) setError('Please enter a valid email address.');
      }
      
      function handlePasswordChange(event) {
        const value = event.target.value.trim();
        setPassword(value);
        setError('');
        if (value === '') setError('Password is required.');
        else if (!isValidPassword(value)) setError('Please enter a valid password.');
      }
     

      function isValidEmail(email) {
        const emailRegex = /^\S+@\S+\.\S+.{50}$/;
        return emailRegex.test(email);
      };

      function isValidPassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,30}$/;
        return passwordRegex.test(password);
      };

      function handleSubmit(event) {
        event.preventDefault();

        if (email.trim() === '' || password.trim() === '') {
            setError('Please fill in all the fields.');
            return;
          }

          if (!validator.validate(email)) {
            setError('Please enter a valid email address.');
            return;
          }
        
          if (!isValidPassword(password)) {
            setError('Please enter a valid password.');
            return;
          }

        setEmail('');
        setPassword('');
    }

      return(
        <div>
             <Link to="/"><button type="submit" className='back-button'>Back to Homepage</button></Link>
             <img src={logo} alt="Logo" className="logo" />
             <div className="patient-login-section">
                <div className="login-image"></div>
                <div className="login-right">
                <h2 className="login-header">Welcome Back</h2>
                    <p className="login-sub-text">Continue from where you stopped</p>
                    <form onSubmit={handleSubmit}>
                    <label>
                        <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} className="login-input"/>
                    </label>
                    <label>
                        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} className="login-input"/>
                    </label>
                    {error && <p>{error}</p>}
                    <button type="submit" className='login-btn'>Login</button>
                    <div className="container">
                        <p className="last-text">Don't have an account?</p>
                        <Link to="/PatientSignUp"><a  className="a-tag">Create an account</a></Link>
                    </div>
                    
                    </form>
                </div>
             </div>
        </div>

      );
}
export default PatientLoginForm;