import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/med-logo_prev_ui.png";
import "../pages/PatientLogin.css";

function PatientLoginForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
     
    function handleEmailChange(event){
        setEmail(event.target.value);
        setError('');
      };
      
    function handlePasswordChange(event){
        setPassword(event.target.value);
            setError('');
      };
      return(
        <div>
             <Link to="/"><button type="submit" className='back-button'>Back to Homepage</button></Link>
             <img src={logo} alt="Logo" className="logo" />
             <div className="patient-login-section">
                <div className="login-image"></div>
                <div className="login-right">
                <h2 className="login-header">Welcome Back</h2>
                    <p className="login-sub-text">Continue from where you stopped</p>
                    <form>
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