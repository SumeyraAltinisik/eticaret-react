import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from "react";

import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import SecretPage from "./SecretPage";
import Users from "./Users";


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/secret-page" element={<SecretPage />} />
        <Route path="/users" element={<Users />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
