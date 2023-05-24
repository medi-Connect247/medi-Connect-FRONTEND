// import React, { useState } from 'react';
// // import Header from "../components/header";
// import "../pages/PatientSignUp.css"
// import SignUpImage from "../assets/sign-up-image.jpg";
// import logo from "../assets/med-logo_prev_ui.png";
// import { Link } from "react-router-dom";

// function PatientSignUpForm() {

    
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
//     function handleSubmit(event) {
//         event.preventDefault();
    
//         // Create a data object with the user input
//         const data = {
//           firstName: firstName,
//           lastName: lastName,
//           email: email,
//           password: password
//         };
    
//         // Make the API request
//         fetch('https://api.example.com/signup', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(data)
//         })
//           .then(response => {
//             if (response.ok) {
//               // Handle successful response
//               console.log('User signed up successfully');
//               // You can redirect the user to another page or perform any necessary actions here
//             } else {
//               throw new Error('Sign up failed with status: ' + response.status);
//             }
//           })
//           .catch(error => {
//             // Handle any errors
//             setError(error.message);
//             console.error(error);
//           });
//       }
    
    

   
//  return (
//     <div>
//        <div className="navv">
//           <div className="header-content">
//           <img src={logo} alt="Logo" className="logo" />

//           <div className="app-name">MediConnect247</div>
//           </div>
//           <Link to="/"><button type="submit" className='back-button'>Back to Homepage</button></Link>
//           </div>
       
//         <div className='sign-up-div'>
//         <div
//           className="sign-up-image"
//           style={{
//             backgroundImage: `url(${SignUpImage})`,
//             backgroundSize: "cover",
//             backgroundPosition: "right",
//             backgroundRepeat: "no-repeat",
//           }}
//         ></div>
//        <div className='sign-up-section'>
//     <form className='sign-up-form'  onSubmit={handleSubmit}>
        
//         <label>
//         First Name:
//             <input type= "text" value={firstName} onChange={handleFirstNameChange} placeholder="First Name" required className="first-name-sign-up-input"/>
//         </label>

//         <label>
//         Last Name:
//             <input type= "text" value={lastName} onChange={handleLastNameChange} placeholder="Last Name" required className="last-name-sign-up-input"/>
           
//         </label>
            
//         <label>
//         Email:
//             <input type= "text" value={email} onChange={handleEmailChange} placeholder="Your Email" required className="email-sign-up-input"/>
//         </label>
        
//         <label>
//             Password:
//             <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" required className="password-sign-up-input"/>
//         </label>

       
//         {error && <p>{error}</p>}
//         <button type="submit" className='sign-up-button'>Sign Up</button>
//     </form>
//     </div>
//     </div>
//     </div>
//  );


// }
// export default PatientSignUpForm;
