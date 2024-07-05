import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from "./RePost/SignUp";
import Login from "./RePost/Login";
import SuccessfulLogin from './RePost/SuccessfulLogin';


function App() {
  // we must set Routes (aka <a href> between Components in React) to navigate through components using the buttons 
  return (  
    <Router>
      <Routes>
        <Route index path="/signup" element={<SignUp />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/successful-login" element={<SuccessfulLogin />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;