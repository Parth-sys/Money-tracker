import React,{useState} from "react";
import axios from "axios";


function Addtran(){

const[text,settext]=useState();
const[amount,setamount]=useState(Number);
const[date,setdate]=useState("")



  var s=JSON.parse(window.localStorage.getItem('currentUser'));

   var currentuser= s.currentuser.email


 const submit=async()=>{
     
   


       var res=await axios.post('http://localhost:5000/data',{
        text,
        amount,
         date,
        currentuser
       },{
        timestamp:true
       })




       console.log(res)
 }






 return(
    <div className="container">
        <h3>Add transaction</h3>
        <form onSubmit={submit} >

            <div className="form-control">
            <lable htmlFor="text">Category</lable>
            <input type="text"     value={text} onChange={(e)=>settext(e.target.value)}     placeholder="Enter text.."></input>
           </div>


           <div className="form-control">
            <lable htmlFor="amount">Date</lable>
            <input type="date"     value={date} onChange={(e)=>setdate(e.target.value)}    placeholder="Enter number.."></input>
           </div>


           <div className="form-control">
            <lable htmlFor="amount">Amount</lable>
            <input type="number"     value={amount} onChange={(e)=>setamount(e.target.value)}    placeholder="Enter number.."></input>
           </div>
           
            <input  type="submit" className="btn"></input>
           
             
          
          
        </form>

    </div>
 )
}

export default Addtran;