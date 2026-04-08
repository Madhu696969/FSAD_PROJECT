import React, { useState } from 'react'
import HomeNavbar from '../NavBar/HomeNavbar'
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const SignIn = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "", role: "donor" });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.email || !data.password) { setErr("Fill All Fields"); return; }
    setLoading(true);
    setErr("");
    try {
      const res = await api.post("/auth/signin", data);
      const { token, role, userId, name, email } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify({ userId, name, email, role }));

      if (role === "DONOR")    navigate("/donor");
      else if (role === "CONSUMER") navigate("/consumer");
      else if (role === "ADMIN")    navigate("/admin/home"); // ✅ FIX: was "/admin" (no such route)
    } catch (error) {
      setErr(error.response?.data?.message || "Sign in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <HomeNavbar />
      <form className="form1" onSubmit={handleSubmit}>
        <h1 style={{ padding: "0px 0px 40px 60px" }}>Please SignIn</h1>
        {err && <p style={{ color: "red" }}>{err}</p>}
        <p>Enter Email</p>
        <input type="email" name="email" placeholder='Enter Email' required onChange={handleChange} />
        <p>Enter Password</p>
        <input type="password" name="password" placeholder='Enter Password' onChange={handleChange} />
        <p>Select the role</p>
        <select name="role" id="role" onChange={handleChange}>
          <option value="donor">Donor</option>
          <option value="consumer">Consumer</option>
          <option value="admin">Admin</option>
        </select>
        <button type='submit' disabled={loading}>{loading ? "Signing in..." : "Submit"}</button>
      </form>
    </div>
  );
};

export default SignIn;