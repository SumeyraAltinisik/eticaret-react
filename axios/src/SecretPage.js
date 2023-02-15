import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate
  } from "react-router-dom";

function SecretPage () {
   
    const navigate = useNavigate();
 
    useEffect(() => {

        if (!localStorage.getItem("userName"))
        {
            navigate('/login', { replace: true });
        }  
     
      }, [])
  
  return (
    <div className="App">

        <br /><br /><br /><br /><br />
        <h2>Burası Ancak Login Sonrası Görünür</h2>

    </div>
  );
}

export default SecretPage;
