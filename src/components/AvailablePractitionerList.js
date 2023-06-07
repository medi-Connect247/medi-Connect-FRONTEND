import { useEffect, useState } from "react";
import axios from "axios";
import "../pages/AvailablePractitionerList.css";


function PractionerList(){
    const [practitioners,setPractitioners] = useState([{
        fullName: "Dr. John Doe",
        speciality: "Dentistry",
        profileImage: "../assets/istockphoto-1081389910-2048x2048-transformed.jpeg"
    },
    {
        fullName: "Dr. John Doe",
        speciality: "Dentistry",
        profileImage: "../assets/istockphoto-1081389910-2048x2048-transformed.jpeg"
    }
]);


    useEffect(() =>{
        getAllAvailablePractitioner();
    },
    []);

    const getAllAvailablePractitioner = async () => {
   
        try{
            const response = await axios.get("/api/doctor/available/all")
            setPractitioners(response.data);
        }catch(error){
            console.error("Error fetching Practitioners",error);
        }

    };

    return(
        <div>
            <h1 className="pl-header">Our Healthcare Practitioners</h1>
            <p className="pl-sub-text">Here are some of our established practitioners who are<br></br> 
            dedicated to delivering the best of healthcare to our patients</p>
           {practitioners.map((practitioner)=> (
            <div key={practitioner.id} className="practitioner-list-container">
                <img src = {practitioner.profileImage} alt="" className="profile-image"></img>
                <div className="practitioner-details">
                <p className="practitioner-name">
                 Dr. {practitioner.fullName}
                </p>
                <p className="speciality">{practitioner.speciality}</p>
                </div>
                <div></div>
            </div>
           ))}
        </div>
    )


}

export default PractionerList;