import React from 'react'
import { useNavigate } from 'react-router-dom';

const DonorProfile = () => {
  const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("donor");
        alert("Logged out successfully");
        navigate("/");
    }
    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default DonorProfile