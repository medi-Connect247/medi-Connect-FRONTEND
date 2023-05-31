import { useState } from "react"
import "../pages/Footer.css"
import logo from "../assets/med-logo_prev_ui.png";
import { Link } from "react-router-dom";
function Footer(){
  const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [email, setEmail] = useState('');
  const [error, setError] = useState('');

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
    return(
      <div>
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
        <img src={logo} alt="Logo" className="logo"/>
        </div>
        <p className="logo-text">Gain access to the best telemedicine<br></br> platform, Book appointment with medical<br></br> practitioners, and get<br></br> access to medications </p>
      </div>
      
      <div className="quick-links">
        <h2 className="quick-links-section">Quick Links</h2>
        <Link to="/"><a href="">Home</a></Link>
        <a href="">Patient</a>
        <Link to="/About"><a href="">About</a></Link>
        <a href="">Practitioner</a>
        <a href="/contact">Contacts</a>
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
export default Footer;
