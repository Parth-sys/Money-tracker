import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Balance(){
    
    const [budget,setbudget]=useState();
    var s=JSON.parse(window.localStorage.getItem('currentUser'));
    var currentuser= s.currentuser.email
    const navigate=useNavigate()
  
  

const submit=async(e)=>{

    e.preventDefault()
    var res= await axios.post("http://localhost:5000/userbud",{
        budget,
        currentuser
        
    });
    
    navigate("/home")
   
}

  
  



    return(
        <div className="container mt-5">
            <h4 className="h4"> Set Your Budget</h4>
            <input className="form-control" type="number" value={budget} onChange={(e)=>setbudget(e.target.value)} required></input>
            <button className="btn" onClick={submit}>Submit</button>
        </div>
    )
}

export default Balance;