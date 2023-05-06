import React from 'react';
import Navbar from './Component/Navbar1';
import LoginUser from './Component/LoginUser';

import RegisterUser from './Component/RegisterUser';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PeriodTracker from './Component/PeriodTracker';
import Footer from './Component/Footer';
import Analyser from './Component/Analyser';
import SelfCheck from './Component/SelfCheck';
import  Home from './Component/Home';
import UserPage from './Component/UserPage';
import Doctor from './Component/Doctor';
import Patient from './Component/Patient';
import Regenerate from './Component/Regenerate';

function App() {
  return (
    <>
    {/* <UserPage/> */}
    
       {/* <Home /> */}
       {/* <Navbar /> */}
      
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/regenerate" element={<Regenerate />} />
        <Route path="/doctor" element={<Doctor />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/Register" element={<RegisterUser />} />
          <Route path="/PeriodTracker" element={<PeriodTracker/>} />
          <Route path="/analyser" element={<Analyser/>} />
          <Route path="/selfcheck" element={<SelfCheck/>} />
        </Routes>
       
      {/* <Footer/> */}
    </>
  );
}

 

export default App;
