import React,{useState}  from 'react'
 import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Error from './Error';
import Success from './Success';

function Login(){
    

    const [email,setemail]=useState("");
    const [password,setpassword]=useState("")
    const [err,seterr]=useState();
    const [suc,setsuc]=useState();  
      

    const navigate=useNavigate();

    const submit=async(e)=>{
    e.preventDefault();
     setsuc(false)

   try {
     var res=await axios.post("http://localhost:5000/Login",{
       email,
       password
     })
     console.log(res)
 
    
 
   navigate('/balance')

   localStorage.setItem('currentUser', JSON.stringify(res.data))
    setsuc(true) 


   } catch (error) {
     console.log(error)
       seterr(error)
   }


    }





    
    return(
        <div className='container mt-5' style={{ justifyContent:"center"}}>

          
           <div className='row  p-1' style={{ display:"flex" ,flexDirection:"column"}}>
          
          <div>
            <h4>Login</h4>
          {err &&( <Error error="Invalid credentials"></Error>)}
          {suc &&(<Success  success={"Login successful"}></Success>)}
            </div>
           <form className='form' >  
             
             <label className='lable'>email</label>
              <input type="email" className='form-control' value={email} onChange={(e)=>{setemail(e.target.value)}} required></input><br/>

              <label>Password</label>
              <input type="password" className='form-control' value={password}  onChange={(e)=>{setpassword(e.target.value)}}  required ></input>

              <button type="submit" onClick={submit} >Submit</button><br/>
              <a href='/signup'>Don't have an Account? Signup</a>
             </form>
           </div>

           </div>
    
       
    )
}
export default Login