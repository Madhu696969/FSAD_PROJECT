import React, { useState } from 'react'
import HomeNavbar from '../NavBar/HomeNavbar'
import { useNavigate } from 'react-router-dom'
import api from "../api/axios";

const ConsumerForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ name: "", email: "", password: "", phoneNumber: "", ConfirmPass: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.name || !data.ConfirmPass || !data.email || !data.password || !data.phoneNumber) {
      setError("All Fields Data Required"); return;
    }
    if (data.password !== data.ConfirmPass) { setError("Password Should Match"); return; }
    if (data.phoneNumber.length !== 10) { setError("Phone Number should be 10 digits"); return; }
    setLoading(true);
    setError("");
    try {
      const res = await api.post("/consumer/signup", {
        name: data.name, email: data.email, password: data.password, phoneNumber: data.phoneNumber,
      });
      const { token, role, userId, name, email } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify({ userId, name, email, role }));
      alert("Consumer Registered Successfully!");
      navigate("/signin");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Try again.");
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
        <button type='submit' disabled={loading}>{loading ? "Registering..." : "Submit"}</button>
      </form>
    </div>
  );
};

export default ConsumerForm;
