import React, { useEffect, useState } from "react";
import axios from "axios";
import Pay from "./Moneysplit";


function Userlist() {


  const [user, setuser] = useState([]);
  const [count, setcount] = useState();



  useEffect(() => {

    const userdata = async () => {

      var result = await axios.get('http://localhost:5000/users')
       console.log(result.data.count)
       setuser(result.data.data)
       setcount(result.data.count)
      }

    userdata();


  }, [])








  return (



    <div className="container">



      <div>

        <Pay count={count} ></Pay>

      </div>
     



       
      <table className="table table-responsive m-2 ">
     
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">id</th>
            <th>Pay</th>
          </tr>
        </thead>
        <tbody>
              {user.map((r,index)=>(

            <tr key={index} >
              <td>{r.name}</td>
              <td>{r.email}</td>
              <td>{r._id}</td>
              <td>{r.pay}rs to pay {r.currentuser}</td>

            </tr>
              ))}   



      

        </tbody>



      </table>


    </div>
  )
}

export default Userlist;