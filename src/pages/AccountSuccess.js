import React from 'react';
import "../pages/AccountSuccess.css"
import { Link } from "react-router-dom";
function AccountSuccess(){
return(
<div>
    <div className='success-image'>
    <h5 className='success-header'>Your Account has been<br></br> 
    created successfully</h5>
    <Link to="/PatientLogin"><button type="submit" className='success-btn'>Go to Login</button></Link>
    </div>
</div>
);
}
export default AccountSuccess;
