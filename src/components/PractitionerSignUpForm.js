import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import logo from "../assets/med-logo_prev_ui.png";
import "../pages/PractitionerSignUp.css"

function PatientSignUpForm(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState('');
    // const history = useHistory();
    // const [modalOpen, setModalOpen] = useState(false);

    function handleFirstNameChange(event){
             setFirstName(event.target.value);
             setError('');
           };
           
    function handleLastNameChange(event){
        setLastName(event.target.value);
        setError('');
      };
      
    function handleEmailChange(event){
        setEmail(event.target.value);
        setError('');
      };
      
    function handlePasswordChange(event){
        setPassword(event.target.value);
            setError('');
      };

      function handlePasswordConfirmationChange(event) {
        setPasswordConfirmation(event.target.value);
        setError('');
      };
      function handleSubmit(event) {
        event.preventDefault();
        if (password !== passwordConfirmation) {
          setError('Password and password confirmation do not match');
        }

    }
           
    return(
     <div>
        <Link to="/"><button type="submit" className='back-button'>Back to Homepage</button></Link>
        <img src={logo} alt="Logo" className="authentication-logo" />
        <div className="practitioner-sign-up-section">
            <div className="practitioner-sign-up-image"></div>
            <div className="p-sign-up-right">
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
                        <Link to="/PractitionerLogin"><a href="" className="sign-up-a-tag">Login</a></Link>
                    </div>
                    
                    </form>
                    
            </div>
        </div>
     </div>
      );
    
}
export default PatientSignUpForm;

