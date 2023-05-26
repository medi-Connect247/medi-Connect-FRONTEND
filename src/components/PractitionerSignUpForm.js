import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/med-logo_prev_ui.png";
import "../pages/PractitionerSignUp.css"

function PatientSignUpForm(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState('');

    function handleFirstNameChange(event) {
        const value = event.target.value;
        if (/^[A-Za-z]*$/.test(value) && value.length <= 50) {
          setFirstName(value);
          setError('');
        } else {
          setError('First name should contain alphabets only.');
        }
      };
    
      function handleLastNameChange(event) {
        const value = event.target.value;
        if (/^[A-Za-z]*$/.test(value) && value.length <= 50) {
          setLastName(value);
          setError('');
        } else {
          setError('Last name should contain alphabets only.');
        }
      };
      
      function handleEmailChange(event) {
        const value = event.target.value;
        if (value.length <= 50) {
          setEmail(value);
          setError('');
      
          if (value.trim() === '') {
            setError('Please enter your email address.');
          } else if (!/\S+@\S+\.\S+/.test(value)) {
            setError('Please enter a valid email address.');
          }
        } else {
          setError('Email should not exceed 50 characters.');
        }
      };
   
      function handlePasswordChange(event) {
        const value = event.target.value;
        if (value.length <= 30) {
          setPassword(value);
          setError('');
      
          if (value.trim() === '') {
            setError('Please enter your password.');
          } else if (value.length < 6) {
            setError('Password should be at least 6 characters long.');
          }
        } else {
          setError('Password should not exceed 30 characters.');
        }
      }
      
      function handlePasswordConfirmationChange(event) {
        const value = event.target.value;
        setPasswordConfirmation(value);
        setError('');
      
        if (value !== password) {
          setError('Password and password confirmation do not match.');
        }
      };

      function handleSubmit(event) {
        event.preventDefault();
      
        if (
          firstName.trim() === '' ||
          lastName.trim() === '' ||
          email.trim() === '' ||
          password.trim() === '' ||
          passwordConfirmation.trim() === ''
        ) {
          setError('Please fill in all the fields.');
          return;
        }
    };
           
    return(
     <div>
        <Link to="/"><button type="submit" className='back-button'>Back to Homepage</button></Link>
        <img src={logo} alt="Logo" className="logo" />
        <div className="practitioner-sign-up-section">
            <div className="sign-up-image"></div>
            <div className="sign-up-right">
                <h2 className="sign-up-header">Create an Account</h2>
                <p className="sign-up-sub-text">Let's get you started</p>
                <form>
                    <label>
                        <input type="text" placeholder="First Name" value={firstName} onChange={handleFirstNameChange} className="sign-up-input"/>
                    </label>
                    <label>
                        <input type="text" placeholder="Last Name" value={lastName} onChange={handleLastNameChange} className="sign-up-input"/>
                    </label>
                <label>
                        <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} className="sign-up-input"/>
                    </label>
                    <label>
                        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} className="sign-up-input"/>
                    </label>
                    <label>
                        <input type="password" placeholder="Confirm Password" value={passwordConfirmation} onChange={handlePasswordConfirmationChange} className="sign-up-input"/>
                    </label>
                    {error && <p>{error}</p>}
                    <button type="submit" className='acct-btn'>Create Account</button>
                    <div className="sign-up-container">
                        <p className="sign-up-last-text">Already have an account?</p>
                        <Link to="/PractitionerLogin"><a  className="sign-up-a-tag">Login</a></Link>
                    </div>
                    
                    </form>
                    
            </div>
        </div>
     </div>
      );
    
}
export default PatientSignUpForm;

