import React from 'react';
import Balance from './Balance'
import Transactionlist from './Transactionlist';
import Addtran from './Addtransac';
import IncomeEx from './Incomexpense';
import { useNavigate } from 'react-router-dom';
import Userlist from './Userlist';
import Transactions from './Transactions'
import Nav from './Nav';







function Home(){

    
 const navigate=useNavigate()


    const logout=()=>{
        localStorage.removeItem("currentUser");
        navigate('/Login');
    }

    
    
    return(
        <div className='container'>

        <Nav></Nav>
          
     <Addtran></Addtran>

        </div>
    )
}
export default Home