import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from "react";
import axios from "axios";
  
function Users() {
  
  const[firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');

  const[allUsers, setAllUsers] = useState([]);

  useEffect(() => {
 
    const getUserInfo = async () => {
        let response = await axios.get(
            'https://www.mockachino.com/c30e50d6-aca1-47/users'
            );
    
            console.log("getUserInfo" + response);
    
            setFirstName(response.data.users[0].first_name); 
            setLastName(response.data.users[0].last_name); 
    }
  
    const getAllUserInfo = async () => {
        let response = await axios.get(
            'https://www.mockachino.com/de1f17f3-0399-48/users'
            );
    
            console.log("getAllUserInfo" + response.data.users);

            setAllUsers(response.data.users);

    }
 
    // call the function
    getUserInfo().catch(console.error);

    // call the function
    getAllUserInfo().catch(console.error);
 
  }, [])

  return (
    <div className="App"> 
        <h2>Kullanıcılar</h2> 
        <h4>Tek Bir Kullanıcı</h4>
        Adı: {firstName}
        <br />
        Soyadı: {lastName}

        <br /><br />

        <h4>Birçok Kullanıcı</h4>
        {
            allUsers.map( (data) => ( 
                <> 
                    <div>{data.first_name} - {data.last_name}</div> 
                </>
            )
            )
        } 
    </div>
  );
}

export default Users;
