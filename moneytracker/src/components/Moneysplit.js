import React,{useEffect,useState} from "react";
 import axios from "axios";


function Pay({count}){


    const [pay,setpay]=useState();
    const [value,setvalue]=useState()   
           
var s=JSON.parse(window.localStorage.getItem('currentUser'));
var currentuser= s.currentuser.email



useEffect(()=>{

    
},[])





const Submit=async()=>{
 
  
        
      var res=await axios.post('http://localhost:5000/userpay',{
          pay,
          currentuser
      });
      console.log(res)
}
  

return(

<div className="container">
        <h3>Split amount</h3>

        <form  onSubmit={Submit}> 

            <div className="form-control">
            <lable htmlFor="payment">Amount</lable>
            <input type="number"     value={pay} onChange={(e)=>setpay(e.target.value)}     placeholder="Enter amount to split"  required></input>
           </div>



           
            <button   className="btn">send</button>      
          
        </form>

    </div>
    )
}

export default Pay;