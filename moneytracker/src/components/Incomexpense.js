import React, { useEffect, useState } from "react";

import axios from "axios";

function IncomeEx({total}){

const [data,setdata]=useState([]);

var s=JSON.parse(window.localStorage.getItem('currentUser'));

var user= s.currentuser.email



useEffect(()=>{

    const getbudget = async () => {
        var result = await axios.get("http://localhost:5000/budget")
        
        setdata(result.data)
    }
    
    getbudget();
},[])



var s=total-data[0].budget



       



    return(
        <>
       
        <div className="inc-exp">


       <div >
            <h5 style={{fontSize:"15px"}}>remain</h5>
            <p style={{color:"green"}}>{s}</p>
         </div>

          </div>

          <div className="inc-exp">
         <div >
            <h5 style={{fontSize:"15px"}}>total Spend</h5>
            <p style={{color:"red"}}>{total}</p>
         </div>


        </div>
        </>
    )
}
export default IncomeEx;
