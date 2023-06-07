import { useEffect, useState } from "react";
import axios from "axios";
import "../pages/AvailablePractitionerList.css";


function PractionerList(){
    const [practitioners,setPractitioners] = useState([]);


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
            <h1 className="pl-header">List of Available Practitioners</h1>
           {practitioners.map((practitioner)=> (
            <div key={practitioner.id} className="practitioner-list-container">
                <img src = {practitioner.profileImage} alt="" className="profile-image"></img>
                <div className="practitioner-details">
                <p className="first-name">{practitioner.firstName}</p>
                <p className="last-name">{practitioner.lastName}</p>
                </div>
                <p className="speciality">{practitioner.speciality}</p>

            </div>
           ))}
        </div>
    )


}

export default PractionerList;