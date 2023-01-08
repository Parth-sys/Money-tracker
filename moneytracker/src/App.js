
import './App.css';
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Notfound from './components/Notfound';
import Home from './components/Home';
import Balance from './components/Balance';
import Transactions from './components/Transactions';
import Userlist from './components/Userlist';


function App() {



  





  return (
    <div className="App">



    <BrowserRouter>
    <Routes>
 
      <Route index element={<Login />} />
      <Route path='/balance' element={<Balance></Balance>}></Route>
      <Route path="/Login" element={<Login />}/>
      <Route path="/userlist" element={<Userlist></Userlist>}></Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/transactions" element={<Transactions></Transactions>}></Route>
      <Route path="*" element={<Notfound></Notfound>}></Route>
    </Routes>
  </BrowserRouter>
       
    </div>
  );
}

export default App;
