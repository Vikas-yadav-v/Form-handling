import React from "react";
import { useState } from "react";

function AdvanceForm() {
    const [formData, setFormData] = useState({
        gender: "",
        agree: false,
        country: "India"
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
    }

     const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
}
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Form with CheckBox, Raido & Select</h2>


                <label>
                    <input
                    type="radio"
                    name="gender" 
                    value="Male"
                    checked={formData.gender === "Male"} 
                    onChange={handleChange}
                    />
                    Male
                 </label>

                 <label>
                    <input
                    type="radio"
                     name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleChange}
                       />
                       Female
                 </label>
                 <br />

                 <label>
                    Country:
                    <select
                    name="country"
                    checked={formData.country}
                     onChange={handleChange}
                     >
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    </select>
                 </label>
                 <br />

                 <label>
                    <input
                     type="checkbox"
                      name="agree"
                      checked={formData.agree}
                      onChange={handleChange}
                       />
                    I agree to terms and conditions
                 </label>
                 <br />

                 <button type="submit">Submit</button>              
            </form>
        </div>
    )
}

export default AdvanceForm;