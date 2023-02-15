import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

function Login() {
  
  const navigate = useNavigate();

  const[name, setName] = useState(); 
  const[password, setPassword] = useState(); 
  const[result, setResult] = useState(); 
 
  const myButtonClick = async () => {

      let requestBody = {
        service_val_name:name,
        service_val_password:password
      }

      console.log("Request:" + JSON.stringify(requestBody) );

      const response = await axios.post (
        'https://www.mockachino.com/1b9b9eca-13b9-41/login',
        requestBody
      );

      if (response.data.result=="successxxx") {
            setResult("Giriş Başarılı");

      } else {
            setResult("Hatalı kullanıcı adı veya şifre");
      }
      
      console.log("Resp:" + JSON.stringify(response.data));

      // if (response.data.result=="success") {
      //   localStorage.setItem("userName", "onurkulabas")
      //   navigate('/secret-page', { replace: true });
      // } else {
      //   setResult('Hatalı Kullanıcı Adı veya Şifre');
      // }

  }

  return (
    <div className="App">

        <form>
        
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" onChange={e=>setName(e.target.value)} />
          <br /><br />
          <label htmlFor="password">Last name:</label>
          <input type="text" name="password" onChange={e=>setPassword(e.target.value)} /> <br /><br />
          <input type="button" value="Gönder" onClick={()=>myButtonClick()} />

          <br /><br />
      {result}

        </form>

    </div>
  );
}

export default Login;
