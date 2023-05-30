import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../pages/About.css"
 function About(){
  return(
  <div>
    <div>
        <Header/>
    </div>
  <div className="first-image">
    <h1 className="first-header">About Us</h1>
  </div>
  <div className="special-features-section">
   <div className="special-features-left">
    <div className="img1"></div>
    <div className="img2"></div>
    <div className="img3"></div>
   </div>
   <div className="special-features-right">
    <h2 className="sf-right-header">We ensure quality healthcare is<br></br>
     available to you anywhere</h2>
     <p className="sf-right-sub-text">We are all about propelling quality healthcare services for easy<br></br>
      access to patients, with our newly improved facilities to aid<br></br> 
      quality healthcare from our specialists.</p>
      <h2 className="sf-header">Special Features</h2>
      <div className="special-features-list">
        <div className="list-left">

            <div className="sf-container">
                <div className="sf-item">
                    <i className="sf-icons"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
                        stroke-width="1.5"><path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 
                        1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25"/>
                    <path d="m5.75 7.75l2.5 2.5l6-6.5"/></g></svg></i>
                    <span className="sf-text">
                        Heart Institute
                    </span>
                </div>
            </div>

            <div className="sf-container">
                <div className="sf-item">
                    <i className="sf-icons"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
                        stroke-width="1.5"><path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 
                        1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25"/>
                    <path d="m5.75 7.75l2.5 2.5l6-6.5"/></g></svg></i>
                    <span className="sf-text">
                        Medical School
                    </span>
                </div>
            </div>

            <div className="sf-container">
                <div className="sf-item">
                    <i className="sf-icons"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
                        stroke-width="1.5"><path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 
                        1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25"/>
                    <path d="m5.75 7.75l2.5 2.5l6-6.5"/></g></svg></i>
                    <span className="sf-text">
                       Psychiatry
                    </span>
                </div>
            </div>

        </div>

<div className="list-right">

<div className="sf-container">
    <div className="sf-item">
        <i className="sf-icons"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
            stroke-width="1.5"><path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 
            1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25"/>
        <path d="m5.75 7.75l2.5 2.5l6-6.5"/></g></svg></i>
        <span className="sf-text">
            Surgical Laboratories
        </span>
    </div>
</div>

<div className="sf-container">
    <div className="sf-item">
        <i className="sf-icons"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
            stroke-width="1.5"><path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 
            1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25"/>
        <path d="m5.75 7.75l2.5 2.5l6-6.5"/></g></svg></i>
        <span className="sf-text">
           Pediatrics center for children
        </span>
    </div>
</div>

<div className="sf-container">
    <div className="sf-item">
        <i className="sf-icons"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
            stroke-width="1.5"><path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 
            1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25"/>
        <path d="m5.75 7.75l2.5 2.5l6-6.5"/></g></svg></i>
        <span className="sf-text">
          Radiology Laboratories
        </span>
    </div>
</div>

</div>

      </div>
      <button type="submit" className='list-btn'>Book Consultation</button>

   </div>
  </div>

  <div className="services-section">
    <div className="first-services-image">
    <h3 className="services-header">Our Services</h3>
    <p className="services-sub-text">Go through the process listed to book<br></br> appointments with our medical Specialists</p>
     <div className="services-image">
        <div className="service-img1">
            <p className="service-img-text">Radiology</p>
        </div>
        <div className="service-img2">
            <p className="service-img-text">Psychiatry</p>
        </div>
        <div className="service-img3">
            <p className="service-img-text">Pediatrics</p>
        </div>
     </div>
    </div>
    
  </div>
  <div className="mission-section">
    <h1 className="mission-header">Our Mission</h1>
    <p className="mission-sub-text">
    Our mission is to revolutionize healthcare delivery by leveraging technology and expertise to<br></br>
     create a seamless, patient-centered online medical center. We are committed to providing<br></br> 
     accessible, personalized, and evidence-based healthcare services, empowering individuals<br></br>
      to take control of their well-being and live healthier lives. Through our digital platform, we<br></br>
       strive to enhance convenience, improve patient outcomes, and foster a trusted and<br></br>
        compassionate healthcare community.
    </p>
    <h1 className="mission-header2">What you stand to gain</h1>

    <div className="mission-box-section">

      <div className="mission-box">
          <i className="mission-icon"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4">
            <path d="M8 20V38C8 39.1046 8.89543 40 10 40H38C39.1046 40 40 39.1046 40 38V20"/><path fill="#2F88FF" d="M5 14H43V20H5V14Z"/>
            <path fill="#2F88FF" d="M31 8H17V14H31V8Z"/><path stroke-linecap="round" d="M20 30L28 30"/><path stroke-linecap="round" d="M24 26V34"/></g></svg>
            </i>
            <h2 className="mission-header3">Accessibility</h2>
            <p className="box-section-sub-text">We offer the opportunity of accessing our healthcare services irrespective of your location as our booking services tend to serve remote patients and less waiting time</p>
      </div>
       
      <div className="mission-box">
          <i className="mission-icon"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" d="M14.433 33.442a3 3 0 1 0 1.96-.416a8.972 8.972 0 0 1-.103-.405a19.627 19.627 0 0 1-.32-1.87a17.026 17.026 0 0 1-.14-1.914a6.55 6.55 0 0 1 .015-.527c.384-.11.77-.21 1.155-.297c.441-.1.703.42.914.842l.086.169h11.749c.229-.434.748-1.126 1.251-1.011c.536.122 1.075.267 1.609.433l-.003.001c-.002-.002-.002-.002 0 .002c.004.014.026.08.048.22c.025.162.042.372.05.625c.014.504-.015 1.117-.074 1.735c-.06.617-.149 1.214-.249 1.685c-.022.105-.044.2-.066.286H31a1 1 0 0 0-.894.553l-1 2A.999.999 0 0 0 29 36v2a1 1 0 0 0 1 1h2v-2h-1v-.764L31.618 35h2.764L35 36.236V37h-1v2h2a1 1 0 0 0 1-1v-2a.999.999 0 0 0-.106-.447l-1-2A1 1 0 0 0 35 33h-.636c.107-.533.196-1.155.256-1.779c.066-.674.1-1.373.083-1.983l-.001-.028C38.69 30.895 42 33.666 42 36.57V42H6v-5.43c0-3.032 3.61-5.92 7.831-7.577c.011.622.07 1.325.155 2.006c.092.735.217 1.466.355 2.068c.03.129.06.254.092.375ZM16 37.015c.538 0 1-.44 1-1.015c0-.574-.462-1.015-1-1.015s-1 .44-1 1.015c0 .574.462 1.015 1 1.015ZM24 24a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm0 2c5.523 0 10-4.477 10-10S29.523 6 24 6s-10 4.477-10 10s4.477 10 10 10Z" clip-rule="evenodd"/></svg>
            </i>
            <h2 className="mission-header3">Convinience and Efficiency</h2>
            <p className="box-section-sub-text">We have a wide range of Expert Healthcare specialists who are dedicated to bringing the absolute best experience for our patients, Easily book appointments with our specialists </p>
      </div>

      <div className="mission-box">
          <i className="mission-icon"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="currentColor" d="M32.74 14.998a4.5 4.5 0 1 0 0-8.998a4.5 4.5 0 0 0 0 8.998Zm-12.003 5.471a2.643 2.643 0 1 0-3.75-3.728l-1.96 1.972H12.44a2.643 2.643 0 0 0 0 5.287h2.76a5 5 0 0 0 3.595-1.524l1.94-2.007Zm.178 8.72s-2.278-.425-3.21 0c-.694.316-3.38 1.28-4.705 1.752v8.86c.767-.044 2.293-.125 2.945-.099c1.943.079 3.394.54 4.861 1.006c1.369.435 2.752.875 4.56 1.012c.456.034.898.079 1.327.122c1.55.156 2.922.294 4.058-.122c1.45-.531 9.732-4.566 10.767-5.628c1.036-1.062.518-3.93-2.692-3.399c-1.583.262-3.42 1.016-5.084 1.699c-1.71.701-3.239 1.329-4.13 1.275c-1.76-.106-6.42-.956-6.42-.956l5.35.065s.756.04 1.794-.702c1.04-.742 1.968-2.867.415-2.867s-3.21-.532-3.21-.532l-6.626-1.486ZM6 30a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v10.996a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V30.001Zm28.632-11.343a2.667 2.667 0 0 1 .004 5.334l-3.137.004c-.014 0-.027-.002-.04-.004a.234.234 0 0 0-.038-.003a2.292 2.292 0 0 1-1.703-.694l-.721-.722a4.652 4.652 0 0 1-3.342 1.423h-3.083l-.468-9.351h4.958a4 4 0 0 1 2.857 1.2l2.756 2.813h1.957Z"/></svg>
            </i>
            <h2 className="mission-header3">24/7 Support</h2>
            <p className="box-section-sub-text">Experience 24/7 support from our team of experts who are dedicated towards serving you at anywhere and anytime, Absolute trust is our goal as we are dedicated to serve you </p>
      </div>

    </div>
  </div>

        <div>
            <Footer/>
        </div>
  </div>
  );
 }
 export default About;