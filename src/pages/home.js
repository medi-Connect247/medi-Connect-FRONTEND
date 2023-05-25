import React, { useState } from "react";
import logo from "../assets/med-logo_prev_ui.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./home.css";
import FooterForm from "../components/footer";

function Home() {
    const [viewPatientsDropDown, setDropDown] = useState(false);
    const [viewPractitionersDropDown, setPractitionersDropDown] = useState(false);
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [email, setEmail] = useState('');
    const [error, setError] = useState('');    

    const patientsDropDown = () => {
        setDropDown(!viewPatientsDropDown);
    };
    const practitionersDropDown = () => {
        setPractitionersDropDown(!viewPractitionersDropDown);
    };
	function handleSubjectChange(event){
		         setSubject(event.target.value);
	             setError('');
		    };
			function handleMessageChange(event){
				         setMessage(event.target.value);
				         setError('');
				    };
					function handleEmailChange(event){
						setEmail(event.target.value);
						setError('');
				   };
			   
		

    return (
        <div>
            <nav>
                <div className="nav-logo">
                    <img src={logo} alt="Logo" className="logo" />
                    <h2 className="app-name">MediConnect247</h2>
                </div>
                <div className="nav-links">
                    <nav className="nav">
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li className="Dropdown">
                                <a onClick={patientsDropDown}>
                                    Patients{" "}
                                    <RiArrowDropDownLine className="icon" />
                                    {viewPatientsDropDown && (
                                        <ul className="dropdowncontainer">
                                            <li className="dropdown">
                                                <Link to="/PatientLogin">
                                                    Login
                                                </Link>
                                            </li>
                                            <li className="dropdown2">
                                                <Link to="/PatientSignUp">
                                                    Sign Up
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </a>
                            </li>
                            <li>
                                <a href="/About">About</a>
                            </li>
                            <li className="Dropdown">
                                <a onClick={practitionersDropDown}>
                                    Practitioners{" "}
                                    <RiArrowDropDownLine className="icon" />
                                    {viewPractitionersDropDown && (
                                        <ul className="dropdowncontainer">
                                            <li className="dropdown">
                                                <Link to="/PractitionerLogin">
                                                    Login
                                                </Link>
                                            </li>
                                            <li className="dropdown2">
                                                <Link to="/PractitionerSignUp">
                                                    Sign Up
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </a>
                            </li>
                            <li>
                                <a href="/">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </nav>
            <div className="image-container">
                <div className="hero-section">
                    <h1 className="hero-header">
                        Complete and Accessible<br></br>Healthcare Solutions
                    </h1>
                    <p className="hero-section-sub-text">
                        Gain access to the best telemedicine platform, Book
                        appointments<br></br>
                        with medical practitioners, and get access to
                        medications
                    </p>
                </div>
            </div>

            <div className="about-section">
                <div className="about-image"></div>
                <div className="about-texts">
                    <h2 className="about-header">
                        Book Consulatations with our<br></br> specialists
                        anywhere, anytime
                    </h2>
                    <p className="about-sub-texts">
                        Some of the perks and benefits of our Telemedicine
                        approach<br></br>
                        which helps us attain utmost patient satisfaction
                    </p>

                    <div className="container">
                        <div className="item">
                            <i className="about-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                    >
                                        <path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25" />
                                        <path d="m5.75 7.75l2.5 2.5l6-6.5" />
                                    </g>
                                </svg>
                            </i>
                            <span className="text1">
                                Book an appointment easily and conviniently with
                                our specialists
                            </span>
                        </div>
                    </div>

                    <div className="container">
                        <div className="item">
                            <i className="about-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                    >
                                        <path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25" />
                                        <path d="m5.75 7.75l2.5 2.5l6-6.5" />
                                    </g>
                                </svg>
                            </i>
                            <span className="text1">
                                Save time and cost with our online booking means
                                with healthcare providers
                            </span>
                        </div>
                    </div>

                    <div className="container">
                        <div className="item">
                            <i className="about-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                    >
                                        <path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25" />
                                        <path d="m5.75 7.75l2.5 2.5l6-6.5" />
                                    </g>
                                </svg>
                            </i>
                            <span className="text1">
                                Round the clock access to appointment scheduling
                                irrespective of working hours
                            </span>
                        </div>
                    </div>

                    <div className="container">
                        <div className="item">
                            <i className="about-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                    >
                                        <path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25" />
                                        <path d="m5.75 7.75l2.5 2.5l6-6.5" />
                                    </g>
                                </svg>
                            </i>
                            <span className="text1">
                                Schedule virtual appoinments with our healthcare
                                specialists, conduct follow ups and routine
                                check ups
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="features-section">
                <div className="features-image">
                    <h3>What we offer</h3>
                    <p className="features-sub-text">
                        Go through the process listed to book<br></br>{" "}
                        appoinments with our Specialists
                    </p>
                    <div className="box-section">
                        <div className="box">
                            <i>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                >
                                    <mask id="ipTFirstAidKit0">
                                        <g
                                            fill="none"
                                            stroke="#fff"
                                            stroke-linejoin="round"
                                            stroke-width="4"
                                        >
                                            <path d="M8 20v18a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V20" />
                                            <path
                                                fill="#555"
                                                d="M5 14h38v6H5v-6Zm26-6H17v6h14V8Z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                d="M20 30h8m-4-4v8"
                                            />
                                        </g>
                                    </mask>
                                    <path
                                        fill="currentColor"
                                        d="M0 0h48v48H0z"
                                        mask="url(#ipTFirstAidKit0)"
                                    />
                                </svg>
                            </i>
                            <h3 className="features-header">
                                Expert Medical Aid
                            </h3>
                            <p className="features-texts">
                                We offer expert and customer friendly 
                                medical aid to our patients from
                                professionals in practice. patients are
                                rest assured of the best care.
                            </p>
                        </div>

                        <div className="box">
                            <i>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                >
                                    <g
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                    >
                                        <path
                                            d="m16.649 9.326l.055-.24c.105-.446.277-1.102.632-1.748c.362-.658.923-1.325 1.803-1.764c.877-.437 1.976-.6 3.335-.42c1.5.2 4.513.696 7.175 2.05c2.677 1.362 5.185 3.705 5.185 7.607c0 2.016-.78 4.179-1.536 5.589c-.363.678-.794 1.326-1.226 1.675c-.099.08-.24.18-.415.25a8.004 8.004 0 0 1-15.05.738l-.024.004l-
					.355-.431L17 22l-.772.636l-.001-.002l-.002-.002l-.005-.007l-.017-.02a6.849 6.849 0 0 1-.247-.327a13.446 13.446 0 0 1-.61-.924c-.47-.778-1.037-1.886-1.4-3.179c-.362-1.293-.528-2.809-.148-4.373c.37-1.522 1.243-3.02 2.824-4.358l.027-.118Zm1.68 12.638a6.003 6.003 0 0 0 11.564-.833l.113.038a2.43 2.43 0 0 1-.006-.17c0-1.655-.23-2.81-.444-3.53a6.71 6.71 0 0 0-.139-.416l-.041.002h-.04a11.485 11.485 0 0 1-2.232-.17c-1.717-.29-4.042-1.014-6.78-2.691c-.06.134-.12.285-.18.453c-.196.555-.357 1.214-.496 1.91c-.123.613-.2
					24 1.23-.32 1.808l-.037.228c-.103.62-.206 1.229-.326 1.67c-.21.766-.424 1.31-.636 1.7Zm-1.4-1.863a10.949 10.949 0 0 1-1.056-2.465c-.299-1.066-.409-2.22-.131-3.361c.27-1.11.923-2.277 2.266-3.383c.242-.164.352-.384.382-.443v-.001a1.91 1.91 0 0 0 .126-.337c.032-.114.067-.27.1-.41l.035-.157c.095-.403.218-.842.438-1.243c.214-.388.507-.72.943-.937c.438-.219 1.116-.369 2.178-.227c1.453.193 4.186.656 6.532 1.85c2.33 1.185 4.092 2.979 4.092 5.824c0 1.31-.44 2.8-.97 3.975c-.1-.766-.244-1.392-.392-1.888a7.656 7.656 0 0 0-.385-1.037a4.507 4.507 0 0 0-.19-.365l-.017-.027l-.006-.01l-.00
					3-.005l-.002-.003l-.84.54l.84-.54l-.37-.574l-.662.133l-.014.003l-.097.013a5.093 5.093 0 0 1-.448.03a9.487 9.487 0 0 1-1.84-.144c-1.613-.272-3.983-1.013-6.862-2.93l-.7-.467l-.579.61c-.477.502-.801 1.187-1.038 1.854c-.242.685-.425 1.45-.572 2.184a53.34 53.34 0 0 0-.332 1.88l-.038.224c-.107.651-.194 1.148-.282 1.47a9.214 9.214 0 0 1-.106.364Zm13.881.422l.004-.002l-.004.002Zm.004-.002Zm0 0l-.004.002l.003-.002Z"
                                        />
                                        <path
                                            d="M17.914 28.855c-.212-.422-.473-.943-.914-.842c-5.404 1.23-11 4.781-11 8.557V42h36v-5.43c0-2.974-3.472-5.809-7.587-7.48l-.005-.01a1.461 1.461 0 0 0-.014-.027l-.033.016c-1.093-.44-2.231-.8-3.361-1.056c-.503-.115-1.023.577-1.25 1.01H18c-.028-.052-.056-.11-.086-.168Zm13.489 
					1.32c.437.121.872.257 1.301.407c.012.342-.014.746-.07 1.158a8.092 8.092 0 0 1-.272 1.26H31a1 1 0 0 0-.894.553l-1 2A1 1 0 0 0 29 36v2a1 1 0 0 0 1 1h2v-2h-1v-.764L31.618 35h2.764L35 36.236V37h-1v2h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-.106-.447l-1-2A1 1 0 0 0 35 33
					h-.566a10.66 10.66 0 0 0 .248-1.609c.975.461 1.881.99 2.666 1.562C39.27 34.355 40 35.667 40 36.57V40H8v-3.43c0-.903.73-2.215 2.652-3.617c.966-.705 2.119-1.343 3.355-1.871a10.179 10.179 0 0 0 .381 2.354l.008.028a3 3 0 1 0 1.956-.444a8.092 8.092 0 0 1-.28-1.28a7.01 7.01 0 0 1-.069-1.171a3.99 3.99 0 0 1 .015-.224c.12-.037.24-.073.36-.107l.415.786h14.164l.446-.848ZM16 37.016c.538 0 1-.44 1-1.015c0-.574-.462-1.015-1-1.015s-1 .44-1 1.015c0 .574.462 1.015 1 1.015Z"
                                        />
                                    </g>
                                </svg>
                            </i>
                            <h3 className="features-header">
                                Expert Specialists
                            </h3>
                            <p className="features-texts">
                                We have a wide range of Expert Healthcare
                                specialists who are dedicated to
                                bringing the
                                absolute best experience for our patients,
                                Easily book appointments with our specialists
                            </p>
                        </div>

                        <div className="box">
                            <i>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M27.302 2a2.662 2.662 0 0 0-1.908.806l-.393.405l-.397-.405a2.661 2.661 0 0 
					0-3.816 0a2.8 2.8 0 0 0 0 3.896L25.001 11l4.209-4.298a2.8 2.8 0 0 0 0-3.896A2.661 2.661 0 0 0 27.302 2zm-3.48 16h-8.739L11.864 5.965a4 4 0 0 0-7.727 
					2.07l4.408 16.482A2 2 0 0 0 10.477 26H19v2H4v2h15a2 2 0 0 0 2-2v-2h3a4.005 4.005 0 0 0 3.98-4.4a4.121 4.121 0 0 0-4.158-3.6zM24 24H10.478L6.068 7.518a2 2 0 1 1 3.864-1.035L13.547 20H24a2 2 0 0 1 0 4z"
                                    />
                                </svg>
                            </i>
                            <h3 className="features-header">24/7 Support</h3>
                            <p className="features-texts">
                                Experience 24/7 support from our team of
                                <br></br>experts who are dedicated to serving
                                you<br></br> anywhere and anytime. Absolute
                                trust <br></br>is our goal and we are dedicated
                                to serve you
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="process-section">
                <div className="process-image"></div>
                <div className="process-texts">
                    <h2 className="process-header">Our Process</h2>
                    <p className="process-sub-texts">
                        Go through the process listed to book appointments with
                        our<br></br> medical specialists
                    </p>
                    <div className="process-box-div">
                        <div className="process-box">
							<div className="container">
								<div className="item">
									<i className="process-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25"/><path d="m5.75 7.75l2.5 2.5l6-6.5"/></g></svg></i>
								</div>
								<span className="text2">
                                Complete registration and create account
                            </span>
							</div>

						</div>


                        <div className="process-box">
						<div className="container">
								<div className="item">
									<i className="process-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25"/><path d="m5.75 7.75l2.5 2.5l6-6.5"/></g></svg></i>
								</div>
								<span className="text2">
                               Schedule an appointment with our Healthcare Specialists
                            </span>
							</div>
						</div>


                        <div className="process-box">
						<div className="container">
								<div className="item">
									<i className="process-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25"/><path d="m5.75 7.75l2.5 2.5l6-6.5"/></g></svg></i>
								</div>
								<span className="text2">
                                Complete necessary payments for consultaion with Healthcare providers
                            </span>
							</div>
						</div>
                    </div>
                </div>
            </div>

			<div className="contact-section">
				<div className="contact-image"></div>
				<div className="contact-right">
					<h1 className="contact-header">Contact us</h1>
					<p className="contact-sub-text">Incase of any further questions or<br></br> inquiries,kindly contact us</p>
					<form>
						<label>
							<input type= "text" value={subject} onChange={handleSubjectChange} placeholder="Subject"/>
						</label>

						<label>
							<input type= "text" value={message} onChange={handleMessageChange} placeholder="Message"/>
						</label>
						{error && <p>{error}</p>}
						<button type="submit" className='contact-btn'>Contact</button>

					</form>
				</div>
			</div>
			<div className="footer-section">
				<div className="logo-section">
					<div className="footer-logo">
					<img src={logo} alt="Logo" className="logo" />
					</div>
					<p className="logo-text">Gain access to the best telemedicine<br></br> platform, Book appointment with medical<br></br> practitioners, and get<br></br> access to medications </p>
				</div>

				<div className="quick-links">
					<h2 className="quick-links-section">Quick Links</h2>
					<a href="">Home</a>
					<a href="">Patient</a>
					<a href="">About</a>
					<a href="">Practitioner</a>
					<a href="">Contacts</a>
				</div>
				<div className="socials-section">
					<h2 className="socials">Contacts</h2>
					<a>Facebook</a>
					<a>Twitter</a>
					<a>LinkedIn</a>
					<a>Instagram</a>
				</div>
				<div className="newsletter-section">
					<h2 className="newsletter-heading">Newsletter</h2>
					<form>
						<label>
							<input type="text" placeholder="Email" value={email} onChange={handleEmailChange} className="email-input"/>
						</label>
						<button type="submit" className='submit-btn'>Submit</button>
					</form>
				</div>
			</div>
        </div>
    );
}

export default Home;
