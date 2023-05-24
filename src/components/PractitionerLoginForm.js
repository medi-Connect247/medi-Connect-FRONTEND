// import React, {useState} from 'react';
// import { Link } from "react-router-dom";
// import logo from "../assets/med-logo_prev_ui.png";
// import LoginImage from "../assets/sign-up-image.jpg";
// import "../pages/PractitionerLogin.css";

// function PractitionerLogin(){
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     function handleEmailChange(event){
//         setEmail(event.target.value);
//         setError('');
//     };

//     function handlePasswordChange(event) {
//         setPassword(event.target.value);
//         setError('')
//     };

//     return(
//         <div>
//         <div className="navv">
//           <div className="header-content">
//           <img src={logo} alt="Logo" className="logo" />

//           <div className="app-name">MediConnect247</div>
//           </div>
//           <Link to="/"><button type="submit" className='back-button'>Back to Homepage</button></Link>
//           </div>
     
//          <div className="practitioner-login-div">
//          <div
//           className="practitioner-login-image"
//           style={{
//             backgroundImage: `url(${LoginImage})`,
//             backgroundSize: "cover",
//             backgroundPosition: "left",
//             backgroundRepeat: "no-repeat",
//           }}
//         ></div>
         
//         <div className="practitioner-login-section">
//         <form className="practitioner-login-form">
//         <label>
//         Email:
//             <input type= "text" value={email} onChange={handleEmailChange} placeholder="Your Email" required className="practitioner-email-input" />
//         </label>
        
//         <label>
//             Password:
//             <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" className="practitioner-password-input" />
//         </label>
//         <div>
//         <a href={"/ForgotPassword"} className="forgot-password">
//             Forgot password 
//             </a>
//         </div>
       
//         {error && <p>{error}</p>}
//         <div className='acct-btn'>
//         <button type="submit" className='practitioner-login-button'>Login</button>
//         <div className="sign-up">
//           <p className="acct">Don't have an Account?</p>
//           <a href={"/PractitionerSignUp"} className="signup">
//             Sign Up
//           </a>
//           </div>
//         </div>
        
//         </form>
//         </div>
//         </div>
//     </div>
//     );
// }
// export default PractitionerLogin;