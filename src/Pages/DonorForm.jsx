import React, { useState } from 'react'
import "./DonorForm.css"
import { useNavigate } from 'react-router-dom';
import HomeNavbar from '../NavBar/HomeNavbar';

const DonorForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    ConfirmPass: "",
    DonationType: "Cloths",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.name || !data.ConfirmPass || !data.email || !data.DonationType || !data.password || !data.phoneNumber) {
      setError("All Feilds Data Required");
      return;
    }
    if (data.password !== data.ConfirmPass) {
      setError("Password Should Match");
      return;
    }
    if (data.phoneNumber.length !== 10) {
      setError("The Ph.No should be 10 digits");
      return;
    }
    localStorage.setItem("donor", JSON.stringify(data));
    alert("Registration Successful");
    navigate("/signin");
  }
  return (
    <div>
      <HomeNavbar />
      <form className="form1" onSubmit={handleSubmit}>
        <h1 style={{ marginLeft: "50px", color:"red"}}>Enter All Details</h1>
        {error && <p>{error}</p>}
        <p>Enter Name: </p>
        <input type="text" placeholder='Enter Name' name="name" required onChange={handleChange} />
        <p>Enter Email: </p>
        <input type="email" placeholder='Enter Email' name='email' required onChange={handleChange} />
        <p>Enter Password: </p>
        <input type="password" placeholder='Enter Password' name='password' required onChange={handleChange} />
        <p>Confirm Password: </p>
        <input type="password" placeholder='Confirm Password' name='ConfirmPass' required onChange={handleChange} />
        <p>Enter PhoneNumber</p>
        <input
          type="tel"
          placeholder="Enter Phone Number"
          name="phoneNumber"
          maxLength="10"
          onChange={handleChange}
        />
        <p>Select Donation Type:</p>
        <select id="Donation" name="DonationType" onChange={handleChange}>
          <option value="Cloths">Cloths</option>
          <option value="Food">Food</option>
          <option value="Blood">Blood</option>
          <option value="Others">Others</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default DonorForm