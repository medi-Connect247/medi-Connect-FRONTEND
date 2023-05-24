// import React, {useState} from "react";
// // import Header from "../components/header";
// import FooterForm from "../components/footer";
// import "../pages/About.css";
// import TrophyImage from "../assets/trophy.png";
// import MedalImage from "../assets/badge (1).png";
// import ClockImage from "../assets/clock (2).png";
// import logo from "../assets/med-logo_prev_ui.png";
// import {RiArrowDropDownLine} from "react-icons/ri";
// import { Link } from "react-router-dom";

// function About (){
//   const [viewPatientsDropDown, setDropDown] = useState(false);
//   const [viewPractitionersDropDown, setPractitionersDropDown] = useState(false);


//   const patientsDropDown = () =>{
//    setDropDown(!viewPatientsDropDown)
//   }
//   const practitionersDropDown = () =>{
//     setPractitionersDropDown(!viewPractitionersDropDown)
//   }

//   return(
//     <div className="about-container">

     
// <div className="navv">
//           <div className="header-content">
//           <img src={logo} alt="Logo" className="logo" />

//           <div className="app-name">MediConnect247</div>
//           </div>
//           <div className="navbar">
//             <nav className="nav">
//             <ul>
//               <li>
//                 <a href="/">Home</a>
//               </li>
//               <li className="Dropdown">
//               <a  onClick={patientsDropDown}>Patients <RiArrowDropDownLine className="icon"/>{viewPatientsDropDown &&(
//              <ul className="dropdowncontainer">
//               <li className="dropdown">
//                 <Link to="/PatientLogin">Login</Link>
//               </li>
//               <li className="dropdown2">
//                <Link to="/PatientSignUp">Sign Up</Link>
//               </li>
//               </ul>
//               )}
//                </a>
//               </li>
//               <li>
//                 <a href="/About">About</a>
//               </li>
//               <li className="Dropdown">
//               <a  onClick={practitionersDropDown}>Practitioners <RiArrowDropDownLine className="icon"/>{viewPractitionersDropDown &&(
//              <ul className="dropdowncontainer">
//               <li className="dropdown">
//                 <Link to="/PractitionerLogin">Login</Link>
//               </li>
//               <li className="dropdown2">
//                <Link to="/PractitionerSignUp">Sign Up</Link>
//               </li>
//               </ul>
//               )}
//                </a>
//               </li>
//               <li>
//                 <a href="/">Contact</a>
//               </li>
//             </ul>
//             </nav>
//           </div>
//           </div>

// <div className="first-about-section">  

//   <div className="about-left">
//   <h1 className="about-header2">MediConnect247</h1>
//   <p className="about-sub-text">MediConnect247 is a comprehensive and innovative healthcare platform that leverages technology to connect patients with healthcare providers seamlessly.<br></br>
//   At its core, Mediconnect247 is designed to bridge the gap between patients and healthcare professionals, making healthcare services more accessible, efficient, and convenient. 
//   The platform offers a range of features that facilitate remote consultations,<br></br> medical advice, and assistance, ensuring patients receive timely and quality care.
//   </p>
//   </div>

  
// <div className="triangle"></div>
// </div>

//  <div className="mission-section">
//     <h1 className="mission-header">Our Mission</h1>
//     <p className="mission-sub-text">MediConnect247's mission is  to make quality healthcare accessible to every African with a smart device.</p>
//   </div> 

//   <div className="border">
//     <div className="left-text-div">
//       MediConnect247 stands for 'MedicalConnect247'.<br></br>
//       We will always be reaching out for your health!<br></br>
//       And we will also enhance accessibility, convenience,<br></br> and efficiency in the healthcare industry.
//     </div>

//     <div className="right-text-div">
//       <h1 className="border-right-header">Our Values</h1>
//       <div className="border-sub-texts">

//         <p>Quality Healthcare Delivery</p>
//         <p>Affordable Healthcare</p>
//         <p>Easily Accessible Healthcare</p>

//       <div className="icons">
//       <i><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M4 7.5L7 10l4-5"/></svg></i>
//       <i><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M4 7.5L7 10l4-5"/></svg></i>
//       <i><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M4 7.5L7 10l4-5"/></svg></i>
//       </div>

//       </div>
      
//     </div>

    


//   </div>

//   <div className="boxes-section">

//       <div className="first-big-box">
//        <h1 className="big-box-header">Why use <br></br>MediConnect247</h1>
//        <hr></hr>
//        <p className="big-box-sub-text">The MediConnect247 platform makes it possible for anyone with a smartphone or tablet to receive quality and affordable healthcare.</p>
//       </div>
    
//     <div className="box">
//       <img src={TrophyImage}  className="box-images"/>
//     <h1 className="big-box-header">Quality<br></br>Healthcare Services</h1>
//        <hr></hr>
//        <p className="big-box-sub-text">With a wide range of healthcare services to choose from, you can always find what you need.</p>
//     </div>

//     <div className="box">
//       <img src={MedalImage}  className="box-images"/>
//     <h1 className="big-box-header">High <br></br>User Satisfaction</h1>
//        <hr></hr>
//        <p className="big-box-sub-text">We take pride in ensuring all services rendered are done to perfection</p>
//     </div> 

//     <div className="box">
//       <img src={ClockImage} className="box-images"/>
//     <h1 className="big-box-header">High<br></br>User Satisfaction</h1>
//        <hr></hr>
//        <p className="big-box-sub-text">With doctors from different countries, we ensure we always have someone available for you</p>
//     </div>

//     </div>

//     <div className="footer-section">
//         <FooterForm />
//       </div>

  

//   </div>
  
//   );
// }
// export default About;