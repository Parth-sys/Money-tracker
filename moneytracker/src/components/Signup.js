import React,{useState}  from 'react'
 import axios from 'axios';
 import { useNavigate } from 'react-router-dom';

function Signup(){
    
    const [name,setname] =useState("")
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("")
    
const navigate=useNavigate()

   const submit= async(e)=>{
      e.preventDefault();
      var res= await axios.post("http://localhost:5000/signup",{
         name,
         email,
         password
      })
      console.log(res);
      navigate("/Login")

   }



    return(
        <div className='container mt-2' style={{width:"400px"}}>
          
           <div className='row  p-1' style={{ display:"flex" ,flexDirection:"column" ,margin:"10px",justifyContent:"center"}}>
          
          <div>
            <h4>Signup</h4>
 
            </div>
           <form className='form'  onSubmit={submit}>  

           <label className='lable'>Name</label>
              <input type="text" className='form-control'  value={name} onChange={(e)=>setname(e.target.value)}></input><br/>
             
             <label className='lable'>email</label>
              <input type="email" className='form-control'   value={email} onChange={(e)=>setemail(e.target.value)} ></input><br/>

              <label>Password</label>
              <input type="password" className='form-control' value={password}  onChange={(e)=>setpassword(e.target.value)} ></input>

              <input type="submit" ></input><br/>
              <a href='/Login'>already have an Account? Login</a>
             </form>
           </div>

           </div>
    
       
    )
}
export default Signup;