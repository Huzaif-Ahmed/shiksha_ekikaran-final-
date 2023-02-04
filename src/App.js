import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  NavHome  from './Components/NavHome';
import  HomeRest  from './Components/HomeRest';
import NavLogin from './Components/NavLogin';
import LoginRest from './Components/LoginRest';
import NavRegister from './Components/NavRegister';
import RegisterRest from './Components/RegisterRest';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import InstituteData from './Components/InstituteData';
import NavDasboard from './Components/NavDasboard';
import InstituteRestAnalytics from './Components/InstituteRestAnalytics';
import GovernmentRest from './Components/GovernmentRest';
import ContactUS1 from "./Components/ContactUS1";
import Assignment from "./Components/Assignment";
import RegisterRest1 from "./Components/RegisterRest1";

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<><NavHome/><HomeRest/></>}/>
      <Route path='/login' element={<><NavLogin/><LoginRest/></>}/>
      <Route path='/register' element={<><NavRegister/><RegisterRest1/></>}/>
      <Route path='/instituteanalytics' element={<><NavDasboard/><InstituteRestAnalytics/></>}/>
      <Route path='/institutedashboard' element={<><NavDasboard/><InstituteData/></>}/>
      <Route path='/governmentdashboard' element={<><NavDasboard/><GovernmentRest/></>}/>
      <Route path='/aboutus' element={<><NavHome/><AboutUs/></>}/>
      <Route path='/contactus' element={<><NavHome/><ContactUS1/></>}/>
    </Routes>
      </Router>
    // <Router>
    //   <Routes>
    //     <Route path='/' element={<><NavHome/><HomeRest/></>}/>
    //     <Route path='/login' element={<><NavLogin/><LoginRest/></>}/>
    //     <Route path='/register' element={<><NavRegister/><RegisterRest/></>}/>
    //     <Route path='/aboutus' element={<><NavHome/><AboutUs/></>}/>
    //     <Route path='/contactus' element={<><NavHome/><ContactUs/></>}/>
        // <Route path='/institutedashboard' element={<><NavDasboard/><InstituteData/></>}/>
    //     <Route path='/instituteanalytics' element={<><NavDasboard/><InstituteRestAnalytics/></>}/>
    //     <Route path='/governmentdashboard' element={<><NavDasboard/><GovernmentRest/></>}/>
    //   </Routes>
    // </Router>
  );
}

export default App;
