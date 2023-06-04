import { useEffect, useState } from "react";
import axios from "axios";

function PractionerList(){
    const [practitioners,setPractitioners] = useState([])

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
           {practitioners.map((practitioner)=> (
            <div key={practitioner.id}>
                <img src = {practitioner.profileImage} alt=""></img>
                <p>firstName:{practitioner.firstName}</p>
                <p>lastName:{practitioner.lastName}</p>
                <p>speciality:{practitioner.speciality}</p>
            </div>
           ))}
        </div>
    )


}

export default PractionerList;