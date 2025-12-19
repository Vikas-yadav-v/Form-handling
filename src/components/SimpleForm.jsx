import React from "react";
import { useState } from "react"
function SimpleForm() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");

const handleButton =(e) => { 
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
}
    return (
        <div>
           <form onSubmit={handleButton}>
           <h2>React Form</h2>

           <label>Name:</label>
           <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
             />
           <br/>

           <label>Email:</label>
           <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
           <br />

           <button type="submit"> Submit </button>
           </form>
        </div>
    )
}

export default SimpleForm;