import React, { useEffect, useState } from "react";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal'
import IncomeEx from "./Incomexpense";


function Transactions() {

    const [data, setdata] = useState([]);
    const [total, settotal] = useState()
    const [id,setid]=useState();

    const[text,settext]=useState();
    const[amount,setamount]=useState();
    const[date,setdate]=useState("")

    const [show,setshow]=useState(false)



    const handleshow=()=>{
      
      
        setshow(true)
      };
     
      const handleClose=()=>(setshow(false))



     
    useEffect(() => {
        
        const gettransactions = async () => {
            var result = await axios.get('http://localhost:5000/data')
            console.log(result)
            setdata(result.data)
        }
        
        gettransactions();
   
    }, [])

  



   
 
   
const edit1=async(_id)=>{
   handleshow();
    console.log(_id)

    setid(_id)
     const res=await axios.patch(`http://localhost:5000/data/${_id}`,{
        text,
        amount,
        date
     });
     
     console.log(res);
    }
   
   
    var result=data.reduce((tot,arr)=>{
        return tot+arr.amount
    },0);
   console.log(result)





const dele1=async(_id)=>{

    console.log(_id)

     
    const res= await axios.delete(`http://localhost:5000/delete/${_id}`)
    console.log(res)
     


}




    return (

        <div className="container">



        <IncomeEx total={result}></IncomeEx>




            <h4>Transactions</h4>
            <table className="table table-responsive ">

                <thead>
                    <tr>
                        <th scope="col">name</th>
                        <th scope="col">id</th>
                        <th scope="col">Amount</th>
                        <th scope="col">date</th>
                       

                    </tr>
                </thead>
                <tbody>
              
                  {data.map((r,index)=>(
                    
                       
                        <tr key={index}   >
                            <td>{r.text}</td>
                            <td>{r._id}</td>
                            <td>{r.amount}</td>
                            <td>{r.date}</td>
                             <button className=" btn-primary btn-default " style={{color:"dodgerblue"}} onClick={()=>{edit1()}}>Edit</button>
                             <button className=" btn-danger btn-default" style={{color:"red" ,margin:"1rem"}} onClick={()=>dele1(`${r._id}`)}>delete</button>                             
                        </tr>

                  ))}                          
                     
                        
                   
                
                </tbody>
                <p>total:{result}</p>                          
               
            </table>
 

            <Modal show={show} >
    <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title>Update User</Modal.Title>
    </Modal.Header>

    <Modal.Body>
     <div >


    <input className="form-control" type="text"   value={text}
     onChange={(e)=>{settext(e.target.value)}}  placeholder="enter text" ></input><br/>

     <input  className="form-control" type="number" placeholder="enter amount" value={amount}   
        onChange={(e)=>{setamount(e.target.value)}}></input><br/>

     <input  className="form-control" type ="date"    value={date} 
      onChange={(e)=>{setdate(e.target.value)}}></input><br/>
     
     </div>
     
    </Modal.Body>

    <Modal.Footer>
 
        <button  className="btn"  >update</button>
       
    </Modal.Footer>
</Modal>



             







 
        </div>
    )
}

export default Transactions