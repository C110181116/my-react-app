import React from 'react'
import { useState } from 'react';
import LoginForm from './LoginForm';
import Slider from './Slider'
import './Login.css'

export default function LoginIndex() {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin"
      }
      const [user,setUser] = useState({name:"",email:""});
      const [error,setError] = useState("");
      const Login = details =>{
        console.log(details);
        if (details.email == adminUser.email && details.password == adminUser.password){
          console.log("Logged in")
          setUser({
            name: details.name,
            email: details.email
          })
        }else{
          console.log("details are not match")
          setError("Details are not match!");
        }
      }
      const Logout = () =>{
        setUser({name:"",email:""})
      }
      return (
        <div className="login-container">
          {(user.email != "") ? (
            <div className='inner'>
              <div className='welcome'>
                <h2>Welcome,<span>{user.name}</span></h2>
                <Slider/>
                <button onClick={Logout}>Logout</button>
              </div>
            </div>
          ):(
            <LoginForm Login={Login} error={error}/>
          )}
        </div>
      );
}
