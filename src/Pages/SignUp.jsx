import React, { useState } from 'react'
import "./SignUp.css"
import HomeNavbar from '../NavBar/HomeNavbar';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate=useNavigate();
    const checkRole=(role)=>{
        if(role==="Donor"){
            navigate("/donorform");
            return;
        }
        if(role=="Consumer"){
            navigate("/consumerform")
            return;
        }
    }
  return (
    <div>
        <HomeNavbar/>
        <div className="form">
            <h1>Select The Role</h1>
            <button onClick={()=>{
                {checkRole("Donor")}
            }}>Donor</button>
            <button onClick={()=>{
                {checkRole("Consumer")}
            }}>Consumer</button>
        </div>
    </div>
  )
}

export default SignUp