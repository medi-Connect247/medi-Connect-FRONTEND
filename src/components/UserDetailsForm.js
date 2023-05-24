// import React, { useState } from 'react';
// import Header from "../components/header";
// import "../pages/UserDetails.css";
// function UserDetailsForm() {
//          const [name, setName] = useState('');
//          const [age, setAge] = useState('');
//          const [sex, setSex] = useState('');
//          const [contactInfo, setContactInfo] = useState('');
//          const [dateOfBirth, setDateOfBirth] = useState('');
//          const [address, setAddress] = useState('');
//          const [error, setError] = useState('');


//          function handleNameChange(event){
//             setName(event.target.value);
//             setError('');
//          }
//          function handleAgeChange(event){
//             setAge(event.target.value);
//             setError('');
//          }
//          function handleSexChange(event){
//             setSex(event.target.value);
//             setError('');
//          }
//          function handleContactInfoChange(event){
//             setContactInfo(event.target.value);
//             setError('');
//          }
//          function handleDateOfBirth(event){
//             setDateOfBirth(event.target.value);
//             setError('');
//          }
//          function handleAddressChange(event){
//             setAddress(event.target.value);
//             setError('');
//          }
//          function handleSubmit(event){
//             event.preventDefault();
//             try{
//                 if(!name || !age || !sex || !contactInfo || !dateOfBirth || !address){
//                     setError('Please provide all details');
//                     return;
//                 }
//                 console.log('User details:', {name, age, sex, contactInfo, dateOfBirth, address});
//             }catch(error){
//                 setError('An error occured while saving user details');
//             }
//          }
        
         
//          return(
//             <div>
//            <div>
//             <Header/>
//            </div>
//              <form >
//             <label>
//                 Name:
//                 <input type="text" value={name} onChange={handleNameChange}/>
//             </label>
//             <label>
//                 Age:
//                 <input type="number" value={age} onChange={handleAgeChange}/>
//             </label>
//             <label>
//                 Sex:
//                 <input type="text" value={sex} onChange={handleSexChange}/>
//             </label>
//             <label>
//                 PhoneNumber:
//                 <input type="number" value={contactInfo} onChange={handleContactInfoChange}/>
//             </label>
//             <label>
//                 DateOfBirth:
//                 <input type="number" value={dateOfBirth} onChange={handleDateOfBirth}/>
//             </label>
//             <label>
//                 Address:
//                 <input type="text" value={address} onChange={handleAddressChange}/>
//             </label>
//             {error && <p>{error}</p>}
//             <button type="submit">Save</button>
//             </form>
//             </div>
  
//          );
         
// }
// export default UserDetailsForm;
