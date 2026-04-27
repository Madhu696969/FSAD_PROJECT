import React, { useState } from 'react'
import "./DonorForm.css"
import { useNavigate } from 'react-router-dom';
import HomeNavbar from '../NavBar/HomeNavbar';
import api from '../api/axios';

const DonorForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "", email: "", password: "", phoneNumber: "", ConfirmPass: "", donationType: "Cloths",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.password ||
      !data.phoneNumber || !data.ConfirmPass) {
      setError("All Fields Data Required");
      return;
    }

    if (data.password !== data.ConfirmPass) {
      setError("Password Should Match");
      return;
    }

    if (data.phoneNumber.length !== 10) {
      setError("Phone Number should be 10 digits");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await api.post("/donor/signup", {
        name: data.name,
        email: data.email,
        password: data.password,
        phoneNumber: data.phoneNumber,
        donationType: data.donationType,
      });

      console.log("Response:", res.data);

      alert("Donor Registered Successfully!");

      navigate("/signin");

    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
        "Registration failed. Backend not reachable."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <HomeNavbar />
      <form className="form1" onSubmit={handleSubmit}>
        <h1 style={{ marginLeft: "50px", color: "red" }}>Enter All Details</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <p>Enter Name: </p>
        <input type="text" placeholder='Enter Name' name="name" required onChange={handleChange} />
        <p>Enter Email: </p>
        <input type="email" placeholder='Enter Email' name='email' required onChange={handleChange} />
        <p>Enter Password: </p>
        <input type="password" placeholder='Enter Password' name='password' required onChange={handleChange} />
        <p>Confirm Password: </p>
        <input type="password" placeholder='Confirm Password' name='ConfirmPass' required onChange={handleChange} />
        <p>Enter PhoneNumber</p>
        <input type="tel" placeholder="Enter Phone Number" name="phoneNumber" maxLength="10" onChange={handleChange} />
        <p>Select Donation Type:</p>
        <select id="Donation" name="donationType" onChange={handleChange}>
          <option value="Cloths">Cloths</option>
          <option value="Food">Food</option>
          <option value="Blood">Blood</option>
          <option value="Others">Others</option>
        </select>
        <button type='submit' disabled={loading}>{loading ? "Registering..." : "Submit"}</button>
      </form>
    </div>
  );
};

export default DonorForm;
