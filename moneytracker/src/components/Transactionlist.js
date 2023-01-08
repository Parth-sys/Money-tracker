import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";




function Transactionlist(){


  const[data,setdata]=useState([]);
  const [total,settotal]=useState()

  useEffect(()=>{
    const gettransactions=async()=>{
   var result=await axios.get('http://localhost:5000/data')
   //console.log(result)
   setdata(result.data)
}

    gettransactions();

  },[])

    console.log(data)

  


    return(
        <div className="container">

            <h3>History</h3>
            

           <ul className="list">
            {data.map((s,i)=>(
           
            <li className="minus" key={i}>

              {s.text}  <span> {s.amount}</span><button className="delete-btn">X</button>

            </li>
       
            ))}


           </ul>

         




        </div>
    )
}
export default Transactionlist;