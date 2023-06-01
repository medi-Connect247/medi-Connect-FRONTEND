import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/med-logo_prev_ui.png";
import "../pages/PractitionerLogin.css";
import validator from 'email-validator';
import { useNavigate } from 'react-router-dom';

function PractitionerLoginForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();
    

      
    function handleEmailChange(event){
        const value = event.target.value.trim();
        setEmail(value);
        setError('');
        if (value === '') setError('Email is required.');
        else if (!isValidEmail(value) && !validator.validate(value)) setError('Please enter a valid email address.');
      };

      
      
    function handlePasswordChange(event){
        const value = event.target.value.trim();
        setPassword(value);
        setError('');
        if (value === '') setError('Password is required.');
        else if (!isValidPassword(value)) setError('Please enter a valid password.');

      };
      // function makeLoginRequest(email, password){
      //   const login1 = async (req, res ) => {

      //   }
        // makeLoginRequest(email, password)
        // .then(response =>{
        //   if(response.statusCode === 200){
        //     window.location.href = "http://localhost:3000/PatientDashboard";
        //   }else{
        //     console.log("Login failed")
        //   }
        // })
        // .catch(error =>{
        //   console.log("An error occured")
        // })
      


      function isValidEmail(email) {
        const emailRegex = /^\S+@\S+\.\S+.{50}$/;
        return emailRegex.test(email);
      };

      function isValidPassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,30}$/;
        return passwordRegex.test(password);
      };

      const handleSubmit = async(event) =>{
        event.preventDefault();

      try {
        setLoading(true); 
      const response = await fetch('http://localhost:8080/api/v1/user/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // const data = await response.json();
        // const token = data.token;
        navigate("/PractitionerDashboard")
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      
      setError('An error occurred during login');
    } finally {
      setLoading(false); 
    }

       setEmail('');
        setPassword('');

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


        
    }
    return(
      <div>
           <Link to="/"><button type="submit" className='prac-back-button'>Back to Homepage</button></Link>
           <img src={logo} alt="Logo" className="authentication-logo" />
           <div className="login-section">
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
                   
                  
                     <button type="submit" className='login-btn'>
                     {isLoading ? 'Loading...' : 'Login'}
                     </button>
                  
                     
                  <div className="container">
                      <p className="last-text">Don't have an account?</p>
                      <Link to="/PractitionerSignUp"><a  href="" className="a-tag">Create an account</a></Link>
                  </div>
                  
                  </form>
              </div>
           </div>
      </div>
    )
  
    }
      

export default PractitionerLoginForm;