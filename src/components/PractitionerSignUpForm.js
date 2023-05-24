// import React, {useState} from 'react';
// import { Link } from "react-router-dom";
// import logo from "../assets/med-logo_prev_ui.png";
// import SignUpImage from "../assets/sign-up-image.jpg";
// import "../pages/PractitionerSignUp.css"
// function PractitionerSignUpForm(){

//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName]= useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
   
//     const [error, setError] = useState('');

//     function handleFirstNameChange(event){
//         setFirstName(event.target.value);
//         setError('');
//     };

//     function handleLastNameChange(event){
//         setLastName(event.target.value);
//         setError('');
//     };

//    function handleEmailChange(event){
//         setEmail(event.target.value);
//         setError('');
//     };

//     function handlePasswordChange(event) {
//         setPassword(event.target.value);
//         setError('')
//     };

//     return(
//         <div>
//             <div className="navv">
//           <div className="header-content">
//           <img src={logo} alt="Logo" className="logo" />

//           <div className="app-name">MediConnect247</div>
//           </div>
//           <Link to="/"><button type="submit" className='back-button'>Back to Homepage</button></Link>
//           </div>

//           <div className='practitioner-sign-up-div'>
//         <div
//           className="practitioner-sign-up-image"
//           style={{
//             backgroundImage: `url(${SignUpImage})`,
//             backgroundSize: "cover",
//             backgroundPosition: "left",
//             backgroundRepeat: "no-repeat",
//           }}
//         ></div>
//        <div className='practitioner-sign-up-section'>
//     <form className='practitioner-sign-up-form'>
        
//         <label>
//         First Name:
//             <input type= "text" value={firstName} onChange={handleFirstNameChange} placeholder="First Name" required className="practitioner-firstname-signup-input"/>
//         </label>

//         <label>
//         Last Name:
//             <input type= "text" value={lastName} onChange={handleLastNameChange} placeholder="Last Name" required className="practitioner-lastname-signup-input"/>
           
//         </label>
            
//         <label>
//         Email:
//             <input type= "text" value={email} onChange={handleEmailChange} placeholder="Your Email" required className="practitioner-email-signup-input"/>
//         </label>
        
//         <label>
//             Password:
//             <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" required className="practitioner-password-signup-input"/>
//         </label>

       
//         {error && <p>{error}</p>}
//         <button type="submit" className='practitioner-signup-button'>Sign Up</button>
//     </form>
//     </div>
//     </div>
//         </div>
//     )
    
// }
// export default PractitionerSignUpForm;