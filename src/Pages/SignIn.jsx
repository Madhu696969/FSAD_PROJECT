import React, { useState } from 'react'
import HomeNavbar from '../NavBar/HomeNavbar'
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate=useNavigate();
  const[data,setData]=useState({
    email:"",
    password:"",
    role:"donor"
  });
  const[err,setErr]=useState("");
  const handleChange=(e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    });
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!data.email || !data.password){
      setErr("Fill All Feilds");
      return;
    }
    if(data.role === "donor"){
      const donor = JSON.parse(localStorage.getItem("donor"));
      if(!donor){
        setErr("Donor account not found");
        return;
      }
      if(donor.email !== data.email || donor.password !== data.password){
        setErr("Invalid Email or Password");
        return;
      }
      navigate("/donor");
      return;
    }
    if(data.role === "consumer"){
      const consumer = JSON.parse(localStorage.getItem("consumer"));
      if(!consumer){
        setErr("Consumer account not found");
        return;
      }
      if(consumer.email !== data.email || consumer.password !== data.password){
        setErr("Invalid Email or Password");
        return;
      }
      navigate("/consumer");
      return;
    }
    setErr("");
  }

  return (
    <div>
      <HomeNavbar/>
      <form className="form1" onSubmit={handleSubmit}>
        <h1 style={{padding:"0px 0px 40px 60px"}}>Please SignIn</h1>
        {err && <p>{err}</p>}
          <p>Enter Email</p>
          <input type="email" name="email" placeholder='Enter Email' required onChange={handleChange}/>
          <p>Enter Password</p>
          <input type="password" name="password" placeholder='Enter PassWord' onChange={handleChange}/>
          <p>Select the role</p>
          <select name="role" id="role" onChange={handleChange}>
            <option value="donor">Donor</option>
            <option value="consumer">Consumer</option>
          </select>
          <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SignIn