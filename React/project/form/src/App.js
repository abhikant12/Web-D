import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"India",
    streetAddress:"", city:"", state:"", postalCode:"",
    comments:false, candidates:false, offers:false, pushNotifications:""
  })

  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked: value}) );
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printing the value of Form Data:");
    console.log(formData)
  }

  return (
   <div className="flex flex-col items-center mt-5">

    <form onSubmit = {submitHandler}>

       <div className="grid grid-cols-2 -space-x-10">

          <div className="grid grid-cols-1 space-y-3">
              <label htmlFor="firstName"  className="font-bold mr-2"> First name : </label>
              <label htmlFor="lastName"  className="font-bold mr-2"> Last name : </label>
              <label htmlFor="email"  className="font-bold mr-2"> Email Address : </label>
              <label htmlFor="country"  className="font-bold mr-2"> country : </label>
              <label htmlFor="streetAddress"  className="font-bold mr-2"> Street Address : </label>
              <label htmlFor="city"  className="font-bold mr-2"> City : </label>
              <label htmlFor="state"  className="font-bold mr-2"> State / Province : </label>
              <label htmlFor="postalCode"  className="font-bold mr-2"> Postal Code : </label>
          </div>

          <div className="grid grid-cols-1 space-y-3">
              <input type="text" name="firstName"  id="firstName"  placeholder=" Abhikant"  value={formData.firstName} onChange={changeHandler} className="outline" />
              <input type="text" name="lastName"  id="lastName"  placeholder=" Kumar"  value={formData.lastName} onChange={changeHandler} className="outline" />
              <input type="email" name="email"  id="email"  placeholder=" abhi@gmail.com"  value={formData.email} onChange={changeHandler} className="outline" />
              <select id="country" name="country"  value={formData.country}  onChange={changeHandler} className="outline">
                  <option>India</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
              </select>
              <input type="text" name="streetAddress"  id="streetAddress"  placeholder=" B-25C"  value={formData.streetAddress} onChange={changeHandler} className="outline" />
              <input type="text" name="city"  id="city"  placeholder=" B-25C"  value={formData.city} onChange={changeHandler} className="outline" />
              <input type="text" name="state" id="state"  placeholder=" Bihar"  value={formData.state} onChange={changeHandler} className="outline" />
              <input type="text" name="postalCode" id="postalCode"  placeholder=" 110077"  value={formData.postalCode} onChange={changeHandler} className="outline" />
          </div>

       </div>
  
      
      <br/>
      <fieldset>
        <legend className="font-bold">By Email</legend>

        <div className="mt-2">   
          <input id="comments" name="comments" type="checkbox" checked={formData.comments}  onChange={changeHandler}/>
          <label htmlFor="comments" className="ml-3 font-bold">Comments</label>
          <br/>
          <p className="ml-6 text-zinc-500 -mt-[4px]">Get notified when someones posts a comment on a posting.</p>
        </div>

        <div className="mt-2">  
          <input  id="candidates"  name="candidates"  type="checkbox" checked={formData.candidates}  onChange={changeHandler} /> 
          <label htmlFor="candidates" className="ml-3 font-bold">Candidates</label>
          <br/>
          <p className="ml-6 text-zinc-500 -mt-[4px]">Get notified when a candidate applies for a job.</p>
        </div>

        <div className="mt-2">  
          <input  id="offers" name="offers"  type="checkbox" checked={formData.offers}  onChange={changeHandler} /> 
          <label htmlFor="offers" className="ml-3 font-bold">Offers</label>
          <br/>
          <p className="ml-6 text-zinc-500 -mt-[4px]">Get notified when a candidate accepts or rejects an offer.</p>
        </div>
     </fieldset>
  
      
      <br/>
      <fieldset>
        <legend className="font-bold mb-1">Push Notifications</legend>
        <p className="text-zinc-500 -mt-[8px]">These are delivered via SMS to your mobile phone.</p>
        
        <div className="mt-2">  
          <input type="radio"  id="pushEverything"  name="pushNotifications"  value="Everything" onChange={changeHandler} />
          <label htmlFor="pushEverything" className="ml-3 font-bold">Everything</label>
         </div>
        
         <div className="mt-2">  
          <input type="radio"  id="pushEmail"  name="pushNotifications"  value="Same as email" onChange={changeHandler} />
          <label htmlFor="pushEmail" className="ml-3 font-bold">Same as email</label>
         </div>

         <div className="mt-2">  
          <input type="radio"  id="pushNothing"  name="pushNotifications"  value="No Push Notifications" onChange={changeHandler} />
          <label htmlFor="pushNothing" className="ml-3 font-bold">No Push Notifications</label>
        </div>


      </fieldset>


     <button  className="bg-blue-500 text-white rounded-lg  font-bold py-2 px-8 mt-5 mb-10" >Save</button>
      
    
    </form>

   </div>

  )}

export default App;
