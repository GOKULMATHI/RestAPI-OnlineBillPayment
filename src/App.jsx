import { useState } from 'react'
import './style.css';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import Loginsignup from './Loginsignup'
// import Main from './Main'
import Registration from './Registration';
// import Loginsignup from './Loginsignup';
import About from './About';
import Help from './Help';
import Contact from './Contact';
import Payment from './Payment'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import MobileRechargePlans from './MobileRechargePlans';
import DthBillPaymentForm from './DTH';
import ElectricityBillPaymentForm from './ElectricityBill';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
     <Routes>
    <Route exact path='/'element={<Registration/>}/>
    <Route exact path='/Home'element={<Registration/>}/>
    
    <Route path="/SignUp"element={<Register/>}/>
    <Route path="/Login"element={<Login/>}/>
    <Route path="/About"element={<About/>}/>
    <Route path="/Payment"element={<Payment/>}/>
    <Route path="/Help"element={<Help/>}/>
    <Route path="/Contact"element={<Contact/>}/>
    <Route path="/mobile"element={<MobileRechargePlans/>}/>
    <Route path="/dth"element={<DthBillPaymentForm/>}/>
    <Route path="/electricity"element={<ElectricityBillPaymentForm/>}/>
     
    </Routes>

   </Router>
  )
}
export default App;